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
    default: 'MANUAF | We Lighten Your Load - Intralogistique au Maroc',
    template: '%s | MANUAF',
  },
  description:
    'MANUAF, la référence de l\'intralogistique au Maroc. Location, vente et maintenance de chariots élévateurs, transpalettes, nacelles. Pièces de rechange et reconditionnement.',
  keywords: ['intralogistique', 'manutention', 'chariot élévateur', 'location', 'Maroc', 'Casablanca', 'transpalette', 'nacelle', 'pièces de rechange'],
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
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
