import Link from 'next/link'
import Image from 'next/image'

const solutions = [
  {
    title: 'Chariots & Transpalettes',
    description: 'Équipements de manutention manuelle et électrique.',
    image:
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    href: '/produits?category=chariots',
  },
  {
    title: 'Convoyeurs & Transport',
    description: 'Systèmes de convoyage pour flux continus.',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    href: '/produits?category=convoyeurs',
  },
  {
    title: 'Stockage & Palettisation',
    description: 'Racks, étagères et systèmes de palettisation.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    href: '/produits?category=stockage',
  },
]

export function SolutionsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm mb-4">
            Nos solutions
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wide mb-6">
            L&apos;expertise au service de vos flux
          </h2>
          <p className="text-white/70 max-w-2xl text-lg">
            Des équipements robustes et des systèmes pensés pour la performance
            industrielle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group block bg-[#141414] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-white/80 text-sm">{solution.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:text-[var(--accent-hover)] transition-colors"
          >
            Voir toutes nos solutions
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
