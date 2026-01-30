'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ProductForm } from './ProductForm'

interface Product {
  id: string
  name: string
  slug: string
  description: string
  category: string
  image: string | null
  features: string | null
  order: number
}

export function ProductsManager({
  initialProducts,
}: {
  initialProducts: Product[]
}) {
  const [products, setProducts] = useState(initialProducts)
  const [editing, setEditing] = useState<Product | null>(null)
  const [creating, setCreating] = useState(false)

  async function handleDelete(id: string) {
    if (!confirm('Supprimer ce produit ?')) return
    const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' })
    if (res.ok) setProducts((p) => p.filter((x) => x.id !== id))
  }

  function handleSaved(product: Product) {
    if (editing) {
      setProducts((p) => p.map((x) => (x.id === product.id ? product : x)))
      setEditing(null)
    } else {
      setProducts((p) => [...p, product])
      setCreating(false)
    }
  }

  return (
    <div className="space-y-8">
      <button
        type="button"
        onClick={() => setCreating(true)}
        className="bg-[var(--accent)] text-white px-6 py-2 font-semibold hover:bg-[var(--accent-hover)] transition-colors"
      >
        Nouveau produit
      </button>

      {(creating || editing) && (
        <ProductForm
          product={editing || undefined}
          onSave={handleSaved}
          onCancel={() => {
            setCreating(false)
            setEditing(null)
          }}
        />
      )}

      <div className="border border-white/10 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="p-4 text-white/60 text-sm font-medium">Image</th>
              <th className="p-4 text-white/60 text-sm font-medium">Nom</th>
              <th className="p-4 text-white/60 text-sm font-medium">Catégorie</th>
              <th className="p-4 text-white/60 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-white/5 hover:bg-white/5"
              >
                <td className="p-4">
                  <div className="relative w-16 h-12 bg-[#1a1a1a] overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-white/30 text-xs">—</span>
                    )}
                  </div>
                </td>
                <td className="p-4 text-white">{product.name}</td>
                <td className="p-4 text-white/70">{product.category}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setEditing(product)}
                      className="text-[var(--accent)] text-sm hover:underline"
                    >
                      Modifier
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(product.id)}
                      className="text-red-400 text-sm hover:underline"
                    >
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
