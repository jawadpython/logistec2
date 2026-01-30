import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPostBySlug } from '@/lib/data'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) return { title: 'Article non trouvé' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) notFound()

  return (
    <article>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
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
            Retour au blog
          </Link>

          <p className="text-white/40 text-sm mb-4">
            {formatDate(post.createdAt)}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-8">
            {post.title}
          </h1>

          {post.image && (
            <div className="relative aspect-[21/9] mb-12 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {post.excerpt}
            </p>
            {post.content ? (
              <div
                className="text-white/80 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <p className="text-white/60 italic">
                Contenu à venir. Contactez-nous pour plus d&apos;informations.
              </p>
            )}
          </div>
        </div>
      </section>
    </article>
  )
}
