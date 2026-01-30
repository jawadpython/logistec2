const items = [
  {
    value: '25+',
    label: 'Années d\'expertise',
  },
  {
    value: '500+',
    label: 'Projets réalisés',
  },
  {
    value: '100%',
    label: 'Accompagnement',
  },
]

export function CredibilityBand() {
  return (
    <section className="py-16 md:py-24 bg-[#0f0f0f] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="text-center md:border-r md:border-white/5 last:border-r-0"
            >
              <p className="font-display text-5xl md:text-6xl text-[var(--accent)] mb-2">
                {item.value}
              </p>
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
