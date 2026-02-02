import Link from 'next/link'
import Image from 'next/image'

export function CredibilityBand() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
                alt="Intralogistique MANUAF - Chariot élévateur en entrepôt"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent decoration - hidden on mobile */}
            <div className="absolute -bottom-4 -right-4 w-24 md:w-32 h-24 md:h-32 bg-[var(--accent)] -z-10 hidden sm:block"></div>
            <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 border-4 border-[var(--accent)] -z-10 hidden sm:block"></div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="text-[var(--accent)] font-semibold text-sm uppercase tracking-wider mb-2 md:mb-3">
              Qui sommes-nous ?
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333] mb-3 md:mb-4 leading-tight">
              L&apos;intralogistique est notre passion
            </h2>
            <div className="w-16 md:w-20 h-1 bg-[var(--accent)] mb-4 md:mb-6"></div>
            
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-3 md:mb-4">
              Depuis notre création, <strong className="text-[#333333]">MANUAF</strong> a acquis une réelle expertise 
              tant dans le secteur privé que public. Notre stratégie est d&apos;offrir à nos clients des solutions 
              full-line ou clés en main incorporant le conseil, les équipements ainsi que le support après-vente.
            </p>
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
              Nous offrons un service complet : vente d&apos;équipement, location, réparation, maintenance et formation, 
              avec de nombreuses solutions pour accompagner nos clients dans leur croissance.
            </p>
            
            {/* Stats - responsive grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 md:mb-8">
              <div className="text-center p-3 sm:p-4 bg-white">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent)]">10+</p>
                <p className="text-[10px] sm:text-xs text-[#666666] uppercase tracking-wider">Années d&apos;exp.</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent)]">500+</p>
                <p className="text-[10px] sm:text-xs text-[#666666] uppercase tracking-wider">Clients</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent)]">24/7</p>
                <p className="text-[10px] sm:text-xs text-[#666666] uppercase tracking-wider">Support</p>
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 py-3 bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
