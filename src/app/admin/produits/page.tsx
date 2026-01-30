import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { ProductsManager } from '@/components/admin/ProductsManager'

export default async function AdminProduitsPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  const products = await prisma.product.findMany({
    orderBy: [{ order: 'asc' }, { name: 'asc' }],
  })

  return (
    <div className="p-8">
      <h1 className="font-display text-3xl text-white mb-2">Produits</h1>
      <p className="text-white/60 mb-8">
        Gérer le catalogue produits
      </p>
      <ProductsManager initialProducts={products} />
    </div>
  )
}
