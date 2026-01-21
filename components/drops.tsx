export default function Drops() {
  const characters = [
    { name: 'Genesis Character Tier 1', price: '$23' },
    { name: 'Genesis Character Tier 2', price: '$31' },
    { name: 'Genesis Character Tier 3', price: '$39' },
    { name: 'Genesis Character Tier 4', price: '$47' },
  ]

  const capsules = [
    { name: 'Capsule Tier Alpha', price: '$23' },
    { name: 'Capsule Tier Beta', price: '$29' },
    { name: 'Capsule Tier Gamma', price: '$35' },
    { name: 'Capsule Tier Delta', price: '$41' },
    { name: 'Capsule Tier Omega', price: '$47' },
  ]

  return (
    <div className="relative py-24 bg-background">
      {/* Accent Glow - Left */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-15 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Drops</h2>
          <p className="text-muted-foreground">
            Each purchase can unlock a locked EZZI allocation (system-defined).
          </p>
        </div>

        {/* Genesis Characters */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-accent">Genesis Characters</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {characters.map((char, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border/20 bg-card/20 backdrop-blur-sm hover:border-accent/50 transition-all group cursor-pointer"
              >
                <p className="text-foreground font-semibold mb-2 group-hover:text-accent transition-colors">
                  {char.name}
                </p>
                <p className="text-2xl font-bold text-accent">{char.price}</p>
                <p className="text-xs text-muted-foreground mt-3">USDC / SOL</p>
              </div>
            ))}
          </div>
        </div>

        {/* Capsules */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-accent">Capsules</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {capsules.map((capsule, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border/20 bg-card/20 backdrop-blur-sm hover:border-secondary/50 transition-all group cursor-pointer"
              >
                <p className="text-foreground font-semibold mb-2 group-hover:text-secondary transition-colors">
                  {capsule.name}
                </p>
                <p className="text-2xl font-bold text-secondary">{capsule.price}</p>
                <p className="text-xs text-muted-foreground mt-3">USDC / SOL</p>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-16 p-6 rounded-lg border border-border/30 bg-card/20 backdrop-blur-sm text-center">
          <p className="text-sm text-muted-foreground">
            {' '}
            Pricing in USDC/SOL. Each purchase contributes to the treasury and may unlock allocated EZZI based on system rules.
          </p>
        </div>
      </div>
    </div>
  )
}
