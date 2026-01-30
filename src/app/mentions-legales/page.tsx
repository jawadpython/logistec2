import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
}

export default function MentionsLegalesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl text-white mb-8">
          Mentions légales
        </h1>
        <div className="text-white/80 space-y-6 prose prose-invert max-w-none">
          <p>
            <strong>Éditeur du site :</strong><br />
            Manutech<br />
            123 Avenue de l&apos;Industrie<br />
            75000 Paris
          </p>
          <p>
            <strong>Hébergement :</strong><br />
            À compléter selon l&apos;hébergeur.
          </p>
          <p>
            <strong>Directeur de la publication :</strong><br />
            À compléter.
          </p>
          <p>
            Les informations contenues sur ce site sont fournies à titre indicatif.
            Manutech s&apos;efforce de les maintenir à jour mais ne peut garantir
            leur exactitude.
          </p>
        </div>
      </div>
    </div>
  )
}
