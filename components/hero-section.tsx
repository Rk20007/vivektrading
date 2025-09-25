import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Premium <span className="text-primary">Interlocking Tiles</span> with Zigzag Patterns
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Transform your spaces with our innovative interlocking tile solutions. Durable, stylish, and easy to
                install - perfect for both residential and commercial projects.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>High-quality materials with 10+ year warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Unique zigzag patterns for modern aesthetics</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Easy installation with interlocking design</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Get Free Quote
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
              <img
                src="/modern-interlocking-zigzag-pattern-tiles-installat.jpg"
                alt="Vivek Trading Interlocking Zigzag Tiles"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
