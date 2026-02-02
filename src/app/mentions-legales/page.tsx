import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen mt-[72px] md:mt-[96px]">
      <section className="py-12 md:py-16 bg-[#4a4a4a]">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Mentions légales
          </h1>
          <div className="w-16 h-1 bg-[var(--accent)]"></div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 border-t-4 border-[var(--accent)]">
            <div className="text-[#666666] space-y-6">
              <div>
                <h2 className="font-bold text-[#333333] mb-2">Éditeur du site</h2>
                <p>
                  MANUAF<br />
                  26, Avenue Mers Sultan Appt N°3 Etage 1<br />
                  Casablanca, Maroc
                </p>
              </div>
              <div>
                <h2 className="font-bold text-[#333333] mb-2">Contact</h2>
                <p>
                  Téléphone : +212 670 085 699<br />
                  Email : Contact@manuaf.com
                </p>
              </div>
              <div>
                <h2 className="font-bold text-[#333333] mb-2">Hébergement</h2>
                <p>À compléter selon l&apos;hébergeur.</p>
              </div>
              <div>
                <h2 className="font-bold text-[#333333] mb-2">Directeur de la publication</h2>
                <p>À compléter.</p>
              </div>
              <p>
                Les informations contenues sur ce site sont fournies à titre indicatif.
                MANUAF s&apos;efforce de les maintenir à jour mais ne peut garantir
                leur exactitude.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
