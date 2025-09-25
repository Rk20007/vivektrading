import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle, Droplets, Shield, Wrench } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Classic Zigzag Tiles",
      description: "Traditional zigzag pattern perfect for walkways, patios, and residential areas",
      image: "/classic-zigzag-interlocking-tiles.jpg",
      price: "₹45/sq ft",
      originalPrice: "₹55/sq ft",
      rating: 4.8,
      reviews: 124,
      features: ["Water Resistant", "Anti-Slip Surface", "Easy Maintenance", "5 Year Warranty"],
      colors: ["Gray", "Red", "Yellow", "Black"],
      sizes: ["200x100mm", "250x125mm"],
      category: "Residential",
    },
    {
      id: 2,
      name: "Premium Zigzag Tiles",
      description: "High-end zigzag tiles with enhanced durability and premium finish",
      image: "/premium-zigzag-interlocking-tiles.jpg",
      price: "₹65/sq ft",
      originalPrice: "₹75/sq ft",
      rating: 4.9,
      reviews: 89,
      features: ["Weather Proof", "Stain Resistant", "Heavy Duty", "10 Year Warranty"],
      colors: ["Charcoal", "Terracotta", "Beige", "Brown"],
      sizes: ["200x100mm", "250x125mm", "300x150mm"],
      category: "Commercial",
    },
    {
      id: 3,
      name: "Designer Zigzag Tiles",
      description: "Artistic zigzag patterns for modern architectural designs and luxury spaces",
      image: "/designer-zigzag-interlocking-tiles.jpg",
      price: "₹85/sq ft",
      originalPrice: "₹95/sq ft",
      rating: 5.0,
      reviews: 67,
      features: ["Custom Colors", "Unique Patterns", "Premium Finish", "15 Year Warranty"],
      colors: ["Custom Available"],
      sizes: ["200x100mm", "250x125mm", "300x150mm", "Custom"],
      category: "Luxury",
    },
    {
      id: 4,
      name: "Heavy Duty Zigzag Tiles",
      description: "Industrial grade tiles designed for high traffic areas and commercial use",
      image: "/placeholder.svg?key=heavy-duty",
      price: "₹55/sq ft",
      originalPrice: "₹65/sq ft",
      rating: 4.7,
      reviews: 156,
      features: ["Extra Strong", "Load Bearing", "Chemical Resistant", "8 Year Warranty"],
      colors: ["Gray", "Black", "Dark Brown"],
      sizes: ["250x125mm", "300x150mm"],
      category: "Industrial",
    },
    {
      id: 5,
      name: "Eco-Friendly Zigzag Tiles",
      description: "Environmentally conscious tiles made from recycled materials",
      image: "/placeholder.svg?key=eco-friendly",
      price: "₹50/sq ft",
      originalPrice: "₹60/sq ft",
      rating: 4.6,
      reviews: 92,
      features: ["Eco-Friendly", "Recycled Materials", "Low Carbon", "7 Year Warranty"],
      colors: ["Natural Gray", "Earth Brown", "Green Tint"],
      sizes: ["200x100mm", "250x125mm"],
      category: "Eco",
    },
    {
      id: 6,
      name: "Decorative Zigzag Tiles",
      description: "Ornamental tiles with intricate zigzag patterns for aesthetic applications",
      image: "/placeholder.svg?key=decorative",
      price: "₹70/sq ft",
      originalPrice: "₹80/sq ft",
      rating: 4.8,
      reviews: 78,
      features: ["Decorative Finish", "Multiple Textures", "Color Options", "12 Year Warranty"],
      colors: ["Multi-Color", "Sandstone", "Marble Effect"],
      sizes: ["200x100mm", "250x125mm", "300x150mm"],
      category: "Decorative",
    },
  ]

  const categories = ["All", "Residential", "Commercial", "Luxury", "Industrial", "Eco", "Decorative"]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Product Range</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Discover our comprehensive collection of premium interlocking tiles with unique zigzag patterns
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="px-4 py-2 text-sm">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600">{product.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-lg font-bold text-emerald-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
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
                    <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-emerald-600 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Available Colors:</h4>
                      <p className="text-sm text-gray-600">{product.colors.join(", ")}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Sizes:</h4>
                      <p className="text-sm text-gray-600">{product.sizes.join(", ")}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-sm">Get Quote</Button>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-emerald-600">Tiles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Weather Resistant</h3>
                <p className="text-gray-600">Superior resistance to rain, sun, and extreme weather conditions</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Durable & Strong</h3>
                <p className="text-gray-600">Built to withstand heavy traffic and maintain appearance for years</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Installation</h3>
                <p className="text-gray-600">Interlocking design allows for quick and hassle-free installation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
