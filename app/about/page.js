import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality and ensure every tile meets the highest standards.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do, driving our commitment to service.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously improving our products and processes to stay ahead in the industry.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through honest business practices and transparent communication.",
    },
  ]

  const milestones = [
    { year: "2009", event: "Company Founded", description: "Started with a vision to provide quality tiles" },
    { year: "2012", event: "First Major Contract", description: "Completed our first large commercial project" },
    { year: "2015", event: "Expanded Operations", description: "Opened new manufacturing facility" },
    { year: "2018", event: "ISO Certification", description: "Achieved ISO 9001:2015 quality certification" },
    { year: "2021", event: "Digital Transformation", description: "Launched online presence and digital services" },
    { year: "2024", event: "Market Leader", description: "Became leading supplier in North India" },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-emerald-600">Vivek Trading</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              With over 15 years of experience, we are the trusted name in premium interlocking tiles with unique zigzag
              patterns across India.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Vivek Trading began with a simple mission: to provide high-quality interlocking tiles
                  that combine durability with aesthetic appeal. What started as a small family business has grown into
                  one of North India's leading tile manufacturers.
                </p>
                <p>
                  Our signature zigzag pattern tiles have become synonymous with quality and innovation. We've
                  successfully completed over 500 projects, ranging from residential homes to large commercial
                  complexes, always maintaining our commitment to excellence.
                </p>
                <p>
                  Today, we continue to push the boundaries of tile design and manufacturing, incorporating the latest
                  technology while preserving the craftsmanship that has made us a trusted name in the industry.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-emerald-600 hover:bg-emerald-700">View Our Projects</Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/interlocking-zigzag-pattern-tiles-installation.jpg"
                alt="Vivek Trading Story"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide premium quality interlocking tiles that enhance the beauty and functionality of spaces
                  while ensuring customer satisfaction through exceptional service and innovative designs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become India's most trusted and innovative tile manufacturer, setting new standards in quality,
                  design, and customer service while contributing to sustainable construction practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-emerald-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">Key milestones in our growth story</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-white mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.event}</h3>
                  <p className="text-emerald-100">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
