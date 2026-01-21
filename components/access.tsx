'use client'

import { useState } from 'react'
import AccessForm from './access-form'

export default function Access({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
      />

      {/* Modal */}
      <div className="relative bg-card border border-border/30 rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border/30 flex items-center justify-center hover:border-accent hover:text-accent transition-all z-10"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Request Private Access</h2>
            <p className="text-muted-foreground">
              Access is limited and staged. If approved, you'll receive an access window and the next drop schedule.
            </p>
          </div>

          <AccessForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  )
}
