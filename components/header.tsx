'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const SOCIAL_LINKS = {
  x: 'https://x.com/Ezzitrade',
  discord: 'https://discord.gg/S6QrCxDBg',
  telegram: 'https://t.me/Ezziworld',
}

export default function Header({ onOpenAccess }: { onOpenAccess: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-accent">◆</span> EZZI
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 items-center text-sm">
          <Link href="#system" className="hover:text-accent transition-colors">
            System
          </Link>
          <Link href="#world" className="hover:text-accent transition-colors">
            World
          </Link>
          <Link href="#drops" className="hover:text-accent transition-colors">
            Drops
          </Link>
          <Link href="#economy" className="hover:text-accent transition-colors">
            Economy
          </Link>
          <Link href="#proof" className="hover:text-accent transition-colors">
            Proof
          </Link>
        </nav>

        {/* Social + CTA */}
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <a
              href={SOCIAL_LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              aria-label="X"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.1-6.65L2.306 21.75H.996l7.736-8.835L0 2.25h6.782l4.603 6.08 5.863-6.08zM17.15 19.163h1.83L5.71 4.155H3.78l13.37 15.008z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              aria-label="Discord"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.397-.875-.61-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.08.08 0 00.087-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.294.075.075 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 01.079.009c.12.098.246.198.373.294a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.076.076 0 00-.041.107c.36.699.77 1.364 1.225 1.994a.076.076 0 00.087.028 19.86 19.86 0 006.002-3.03.077.077 0 00.032-.057c.5-4.565-.838-8.628-3.549-12.193a.06.06 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.156.964 2.156 2.157 0 1.19-.963 2.156-2.156 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.19-.964 2.156-2.157 2.156z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              aria-label="Telegram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.365-1.32.348-.434-.03-1.269-.196-1.889-.289-.764-.129-1.368-.081-1.310.244.030.243.273.715.575 1.104.303.389 1.577 1.6 1.823 1.842.246.243.495.375.513.375.018 0 .11-.011.202-.047.092-.036.233-.121.302-.2.069-.079 1.18-1.204 1.817-1.754.637-.55 1.263-1.1 1.559-1.357.635-.509 1.315-1.05 1.98-1.583z" />
              </svg>
            </a>
          </div>
          <button
            onClick={onOpenAccess}
            className="hidden sm:block px-6 py-2 rounded-full bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-all"
          >
            Request Access
          </button>
        </div>
      </div>
    </header>
  )
}
