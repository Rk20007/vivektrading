"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="text-2xl font-bold text-emerald-400 mb-4 block">
                Vivek Trading
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading manufacturer and supplier of premium quality interlocking tiles with unique zigzag patterns. We
                have been serving customers across India for over 15 years with commitment to quality and excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <span>90015 25353</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span>info@vivektrading.in</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-400 mt-1" />
                  <span>
                    Papari Rd, Tapukara, Rajasthan 301018
                    <br />
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-300">Tile Manufacturing</span>
                </li>
                <li>
                  <span className="text-gray-300">Custom Designs</span>
                </li>
                <li>
                  <span className="text-gray-300">Installation Support</span>
                </li>
                <li>
                  <span className="text-gray-300">Quality Testing</span>
                </li>
                <li>
                  <span className="text-gray-300">After Sales Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© 2024 Vivek Trading. All rights reserved.</div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="bg-emerald-600 hover:bg-emerald-700 p-2 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
