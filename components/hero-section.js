"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Premium <span className="text-emerald-600">Interlocking Tiles</span> with Zigzag Patterns
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Transform your spaces with our high-quality interlocking tiles featuring unique zigzag patterns. Perfect
                for residential and commercial applications.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {["Durable & Long-lasting", "Easy Installation", "Weather Resistant", "Unique Zigzag Design"].map(
                (feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ),
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Products
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-gray-600">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/interlocking-zigzag-pattern-tiles-installation.jpg"
                alt="Interlocking Zigzag Tiles"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 md:p-6 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Quality Certified</div>
                  <div className="text-sm text-gray-600">ISO 9001:2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
