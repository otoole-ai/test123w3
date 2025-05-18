"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight, Play, Quote } from "lucide-react"
import Image from "next/image"

// Define types for our case studies
type CaseStudy = {
  id: number
  clientName: string
  industry: string
  challenge: string
  solution: string
  results: {
    metric: string
    before: number
    after: number
    unit: string
  }[]
  testimonial: {
    quote: string
    author: string
    position: string
    image: string
  }
  logo: string
  bgColor: string
}

// Sample case study data
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    clientName: "TechSolutions Inc.",
    industry: "SaaS",
    challenge:
      "Struggling to identify and engage website visitors, resulting in missed opportunities and low conversion rates.",
    solution: "Implemented ClikConvert's visitor identification and automated outreach system.",
    results: [
      { metric: "Qualified Leads", before: 12, after: 47, unit: "per month" },
      { metric: "Conversion Rate", before: 1.8, after: 4.2, unit: "%" },
      { metric: "Sales Meetings", before: 8, after: 32, unit: "per month" },
    ],
    testimonial: {
      quote:
        "ClikConvert transformed our lead generation process. We're now connecting with prospects we never knew existed.",
      author: "Sarah Johnson",
      position: "VP of Marketing",
      image: "/professional-woman-headshot.png",
    },
    logo: "/placeholder-tse1n.png",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    id: 2,
    clientName: "Global Consulting Group",
    industry: "Professional Services",
    challenge: "High website traffic but poor conversion to consultation bookings and difficulty tracking ROI.",
    solution: "Deployed ClikConvert to identify anonymous visitors and create personalized outreach campaigns.",
    results: [
      { metric: "Identified Visitors", before: 5, after: 68, unit: "%" },
      { metric: "Booked Consultations", before: 6, after: 23, unit: "per month" },
      { metric: "Revenue", before: 100, after: 340, unit: "% increase" },
    ],
    testimonial: {
      quote:
        "The ability to see which companies are visiting our site and reach out to them directly has been game-changing for our business development team.",
      author: "Michael Chen",
      position: "Director of Business Development",
      image: "/professional-man-headshot.png",
    },
    logo: "/placeholder-lbkx7.png",
    bgColor: "from-indigo-50 to-blue-50",
  },
  {
    id: 3,
    clientName: "Manufacturing Innovators",
    industry: "Manufacturing",
    challenge: "Long sales cycles and difficulty identifying which website visitors were genuine prospects.",
    solution: "Used ClikConvert to identify and prioritize high-value prospects for sales team follow-up.",
    results: [
      { metric: "Sales Cycle", before: 94, after: 61, unit: "days" },
      { metric: "Lead Quality", before: 100, after: 230, unit: "% increase" },
      { metric: "Close Rate", before: 12, after: 28, unit: "%" },
    ],
    testimonial: {
      quote:
        "ClikConvert has helped us focus our efforts on the prospects that matter most. Our sales team is now much more efficient and effective.",
      author: "Robert Williams",
      position: "Sales Director",
      image: "/professional-headshot.png",
    },
    logo: "/placeholder-ylkgb.png",
    bgColor: "from-cyan-50 to-blue-50",
  },
]

