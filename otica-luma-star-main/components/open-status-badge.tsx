"use client"

import { useEffect, useState } from "react"
import { getOpenStatus, type OpenStatus } from "@/lib/open-status"
import { cn } from "@/lib/utils"

// Selo "Aberto agora" / "Fechado". Calculado no cliente (fuso America/Sao_Paulo) e atualizado a cada minuto.
export function OpenStatusBadge({ className }: { className?: string }) {
  const [status, setStatus] = useState<OpenStatus | null>(null)

  useEffect(() => {
    const update = () => setStatus(getOpenStatus())
    update()
    const interval = window.setInterval(update, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "inline-flex min-h-9 items-center gap-2.5 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-sm backdrop-blur",
        className,
      )}
    >
      {status ? (
        <>
          <span className="relative flex size-2.5" aria-hidden="true">
            {status.isOpen && (
              <span className="status-ping absolute inline-flex size-full rounded-full bg-brand" />
            )}
            <span
              className={cn(
                "relative inline-flex size-2.5 rounded-full",
                status.isOpen ? "bg-brand" : "bg-fg-muted/60",
              )}
            />
          </span>
          <span className="font-semibold text-white">{status.label}</span>
          {status.detail ? (
            <>
              <span aria-hidden="true" className="h-3 w-px bg-line" />
              <span className="text-fg-muted">{status.detail}</span>
            </>
          ) : null}
        </>
      ) : (
        <>
          <span className="size-2.5 rounded-full bg-line" aria-hidden="true" />
          <span className="text-fg-muted">Verificando horário…</span>
        </>
      )}
    </div>
  )
}
