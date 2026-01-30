'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white/70 mb-2"
          >
            Nom *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--accent)] transition-colors"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white/70 mb-2"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--accent)] transition-colors"
            placeholder="votre@email.fr"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-white/70 mb-2"
          >
            Société
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--accent)] transition-colors"
            placeholder="Votre entreprise"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white/70 mb-2"
          >
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--accent)] transition-colors"
            placeholder="01 23 45 67 89"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white/70 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
          placeholder="Décrivez votre projet ou votre besoin..."
        />
      </div>

      {status === 'success' && (
        <p className="text-green-400 text-sm">
          Message envoyé. Nous vous recontacterons sous 48h.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm">
          Erreur d&apos;envoi. Réessayez ou contactez-nous par téléphone.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="disabled:opacity-50"
      >
        {status === 'loading' ? 'Envoi...' : 'Envoyer'}
      </Button>
    </form>
  )
}
