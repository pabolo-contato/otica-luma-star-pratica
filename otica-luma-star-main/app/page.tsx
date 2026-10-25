import { About } from "@/components/about"
import { Categories } from "@/components/categories"
import { Differentials } from "@/components/differentials"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Location } from "@/components/location"
import { Services } from "@/components/services"
import { StylesShowcase } from "@/components/styles-showcase"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { siteConfig } from "@/lib/site-config"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Optician",
  name: siteConfig.name,
  telephone: siteConfig.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Pedro Severino Junior, 325",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <StylesShowcase />
        <Services />
        <Differentials />
        <About />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
