import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez-nous pour une étude personnalisée ou un devis. Réponse sous 48h.',
}

export default function ContactPage() {
  return (
    <div>
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm mb-4">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white tracking-wide mb-6">
            Parlons de votre projet
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Devis personnalisé. Accompagnement technique. Réponse sous 48h.
          </p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                    Adresse
                  </h3>
                  <p className="text-white/80">
                    123 Avenue de l&apos;Industrie<br />
                    75000 Paris
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                    Téléphone
                  </h3>
                  <a
                    href="tel:+33123456789"
                    className="text-white/80 hover:text-[var(--accent)] transition-colors"
                  >
                    01 23 45 67 89
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-4">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@manutech.fr"
                    className="text-white/80 hover:text-[var(--accent)] transition-colors"
                  >
                    contact@manutech.fr
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
