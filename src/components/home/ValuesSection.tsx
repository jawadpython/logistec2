const values = [
  {
    title: 'Expertise',
    description: 'Équipe technique qualifiée et expérimentée.',
  },
  {
    title: 'Fiabilité',
    description: 'Équipements robustes, maintenance préventive.',
  },
  {
    title: 'Accompagnement',
    description: 'De l\'étude à la mise en service.',
  },
  {
    title: 'Performance',
    description: 'Solutions optimisées pour vos flux.',
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[var(--accent)] font-semibold tracking-widest uppercase text-sm mb-4">
            Nos engagements
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-wide">
            Des valeurs industrielles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="border border-white/5 p-8 bg-[#141414] transition-colors duration-300 hover:border-white/10"
            >
              <div className="w-12 h-12 border border-[var(--accent)] flex items-center justify-center mb-6">
                <span className="font-display text-xl text-[var(--accent)]">
                  {value.title[0]}
                </span>
              </div>
              <h3 className="font-display text-2xl text-white mb-3">
                {value.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
