import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle, Headphones } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Directly",
      primary: "90015 25353",
      secondary: "+91 87654 32109",
      description: "Speak with our experts",
      available: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
    {
      icon: Mail,
      title: "Email Support",
      primary: "info@vivektrading.in",
      secondary: "sales@vivektrading.com",
      description: "Get detailed information",
      available: "24/7 Email Support",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      primary: "90015 25353",
      secondary: "Quick responses",
      description: "Instant messaging support",
      available: "Mon-Sat: 9:00 AM - 8:00 PM",
    },
    {
      icon: Headphones,
      title: "Customer Service",
      primary: "1800-123-4567",
      secondary: "Toll-free number",
      description: "Dedicated support team",
      available: "Mon-Fri: 10:00 AM - 6:00 PM",
    },
  ]

  const offices = [
    {
      title: "Head Office",
      address: "Papari Rd, Tapukara, Rajasthan 301018",
      city: "Gurgaon, Haryana - 122001",
      phone: "90015 25353",
      email: "info@vivektrading.in",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
    {
      title: "Manufacturing Unit",
      address: "Plot No. 45, Industrial Estate",
      city: "Faridabad, Haryana - 121003",
      phone: "+91 87654 32109",
      email: "production@vivektrading.com",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
    },
    {
      title: "Delhi Branch",
      address: "B-12, Karol Bagh",
      city: "New Delhi - 110005",
      phone: "+91 76543 21098",
      email: "delhi@vivektrading.com",
      hours: "Mon-Sat: 10:00 AM - 7:00 PM",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-emerald-600">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Get in touch with our experts for all your interlocking tile needs. We're here to help you create
              beautiful spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to <span className="text-emerald-600">Reach Us</span>
            </h2>
            <p className="text-xl text-gray-600">Choose the most convenient way to get in touch</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={index}
                  className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                    <div className="space-y-1 mb-3">
                      <p className="text-emerald-600 font-semibold">{method.primary}</p>
                      <p className="text-gray-600 text-sm">{method.secondary}</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                    <p className="text-xs text-gray-500">{method.available}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Office Locations */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Locations</span>
            </h2>
            <p className="text-xl text-gray-600">Visit us at any of our convenient locations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{office.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-800 font-medium">{office.address}</p>
                        <p className="text-gray-600">{office.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-emerald-600" />
                      <p className="text-gray-800">{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-emerald-600" />
                      <p className="text-gray-800">{office.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-emerald-600" />
                      <p className="text-gray-600 text-sm">{office.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What is the minimum order quantity?",
                answer:
                  "Our minimum order quantity is 100 sq ft for residential projects and 500 sq ft for commercial projects.",
              },
              {
                question: "Do you provide installation services?",
                answer:
                  "Yes, we provide professional installation services with trained technicians. Installation charges are separate from tile costs.",
              },
              {
                question: "What is the warranty period?",
                answer:
                  "We offer 5-15 years warranty depending on the tile type. Premium and designer tiles come with longer warranty periods.",
              },
              {
                question: "Do you deliver across India?",
                answer:
                  "Yes, we deliver pan-India. Delivery charges vary based on location and order quantity. Free delivery for orders above ₹50,000.",
              },
              {
                question: "Can I get custom colors and patterns?",
                answer:
                  "Yes, we offer custom colors and patterns for orders above 1000 sq ft. Custom orders take 15-20 days for production.",
              },
            ].map((faq, index) => (
              <Card key={index} className="shadow-md border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
