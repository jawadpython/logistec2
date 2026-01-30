import { prisma } from './prisma'

const fallbackProducts = [
  {
    id: '1',
    name: 'Chariot élévateur 3 tonnes',
    slug: 'chariot-elevateur-3t',
    description: 'Élévateur à fourche haute performance.',
    category: 'Chariots',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    features: null as string | null,
    order: 0,
  },
  {
    id: '2',
    name: 'Convoyeur à rouleaux',
    slug: 'convoyeur-rouleaux',
    description: 'Convoyage continu pour flux production.',
    category: 'Convoyeurs',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    features: null as string | null,
    order: 1,
  },
  {
    id: '3',
    name: 'Rack palettier dynamique',
    slug: 'rack-palettier-dynamique',
    description: 'Stockage FIFO haute densité.',
    category: 'Stockage',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    features: null as string | null,
    order: 2,
  },
]

export async function getFeaturedProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { order: 'asc' },
      take: 3,
    })
    if (products.length > 0) {
      return products.map((p) => ({
        ...p,
        image: p.image || fallbackProducts[0]!.image,
      }))
    }
  } catch {
    // Prisma non initialisé ou DB absente
  }
  return fallbackProducts
}

export async function getAllProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: [{ order: 'asc' }, { name: 'asc' }],
    })
    if (products.length > 0) return products
  } catch {
    // Fallback
  }
  return fallbackProducts
}

export async function getProductBySlug(slug: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
    })
    if (product) return product
  } catch {
    // Fallback
  }
  return fallbackProducts.find((p) => p.slug === slug) || null
}

const fallbackPosts = [
  {
    id: '1',
    title: 'Optimiser vos flux logistiques',
    slug: 'optimiser-flux-logistiques',
    excerpt: 'Conseils pour améliorer la performance de votre entrepôt.',
    content: '',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    published: true,
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Choisir son équipement de manutention',
    slug: 'choisir-equipement-manutention',
    excerpt: 'Guide pour sélectionner le matériel adapté à vos besoins.',
    content: '',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    published: true,
    createdAt: new Date(),
  },
]

export async function getBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    })
    if (posts.length > 0) return posts
  } catch {
    //
  }
  return fallbackPosts
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug, published: true },
    })
    if (post) return post
  } catch {
    //
  }
  return fallbackPosts.find((p) => p.slug === slug) || null
}
