import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/lib/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Actualités et conseils en intralogistique et manutention.',
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div>
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm mb-4">
            Actualités
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white tracking-wide mb-6">
            Blog
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Conseils, retours d&apos;expérience et actualités du secteur.
          </p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block bg-[#141414] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={
                      post.image ||
                      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'
                    }
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-white/40 text-xs mb-2">
                    {formatDate(post.createdAt)}
                  </p>
                  <h2 className="font-display text-2xl text-white group-hover:text-[var(--accent)] transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-white/60 text-sm line-clamp-2">
                    {post.excerpt}
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
