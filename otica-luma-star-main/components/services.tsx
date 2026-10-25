import Image from "next/image"
import { Droplet, Eye, Glasses, Wrench, type LucideIcon } from "lucide-react"
import { ActionLink, Container, SectionHeading, WhatsAppIcon } from "@/components/site-ui"
import { Reveal } from "@/components/reveal"
import { images } from "@/lib/images"
import { getWhatsappLink } from "@/lib/site-config"

type Service = { title: string; description: string; icon: LucideIcon }

// Edite os serviços aqui. Mantenha textos genéricos, sem prazos, preços ou tecnologias.
const services: Service[] = [
  {
    title: "Exame de vista",
    description: "Cuidado atento com a sua visão. Fale com a equipe para saber como funciona o atendimento.",
    icon: Eye,
  },
  {
    title: "Lentes de receituário",
    description: "Lentes para a sua receita, com orientação para escolher a melhor opção para o seu dia a dia.",
    icon: Glasses,
  },
  {
    title: "Lentes de contato",
    description: "Tire suas dúvidas com a equipe e conheça as possibilidades disponíveis na loja.",
    icon: Droplet,
  },
  {
    title: "Ajustes e manutenção",
    description: "Cuidado com os seus óculos para que continuem confortáveis e bem ajustados.",
    icon: Wrench,
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-bg-alt py-20 lg:py-28">
      <Container className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative min-h-[26rem] lg:min-h-0">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-full bg-[radial-gradient(closest-side,rgba(52,245,168,0.22),transparent_72%)] blur-2xl"
          />
          <div className="relative h-full min-h-[26rem] overflow-hidden rounded-[2rem] border border-line">
            <Image
              src={images.services.src}
              alt={images.services.alt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-bg/70 via-transparent to-bg/10" />
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              tag="Lentes e serviços"
              title="Cuidado completo para o seu olhar"
              description="Do exame à escolha das lentes e ao ajuste final, a equipe acompanha você."
            />
          </Reveal>
          <ul className="flex flex-col gap-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Reveal as="li" key={service.title} delay={index * 80}>
                  <div className="group flex gap-4 rounded-2xl border border-line bg-linear-to-b from-surface to-bg-alt p-5 transition-all duration-500 hover:border-brand/60 hover:shadow-[0_0_44px_-12px_rgba(52,245,168,0.35)]">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-bold text-white">{service.title}</h3>
                      <p className="text-sm leading-relaxed text-fg-muted">{service.description}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ul>
          <Reveal>
            <ActionLink href={getWhatsappLink()} external size="lg" className="w-full sm:w-auto">
              <WhatsAppIcon />
              Falar com a loja
            </ActionLink>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
