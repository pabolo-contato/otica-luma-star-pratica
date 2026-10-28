import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

// Endereço público do site (usado nas imagens de compartilhamento).
// Na Vercel vem sozinho; no Cloudflare, defina NEXT_PUBLIC_SITE_URL nas variáveis de build.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

// Troque título, descrição e imagem de compartilhamento aqui.
const title =
  'Ótica Luma Star | Óculos, lentes e exame de vista na Vila Guarani, São Paulo'
const description =
  'Armações, óculos de sol, lentes e exame de vista na Vila Guarani, São Paulo. Venha conhecer a Ótica Luma Star.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ótica Luma Star',
    images: [
      {
        url: '/images/hero.png',
        alt: 'Mulher de óculos em retrato, em ambiente escuro com luz verde',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/hero.png'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050807',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable} bg-bg`}>
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && Boolean(process.env.VERCEL) && <Analytics />}
      </body>
    </html>
  )
}
