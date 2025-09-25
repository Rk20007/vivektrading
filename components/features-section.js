"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Wrench, Droplets, Palette, Award, Clock, Truck, HeadphonesIcon } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Durable & Strong",
      description: "Made with high-quality materials that withstand heavy traffic and weather conditions for years.",
    },
    {
      icon: Wrench,
      title: "Easy Installation",
      description: "Interlocking design allows for quick and hassle-free installation without special tools.",
    },
    {
      icon: Droplets,
      title: "Water Resistant",
      description: "Superior water resistance prevents damage from rain, spills, and moisture.",
    },
    {
      icon: Palette,
      title: "Unique Zigzag Design",
      description: "Distinctive zigzag patterns that add aesthetic appeal to any space.",
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "All products are quality tested and certified to meet international standards.",
    },
    {
      icon: Clock,
      title: "Long Lasting",
      description: "Engineered to maintain their appearance and functionality for decades.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick delivery across India with proper packaging to ensure safe transport.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries and assistance.",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-emerald-600">Vivek Trading</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide superior quality interlocking tiles with exceptional features that make us the preferred choice
            for thousands of customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-emerald-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Get in touch with our experts today for a free consultation and quote. We'll help you choose the perfect
              tiles for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Now: +91 98765 43210
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
