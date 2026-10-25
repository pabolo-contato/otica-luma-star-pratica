import Image from "next/image"
import { ArrowRight, Baby, Contact, Eye, Glasses, Sun, type LucideIcon } from "lucide-react"
import { Container, SectionHeading } from "@/components/site-ui"
import { Reveal } from "@/components/reveal"
import { images, type SiteImage } from "@/lib/images"
import { cn } from "@/lib/utils"

type Category = {
  title: string
  description: string
  icon: LucideIcon
  image: SiteImage
  href: string
  featured?: boolean
}

// Edite títulos, descrições, imagens e destinos dos links aqui.
const categories: Category[] = [
  {
    title: "Armações de grau",
    description: "Modelos para todos os estilos, do clássico ao marcante.",
    icon: Glasses,
    image: images.categories.armacoes,
    href: "#estilos",
    featured: true,
  },
  {
    title: "Óculos de sol",
    description: "Proteção e personalidade para os seus dias de sol.",
    icon: Sun,
    image: images.categories.sol,
    href: "#estilos",
    featured: true,
  },
  {
    title: "Infantil",
    description: "Opções pensadas para o conforto e a alegria dos pequenos.",
    icon: Baby,
    image: images.categories.infantil,
    href: "#estilos",
  },
  {
    title: "Lentes de receituário",
    description: "Lentes para a sua receita, com orientação da equipe.",
    icon: Eye,
    image: images.categories.lentes,
    href: "#servicos",
  },
  {
    title: "Lentes de contato",
    description: "Converse com a equipe e tire suas dúvidas.",
    icon: Contact,
    image: images.categories.contato,
    href: "#servicos",
  },
]

export function Categories() {
  return (
    <section id="categorias" className="bg-bg-alt py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading tag="Categorias" title="O que você procura?" description="Escolha por onde começar. Nossa equipe ajuda em cada passo." />
        </Reveal>

        <ul className="scrollbar-none -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-14 lg:grid lg:grid-cols-6 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Reveal
                as="li"
                key={category.title}
                delay={index * 80}
                className={cn(
                  "w-[80%] shrink-0 snap-center sm:w-[46%] lg:w-auto",
                  category.featured ? "lg:col-span-3" : "lg:col-span-2",
                )}
              >
                <article
                  className={cn(
                    "group relative isolate flex h-[26rem] flex-col justify-end overflow-hidden rounded-3xl border border-line transition-all duration-500 hover:border-brand/60 hover:shadow-[0_0_56px_-12px_rgba(52,245,168,0.4)]",
                    category.featured ? "lg:h-[28rem]" : "lg:h-[24rem]",
                  )}
                >
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    fill
                    loading="lazy"
                    sizes={category.featured ? "(min-width: 1024px) 45vw, 80vw" : "(min-width: 1024px) 30vw, 80vw"}
                    className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-linear-to-t from-bg via-bg/55 to-bg/10"
                  />
                  <div className="flex flex-col gap-3 p-6">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/15 text-brand backdrop-blur">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-2xl leading-tight font-bold text-white">{category.title}</h3>
                    <p className="max-w-sm text-sm leading-relaxed text-fg-muted">{category.description}</p>
                    <a
                      href={category.href}
                      aria-label={`Saber mais sobre ${category.title}`}
                      className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-md text-sm font-semibold text-brand outline-none focus-visible:ring-2 focus-visible:ring-glow"
                    >
                      Saber mais
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
