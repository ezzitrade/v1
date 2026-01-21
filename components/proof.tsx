export default function Proof() {
  const cards = [
    {
      title: 'Treasury Wallet',
      description: 'Published before the first drop (USDC/SOL).',
      icon: '💰',
    },
    {
      title: 'Policy',
      description: 'Versioned splits, lock schedule, redemption cadence.',
      icon: '📋',
    },
    {
      title: 'Weekly Report',
      description: 'Every Friday — sales, allocations, treasury movement.',
      icon: '📊',
    },
    {
      title: 'System Status',
      description: 'Feature flags, uptime snapshots, release notes.',
      icon: '🔧',
    },
  ]

  return (
    <div className="relative py-24 bg-background">
      {/* Accent Glows */}
      <div className="absolute left-0 top-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-15" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Trust is engineered. Not requested.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If something can't be measured, it can't be trusted.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group p-8 rounded-lg border border-border/20 bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{card.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider with Accent */}
        <div className="relative py-12">
          <div className="flex items-center gap-4 justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
            <span className="text-sm text-muted-foreground tracking-widest px-4">
              ◆ TRANSPARENCY ◆
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
          </div>
        </div>

        {/* Status Monitor */}
        <div className="p-8 rounded-lg border border-border/30 bg-gradient-to-b from-card/30 to-card/10 backdrop-blur-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Live Dashboard</span>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-500">Operational</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border/20">
              <span className="text-sm text-muted-foreground">All metrics refreshed every Friday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
