'use client'

import React from "react"

import { useState } from 'react'

export default function AccessForm({ onSuccess }: { onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    wallet: '',
    email: '',
    role: 'Player',
    note: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/access-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          wallet: formData.wallet || undefined,
          email: formData.email || undefined,
          role: formData.role,
          note: formData.note || undefined,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          onSuccess()
        }, 2000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 mx-auto mb-4 flex items-center justify-center">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Request Received</h3>
        <p className="text-sm text-muted-foreground">
          If approved, you'll receive access instructions. No spam.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Wallet */}
      <div>
        <label className="block text-sm font-medium mb-2">Wallet Address (optional)</label>
        <input
          type="text"
          name="wallet"
          value={formData.wallet}
          onChange={handleChange}
          placeholder="0x..."
          className="w-full px-4 py-2 rounded-lg border border-border/30 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:bg-background transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2">Email (optional)</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-4 py-2 rounded-lg border border-border/30 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:bg-background transition-all"
        />
      </div>

      {/* Role Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-2">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-border/30 bg-background/50 text-foreground focus:outline-none focus:border-accent/50 focus:bg-background transition-all"
        >
          <option value="Player">Player</option>
          <option value="Builder">Builder</option>
          <option value="Studio">Studio</option>
          <option value="Investor">Investor</option>
        </select>
      </div>

      {/* Note */}
      <div>
        <label className="block text-sm font-medium mb-2">Additional Note (optional)</label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="Tell us about yourself..."
          rows={3}
          className="w-full px-4 py-2 rounded-lg border border-border/30 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:bg-background transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 disabled:opacity-50 transition-all hover:scale-105 disabled:scale-100"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. Your data will not be shared.
      </p>
    </form>
  )
}
