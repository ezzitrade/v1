'use client';

import React from "react"

import Image from 'next/image';
import { useState } from 'react';

const SOCIAL = {
  x: process.env.NEXT_PUBLIC_X_URL || "https://x.com/Ezzitrade",
  discord: process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/S6QrCxDBg",
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/Ezziworld",
};

// Premium fallback for missing images
const ImageWithFallback = ({ 
  src, 
  alt, 
  fill = false, 
  width = 400, 
  height = 300,
  priority = false 
}: { 
  src: string; 
  alt: string; 
  fill?: boolean; 
  width?: number; 
  height?: number;
  priority?: boolean;
}) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div 
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.15) 100%)',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          color: 'rgba(255,255,255,0.3)',
          position: fill ? 'absolute' : 'relative',
          inset: fill ? 0 : 'auto'
        }}
      >
        <div style={{ backgroundImage: 'linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px), linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', position: 'absolute', inset: 0, borderRadius: 12 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>{alt}</div>
      </div>
    );
  }

  if (fill) {
    return (
      <Image 
        src={src || "/placeholder.svg"} 
        alt={alt} 
        fill 
        style={{ objectFit: 'cover' }} 
        onError={() => setError(true)}
        priority={priority}
      />
    );
  }

  return (
    <Image 
      src={src || "/placeholder.svg"} 
      alt={alt} 
      width={width} 
      height={height} 
      style={{ width: '100%', height: 'auto' }} 
      onError={() => setError(true)}
      priority={priority}
    />
  );
};

// Access request modal
const AccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ wallet: '', email: '', role: 'Player', note: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.wallet && !formData.email) {
      setError('Please enter a wallet or email');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/access-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch {
      setError('Request failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, backdropFilter: 'blur(4px)' }}>
      <div className="glass hud" style={{ maxWidth: 450, width: '90%', padding: 28, borderRadius: 16 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Request Private Access</h3>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>Limited access windows. We'll review and respond within 48h.</p>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <p style={{ fontSize: 14, color: 'var(--accent-cyan)', fontWeight: 600 }}>✓ Request received</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 8 }}>If approved, you'll receive access instructions. No spam.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input 
              type="text" 
              placeholder="Wallet address (optional)" 
              value={formData.wallet} 
              onChange={(e) => setFormData({ ...formData, wallet: e.target.value })} 
            />
            <input 
              type="email" 
              placeholder="Email (optional)" 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            />
            <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
              <option value="Player">Player</option>
              <option value="Builder">Builder</option>
              <option value="Studio">Studio</option>
              <option value="Investor">Investor</option>
            </select>
            <textarea 
              placeholder="Note (optional)" 
              value={formData.note} 
              onChange={(e) => setFormData({ ...formData, note: e.target.value })} 
              rows={3} 
            />
            {error && <p style={{ fontSize: 12, color: 'var(--danger)' }}>{error}</p>}
            <button type="submit" className="btn primary" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        )}

        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', color: 'rgba(255,255,255,0.65)', cursor: 'pointer', fontSize: 20, padding: 0 }}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

// Nav component
const Nav = ({ onAccessClick }: { onAccessClick: () => void }) => (
  <nav className="nav">
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <Image src="/ezzi-logo.svg" alt="EZZI" width={28} height={28} priority />
        <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.02em' }}>EZZI</div>
      </a>
      <div className="nav-links" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <a href="#system" style={{ textDecoration: 'none', fontSize: 14 }}>System</a>
        <a href="#world" style={{ textDecoration: 'none', fontSize: 14 }}>World</a>
        <a href="#drops" style={{ textDecoration: 'none', fontSize: 14 }}>Drops</a>
        <a href="#economy" style={{ textDecoration: 'none', fontSize: 14 }}>Economy</a>
        <a href="#proof" style={{ textDecoration: 'none', fontSize: 14 }}>Proof</a>
      </div>
      <button onClick={onAccessClick} className="btn primary" style={{ fontSize: 12, padding: '10px 16px' }}>
        Access
      </button>
    </div>
  </nav>
);

// Hero section
const Hero = ({ onAccessClick }: { onAccessClick: () => void }) => (
  <section style={{ padding: '60px 0' }}>
    <div className="container">
      <div className="hero-grid">
        <div>
          <h1 className="h1" style={{ marginBottom: 16 }}>EZZI — A controlled Web3 world with a measurable economy.</h1>
          <p className="p" style={{ marginBottom: 24, maxWidth: 500 }}>
            Not a token-first launch. Not a hype funnel. A production-grade system where state is authoritative, access is gated, and value is transparent.
          </p>
          
          <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            <button onClick={onAccessClick} className="btn primary">Request Private Access</button>
            <a href="#system" className="btn ghost">View System Overview</a>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            <a href={SOCIAL.x} target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ fontSize: 12, padding: '8px 14px' }}>X</a>
            <a href={SOCIAL.discord} target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ fontSize: 12, padding: '8px 14px' }}>Discord</a>
            <a href={SOCIAL.telegram} target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ fontSize: 12, padding: '8px 14px' }}>Telegram</a>
          </div>

          <div className="proof-strip">
            <span className="badge">USDC/SOL only</span>
            <span className="badge">Private access windows</span>
            <span className="badge">Locked allocations</span>
            <span className="badge">Weekly transparency</span>
          </div>
        </div>

        <div className="glass hud poster">
          <ImageWithFallback src="/maps/map-hero.webp" alt="EZZI World" fill priority />
        </div>
      </div>
    </div>
  </section>
);

