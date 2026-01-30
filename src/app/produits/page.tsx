import Link from 'next/link'
import Image from 'next/image'
import { getAllProducts } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Produits',
  description:
    'Chariots, convoyeurs, stockage. Nos solutions de manutention et intralogistique.',
}

export default async function ProduitsPage() {
  const products = await getAllProducts()

  return (
    <div>
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm mb-4">
            Catalogue
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white tracking-wide mb-6">
            Nos solutions
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Équipements de manutention et systèmes d&apos;intralogistique pour
            l&apos;industrie.
          </p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/produits/${product.slug}`}
                className="group block bg-[#141414] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={
                      product.image ||
                      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'
                    }
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-wider mb-2">
                    {product.category}
                  </p>
                  <h2 className="font-display text-2xl text-white group-hover:text-[var(--accent)] transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-white/60 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
