/** @type {import('next').NextConfig} */

// Cloudflare Workers Builds define automaticamente WORKERS_CI=1.
// Nesse caso, o site é gerado como arquivos estáticos na pasta "out".
// Na Vercel e no "next dev" nada muda: o comportamento é o mesmo de antes.
const isCloudflareBuild =
  process.env.WORKERS_CI === '1' || process.env.NEXT_OUTPUT === 'export'

const nextConfig = {
  ...(isCloudflareBuild ? { output: 'export' } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
