"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { ActionLink, Container, SectionHeading, Tag, WhatsAppIcon } from "@/components/site-ui"
import { Reveal } from "@/components/reveal"
import { images, type SiteImage } from "@/lib/images"
import { getWhatsappLink } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type StyleCategory = "Grau" | "Sol" | "Infantil"
type Filter = "Todos" | StyleCategory

type EyewearStyle = {
  name: string
  category: StyleCategory
  description: string
  image: SiteImage
}

const filters: Filter[] = ["Todos", "Grau", "Sol", "Infantil"]

// Edite os 12 estilos aqui (nome, categoria, descrição e imagem). Sem preço, marca ou estoque.
const eyewearStyles: EyewearStyle[] = [
  { name: "Clássico", category: "Grau", description: "Linhas atemporais para o uso de todos os dias.", image: images.styles.classico },
  { name: "Redondo", category: "Grau", description: "Formato suave que valoriza o rosto.", image: images.styles.redondo },
  { name: "Quadrado", category: "Grau", description: "Presença marcante com traços retos.", image: images.styles.quadrado },
  { name: "Gatinho", category: "Grau", description: "Toque elegante com muita personalidade.", image: images.styles.gatinho },
  { name: "Metálico fino", category: "Grau", description: "Leveza e discrição para um visual refinado.", image: images.styles.metalico },
  { name: "Acetato marcante", category: "Grau", description: "Volume e cor para quem gosta de se destacar.", image: images.styles.acetato },
  { name: "Aviador", category: "Sol", description: "Um clássico que atravessa gerações.", image: images.styles.aviador },
  { name: "Oversized", category: "Sol", description: "Armações grandes, cheias de atitude.", image: images.styles.oversized },
  { name: "Esportivo solar", category: "Sol", description: "Praticidade para quem vive em movimento.", image: images.styles.esportivo },
  { name: "Redondo solar", category: "Sol", description: "Estilo retrô com charme contemporâneo.", image: images.styles.redondoSolar },
  { name: "Infantil colorido", category: "Infantil", description: "Cores divertidas para os pequenos.", image: images.styles.infantilColorido },
  { name: "Infantil flexível", category: "Infantil", description: "Conforto para o dia a dia das crianças.", image: images.styles.infantilFlexivel },
]

export function StylesShowcase() {
  const [filter, setFilter] = useState<Filter>("Todos")
  const visibleStyles =
    filter === "Todos" ? eyewearStyles : eyewearStyles.filter((style) => style.category === filter)

  return (
    <section id="estilos" className="bg-bg py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              tag="Vitrine"
              title="Estilos para cada olhar"
              description="Uma seleção de estilos para inspirar. Consulte a disponibilidade com a nossa equipe."
            />
          </Reveal>
          <Reveal delay={100}>
            <div role="group" aria-label="Filtrar estilos por categoria" className="flex flex-wrap gap-2">
              {filters.map((item) => {
                const active = item === filter
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(item)}
                    className={cn(
                      "h-10 rounded-full border px-5 text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                      active
                        ? "border-brand bg-brand text-on-brand shadow-[0_0_24px_-6px_rgba(52,245,168,0.6)]"
                        : "border-line bg-surface text-fg-muted hover:border-brand/50 hover:text-white",
                    )}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        <ul
          key={filter}
          className="mt-12 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visibleStyles.map((style, index) => (
            <li
              key={style.name}
              style={{ animationDelay: `${index * 45}ms` }}
              className="animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-3 fill-mode-both duration-500"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-linear-to-b from-surface to-bg-alt transition-all duration-500 hover:border-brand/60 hover:shadow-[0_0_44px_-12px_rgba(52,245,168,0.4)]">
                <div className="relative aspect-square overflow-hidden bg-bg-alt">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(52,245,168,0.18),transparent_75%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <Image
                    src={style.image.src}
                    alt={style.image.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 480px) 45vw, 92vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <Tag className="absolute top-3 left-3 bg-bg/70 backdrop-blur">{style.category}</Tag>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="flex flex-1 flex-col gap-1.5">
                    <h3 className="text-lg font-bold text-white">{style.name}</h3>
                    <p className="text-sm leading-relaxed text-fg-muted">{style.description}</p>
                  </div>
                  <ActionLink
                    href={getWhatsappLink(`Olá! Tenho interesse em armações no estilo ${style.name}.`)}
                    external
                    variant="ghost"
                    aria-label={`Consultar na loja o estilo ${style.name}`}
                    className="w-full group-hover:border-brand/60"
                  >
                    <MessageCircle className="size-4 text-brand" aria-hidden="true" />
                    Consultar na loja
                  </ActionLink>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <Reveal className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl border border-line bg-linear-to-r from-surface via-bg-alt to-surface p-8 text-center sm:flex-row sm:text-left">
          <p className="font-display text-xl font-semibold text-[#F0FDF4] sm:text-2xl">
            Não encontrou o seu estilo? <span className="text-brand">Fale com a nossa equipe.</span>
          </p>
          <ActionLink href={getWhatsappLink()} external size="lg" className="w-full sm:w-auto">
            <WhatsAppIcon />
            Falar no WhatsApp
          </ActionLink>
        </Reveal>
      </Container>
    </section>
  )
}
