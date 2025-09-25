import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata = {
  title: "Vivek Trading - Premium Interlocking Tiles | Zigzag Pattern Specialists",
  description:
    "Leading manufacturer of high-quality interlocking tiles with unique zigzag patterns. Perfect for residential and commercial flooring solutions.",
  generator: "v0.app",
  keywords: "interlocking tiles, zigzag tiles, flooring, construction materials, Vivek Trading",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
