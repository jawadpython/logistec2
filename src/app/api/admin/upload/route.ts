import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { authOptions } from '@/lib/auth'

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const formData = await request.formData()
  const file = formData.get('file') as File | null

  if (!file) {
    return NextResponse.json({ error: 'Aucun fichier' }, { status: 400 })
  }

  const ext = file.name.split('.').pop() || 'jpg'
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

  // Vercel Blob (production) - utilisé quand BLOB_READ_WRITE_TOKEN est défini
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(filename, file, { access: 'public' })
    return NextResponse.json({ url: blob.url })
  }

  // Stockage local (développement uniquement)
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const uploadDir = join(process.cwd(), 'public', 'uploads')
  await mkdir(uploadDir, { recursive: true })
  const filepath = join(uploadDir, filename)
  await writeFile(filepath, buffer)

  return NextResponse.json({
    url: `/uploads/${filename}`,
  })
}
