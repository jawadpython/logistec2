import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const heroImage =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Entrepôt industriel moderne"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm mb-6">
          Intralogistique & Manutention
        </p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wide leading-none mb-8">
          Maîtrisez vos flux
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          Solutions industrielles sur-mesure. Performance, fiabilité, accompagnement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/produits" size="lg">
            Nos solutions
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Nous contacter
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
