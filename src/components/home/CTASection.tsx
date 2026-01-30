import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const ctaImage =
  'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1920&q=80'

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src={ctaImage}
          alt="Manutention industrielle"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white tracking-wide mb-6">
          Parlons de votre projet
        </h2>
        <p className="text-xl text-white/80 mb-10">
          Étude personnalisée. Devis sous 48h. Accompagnement technique.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Demander un devis
          </Button>
          <Button href="tel:+33123456789" variant="outline" size="lg">
            01 23 45 67 89
          </Button>
        </div>
      </div>
    </section>
  )
}
