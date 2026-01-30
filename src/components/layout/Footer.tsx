import Link from 'next/link'

const links = {
  entreprise: [
    { href: '/produits', label: 'Nos solutions' },
    { href: '/blog', label: 'Actualités' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/mentions-legales', label: 'Mentions légales' },
    { href: '/confidentialite', label: 'Confidentialité' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-display text-3xl tracking-wider text-white inline-block mb-6"
            >
              MANUTECH
            </Link>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Expert en intralogistique et manutention industrielle.
              Accompagnement sur-mesure pour vos flux de production.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {links.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider text-white/40 uppercase mb-6">
              Légal
            </h4>
            <ul className="space-y-4">
              {links.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Manutech. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Intralogistique · Manutention · Industrie
          </p>
        </div>
      </div>
    </footer>
  )
}
