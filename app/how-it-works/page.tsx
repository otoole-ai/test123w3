"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Play, ChevronRight, ChevronLeft } from "lucide-react"

// Define the step data structure
interface Step {
  id: string
  title: string
  description: string
  stats: {
    value: string
    label: string
  }[]
  features: {
    title: string
    description: string
  }[]
  color: string
  image: string
}

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // Page load animation
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Step data
  const steps: Step[] = [
    {
      id: "identify",
      title: "Identify Anonymous Visitors",
      description:
        "Our proprietary technology identifies the companies visiting your website, even if they don't fill out a form.",
      stats: [
        { value: "98%", label: "of website visitors never fill out a form" },
        { value: "67%", label: "of the buyer journey happens anonymously" },
      ],
      features: [
        { title: "Company Identification", description: "Identify companies visiting your site in real-time" },
        { title: "Contact Discovery", description: "Get decision-maker contact information" },
        { title: "Visit Tracking", description: "See which pages they viewed and for how long" },
      ],
      color: "blue",
      image: "/identify-infographic.png",
    },
    {
      id: "target",
      title: "Target High-Intent Prospects",
      description: "We analyze visitor behavior to identify which companies are most likely to convert.",
      stats: [
        { value: "10x", label: "more effective than cold outreach" },
        { value: "85%", label: "of prospects prefer this approach" },
      ],
      features: [
        { title: "Intent Scoring", description: "Prioritize prospects based on behavior" },
        { title: "Engagement Analysis", description: "Track content engagement and interest" },
        { title: "Visit Frequency", description: "Monitor repeat visits and engagement patterns" },
      ],
      color: "purple",
      image: "/target-infographic.png",
    },
    {
      id: "engage",
      title: "Engage With Personalized Outreach",
      description: "Our system automatically engages prospects with personalized messaging based on their behavior.",
      stats: [
        { value: "3.2x", label: "higher response rate than generic outreach" },
        { value: "72%", label: "reduction in sales cycle length" },
      ],
      features: [
        { title: "Automated Sequences", description: "Trigger personalized outreach based on behavior" },
        { title: "Multi-Channel", description: "Reach prospects via email, LinkedIn, and more" },
        { title: "Content Matching", description: "Share relevant content based on interests" },
      ],
      color: "teal",
      image: "/engage-infographic.png",
    },
    {
      id: "book",
      title: "Book Qualified Meetings",
      description: "Convert warm leads into booked meetings directly on your calendar.",
      stats: [
        { value: "5.4x", label: "more meetings booked than traditional methods" },
        { value: "92%", label: "show-up rate for scheduled calls" },
      ],
      features: [
        { title: "Calendar Integration", description: "Seamless booking with your calendar" },
        { title: "Qualification Questions", description: "Pre-qualify leads before they book" },
        { title: "Automated Reminders", description: "Reduce no-shows with smart reminders" },
      ],
      color: "green",
      image: "/book-infographic.png",
    },
  ]

  const getColorClass = (color: string, type: "bg" | "text" | "border") => {
    const colorMap = {
      blue: {
        bg: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-600",
      },
      purple: {
        bg: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-600",
      },
      teal: {
        bg: "bg-teal-600",
        text: "text-teal-600",
        border: "border-teal-600",
      },
      green: {
        bg: "bg-green-600",
        text: "text-green-600",
        border: "border-green-600",
      },
    }
    return colorMap[color as keyof typeof colorMap][type]
  }

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          {/* Enhanced background gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-[conic-gradient(from_0deg,transparent,rgba(79,70,229,0.08)_10%,rgba(59,130,246,0.08)_20%,transparent_30%)] animate-[spin_30s_linear_infinite]"></div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-600/5 to-indigo-600/5 blur-3xl"></div>
          <div className="absolute bottom-20 left-[20%] w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-600/5 to-blue-600/5 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div
              className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Enhanced heading with better gradient */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 inline-block pb-2">
                  How ClikConvert Works
                </span>
                {/* Subtle text shadow for depth */}
                <span className="absolute -z-10 top-0 left-0 right-0 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600/10 via-indigo-500/10 to-blue-700/10 blur-sm transform translate-y-1">
                  How ClikConvert Works
                </span>
              </h1>

              {/* Enhanced divider */}
              <div className="relative h-1.5 w-40 mx-auto mb-10 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 opacity-50 animate-pulse"></div>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Enhanced subheading */}
              <p className="text-2xl md:text-3xl text-gray-800 max-w-3xl mx-auto mb-12 leading-relaxed">
                Our{" "}
                <span className="font-bold relative inline-block">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    proven process
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-blue-100/50 -z-10 transform -rotate-1"></span>
                </span>{" "}
                turns anonymous website visitors into{" "}
                <span className="font-bold relative inline-block">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                    booked sales calls
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-indigo-100/50 -z-10 transform rotate-1"></span>
                </span>
              </p>
            </div>

            <div
              className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Enhanced primary button */}
              <Link
                href="/book-call"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Book a Demo</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
              </Link>

              {/* Enhanced secondary button */}
              <button className="group relative px-8 py-4 bg-white text-blue-600 rounded-full font-medium text-lg border border-blue-200 shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Play size={18} className="group-hover:text-indigo-600 transition-colors" />
                  Watch Video
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>

            <div
              className={`transition-all duration-700 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Enhanced data badge */}
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-sm text-blue-600 border border-blue-100 shadow-sm">
                <span className="mr-2 font-medium">Based on data from</span>
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  500+ B2B companies
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl ${
                    activeStep === index ? `ring-2 ${getColorClass(step.color, "border")}` : ""
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`p-5 ${getColorClass(step.color, "bg")} text-white`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-white/90">{step.description}</p>
                  </div>

                  <div className="p-5">
                    <div className="mb-4">
                      <div className={`text-2xl font-bold ${getColorClass(step.color, "text")}`}>
                        {step.stats[0].value}
                      </div>
                      <div className="text-sm text-gray-600">{step.stats[0].label}</div>
                    </div>

                    <div className="space-y-3">
                      {step.features.slice(0, 2).map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full ${getColorClass(step.color, "bg")} flex items-center justify-center mt-0.5 mr-3`}
                          >
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <div className="text-sm text-gray-700">{feature.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Active Step Detail */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className={`p-8 md:p-10 ${getColorClass(steps[activeStep].color, "bg")} text-white`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                  {activeStep + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{steps[activeStep].title}</h3>
              </div>
              <p className="text-lg text-white/90">{steps[activeStep].description}</p>
            </div>

            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {steps[activeStep].stats.map((stat, i) => (
                      <div key={i} className="bg-gray-50 p-5 rounded-xl">
                        <div className={`text-3xl font-bold ${getColorClass(steps[activeStep].color, "text")}`}>
                          {stat.value}
                        </div>
                        <div className="text-gray-600 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <h4 className="font-semibold text-gray-900 text-xl mb-4">Key Features:</h4>
                  <div className="space-y-4">
                    {steps[activeStep].features.map((feature, i) => (
                      <div key={i} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full ${getColorClass(steps[activeStep].color, "bg")} flex items-center justify-center mt-0.5 mr-3`}
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">{feature.title}</h5>
                          <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <Image
                      src={steps[activeStep].image || "/placeholder.svg"}
                      alt={steps[activeStep].title}
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center">
              <button
                onClick={prevStep}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  activeStep === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-white"
                }`}
                disabled={activeStep === 0}
              >
                <ChevronLeft size={18} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeStep === index ? `${getColorClass(steps[index].color, "bg")} w-4` : "bg-gray-300"
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                onClick={nextStep}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  activeStep === steps.length - 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-white"
                }`}
                disabled={activeStep === steps.length - 1}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
