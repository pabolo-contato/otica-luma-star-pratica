// Todas as imagens do site em um só lugar. Para trocar uma foto, altere o `src` (e o `alt`).

export type SiteImage = { src: string; alt: string }

export const images = {
  hero: {
    src: "/images/hero.png",
    alt: "Mulher de óculos de armação preta em retrato, em ambiente escuro com luz lateral esverdeada",
  },
  categories: {
    armacoes: {
      src: "/images/cat-armacoes.png",
      alt: "Armações de grau expostas em vitrine escura com iluminação verde",
    },
    sol: {
      src: "/images/oculos-sol.jpeg",
      alt: "Óculos de sol sobre superfície escura com reflexo verde",
    },
    infantil: {
      src: "/images/cat-infantil.png",
      alt: "Criança sorrindo usando óculos de armação colorida",
    },
    lentes: {
      src: "/images/cat-lentes.png",
      alt: "Lentes de receituário sobre fundo escuro com brilho verde",
    },
    contato: {
      src: "/images/cat-contato.png",
      alt: "Lentes de contato em estojo sobre fundo escuro",
    },
  },
  styles: {
    classico: { src: "/images/estilo-classico.png", alt: "Armação de grau clássica na cor preta" },
    redondo: { src: "/images/estilo-redondo.png", alt: "Armação de grau redonda em acetato tartaruga" },
    quadrado: { src: "/images/estilo-quadrado.png", alt: "Armação de grau quadrada preta" },
    gatinho: { src: "/images/estilo-gatinho.png", alt: "Armação de grau no formato gatinho em tom vinho" },
    metalico: { src: "/images/estilo-metalico.png", alt: "Armação de grau metálica fina dourada" },
    acetato: { src: "/images/estilo-acetato.png", alt: "Armação de acetato marcante em verde translúcido" },
    aviador: { src: "/images/estilo-aviador.png", alt: "Óculos de sol aviador com armação dourada e lentes verdes" },
    oversized: { src: "/images/estilo-oversized.png", alt: "Óculos de sol oversized preto com lentes escuras" },
    esportivo: { src: "/images/estilo-esportivo.png", alt: "Óculos de sol esportivo com lentes espelhadas verdes" },
    redondoSolar: { src: "/images/estilo-redondo-solar.png", alt: "Óculos de sol redondo com armação fina preta" },
    infantilColorido: { src: "/images/estilo-infantil-colorido.png", alt: "Armação infantil colorida em azul e verde" },
    infantilFlexivel: { src: "/images/estilo-infantil-flexivel.png", alt: "Armação infantil flexível na cor verde-água" },
  },
  services: {
    src: "/images/servicos.png",
    alt: "Atendimento de exame de vista em consultório com iluminação suave",
  },
  about: {
    src: "/images/sobre.png",
    alt: "Interior de ótica com atmosfera preta e detalhes em verde",
  },
} satisfies Record<string, unknown>