export default function ClientSuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const activeCase = caseStudies[activeIndex]

  // Handle navigation
  const goToCase = (index: number) => {
    if (isAnimating) return

    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const nextCase = () => {
    goToCase((activeIndex + 1) % caseStudies.length)
  }

  const prevCase = () => {
    goToCase((activeIndex - 1 + caseStudies.length) % caseStudies.length)
  }

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

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
        <div className="absolute top-20 left-[20%] w-64 h-64 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-20 right-[20%] w-72 h-72 rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>

        {/* Floating shapes */}
        <div className="absolute top-[25%] right-[10%] w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 rotate-12 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[15%] left-[15%] w-12 h-12 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-[30%] right-[20%] w-20 h-20 rounded-lg bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 -rotate-12 animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[20%] left-[25%] w-10 h-10 rounded-md bg-gradient-to-br from-[#16c2d5]/10 to-[#1e56a0]/10 rotate-45 animate-[float_9s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${fadeInClass}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
            Client Success Stories
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">Real results from businesses just like yours</p>
        </div>

        {/* Featured case study */}
        <div className={`max-w-7xl mx-auto transition-all duration-700 ${fadeInClass} delay-300`}>
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:scale-[1.01] hover:shadow-2xl transition-all duration-500">
            {/* Case study header */}
            <div className={`p-8 md:p-10 bg-gradient-to-r ${activeCase.bgColor} border-b border-gray-100`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                  <div className="text-sm text-gray-500 mb-1">{activeCase.industry}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{activeCase.clientName}</h3>
                </div>
                <div className="relative h-16 w-32 bg-white rounded-lg shadow-sm overflow-hidden">
                  <Image
                    src={activeCase.logo || "/placeholder.svg"}
                    alt={`${activeCase.clientName} logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>

            {/* Case study content */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left column - Challenge and Solution */}
                <div>
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">The Challenge</h4>
                    <p className="text-gray-600">{activeCase.challenge}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Our Solution</h4>
                    <p className="text-gray-600">{activeCase.solution}</p>
                  </div>

                  {/* Testimonial */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
                    <div className="absolute -top-3 -left-3 text-[#1e56a0]/20 group-hover:text-[#1e56a0]/30 transition-colors duration-300">
                      <Quote size={40} />
                    </div>
                    <p className="text-gray-600 italic mb-4 relative z-10">{activeCase.testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-sm">
                        <Image
                          src={activeCase.testimonial.image || "/placeholder.svg"}
                          alt={activeCase.testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{activeCase.testimonial.author}</div>
                        <div className="text-sm text-gray-500">{activeCase.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - Results */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-6">The Results</h4>

                  {/* Results metrics */}
                  <div className="space-y-8">
                    {activeCase.results.map((result, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium text-gray-800">{result.metric}</div>
                          <div className="text-sm text-gray-500">{result.unit}</div>
                        </div>

                        {/* Before/After comparison */}
                        <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden">
                          {/* Before bar */}
                          <div
                            className="absolute left-0 bottom-0 h-full bg-gray-300 flex items-center justify-start pl-3 text-gray-600 font-medium"
                            style={{ width: `${(result.before / Math.max(result.before, result.after)) * 100}%` }}
                          >
                            {result.before}
                          </div>

                          {/* After bar with animation */}
                          <div
                            className="absolute left-0 bottom-0 h-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] flex items-center justify-end pr-3 text-white font-medium transition-all duration-1000 ease-out group-hover:opacity-90"
                            style={{
                              width: isVisible
                                ? `${(result.after / Math.max(result.before, result.after)) * 100}%`
                                : "0%",
                              transitionDelay: `${300 + index * 200}ms`,
                            }}
                          >
                            {result.after}
                          </div>

                          {/* Labels */}
                          <div className="absolute top-0 left-0 w-full flex text-xs text-gray-500 pt-1 px-3">
                            <div className="w-1/2 text-left">Before</div>
                            <div className="w-1/2 text-right">After</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Watch video button */}
                  <div className="mt-8">
                    <button className="group flex items-center text-[#1e56a0] font-medium hover:text-[#16c2d5] transition-colors duration-300">
                      <div className="mr-3 bg-[#1e56a0]/10 rounded-full p-2 group-hover:bg-[#1e56a0]/20 transition-colors duration-300">
                        <Play
                          size={16}
                          className="text-[#1e56a0] group-hover:text-[#16c2d5] transition-colors duration-300"
                        />
                      </div>
                      Watch the full case study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-2">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => goToCase(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View case study for ${study.clientName}`}
                />
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={prevCase}
                disabled={isAnimating}
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#1e56a0] transition-colors duration-300 disabled:opacity-50"
                aria-label="Previous case study"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextCase}
                disabled={isAnimating}
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#1e56a0] transition-colors duration-300 disabled:opacity-50"
                aria-label="Next case study"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Industry badges */}
        <div
          className={`max-w-4xl mx-auto mt-16 flex flex-wrap justify-center gap-3 transition-all duration-1000 ${fadeInClass} delay-700`}
        >
          <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-sm font-medium text-blue-600 border border-blue-100">
            SaaS
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full text-sm font-medium text-indigo-600 border border-indigo-100">
            Professional Services
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full text-sm font-medium text-cyan-600 border border-cyan-100">
            Manufacturing
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full text-sm font-medium text-emerald-600 border border-emerald-100">
            Healthcare
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-full text-sm font-medium text-amber-600 border border-amber-100">
            E-commerce
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-sky-50 rounded-full text-sm font-medium text-blue-600 border border-blue-100">
            Financial Services
          </div>
        </div>
      </div>
    </section>
  )
}
