import { Eye, HeartHandshake, LayoutGrid, Users, type LucideIcon } from "lucide-react"
import { Container, GlowCard, SectionHeading } from "@/components/site-ui"
import { Reveal } from "@/components/reveal"

type Differential = { title: string; description: string; icon: LucideIcon }

// Edite os diferenciais aqui. Evite números, rankings ou comparações.
const differentials: Differential[] = [
  {
    title: "Atendimento próximo",
    description: "Uma equipe atenta, que escuta o que você precisa e ajuda a escolher com calma.",
    icon: HeartHandshake,
  },
  {
    title: "Variedade para todos os estilos",
    description: "Do clássico ao ousado, há opções para diferentes gostos e rostos.",
    icon: LayoutGrid,
  },
  {
    title: "Armações para todas as idades",
    description: "Linhas pensadas para crianças, jovens e adultos, todas no mesmo lugar.",
    icon: Users,
  },
  {
    title: "Cuidado com a sua visão",
    description: "Exame, lentes e ajustes reunidos para você cuidar do olhar com tranquilidade.",
    icon: Eye,
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-bg py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            tag="Diferenciais"
            title="Por que escolher a Luma Star"
            description="Atenção, variedade e cuidado em cada atendimento."
          />
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal as="li" key={item.title} delay={index * 90}>
                <GlowCard className="h-full p-6">
                  <div
                    aria-hidden="true"
                    className="absolute -top-16 -right-16 size-40 rounded-full bg-glow/10 blur-3xl transition-opacity duration-500 group-hover:bg-glow/25"
                  />
                  <span className="relative flex size-14 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-brand shadow-[0_0_32px_-6px_rgba(52,245,168,0.55)]">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-6 text-xl leading-snug font-bold text-white">{item.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-fg-muted">{item.description}</p>
                </GlowCard>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
