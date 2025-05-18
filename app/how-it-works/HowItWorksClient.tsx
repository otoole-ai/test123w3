"use client"

// Add custom animations
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Play, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "../../hooks/use-intersection-observer"

// Custom animations
const customAnimations = `
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`

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

export default function HowItWorksClient() {
  const [activeStep, setActiveStep] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Add these hooks for scroll animations
  const [processRef, processInView] = useIntersectionObserver<HTMLElement>()
  const [detailRef, detailInView] = useIntersectionObserver<HTMLElement>()

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
    if (activeStep < steps.length - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveStep(activeStep + 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const prevStep = () => {
    if (activeStep > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveStep(activeStep - 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Framer-like design */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Clean white background */}
          <div className="absolute inset-0 bg-white"></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
          <div className="absolute bottom-20 left-[20%] w-72 h-72 rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>

          {/* Floating shapes */}
          <div className="absolute top-[15%] left-[10%] w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 rotate-12 animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-[25%] right-[15%] w-12 h-12 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute bottom-[20%] left-[20%] w-20 h-20 rounded-lg bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 -rotate-12 animate-[float_12s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[30%] right-[25%] w-10 h-10 rounded-md bg-gradient-to-br from-[#16c2d5]/10 to-[#1e56a0]/10 rotate-45 animate-[float_9s_ease-in-out_infinite_reverse]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Heading with 3D effect */}
            <div>
              <div className="relative perspective-[1000px]">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 relative transform hover:scale-[1.02] hover:rotate-x-1 hover:rotate-y-1 transition-all duration-700">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] inline-block pb-2">
                    How ClikConvert Works
                  </span>

                  {/* Multiple layered shadows for 3D effect */}
                  <span className="absolute -z-10 top-0 left-0 right-0 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 blur-[2px] transform translate-y-[2px]">
                    How ClikConvert Works
                  </span>
                  <span className="absolute -z-20 top-0 left-0 right-0 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0]/5 to-[#16c2d5]/5 blur-[4px] transform translate-y-[4px]">
                    How ClikConvert Works
                  </span>
                </h1>
              </div>

              {/* Animated divider */}
              <div className="relative h-1.5 w-40 mx-auto mb-10 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]"></div>
                <div className="absolute inset-0 w-1/2 bg-white/30 animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>

            {/* Subheading */}
            <div>
              {/* Enhanced subheading with animated underlines */}
              <p className="text-2xl md:text-3xl text-gray-800 max-w-3xl mx-auto mb-12 leading-relaxed">
                Our{" "}
                <span className="font-bold relative inline-block group">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                    proven process
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-blue-100/50 -z-10 transform -rotate-1 group-hover:h-4 transition-all duration-300"></span>
                </span>{" "}
                turns anonymous website visitors into{" "}
                <span className="font-bold relative inline-block group">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#16c2d5] to-[#1e56a0]">
                    booked sales calls
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-indigo-100/50 -z-10 transform rotate-1 group-hover:h-4 transition-all duration-300"></span>
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {/* Interactive primary button with hover effects */}
              <Link
                href="/book-call"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Book a Demo</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#16c2d5] to-[#1e56a0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
                {/* Animated glow effect */}
                <span className="absolute -inset-x-10 bottom-0 h-20 bg-gradient-to-r from-[#1e56a0]/0 via-white/80 to-[#16c2d5]/0 opacity-0 group-hover:opacity-100 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></span>
              </Link>

              {/* Interactive secondary button with hover effects */}
              <button className="group relative px-8 py-4 bg-white text-blue-600 rounded-full font-medium text-lg border border-blue-200 shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden transform hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">
                  <Play
                    size={18}
                    className="group-hover:text-indigo-600 transition-colors group-hover:scale-110 transition-transform duration-300"
                  />
                  Watch Video
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {/* Subtle ripple effect */}
                <span className="absolute inset-0 scale-0 rounded-full bg-blue-100/30 group-hover:scale-[2.5] transition-transform duration-700 opacity-0 group-hover:opacity-100"></span>
              </button>
            </div>

            {/* Data badge */}
            <div>
              {/* Enhanced data badge with hover effect */}
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-sm text-blue-600 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <span className="mr-2 font-medium">Based on data from</span>
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                  500+ B2B companies
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section - Enhanced */}
      <section
        ref={processRef}
        className={`py-20 md:py-32 relative transition-all duration-1000 transform ${
          processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 pointer-events-none"></div>

        {/* Decorative elements */}
        <div className="absolute top-40 right-[10%] w-64 h-64 rounded-full bg-blue-50 opacity-60 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-40 left-[10%] w-72 h-72 rounded-full bg-indigo-50 opacity-60 blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
              Our Four-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that consistently delivers results for our clients
            </p>
          </div>

          <div className="max-w-7xl mx-auto relative">
            {/* Connecting line between steps */}
            <div className="absolute top-[4.5rem] left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-0.5 bg-gradient-to-r from-[#1e56a0]/20 to-[#16c2d5]/20 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="group relative" onClick={() => setActiveStep(index)}>
                  {/* Step number indicator */}
                  <div
                    className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full ${getColorClass(step.color, "bg")} text-white flex items-center justify-center text-xl font-bold shadow-lg z-10 border-2 border-white transition-transform duration-300 group-hover:scale-110`}
                  >
                    {index + 1}
                  </div>

                  {/* 3D Card with hover effects */}
                  <div
                    className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 
                hover:shadow-xl transform perspective-1000 group-hover:-translate-y-1 
                ${activeStep === index ? `ring-2 ${getColorClass(step.color, "border")}` : ""}
                hover:rotate-y-1 hover:rotate-x-1`}
                  >
                    <div className={`p-6 ${getColorClass(step.color, "bg")} text-white relative overflow-hidden`}>
                      {/* Background pattern */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(255,255,255,0.1),transparent_60%)]"></div>

                      <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-sm text-white/90">{step.description}</p>
                      </div>

                      {/* Decorative corner accent */}
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-md"></div>
                    </div>

                    <div className="p-6">
                      <div className="mb-5">
                        <div className={`text-3xl font-bold ${getColorClass(step.color, "text")}`}>
                          {step.stats[0].value}
                        </div>
                        <div className="text-sm text-gray-600">{step.stats[0].label}</div>
                      </div>

                      <div className="space-y-4">
                        {step.features.slice(0, 2).map((feature, i) => (
                          <div key={i} className="flex items-start group/feature">
                            <div
                              className={`flex-shrink-0 w-6 h-6 rounded-full ${getColorClass(step.color, "bg")} flex items-center justify-center mt-0.5 mr-3 transition-transform duration-300 group-hover/feature:scale-110`}
                            >
                              <CheckCircle className="w-3.5 h-3.5 text-white" />
                            </div>
                            <div className="text-sm text-gray-700">{feature.title}</div>
                          </div>
                        ))}
                      </div>

                      {/* Card footer with action hint */}
                      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-sm text-gray-500">Step {index + 1}</span>
                        <div
                          className={`w-8 h-8 rounded-full ${getColorClass(step.color, "bg")} flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-45`}
                        >
                          <ArrowRight size={14} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action after steps */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">Ready to see how our process can work for your business?</p>
            <Link
              href="/book-call"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Active Step Detail - Enhanced */}
      <section
        ref={detailRef}
        className={`py-16 md:py-24 relative transition-all duration-1000 transform ${
          detailInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>

          {/* Decorative elements */}
          <div className="absolute top-40 right-[15%] w-64 h-64 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
          <div className="absolute bottom-40 left-[15%] w-72 h-72 rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>

          {/* Floating shapes */}
          <div className="absolute top-[25%] left-[5%] w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 rotate-12 animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-20 h-20 rounded-lg bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 -rotate-12 animate-[float_12s_ease-in-out_infinite]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] transition-all duration-300">
              Step {activeStep + 1}: {steps[activeStep].title}
            </h2>
            <p className="text-xl text-gray-600 transition-all duration-300">
              Explore the details of how this step helps convert visitors into customers
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main content card with enhanced styling */}
            <div
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform perspective-1000 hover:shadow-2xl transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
            >
              {/* Header with gradient background */}
              <div
                className={`relative p-8 md:p-10 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white overflow-hidden transition-all duration-300`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(255,255,255,0.1),transparent_60%)]"></div>

                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-bold border-2 border-white/30 shadow-lg">
                    {activeStep + 1}
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{steps[activeStep].title}</h3>
                    <p className="text-lg text-white/90 max-w-3xl">{steps[activeStep].description}</p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              </div>

              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    {/* Stats with enhanced styling */}
                    <div className="grid grid-cols-2 gap-6 mb-8 transition-all duration-500">
                      {steps[activeStep].stats.map((stat, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <div
                            className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-gray-600 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features with enhanced styling */}
                    <h4 className="font-semibold text-gray-900 text-xl mb-6 flex items-center">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                        Key Features
                      </span>
                      <div className="h-px flex-grow bg-gradient-to-r from-[#1e56a0]/20 to-[#16c2d5]/20 ml-4"></div>
                    </h4>

                    <div className="space-y-4 transition-all duration-500 delay-100">
                      {steps[activeStep].features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-sm"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] flex items-center justify-center mt-0.5 mr-4 shadow-md">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 text-lg">{feature.title}</h5>
                            <p className="text-gray-600 mt-1">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image with enhanced styling */}
                  <div className="flex items-center justify-center transition-all duration-500 delay-200">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 transform perspective-1000 hover:rotate-y-1 hover:rotate-x-1 transition-all duration-300 hover:shadow-xl group">
                      <div className="relative">
                        <Image
                          src={steps[activeStep].image || "/placeholder.svg"}
                          alt={steps[activeStep].title}
                          width={500}
                          height={300}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-4 bg-white">
                        <h5 className="font-medium text-gray-900">Visual representation</h5>
                        <p className="text-sm text-gray-500">
                          See how {steps[activeStep].title.toLowerCase()} works in practice
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation with enhanced styling */}
              <div className="bg-gradient-to-r from-gray-50 to-white p-4 border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={prevStep}
                  className={`px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                    activeStep === 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 hover:bg-white hover:shadow-md hover:border-gray-200 border border-transparent"
                  }`}
                  disabled={activeStep === 0}
                >
                  <ChevronLeft size={18} />
                  <span className="hidden sm:inline">Previous Step</span>
                </button>

                <div className="flex items-center space-x-3">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`transition-all duration-300 ${
                        activeStep === index
                          ? `w-8 h-2 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] rounded-full`
                          : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400"
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={nextStep}
                  className={`px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                    activeStep === steps.length - 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 hover:bg-white hover:shadow-md hover:border-gray-200 border border-transparent"
                  }`}
                  disabled={activeStep === steps.length - 1}
                >
                  <span className="hidden sm:inline">Next Step</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-12 text-center">
              <Link
                href="/book-call"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                See This Process in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
