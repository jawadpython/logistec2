import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProductBySlug } from '@/lib/data'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return { title: 'Produit non trouvé' }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) notFound()

  const features = product.features
    ? String(product.features).split('\n').filter(Boolean)
    : []

  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux produits
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="relative aspect-[4/3] lg:aspect-square bg-[#141414] overflow-hidden">
              <Image
                src={
                  product.image ||
                  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80'
                }
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div>
              <p className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm mb-4">
                {product.category}
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-6">
                {product.name}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {features.length > 0 && (
                <ul className="space-y-4 mb-8">
                  {features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <span className="text-[var(--accent)] mt-1">—</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-8 py-4 font-semibold hover:bg-[var(--accent-hover)] transition-colors"
              >
                Demander un devis
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
        </div>
      </section>
    </div>
  )
}
