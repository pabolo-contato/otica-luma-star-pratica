"use client"

import { useState } from "react"
import { Menu, Route } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ActionLink, Container, Logo, WhatsAppIcon } from "@/components/site-ui"
import { getWhatsappLink, navLinks, siteConfig } from "@/lib/site-config"

// Para alterar os itens do menu, edite `navLinks` em lib/site-config.ts.
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-bg/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <a
          href="#inicio"
          aria-label={`${siteConfig.name} - ir para o início`}
          className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-glow"
        >
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-fg-muted transition-colors outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-glow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ActionLink
            href={siteConfig.mapsRouteUrl}
            external
            variant="secondary"
            className="hidden md:inline-flex"
          >
            <Route className="size-4" aria-hidden="true" />
            Ver rota
          </ActionLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Abrir menu"
                  className="flex size-10 items-center justify-center rounded-xl border border-line text-white transition-colors outline-none hover:border-brand/50 focus-visible:ring-2 focus-visible:ring-glow lg:hidden"
                />
              }
            >
              <Menu className="size-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[86%] max-w-sm border-line bg-bg-alt p-0 text-white"
            >
              <div className="flex flex-col gap-1 border-b border-line px-6 pt-6 pb-5">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navegue pelas seções do site da {siteConfig.name}
                </SheetDescription>
                <Logo />
              </div>
              <nav aria-label="Menu mobile" className="flex-1 overflow-y-auto px-4 py-4">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center rounded-xl px-4 py-3.5 font-display text-lg font-semibold text-white transition-colors outline-none hover:bg-white/5 hover:text-brand focus-visible:ring-2 focus-visible:ring-glow"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex flex-col gap-3 border-t border-line p-6">
                <ActionLink
                  href={getWhatsappLink()}
                  external
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  <WhatsAppIcon />
                  Falar no WhatsApp
                </ActionLink>
                <ActionLink
                  href={siteConfig.mapsRouteUrl}
                  external
                  variant="secondary"
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  <Route className="size-4" aria-hidden="true" />
                  Ver rota
                </ActionLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