// System section
const System = ({ onAccessClick }: { onAccessClick: () => void }) => (
  <section id="system" className="section">
    <div className="container">
      <div className="section-head">
        <div>
          <h2 className="h2">Most Web3 worlds don't fail at mint. They fail after.</h2>
          <p className="p" style={{ marginTop: 12, maxWidth: 500 }}>EZZI is built to operate. Our backend is authoritative, our progression logic is deterministic, and recovery is always available.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginBottom: 32 }}>
        <div className="glass hud card"><strong>Backend API</strong><p className="card-sub">Authoritative world state</p></div>
        <div className="glass hud card"><strong>Wallet Identity</strong><p className="card-sub">Profiles & onchain account</p></div>
        <div className="glass hud card"><strong>Zones + Progression</strong><p className="card-sub">Inventory logic & gates</p></div>
        <div className="glass hud card"><strong>Capsules & Drops</strong><p className="card-sub">Character mint mechanics</p></div>
        <div className="glass hud card"><strong>Marketplace Engine</strong><p className="card-sub">USDC/SOL trading layer</p></div>
        <div className="glass hud card"><strong>Admin Control</strong><p className="card-sub">Recovery & audit trail</p></div>
      </div>

      <button onClick={onAccessClick} className="btn primary">Learn More</button>
    </div>
  </section>
);

