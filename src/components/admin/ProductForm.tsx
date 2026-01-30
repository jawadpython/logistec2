'use client'

import { useState } from 'react'

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

export function ProductForm({
  product,
  onSave,
  onCancel,
}: {
  product?: Product
  onSave: (p: Product) => void
  onCancel: () => void
}) {
  const [name, setName] = useState(product?.name ?? '')
  const [description, setDescription] = useState(product?.description ?? '')
  const [category, setCategory] = useState(product?.category ?? '')
  const [image, setImage] = useState(product?.image ?? '')
  const [features, setFeatures] = useState(product?.features ?? '')
  const [order, setOrder] = useState(product?.order ?? 0)
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      body: formData,
    })
    const data = await res.json()
    if (data.url) setImage(data.url)
    setUploading(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const url = product
      ? `/api/admin/products/${product.id}`
      : '/api/admin/products'
    const method = product ? 'PUT' : 'POST'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        description,
        category,
        image: image || null,
        features: features || null,
        order,
      }),
    })

    const saved = await res.json()
    if (res.ok) onSave(saved)
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#141414] border border-white/10 p-6 space-y-6 max-w-2xl"
    >
      <h3 className="font-display text-xl text-white">
        {product ? 'Modifier le produit' : 'Nouveau produit'}
      </h3>

      <div>
        <label className="block text-sm text-white/70 mb-2">Nom *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-white/70 mb-2">Description *</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={3}
          className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-white/70 mb-2">Catégorie *</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          placeholder="Chariots, Convoyeurs, Stockage..."
          className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-white/70 mb-2">Image</label>
        <div className="flex gap-4 items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="text-white/70 text-sm"
          />
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Ou URL"
            className="flex-1 bg-[#0a0a0a] border border-white/10 px-4 py-2 text-white"
          />
        </div>
        {image && (
          <p className="text-white/50 text-xs mt-2 truncate max-w-md">{image}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-white/70 mb-2">
          Caractéristiques (une par ligne)
        </label>
        <textarea
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          rows={4}
          placeholder={'Option A\nOption B\nOption C'}
          className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-2 text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-white/70 mb-2">Ordre</label>
        <input
          type="number"
          value={order}
          onChange={(e) => setOrder(parseInt(e.target.value, 10) || 0)}
          className="w-24 bg-[#0a0a0a] border border-white/10 px-4 py-2 text-white"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-[var(--accent)] text-white px-6 py-2 font-semibold hover:bg-[var(--accent-hover)] disabled:opacity-50"
        >
          {loading ? 'Enregistrement...' : 'Enregistrer'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border border-white/20 text-white px-6 py-2 hover:bg-white/5"
        >
          Annuler
        </button>
      </div>
    </form>
  )
}
