import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download, MapPin } from "lucide-react"

export default function GalleryPage() {
  const projects = [
    {
      id: 1,
      title: "Luxury Villa Driveway",
      location: "Gurgaon, Haryana",
      category: "Residential",
      image: "/interlocking-zigzag-pattern-tiles-installation.jpg",
      description: "Premium zigzag tiles installation for a luxury villa driveway covering 500 sq ft",
    },
    {
      id: 2,
      title: "Shopping Mall Entrance",
      location: "Delhi NCR",
      category: "Commercial",
      image: "/classic-zigzag-interlocking-tiles.jpg",
      description: "Heavy-duty interlocking tiles for high-traffic shopping mall entrance area",
    },
    {
      id: 3,
      title: "Garden Pathway",
      location: "Noida, UP",
      category: "Residential",
      image: "/premium-zigzag-interlocking-tiles.jpg",
      description: "Beautiful zigzag pattern pathway connecting garden areas in residential complex",
    },
    {
      id: 4,
      title: "Corporate Office Plaza",
      location: "Gurgaon, Haryana",
      category: "Commercial",
      image: "/designer-zigzag-interlocking-tiles.jpg",
      description: "Designer tiles creating an impressive entrance for corporate office building",
    },
    {
      id: 5,
      title: "Resort Pool Deck",
      location: "Manali, HP",
      category: "Hospitality",
      image: "/placeholder.svg?key=resort-pool",
      description: "Water-resistant tiles around resort swimming pool area with anti-slip surface",
    },
    {
      id: 6,
      title: "Industrial Warehouse",
      location: "Faridabad, Haryana",
      category: "Industrial",
      image: "/placeholder.svg?key=warehouse",
      description: "Heavy-duty tiles for warehouse loading and unloading areas",
    },
    {
      id: 7,
      title: "School Playground",
      location: "Delhi",
      category: "Educational",
      image: "/placeholder.svg?key=playground",
      description: "Safe and durable tiles for school playground and sports areas",
    },
    {
      id: 8,
      title: "Hospital Parking",
      location: "Chandigarh",
      category: "Healthcare",
      image: "/placeholder.svg?key=hospital",
      description: "Easy-to-clean and maintain tiles for hospital parking and walkways",
    },
    {
      id: 9,
      title: "Restaurant Patio",
      location: "Goa",
      category: "Hospitality",
      image: "/placeholder.svg?key=restaurant",
      description: "Weather-resistant decorative tiles for outdoor restaurant seating area",
    },
  ]

  const categories = ["All", "Residential", "Commercial", "Industrial", "Hospitality", "Educational", "Healthcare"]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Project <span className="text-emerald-600">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Explore our completed projects showcasing the beauty and versatility of our interlocking tiles
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-emerald-50"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600">{project.category}</Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-gray-600">{project.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-emerald-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-emerald-200">Project Stats</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-emerald-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-emerald-100">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1M+</div>
              <div className="text-emerald-100">Sq Ft Installed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5000+</div>
              <div className="text-emerald-100">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us help you create beautiful spaces with our premium interlocking tiles. Contact us today for a free
              consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg">
                Call: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
