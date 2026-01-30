import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
}

export default function ConfidentialitePage() {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl text-white mb-8">
          Politique de confidentialité
        </h1>
        <div className="text-white/80 space-y-6 prose prose-invert max-w-none">
          <p>
            Manutech s&apos;engage à protéger les données personnelles des
            utilisateurs de ce site. Les informations collectées via le formulaire
            de contact sont utilisées uniquement pour répondre à vos demandes.
          </p>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
            de rectification et de suppression de vos données. Contactez-nous
            pour exercer ces droits.
          </p>
          <p>
            Aucune donnée personnelle n&apos;est cédée à des tiers.
          </p>
        </div>
      </div>
    </div>
  )
}
