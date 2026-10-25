import type { ComponentProps, ReactNode } from "react"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function WhatsAppIcon({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("size-5", className)}
      {...props}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35ZM12.05 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.04c0-5.21 4.24-9.45 9.46-9.45 2.52 0 4.9.99 6.68 2.77a9.4 9.4 0 0 1 2.77 6.69c0 5.21-4.24 9.46-9.43 9.46ZM20.07 3.9A11.3 11.3 0 0 0 12.05.5C5.8.5.72 5.58.72 11.83c0 2 .52 3.95 1.52 5.67L.6 23.5l6.1-1.6a11.3 11.3 0 0 0 5.34 1.36h.01c6.25 0 11.34-5.08 11.34-11.33 0-3.03-1.18-5.87-3.32-8.03Z" />
    </svg>
  )
}

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>
  )
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 self-start rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium tracking-wide text-brand",
        className,
      )}
    >
      {children}
    </span>
  )
}

type ActionVariant = "primary" | "secondary" | "ghost"

const actionStyles: Record<ActionVariant, string> = {
  primary:
    "bg-brand text-on-brand hover:bg-glow hover:shadow-[0_0_32px_-4px_rgba(52,245,168,0.55)]",
  secondary:
    "border border-brand/70 text-brand hover:bg-brand/10 hover:shadow-[0_0_28px_-6px_rgba(52,245,168,0.45)]",
  ghost: "border border-line text-white hover:border-brand/50 hover:bg-white/5",
}

type ActionLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string
  variant?: ActionVariant
  size?: "md" | "lg"
  external?: boolean
}

// Link com aparência de botão. `external` abre em nova aba com rel seguro.
export function ActionLink({
  href,
  variant = "primary",
  size = "md",
  external,
  className,
  children,
  ...props
}: ActionLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        size === "lg" ? "h-12 px-6 text-base" : "h-10 px-4 text-sm",
        actionStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

type SectionHeadingProps = {
  tag: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <Tag>{tag}</Tag>
      <h2 className="text-balance text-[2rem] leading-[1.1] font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="flex size-9 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand shadow-[0_0_24px_-6px_rgba(52,245,168,0.6)]"
      >
        <Sparkles className="size-4.5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.625rem] font-semibold tracking-[0.42em] text-fg-muted">ÓTICA</span>
        <span className="font-display text-xl font-bold tracking-tight text-white">Luma Star</span>
      </span>
    </span>
  )
}

export function GlowCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-linear-to-b from-surface to-bg-alt transition-all duration-500 hover:border-brand/60 hover:shadow-[0_0_48px_-12px_rgba(52,245,168,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
