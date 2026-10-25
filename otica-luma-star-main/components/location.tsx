import { Clock, MapPin, Phone, Route } from "lucide-react"
import { ActionLink, Container, SectionHeading, WhatsAppIcon } from "@/components/site-ui"
import { OpenStatusBadge } from "@/components/open-status-badge"
import { Reveal } from "@/components/reveal"
import { formatHour } from "@/lib/open-status"
import { getWhatsappLink, siteConfig, telLink } from "@/lib/site-config"

export function Location() {
  return (
    <section id="localizacao" className="bg-bg py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            tag="Localização e contato"
            title="Venha nos visitar"
            description="Estamos na Vila Guarani. Fale com a equipe ou trace a rota até a loja."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="flex flex-col gap-6 rounded-3xl border border-line bg-linear-to-b from-surface to-bg-alt p-6 sm:p-8">
            <OpenStatusBadge className="w-fit" />

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-white">Endereço</h3>
                <address className="mt-1 text-sm leading-relaxed text-fg-muted not-italic">
                  {siteConfig.address}
                </address>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-white">Telefone</h3>
                <a
                  href={telLink}
                  className="mt-1 inline-block rounded text-sm text-fg-muted transition-colors outline-none hover:text-brand focus-visible:ring-2 focus-visible:ring-glow"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <h3 className="text-base font-bold text-white">Horário de funcionamento</h3>
                <dl className="mt-2 flex flex-col gap-1.5 text-sm">
                  {siteConfig.hours.map((rule) => (
                    <div key={rule.label} className="flex justify-between gap-4 border-b border-line/60 pb-1.5">
                      <dt className="text-fg-muted">{rule.label}</dt>
                      <dd className="font-medium text-white">
                        {formatHour(rule.open)} às {formatHour(rule.close)}
                      </dd>
                    </div>
                  ))}
                  <div className="flex justify-between gap-4">
                    <dt className="text-fg-muted">Domingo</dt>
                    <dd className="font-medium text-white">Fechado</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-2 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <ActionLink href={getWhatsappLink()} external>
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </ActionLink>
              <ActionLink href={telLink} variant="ghost">
                <Phone className="size-4 text-brand" aria-hidden="true" />
                Ligar
              </ActionLink>
              <ActionLink href={siteConfig.mapsRouteUrl} external variant="secondary">
                <Route className="size-4" aria-hidden="true" />
                Ver rota
              </ActionLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-h-[24rem] lg:min-h-0">
            <div className="h-full min-h-[24rem] overflow-hidden rounded-3xl border border-line shadow-[0_0_64px_-24px_rgba(52,245,168,0.35)]">
              <iframe
                title={`Mapa com a localização da ${siteConfig.name}`}
                src={siteConfig.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="size-full min-h-[24rem] border-0"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
