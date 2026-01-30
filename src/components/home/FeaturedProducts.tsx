import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProducts } from '@/lib/data'

export async function FeaturedProducts() {
  const display = await getFeaturedProducts()

  return (
    <section className="py-24 md:py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm mb-4">
            Produits phares
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wide">
            Solutions éprouvées
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {display.map((product) => (
            <Link
              key={product.id}
              href={`/produits/${product.slug}`}
              className="group block bg-[#141414] border border-white/5 overflow-hidden transition-all duration-300 hover:border-[var(--accent)]/30"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={product.image || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h3 className="font-display text-2xl text-white group-hover:text-[var(--accent)] transition-colors">
                  {product.name}
                </h3>
                <p className="text-white/60 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:text-[var(--accent-hover)] transition-colors"
          >
            Tous nos produits
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
