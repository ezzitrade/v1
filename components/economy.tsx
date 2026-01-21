export default function Economy() {
  const points = [
    'Locked allocations (time-released)',
    'Bond utility (advanced actions)',
    'Treasury transparency (policy + receipts)',
  ]

  return (
    <div className="relative py-24 bg-gradient-to-b from-background/50 to-background">
      {/* Accent Glow */}
      <div className="absolute right-20 top-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              EZZI Coin is not sold. It's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                unlocked by usage.
              </span>
            </h2>

            <div className="space-y-4">
              {points.map((point, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-secondary flex items-center justify-center mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  </div>
                  <span className="text-foreground/90">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Reference Rate */}
          <div className="space-y-8">
            {/* Reference Rate Card */}
            <div className="p-8 rounded-lg border border-border/30 bg-gradient-to-b from-card/40 to-card/20 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground mb-4 tracking-wide">REFERENCE RATE</p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-secondary">0.023</span>
                <span className="text-lg text-muted-foreground">USDC per EZZI</span>
              </div>
              <p className="text-xs text-muted-foreground mt-4">(Allocation calculation basis)</p>
            </div>

            {/* Disclaimer */}
            <div className="p-6 rounded-lg border border-destructive/20 bg-destructive/5 backdrop-blur-sm">
              <p className="text-sm text-foreground/80">
                <span className="font-semibold text-destructive">Disclaimer:</span> Nothing here is financial advice. Crypto assets involve risk. This is a gated system for approved participants only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
