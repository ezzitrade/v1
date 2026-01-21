export default function ProofStrip() {
  const chips = [
    'USDC/SOL only',
    'Private access windows',
    'Locked allocations',
    'Weekly transparency',
  ]

  return (
    <div className="relative py-8 border-y border-border/20 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {chips.map((chip, i) => (
            <div
              key={i}
              className="inline-block px-4 py-2 rounded-full border border-border/30 text-sm font-medium text-foreground/80 bg-background/20 hover:border-accent/50 hover:text-accent transition-all"
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
