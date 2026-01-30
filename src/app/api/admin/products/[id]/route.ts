import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const { id } = await params
  const body = await request.json()
  const { name, description, category, image, features, order } = body

  if (!name || !description || !category) {
    return NextResponse.json(
      { error: 'Nom, description et catégorie requis' },
      { status: 400 }
    )
  }

  const slug = slugify(name)

  const product = await prisma.product.update({
    where: { id },
    data: {
      name,
      slug,
      description,
      category,
      image: image || null,
      features: features || null,
      order: order ?? 0,
    },
  })

  return NextResponse.json(product)
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const { id } = await params

  await prisma.product.delete({
    where: { id },
  })

  return NextResponse.json({ success: true })
}
