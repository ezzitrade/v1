import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative border-t border-border/20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold tracking-tight mb-4">
              <span className="text-accent">◆</span> EZZI.trade
            </div>
            <p className="text-sm text-muted-foreground">
              A controlled Web3 world with an operator-grade backend and a measurable economy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#system" className="hover:text-accent transition-colors">
                  System
                </Link>
              </li>
              <li>
                <Link href="#world" className="hover:text-accent transition-colors">
                  World
                </Link>
              </li>
              <li>
                <Link href="#drops" className="hover:text-accent transition-colors">
                  Drops
                </Link>
              </li>
              <li>
                <Link href="#economy" className="hover:text-accent transition-colors">
                  Economy
                </Link>
              </li>
              <li>
                <Link href="#proof" className="hover:text-accent transition-colors">
                  Proof
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Not investment advice. Crypto assets involve risk. Access is permissioned. Considering strategic acquisition.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© EZZI.trade • Considering strategic acquisition.</div>
          <div className="flex gap-6">
            <a href="https://x.com/Ezzitrade" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              X
            </a>
            <a href="https://discord.gg/S6QrCxDBg" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Discord
            </a>
            <a href="https://t.me/Ezziworld" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
