import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Vivek Trading</h3>
            <p className="text-background/80 text-pretty">
              Leading manufacturer of premium interlocking tiles with unique zigzag patterns. Quality, innovation, and
              customer satisfaction are our priorities.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/products" className="block hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/about" className="block hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/gallery" className="block hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="block hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Products</h4>
            <div className="space-y-2">
              <div className="hover:text-primary transition-colors cursor-pointer">Classic Zigzag Tiles</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Premium Zigzag Tiles</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Designer Zigzag Tiles</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Custom Solutions</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">123 Industrial Area, Gurgaon</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">90015 25353</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@vivektrading.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Vivek Trading. All rights reserved. | Designed with care for quality flooring solutions.
          </p>
        </div>
      </div>
    </footer>
  )
}
