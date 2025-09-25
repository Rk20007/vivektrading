import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Palette, Wrench, Award, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Durable & Long-lasting",
    description: "Made with high-quality materials that withstand heavy traffic and weather conditions for years.",
  },
  {
    icon: Zap,
    title: "Quick Installation",
    description: "Innovative interlocking design allows for fast and easy installation without special tools.",
  },
  {
    icon: Palette,
    title: "Unique Zigzag Patterns",
    description: "Distinctive zigzag designs that add visual appeal and modern aesthetics to any space.",
  },
  {
    icon: Wrench,
    title: "Low Maintenance",
    description: "Easy to clean and maintain, requiring minimal effort to keep looking new.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "All products undergo rigorous quality testing and come with comprehensive warranty.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Professional installation guidance and ongoing customer support from our experienced team.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">Why Choose Vivek Trading?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine innovation, quality, and service to deliver the best interlocking tile solutions for your
            projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
