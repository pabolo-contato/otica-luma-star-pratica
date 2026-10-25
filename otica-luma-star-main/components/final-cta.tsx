import { ActionLink, Container, WhatsAppIcon } from "@/components/site-ui"
import { Reveal } from "@/components/reveal"
import { getWhatsappLink, siteConfig } from "@/lib/site-config"

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-bg py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-[28rem] max-w-4xl -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(52,245,168,0.3),transparent_75%)] blur-3xl"
      />
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-7 rounded-[2rem] border border-brand/25 bg-bg-alt/70 px-6 py-14 text-center backdrop-blur sm:px-12">
          <h2 className="text-balance text-[2rem] leading-[1.1] font-bold tracking-tight text-white sm:text-5xl">
            Pronto para encontrar o seu <span className="text-brand">novo estilo?</span>
          </h2>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-fg-muted">
            Fale com a nossa equipe ou venha nos visitar na Vila Guarani.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ActionLink href={getWhatsappLink()} external size="lg">
              <WhatsAppIcon />
              Falar no WhatsApp
            </ActionLink>
            <ActionLink href={siteConfig.mapsRouteUrl} external variant="secondary" size="lg">
              Como chegar
            </ActionLink>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
