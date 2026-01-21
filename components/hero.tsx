'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const SOCIAL_LINKS = {
  x: 'https://x.com/Ezzitrade',
  discord: 'https://discord.gg/S6QrCxDBg',
  telegram: 'https://t.me/Ezziworld',
}

export default function Hero({ onOpenAccess }: { onOpenAccess: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      containerRef.current.style.setProperty('--mouse-x', `${x}px`)
      containerRef.current.style.setProperty('--mouse-y', `${y}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-gradient-to-b from-background via-background to-background/50"
    >
      {/* HUD Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1000" height="1000" fill="url(#grid)" />
        </svg>
      </div>

      {/* Accent Glow - Top Right */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-20 w-60 h-60 bg-secondary/15 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center space-y-8 mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur">
            <span className="text-sm font-medium text-primary tracking-wide">• CONTROLLED ACCESS •</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            EZZI — A controlled Web3 world with a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              measurable economy.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Not a token-first launch. Not a hype funnel. A production-grade system where state is authoritative, access is gated, and value is transparent.
          </p>

          {/* Feature Bullets */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
            <div className="p-4 rounded-lg border border-border/20 bg-card/20 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <p className="text-sm text-accent font-medium">Crypto-only</p>
              <p className="text-xs text-muted-foreground mt-1">USDC / SOL</p>
            </div>
            <div className="p-4 rounded-lg border border-border/20 bg-card/20 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <p className="text-sm text-accent font-medium">Private access</p>
              <p className="text-xs text-muted-foreground mt-1">Staged drops</p>
            </div>
            <div className="p-4 rounded-lg border border-border/20 bg-card/20 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <p className="text-sm text-accent font-medium">Treasury-backed</p>
              <p className="text-xs text-muted-foreground mt-1">Published policy & receipts</p>
            </div>
            <div className="p-4 rounded-lg border border-border/20 bg-card/20 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <p className="text-sm text-accent font-medium">Built to operate</p>
              <p className="text-xs text-muted-foreground mt-1">Recovery + integrity</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            onClick={onOpenAccess}
            className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-all hover:scale-105"
          >
            Request Private Access
          </button>
          <Link
            href="#system"
            className="px-8 py-3 rounded-full border border-primary/50 text-foreground font-semibold hover:border-accent hover:bg-accent/10 transition-all"
          >
            View System Overview
          </Link>
        </div>

        {/* Microline */}
        <div className="text-center text-xs text-muted-foreground tracking-widest">
          NO PUBLIC PRESALE • NO PROMISES • NO INFLUENCER DEPENDENCE
        </div>

        {/* Social Links Hero */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href={SOCIAL_LINKS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-border/30 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/10 transition-all"
            aria-label="X"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.1-6.65L2.306 21.75H.996l7.736-8.835L0 2.25h6.782l4.603 6.08 5.863-6.08zM17.15 19.163h1.83L5.71 4.155H3.78l13.37 15.008z" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-border/30 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/10 transition-all"
            aria-label="Discord"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.397-.875-.61-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.08.08 0 00.087-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.294.075.075 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 01.079.009c.12.098.246.198.373.294a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.076.076 0 00-.041.107c.36.699.77 1.364 1.225 1.994a.076.076 0 00.087.028 19.86 19.86 0 006.002-3.03.077.077 0 00.032-.057c.5-4.565-.838-8.628-3.549-12.193a.06.06 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.156.964 2.156 2.157 0 1.19-.963 2.156-2.156 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.19-.964 2.156-2.157 2.156z" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-border/30 flex items-center justify-center hover:border-accent hover:text-accent hover:bg-accent/10 transition-all"
            aria-label="Telegram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.365-1.32.348-.434-.03-1.269-.196-1.889-.289-.764-.129-1.368-.081-1.31.244.03.243.273.715.575 1.104.303.389 1.577 1.6 1.823 1.842.246.243.495.375.513.375.018 0 .11-.011.202-.047.092-.036.233-.121.302-.2.069-.079 1.18-1.204 1.817-1.754.637-.55 1.263-1.1 1.559-1.357.635-.509 1.315-1.05 1.98-1.583z" />
            </svg>
          </a>
        </div>
      </div>

      {/* HUD Corner Elements */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40" />
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/40" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20" />
    </div>
  )
}