// World section
const World = () => (
  <section id="world" className="section">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="kicker">Zones</div>
          <h2 className="h2">Five zones. One persistent state.</h2>
          <p className="p" style={{ marginTop: 12, maxWidth: 500 }}>Zones are not just visuals — they represent server-controlled state. Unlocks are deterministic. Progression is recoverable.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {[
          { name: 'Inferno Isle', desc: 'Escalation & pressure. High-intensity progression.', img: '/maps/zones/inferno.webp' },
          { name: 'Crystal Canyon', desc: 'Precision & rarity. Controlled outcomes.', img: '/maps/zones/crystal.webp' },
          { name: 'Mystic Mountains', desc: 'Progression gates. Tiered access.', img: '/maps/zones/mystic.webp' },
          { name: 'Shadow Sanctum', desc: 'Restricted states. Risk routes.', img: '/maps/zones/shadow.webp' },
          { name: 'Neon Nexus', desc: 'Trade core. Operator-grade marketplace layer.', img: '/maps/zones/neon.webp' },
        ].map((zone) => (
          <div key={zone.name} className="glass hud card" style={{ overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '100%', height: 160 }}>
              <ImageWithFallback src={zone.img || "/placeholder.svg"} alt={zone.name} fill />
            </div>
            <div style={{ padding: 16 }}>
              <div className="card-title">{zone.name}</div>
              <p className="card-sub">{zone.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Drops section
const Drops = () => (
  <section id="drops" className="section">
    <div className="container">
      <div className="section-head">
        <div>
          <div className="kicker">Genesis Drops</div>
          <h2 className="h2">Characters & Capsules</h2>
          <p className="p" style={{ marginTop: 12, maxWidth: 500 }}>Each purchase can unlock a locked EZZI allocation (system-defined).</p>
        </div>
      </div>

      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Genesis Characters</h3>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: 40 }}>
        {[
          { name: 'Ember Vanguard', price: '$23', img: '/characters/class-1.webp' },
          { name: 'Crystal Warden', price: '$31', img: '/characters/class-2.webp' },
          { name: 'Storm Architect', price: '$39', img: '/characters/class-3.webp' },
          { name: 'Void Operative', price: '$47', img: '/characters/class-4.webp' },
        ].map((char) => (
          <div key={char.name} className="glass hud card" style={{ overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '100%', height: 240 }}>
              <ImageWithFallback src={char.img || "/placeholder.svg"} alt={char.name} fill />
            </div>
            <div style={{ padding: 16 }}>
              <div className="card-title">{char.name}</div>
              <div className="price">{char.price}</div>
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Capsules</h3>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {[
          { name: 'Starter', price: '$23' },
          { name: 'Core', price: '$29' },
          { name: 'Advanced', price: '$35' },
          { name: 'Elite', price: '$41' },
          { name: 'Mythic', price: '$47' },
        ].map((cap) => (
          <div key={cap.name} className="glass hud card" style={{ textAlign: 'center' }}>
            <div className="card-title">{cap.name}</div>
            <div className="price">{cap.price}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Economy section
const Economy = () => (
  <section id="economy" className="section">
    <div className="container">
      <div className="section-head">
        <div>
          <h2 className="h2">EZZI Coin is not sold. It's unlocked by usage.</h2>
          <p className="p" style={{ marginTop: 12, maxWidth: 500 }}>Reference rate: 0.023 USDC per EZZI (allocation calculation)</p>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <div className="glass hud card">
          <strong>Locked Allocations</strong>
          <p className="card-sub">Time-released EZZI based on activity, purchases, and progression milestones.</p>
        </div>
        <div className="glass hud card">
          <strong>Bond Utility</strong>
          <p className="card-sub">Advanced actions and premium system features require spending earned EZZI.</p>
        </div>
        <div className="glass hud card">
          <strong>Treasury Transparency</strong>
          <p className="card-sub">Published policy and signed receipts. Every transaction auditable.</p>
        </div>
      </div>
    </div>
  </section>
);

// Proof section
const Proof = () => (
  <section id="proof" className="section">
    <div className="container">
      <div className="section-head">
        <div>
          <h2 className="h2">Trust is engineered. Not requested.</h2>
          <p className="p" style={{ marginTop: 12, maxWidth: 500 }}>If something can't be measured, it can't be trusted.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <div className="glass hud card">
          <strong>Treasury Wallet</strong>
          <p className="card-sub">Published before the first drop (USDC/SOL).</p>
        </div>
        <div className="glass hud card">
          <strong>Policy</strong>
          <p className="card-sub">Versioned splits, lock schedule, redemption cadence.</p>
        </div>
        <div className="glass hud card">
          <strong>Weekly Report</strong>
          <p className="card-sub">Every Friday — sales, allocations, treasury movement.</p>
        </div>
        <div className="glass hud card">
          <strong>System Status</strong>
          <p className="card-sub">Feature flags, uptime snapshots, release notes.</p>
        </div>
      </div>
    </div>
  </section>
);

// Access section
const Access = ({ onOpen }: { onOpen: () => void }) => (
  <section id="access" className="section">
    <div className="container">
      <div className="section-head">
        <div>
          <h2 className="h2">Request private access</h2>
          <p className="p" style={{ marginTop: 12, maxWidth: 500 }}>Access is limited and staged. If approved, you'll receive an access window and the next drop schedule.</p>
        </div>
      </div>

      <button onClick={onOpen} className="btn primary">Start Access Request</button>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="footer">
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
      <div>© {new Date().getFullYear()} EZZI.trade</div>
      <div>Considering strategic acquisition.</div>
    </div>
  </footer>
);

// Mobile sticky CTA
const MobileStickyCTA = ({ onAccessClick }: { onAccessClick: () => void }) => (
  <div className="bottomBar">
    <div className="container">
      <div className="bottomInner">
        <a href={SOCIAL.discord} target="_blank" rel="noopener noreferrer" className="btn ghost" style={{ flex: 1 }}>Discord</a>
        <button onClick={onAccessClick} className="btn primary" style={{ flex: 1 }}>Access</button>
      </div>
    </div>
  </div>
);

// Main Landing component
export default function Landing() {
  const [accessOpen, setAccessOpen] = useState(false);

  return (
    <div className="bgfx" style={{ color: 'rgba(255,255,255,0.92)' }}>
      <Nav onAccessClick={() => setAccessOpen(true)} />
      <Hero onAccessClick={() => setAccessOpen(true)} />
      <System onAccessClick={() => setAccessOpen(true)} />
      <World />
      <Drops />
      <Economy />
      <Proof />
      <Access onOpen={() => setAccessOpen(true)} />
      <Footer />
      <MobileStickyCTA onAccessClick={() => setAccessOpen(true)} />
      <AccessModal isOpen={accessOpen} onClose={() => setAccessOpen(false)} />
    </div>
  );
}
