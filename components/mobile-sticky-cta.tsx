'use client'

import { useEffect, useState } from 'react'

export default function MobileStickyCTA({ onOpenAccess }: { onOpenAccess: () => void }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-gradient-to-t from-background via-background to-transparent pt-4 pb-4 px-4 z-40 border-t border-border/20">
      <div className="flex gap-3">
        <button
          onClick={onOpenAccess}
          className="flex-1 px-4 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-all text-sm"
        >
          Request Access
        </button>
        <a
          href="https://discord.gg/S6QrCxDBg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-3 rounded-full border border-border/50 text-foreground font-semibold hover:border-accent hover:text-accent transition-all text-sm"
        >
          Discord
        </a>
      </div>
    </div>
  )
}
