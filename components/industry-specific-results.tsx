"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import {
  ArrowRight,
  Building2,
  ShoppingBag,
  Stethoscope,
  Briefcase,
  Server,
  DollarSign,
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  Quote,
} from "lucide-react"
import Image from "next/image"

// Define types for our industry data
type IndustryMetric = {
  name: string
  value: number
  benchmark: number
  unit: string
  icon: React.ReactNode
  description: string
}

type IndustryTestimonial = {
  quote: string
  author: string
  company: string
  position: string
  image: string
}

type Industry = {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  gradientFrom: string
  gradientTo: string
  description: string
  metrics: IndustryMetric[]
  testimonial: IndustryTestimonial
  clients: string[]
}

// Sample industry data
const industries: Industry[] = [
  {
    id: "saas",
    name: "SaaS & Technology",
    icon: <Server className="h-6 w-6" />,
    color: "text-blue-600",
    gradientFrom: "from-blue-50",
    gradientTo: "to-indigo-50",
    description:
      "SaaS companies see dramatic improvements in lead quality and conversion rates with our visitor identification system.",
    metrics: [
      {
        name: "Lead Conversion",
        value: 4.8,
        benchmark: 2.1,
        unit: "%",
        icon: <TrendingUp className="h-5 w-5" />,
        description: "Average conversion rate from visitor to qualified lead",
      },
      {
        name: "Demo Bookings",
        value: 267,
        benchmark: 100,
        unit: "%",
        icon: <BarChart3 className="h-5 w-5" />,
        description: "Increase in demo bookings after implementation",
      },
      {
        name: "Sales Cycle",
        value: 42,
        benchmark: 68,
        unit: "days",
        icon: <Clock className="h-5 w-5" />,
        description: "Average time from first touch to closed deal",
      },
    ],
    testimonial: {
      quote:
        "We've been able to identify and engage with enterprise prospects that were previously anonymous on our site. This has directly contributed to a 32% increase in our enterprise pipeline.",
      author: "David Chen",
      company: "CloudTech Solutions",
      position: "VP of Marketing",
      image: "/professional-man-headshot.png",
    },
    clients: ["/placeholder-tse1n.png", "/placeholder-lbkx7.png", "/placeholder-ylkgb.png"],
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: <Briefcase className="h-6 w-6" />,
    color: "text-indigo-600",
    gradientFrom: "from-indigo-50",
    gradientTo: "to-purple-50",
    description:
      "Consulting firms and agencies leverage our platform to identify high-value prospects and personalize outreach.",
    metrics: [
      {
        name: "Identified Visitors",
        value: 72,
        benchmark: 23,
        unit: "%",
        icon: <Users className="h-5 w-5" />,
        description: "Percentage of B2B visitors successfully identified",
      },
      {
        name: "Proposal Win Rate",
        value: 38,
        benchmark: 22,
        unit: "%",
        icon: <TrendingUp className="h-5 w-5" />,
        description: "Success rate for proposals to identified prospects",
      },
      {
        name: "Client Acquisition Cost",
        value: 42,
        benchmark: 100,
        unit: "%",
        icon: <DollarSign className="h-5 w-5" />,
        description: "Reduction in cost to acquire new clients",
      },
    ],
    testimonial: {
      quote:
        "The ability to see which companies are visiting our site and tailor our outreach accordingly has transformed our business development process. We're closing larger deals with less effort.",
      author: "Sarah Williams",
      company: "Apex Consulting Group",
      position: "Director of Business Development",
      image: "/professional-woman-headshot.png",
    },
    clients: ["/placeholder-j408s.png", "/placeholder-ofqxd.png", "/placeholder-usxui.png"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: <Building2 className="h-6 w-6" />,
    color: "text-cyan-600",
    gradientFrom: "from-cyan-50",
    gradientTo: "to-blue-50",
    description: "Manufacturing companies use our platform to identify potential buyers early in the research phase.",
    metrics: [
      {
        name: "Sales Pipeline",
        value: 186,
        benchmark: 100,
        unit: "%",
        icon: <BarChart3 className="h-5 w-5" />,
        description: "Increase in qualified opportunities in pipeline",
      },
      {
        name: "RFP Win Rate",
        value: 42,
        benchmark: 28,
        unit: "%",
        icon: <TrendingUp className="h-5 w-5" />,
        description: "Success rate for RFPs with identified prospects",
      },
      {
        name: "Sales Cycle",
        value: 38,
        benchmark: 100,
        unit: "%",
        icon: <Clock className="h-5 w-5" />,
        description: "Reduction in time from first touch to purchase",
      },
    ],
    testimonial: {
      quote:
        "In our industry, knowing which companies are researching our products gives us a critical advantage. ClikConvert has helped us identify and engage with prospects much earlier in their buying journey.",
      author: "Michael Rodriguez",
      company: "Precision Manufacturing Inc.",
      position: "Sales Director",
      image: "/professional-headshot.png",
    },
    clients: ["/placeholder-hm3cy.png", "/placeholder-g2a27.png", "/placeholder-fqvmz.png"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <Stethoscope className="h-6 w-6" />,
    color: "text-emerald-600",
    gradientFrom: "from-emerald-50",
    gradientTo: "to-teal-50",
    description:
      "Healthcare providers and services companies use our platform to identify and engage with potential partners.",
    metrics: [
      {
        name: "Partner Identification",
        value: 215,
        benchmark: 100,
        unit: "%",
        icon: <Users className="h-5 w-5" />,
        description: "Increase in identified potential partners",
      },
      {
        name: "Meeting Conversion",
        value: 32,
        benchmark: 14,
        unit: "%",
        icon: <TrendingUp className="h-5 w-5" />,
        description: "Conversion rate from outreach to meeting",
      },
      {
        name: "Contract Value",
        value: 47,
        benchmark: 100,
        unit: "%",
        icon: <DollarSign className="h-5 w-5" />,
        description: "Increase in average contract value",
      },
    ],
    testimonial: {
      quote:
        "In the healthcare space, relationships are everything. ClikConvert has helped us identify and build relationships with key decision-makers at target organizations much more efficiently.",
      author: "Jennifer Lee",
      company: "MedTech Innovations",
      position: "Chief Growth Officer",
      image: "/professional-woman-headshot.png",
    },
    clients: ["/placeholder-etdcr.png", "/placeholder-o369l.png", "/placeholder-e7q3t.png"],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: <ShoppingBag className="h-6 w-6" />,
    color: "text-amber-600",
    gradientFrom: "from-amber-50",
    gradientTo: "to-yellow-50",
    description: "E-commerce businesses use our platform to identify and engage with high-value B2B customers.",
    metrics: [
      {
        name: "B2B Conversion",
        value: 3.8,
        benchmark: 1.2,
        unit: "%",
        icon: <TrendingUp className="h-5 w-5" />,
        description: "Conversion rate for B2B visitors",
      },
      {
        name: "Average Order Value",
        value: 186,
        benchmark: 100,
        unit: "%",
        icon: <DollarSign className="h-5 w-5" />,
        description: "Increase in average B2B order value",
      },
      {
        name: "Repeat Purchase Rate",
        value: 42,
        benchmark: 28,
        unit: "%",
        icon: <BarChart3 className="h-5 w-5" />,
        description: "Rate of repeat purchases from B2B customers",
      },
    ],
    testimonial: {
      quote:
        "We've been able to identify corporate buyers visiting our site and create personalized outreach that has dramatically increased our B2B sales channel.",
      author: "Robert Taylor",
      company: "Global Commerce Partners",
      position: "B2B Sales Manager",
      image: "/professional-man-headshot.png",
    },
    clients: ["/placeholder-ay3a0.png", "/placeholder-7ktdr.png", "/placeholder-j408s.png"],
  },
]

export default function IndustrySpecificResults() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0])
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  // Handle industry selection
  const selectIndustry = (industry: Industry) => {
    if (isAnimating) return

    setIsAnimating(true)
    setActiveIndustry(industry)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Intersection observer for animations
  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  // Animation classes based on visibility
  const fadeInClass = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16 md:py-24 bg-white">
      {/* Background elements - matching the hero section */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean white background */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-[30%] w-64 h-64 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-20 left-[10%] w-72 h-72 rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>

        {/* Floating shapes */}
        <div className="absolute top-[35%] left-[5%] w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 rotate-12 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[15%] right-[25%] w-12 h-12 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-[10%] right-[15%] w-20 h-20 rounded-lg bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 -rotate-12 animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[40%] left-[20%] w-10 h-10 rounded-md bg-gradient-to-br from-[#16c2d5]/10 to-[#1e56a0]/10 rotate-45 animate-[float_9s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${fadeInClass}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
            Industry-Specific Results
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            See how companies in your industry achieve exceptional results with ClikConvert
          </p>
        </div>

        {/* Industry selection tabs */}
        <div className={`max-w-5xl mx-auto mb-12 transition-all duration-700 ${fadeInClass} delay-200`}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => selectIndustry(industry)}
                className={`group relative px-5 py-3 rounded-xl transition-all duration-300 overflow-hidden ${
                  activeIndustry.id === industry.id
                    ? `bg-gradient-to-r ${industry.gradientFrom} ${industry.gradientTo} shadow-md`
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`${
                      activeIndustry.id === industry.id ? industry.color : "text-gray-400 group-hover:text-gray-600"
                    } transition-colors duration-300`}
                  >
                    {industry.icon}
                  </div>
                  <span
                    className={`font-medium ${
                      activeIndustry.id === industry.id ? industry.color : "text-gray-500 group-hover:text-gray-700"
                    } transition-colors duration-300`}
                  >
                    {industry.name}
                  </span>
                </div>
                {activeIndustry.id === industry.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active industry content */}
        <div
          className={`max-w-6xl mx-auto transition-all duration-500 ${
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Industry header */}
          <div className={`mb-10 transition-all duration-700 ${fadeInClass} delay-300`}>
            <div
              className={`p-6 rounded-xl bg-gradient-to-r ${activeIndustry.gradientFrom} ${activeIndustry.gradientTo} border border-gray-100 shadow-sm`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div
                  className={`p-4 rounded-full ${activeIndustry.color} bg-white/80 shadow-sm flex items-center justify-center`}
                >
                  {activeIndustry.icon}
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${activeIndustry.color} mb-2`}>{activeIndustry.name}</h3>
                  <p className="text-gray-600">{activeIndustry.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Metrics cards */}
            <div className={`lg:col-span-2 transition-all duration-700 ${fadeInClass} delay-400`}>
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800">Key Performance Metrics</h4>
                </div>
                <div className="p-6">
                  <div className="space-y-8">
                    {activeIndustry.metrics.map((metric, index) => (
                      <div key={index} className="group">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div
                              className={`p-2 rounded-full ${activeIndustry.gradientFrom} ${activeIndustry.gradientTo} ${activeIndustry.color}`}
                            >
                              {metric.icon}
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">{metric.name}</div>
                              <div className="text-sm text-gray-500">{metric.description}</div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">{metric.unit}</div>
                        </div>

                        {/* Metric visualization */}
                        <div className="relative h-16 bg-gray-100 rounded-lg overflow-hidden">
                          {/* Benchmark indicator */}
                          <div
                            className="absolute top-0 bottom-0 border-r-2 border-dashed border-gray-400 flex items-center"
                            style={{ left: `${(metric.benchmark / Math.max(metric.value, metric.benchmark)) * 100}%` }}
                          >
                            <div className="absolute -right-[9px] -top-1 text-xs text-gray-500 whitespace-nowrap">
                              Industry avg: {metric.benchmark}
                              {metric.unit}
                            </div>
                          </div>

                          {/* Value bar with animation */}
                          <div
                            className={`absolute left-0 bottom-0 h-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] flex items-center justify-end pr-3 text-white font-medium transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible
                                ? `${(metric.value / Math.max(metric.value, metric.benchmark)) * 100}%`
                                : "0%",
                              transitionDelay: `${400 + index * 200}ms`,
                            }}
                          >
                            {metric.value}
                            {metric.unit}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className={`transition-all duration-700 ${fadeInClass} delay-500`}>
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="p-6 border-b border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800">Client Testimonial</h4>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="relative mb-6 flex-grow">
                    <div className="absolute -top-2 -left-2 text-[#1e56a0]/20">
                      <Quote size={36} />
                    </div>
                    <p className="text-gray-600 italic relative z-10 pl-4">{activeIndustry.testimonial.quote}</p>
                  </div>
                  <div className="flex items-center mt-auto">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-sm">
                      <Image
                        src={activeIndustry.testimonial.image || "/placeholder.svg"}
                        alt={activeIndustry.testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{activeIndustry.testimonial.author}</div>
                      <div className="text-sm text-gray-500">
                        {activeIndustry.testimonial.position}, {activeIndustry.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client logos */}
          <div className={`mb-8 transition-all duration-700 ${fadeInClass} delay-600`}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="text-center mb-6">
                <h4 className="text-lg font-medium text-gray-700">
                  Trusted by leading {activeIndustry.name} companies
                </h4>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {activeIndustry.clients.map((logo, index) => (
                  <div
                    key={index}
                    className="relative h-12 w-24 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  >
                    <Image src={logo || "/placeholder.svg"} alt="Client logo" fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-700 ${fadeInClass} delay-700`}>
            <a
              href="/book-call"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              See Results in Your Industry
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
