import Image from "next/image"
import { ActionLink, Container, SectionHeading, Tag, WhatsAppIcon } from "@/components/site-ui"
import { Reveal } from "@/components/reveal"
import { images } from "@/lib/images"
import { getWhatsappLink } from "@/lib/site-config"

const highlights = ["Armações", "Óculos de sol", "Lentes", "Serviços"]

// Texto institucional: edite aqui. Sem datas, números ou depoimentos.
export function About() {
  return (
    <section id="sobre" className="bg-bg-alt py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-full bg-[radial-gradient(closest-side,rgba(52,245,168,0.25),transparent_72%)] blur-2xl"
          />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-line">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-bg/60 via-transparent to-bg/10" />
          </div>
        </Reveal>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Reveal>
            <SectionHeading
              tag="Sobre a loja"
              title="Uma ótica completa no coração da Vila Guarani"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-fg-muted">
              A Ótica Luma Star reúne armações, óculos de sol, lentes e serviços para cuidar da sua visão com atenção e estilo. Venha conhecer a loja.
            </p>
          </Reveal>
          <Reveal delay={160} className="flex flex-wrap gap-2">
            {highlights.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </Reveal>
          <Reveal delay={220}>
            <ActionLink href={getWhatsappLink()} external size="lg" className="w-full sm:w-auto">
              <WhatsAppIcon />
              Falar no WhatsApp
            </ActionLink>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
