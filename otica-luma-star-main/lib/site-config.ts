// Configuração central do site. Troque telefone, endereço, horários e redes sociais aqui.

export type HoursRule = {
  /** Texto exibido no site (ex.: "Segunda a sexta") */
  label: string
  /** Dias da semana cobertos: 0 = domingo ... 6 = sábado */
  days: number[]
  /** Horário de abertura, formato HH:MM */
  open: string
  /** Horário de fechamento, formato HH:MM */
  close: string
}

export type SocialLink = {
  label: string
  href: string
}

const address = "Av. Pedro Severino Junior, 325, Vila Guarani, São Paulo – SP"

export const siteConfig = {
  name: "Ótica Luma Star",
  address,
  phoneDisplay: "(11) 3104-9185",
  phoneTel: "+551131049185",
  whatsappNumber: "551131049185",
  whatsappDefaultMessage:
    "Olá! Vim pelo site da Ótica Luma Star e gostaria de mais informações.",
  timeZone: "America/Sao_Paulo",
  // Domingo não está listado: é tratado como fechado.
  hours: [
    { label: "Segunda a sexta", days: [1, 2, 3, 4, 5], open: "09:00", close: "18:00" },
    { label: "Sábado", days: [6], open: "09:00", close: "13:00" },
  ] satisfies HoursRule[],
  // Preencha para exibir links de redes sociais no rodapé. Vazio = oculto.
  socials: [] as SocialLink[],
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Av.+Pedro+Severino+Junior,+325,+Vila+Guarani,+S%C3%A3o+Paulo+-+SP&output=embed",
  mapsRouteUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Pedro+Severino+Junior,+325,+Vila+Guarani,+S%C3%A3o+Paulo+-+SP",
}

export function getWhatsappLink(message: string = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const telLink = `tel:${siteConfig.phoneTel}`

export const navLinks = [
  { label: "Categorias", href: "#categorias" },
  { label: "Estilos", href: "#estilos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
  { label: "FAQ", href: "#faq" },
]
