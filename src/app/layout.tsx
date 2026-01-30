import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { Providers } from './providers'
import { ConditionalLayout } from '@/components/layout/ConditionalLayout'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Manutech | Intralogistique & Manutention Industrielle',
    template: '%s | Manutech',
  },
  description:
    'Expert en intralogistique et manutention. Solutions sur-mesure pour vos flux de production. Chariots, convoyeurs, systèmes automatisés.',
  keywords: ['intralogistique', 'manutention', 'industrie', 'entrepôt', 'flux'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${bebas.variable} ${inter.variable} antialiased`}>
        <Providers>
          <ConditionalLayout>{children}</ConditionalLayout>
        </Providers>
      </body>
    </html>
  )
}
