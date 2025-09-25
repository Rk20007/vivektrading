"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@vivektrading.com</span>
            </div>
          </div>
          <div className="text-primary font-medium">Premium Quality Interlocking Tiles</div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Vivek Trading
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/gallery" className="hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button>Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/gallery" className="hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <Button className="w-fit">Get Quote</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
