import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://ezzi.trade";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EZZI.trade — A Controlled Web3 World",
  description:
    "A controlled Web3 world with an operator-grade backend and a measurable economy. Private access. USDC/SOL.",
  generator: "v0.app",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "EZZI.trade — A Controlled Web3 World",
    description:
      "A controlled Web3 world with an operator-grade backend and a measurable economy. Private access. USDC/SOL.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: "/og/ezzi-og.png",
        width: 1200,
        height: 630,
        alt: "EZZI.trade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EZZI.trade — A Controlled Web3 World",
    description:
      "A controlled Web3 world with an operator-grade backend and a measurable economy. Private access. USDC/SOL.",
    images: ["/og/ezzi-og.png"],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
