import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Container, SectionHeading } from "@/components/site-ui"
import { Reveal } from "@/components/reveal"
import { siteConfig } from "@/lib/site-config"
import { formatHour } from "@/lib/open-status"

const [weekdays, saturday] = siteConfig.hours

// Perguntas e respostas: edite aqui. Respostas genéricas, sem prazos, preços ou promessas.
const faqs = [
  {
    question: "Onde fica a Ótica Luma Star?",
    answer: `Estamos na ${siteConfig.address}.`,
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: `${weekdays.label}, das ${formatHour(weekdays.open)} às ${formatHour(weekdays.close)}. ${saturday.label}, das ${formatHour(saturday.open)} às ${formatHour(saturday.close)}. Aos domingos, estamos fechados.`,
  },
  {
    question: "Posso falar com a loja pelo WhatsApp?",
    answer: "Sim. Clique em qualquer botão de WhatsApp do site para iniciar uma conversa com a nossa equipe.",
  },
  {
    question: "Vocês têm armações infantis?",
    answer: "Sim, temos opções de armações infantis. Consulte a disponibilidade com a nossa equipe.",
  },
  {
    question: "Como consulto um modelo que vi no site?",
    answer: "Use o botão “Consultar na loja” no card do estilo. Ele abre o WhatsApp com uma mensagem pronta para você.",
  },
  {
    question: "Posso tirar dúvidas sobre lentes e exame de vista?",
    answer: "Claro. Fale com a equipe pelo WhatsApp ou por telefone para saber como funciona o atendimento.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-bg-alt py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            tag="Dúvidas frequentes"
            title="Perguntas e respostas"
            description="Não achou o que procura? Chame a equipe no WhatsApp."
            className="lg:sticky lg:top-28"
          />
        </Reveal>
        <Reveal delay={100}>
          <Accordion className="flex flex-col gap-3">
            {faqs.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="rounded-2xl border border-line bg-surface px-5 transition-colors duration-300 data-open:border-brand/50"
              >
                <AccordionTrigger className="py-5 text-base font-semibold text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-fg-muted">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  )
}
