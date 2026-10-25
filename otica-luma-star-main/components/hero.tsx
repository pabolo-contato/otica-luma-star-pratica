import Image from "next/image"
import { Eye, Users } from "lucide-react"
import { ActionLink, Container, Tag, WhatsAppIcon } from "@/components/site-ui"
import { OpenStatusBadge } from "@/components/open-status-badge"
import { Reveal } from "@/components/reveal"
import { images } from "@/lib/images"
import { getWhatsappLink, siteConfig } from "@/lib/site-config"

// Textos do hero: edite aqui. A foto vem de `images.hero` (lib/images.ts).
const floatingCards = [
  {
    icon: Users,
    title: "Armações para todas as idades",
    className: "left-3 bottom-24 sm:-left-8 sm:bottom-28",
    delay: "0s",
  },
  {
    icon: Eye,
    title: "Exame de vista e lentes",
    className: "right-3 top-8 sm:-right-6 sm:top-14",
    delay: "1.5s",
  },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden bg-bg pt-24 pb-16 lg:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-glow/15 blur-[140px]"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <Tag>Ótica completa · Vila Guarani</Tag>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-balance text-[clamp(2.75rem,6.4vw,4.5rem)] leading-[1.04] font-bold tracking-tight text-white">
              Seu próximo olhar começa aqui. <span className="text-brand">Enxergue novas possibilidades.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-fg-muted">
              Armações, óculos de sol, lentes e cuidados para o seu olhar, na Vila Guarani.
            </p>
          </Reveal>
          <Reveal delay={240} className="flex flex-col gap-3 sm:flex-row">
            <ActionLink href={getWhatsappLink()} external size="lg">
              <WhatsAppIcon />
              Falar no WhatsApp
            </ActionLink>
            <ActionLink href={siteConfig.mapsRouteUrl} external variant="secondary" size="lg">
              Como chegar
            </ActionLink>
            <ActionLink href="https://www.instagram.com/oticalumaoficial/" external variant="secondary" size="lg">
            instagram
            </ActionLink>
          </Reveal>
          <Reveal delay={320}>
            <OpenStatusBadge />
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-full bg-[radial-gradient(closest-side,rgba(52,245,168,0.32),transparent_72%)] blur-2xl"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line shadow-[0_0_80px_-20px_rgba(52,245,168,0.4)]">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              preload
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-bg/80 via-transparent to-bg/20"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-br from-brand/10 via-transparent to-transparent mix-blend-screen"
            />
          </div>

          {floatingCards.map(({ icon: Icon, title, className, delay }) => (
            <div
              key={title}
              style={{ animationDelay: delay }}
              className={`float-soft absolute z-10 flex max-w-[13.5rem] items-center gap-3 rounded-2xl border border-line bg-bg/75 p-3 pr-4 shadow-xl backdrop-blur-md ${className}`}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm leading-snug font-medium text-white">{title}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
