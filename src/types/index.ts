export interface Product {
  id: string
  name: string
  slug: string
  description: string
  category: string
  image?: string | null
  features?: string | null
  order: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image?: string | null
  published: boolean
  createdAt: Date
}
