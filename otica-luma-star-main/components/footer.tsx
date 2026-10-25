import { Container, Logo } from "@/components/site-ui"
import { formatHour } from "@/lib/open-status"
import { navLinks, siteConfig, telLink } from "@/lib/site-config"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-bg pt-16 pb-28 sm:pb-12">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-fg-muted">
              Armações, óculos de sol, lentes e cuidados para o seu olhar, na Vila Guarani.
            </p>
            {siteConfig.socials.length > 0 && (
              <ul className="flex flex-wrap gap-3">
                {siteConfig.socials.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded text-sm text-fg-muted transition-colors outline-none hover:text-brand focus-visible:ring-2 focus-visible:ring-glow"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Rodapé">
            <h3 className="text-sm font-bold tracking-wide text-white">Navegação</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded text-sm text-fg-muted transition-colors outline-none hover:text-brand focus-visible:ring-2 focus-visible:ring-glow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-white">Contato</h3>
            <address className="mt-4 flex flex-col gap-2.5 text-sm text-fg-muted not-italic">
              <span>{siteConfig.address}</span>
              <a
                href={telLink}
                className="w-fit rounded transition-colors outline-none hover:text-brand focus-visible:ring-2 focus-visible:ring-glow"
              >
                {siteConfig.phoneDisplay}
              </a>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-white">Horários</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-fg-muted">
              {siteConfig.hours.map((rule) => (
                <li key={rule.label}>
                  {rule.label}: {formatHour(rule.open)} às {formatHour(rule.close)}
                </li>
              ))}
              <li>Domingo: fechado</li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-line pt-6 text-xs text-fg-muted">
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  )
}
