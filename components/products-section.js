"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Classic Zigzag Tiles",
      description: "Traditional zigzag pattern perfect for walkways and patios",
      image: "/classic-zigzag-interlocking-tiles.jpg",
      price: "₹45/sq ft",
      rating: 4.8,
      features: ["Water Resistant", "Anti-Slip", "Easy Maintenance"],
    },
    {
      id: 2,
      name: "Premium Zigzag Tiles",
      description: "High-end zigzag tiles with enhanced durability and finish",
      image: "/premium-zigzag-interlocking-tiles.jpg",
      price: "₹65/sq ft",
      rating: 4.9,
      features: ["Weather Proof", "Stain Resistant", "10 Year Warranty"],
    },
    {
      id: 3,
      name: "Designer Zigzag Tiles",
      description: "Artistic zigzag patterns for modern architectural designs",
      image: "/designer-zigzag-interlocking-tiles.jpg",
      price: "₹85/sq ft",
      rating: 5.0,
      features: ["Custom Colors", "Unique Patterns", "Premium Finish"],
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Product Range</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of interlocking tiles with unique zigzag patterns, designed to meet
            all your flooring needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-emerald-600">
                  {product.price}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
