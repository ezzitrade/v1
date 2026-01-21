'use client';

export default function System({ onOpenAccess }: { onOpenAccess: () => void }) {
  const features = [
    'Backend API (authoritative world state)',
    'Wallet identity & profiles',
    'Zones + progression + inventory logic',
    'Capsules + character drops logic',
    'Marketplace engine (USDC/SOL)',
    'Admin control layer (recovery + audit trail)',
  ]

  return (
    <div className="relative py-24 bg-background">
      {/* Accent Glow */}
      <div className="absolute left-20 top-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight text-balance">
              Most Web3 worlds don't fail at mint. They fail after.
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Backend-authoritative state. On-chain truth vs operational truth vs human control. That's the architecture that survives.
            </p>
          </div>

          {/* Right Checklist */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-lg border border-border/20 bg-card/20 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-accent flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenAccess}
            className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-all hover:scale-105"
          >
            Request Private Access
          </button>
        </div>
      </div>
    </div>
  )
}
