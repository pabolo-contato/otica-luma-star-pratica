import { WhatsAppIcon } from "@/components/site-ui"
import { getWhatsappLink } from "@/lib/site-config"

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Ótica Luma Star no WhatsApp"
      className="group fixed right-4 bottom-4 z-30 flex size-14 items-center justify-center rounded-full bg-brand text-on-brand shadow-[0_8px_32px_-4px_rgba(52,245,168,0.6)] transition-all duration-300 outline-none hover:scale-110 hover:bg-glow focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:right-6 sm:bottom-6"
    >
      <span
        aria-hidden="true"
        className="status-ping pointer-events-none absolute inset-0 -z-10 rounded-full bg-brand/40"
      />
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
