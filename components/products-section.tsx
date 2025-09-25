import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Classic Zigzag Tiles",
    description: "Traditional zigzag pattern perfect for residential flooring",
    image: "/classic-zigzag-interlocking-tiles-pattern.jpg",
    features: ["Water Resistant", "Easy Installation", "Durable"],
    price: "Starting from ₹45/sq ft",
  },
  {
    id: 2,
    name: "Premium Zigzag Tiles",
    description: "Enhanced design with superior finish for commercial spaces",
    image: "/premium-zigzag-interlocking-tiles-commercial.jpg",
    features: ["Anti-Slip", "Heavy Duty", "Stain Resistant"],
    price: "Starting from ₹65/sq ft",
  },
  {
    id: 3,
    name: "Designer Zigzag Tiles",
    description: "Artistic patterns for luxury interiors and exteriors",
    image: "/designer-zigzag-interlocking-tiles-luxury.jpg",
    features: ["Custom Colors", "Unique Patterns", "Premium Finish"],
    price: "Starting from ₹85/sq ft",
  },
]

export function ProductsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Our Product Range</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our comprehensive collection of interlocking zigzag tiles designed for various applications and
            budgets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <Badge key={feature} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">{product.price}</span>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View All Products</Button>
        </div>
      </div>
    </section>
  )
}
