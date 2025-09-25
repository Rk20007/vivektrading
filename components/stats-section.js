"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, MapPin, Award } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      number: "15+",
      label: "Years of Excellence",
      description: "Serving customers with quality tiles since 2009",
    },
    {
      icon: Users,
      number: "5000+",
      label: "Happy Customers",
      description: "Satisfied clients across residential and commercial sectors",
    },
    {
      icon: MapPin,
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects of all sizes",
    },
    {
      icon: Award,
      number: "100%",
      label: "Quality Guarantee",
      description: "All products come with quality assurance",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-emerald-600">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-emerald-200">Achievements</span>
          </h2>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto">
            Numbers that speak for our commitment to quality and customer satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-emerald-100 text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center">
              <div className="text-6xl text-white/30 mb-4">"</div>
              <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
                Vivek Trading provided excellent quality interlocking tiles for our residential project. The zigzag
                pattern looks amazing and the installation was smooth. Highly recommended!
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img src="/professional-avatar.png" alt="Customer" className="w-12 h-12 rounded-full" />
                <div className="text-left">
                  <div className="text-white font-semibold">Rajesh Kumar</div>
                  <div className="text-emerald-200 text-sm">Homeowner, Delhi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
