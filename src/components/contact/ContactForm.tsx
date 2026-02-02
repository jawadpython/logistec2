'use client'

import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  )

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        }),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs text-[#999999] uppercase tracking-wider mb-2"
          >
            Nom *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-[#f5f5f5] border-0 px-4 py-3 text-[#333333] text-sm placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs text-[#999999] uppercase tracking-wider mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-[#f5f5f5] border-0 px-4 py-3 text-[#333333] text-sm placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="company"
            className="block text-xs text-[#999999] uppercase tracking-wider mb-2"
          >
            Société
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full bg-[#f5f5f5] border-0 px-4 py-3 text-[#333333] text-sm placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
            placeholder="Votre entreprise"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs text-[#999999] uppercase tracking-wider mb-2"
          >
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full bg-[#f5f5f5] border-0 px-4 py-3 text-[#333333] text-sm placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
            placeholder="+212 6XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs text-[#999999] uppercase tracking-wider mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-[#f5f5f5] border-0 px-4 py-3 text-[#333333] text-sm placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all resize-none"
          placeholder="Décrivez votre projet ou votre besoin..."
        />
      </div>

      {status === 'success' && (
        <p className="text-green-600 text-sm">
          Message envoyé. Nous vous recontacterons sous 48h.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Erreur d&apos;envoi. Réessayez ou contactez-nous par téléphone.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-8 py-3 bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Envoi...' : 'Envoyer'}
      </button>
    </form>
  )
}
