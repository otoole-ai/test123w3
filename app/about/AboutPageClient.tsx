"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Play, ArrowRight, CheckCircle2 } from "lucide-react"
import TeamMosaic from "./TeamMosaic"
import RippleEffect from "./RippleEffect"

export default function AboutPageClient() {
  // State for tracking which value card is active
  const [activeValue, setActiveValue] = useState<number | null>(null)

  // Refs for the card container and individual cards
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Effect for handling card animations on scroll
  useEffect(() => {
    // Make sure cards are visible by default
    cardRefs.current.forEach((card) => {
      if (card) card.classList.add("opacity-100", "translate-y-0")
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  // Function to handle mouse movement for 3D card effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (!cardRefs.current[index]) return

    const card = cardRefs.current[index]
    const rect = card?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    if (card) {
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    }
  }

  // Function to reset card transform on mouse leave
  const handleMouseLeave = (index: number) => {
    if (cardRefs.current[index]) {
      cardRefs.current[index]!.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
    }
  }

  // Values data
  const values = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries to develop cutting-edge solutions that transform how B2B companies identify and engage with their website visitors.",
      icon: "🚀",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Transparency",
      description:
        "We believe in complete openness with our clients, providing clear insights and honest communication throughout our partnership.",
      icon: "🔍",
      color: "from-indigo-500 to-blue-400",
    },
    {
      title: "Results-Driven",
      description:
        "We measure our success by the tangible outcomes we deliver for our clients, focusing on metrics that directly impact their bottom line.",
      icon: "📈",
      color: "from-cyan-500 to-blue-400",
    },
    {
      title: "Partnership",
      description:
        "We work as an extension of your team, aligning our strategies with your business goals to ensure mutual success.",
      icon: "🤝",
      color: "from-blue-600 to-indigo-400",
    },
  ]

  return (
    <main>
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
                    Our Story
                  </span>

                  {/* Multiple layered shadows for 3D effect */}
                  <span className="absolute -z-10 top-0 left-0 right-0 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 blur-[2px] transform translate-y-[2px]">
                    Our Story
                  </span>
                  <span className="absolute -z-20 top-0 left-0 right-0 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0]/5 to-[#16c2d5]/5 blur-[4px] transform translate-y-[4px]">
                    Our Story
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
                We're transforming how B2B companies{" "}
                <span className="font-bold relative inline-block group">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                    identify and engage
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-blue-100/50 -z-10 transform -rotate-1 group-hover:h-4 transition-all duration-300"></span>
                </span>{" "}
                with their{" "}
                <span className="font-bold relative inline-block group">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#16c2d5] to-[#1e56a0]">
                    website visitors
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
                <span className="relative z-10">Meet Our Team</span>
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
                  Our Mission
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {/* Subtle ripple effect */}
                <span className="absolute inset-0 scale-0 rounded-full bg-blue-100/30 group-hover:scale-[2.5] transition-transform duration-700 opacity-0 group-hover:opacity-100"></span>
              </button>
            </div>

            {/* Company badge */}
            <div>
              {/* Enhanced data badge with hover effect */}
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-sm text-blue-600 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <span className="mr-2 font-medium">Helping B2B companies since</span>
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                  2018
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section - with same background style as hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background elements - same as hero */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Clean white background */}
          <div className="absolute inset-0 bg-white"></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          {/* Decorative elements */}
          <div className="absolute top-[30%] left-[15%] w-80 h-80 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>

          {/* Floating shapes */}
          <div className="absolute top-[40%] right-[20%] w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 rotate-12 animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-[15%] left-[25%] w-12 h-12 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute bottom-[30%] left-[10%] w-20 h-20 rounded-lg bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 -rotate-12 animate-[float_12s_ease-in-out_infinite]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                  Our Mission & Values
                </span>
                {/* Subtle underline */}
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] transform translate-y-2"></span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our mission is to empower B2B companies to unlock the full potential of their website traffic,
                transforming anonymous visitors into qualified sales conversations and predictable revenue.
              </p>
            </div>

            {/* Mission statement with gradient border */}
            <div className="mb-20 p-8 rounded-2xl bg-white border border-transparent bg-gradient-to-r from-[#1e56a0]/20 to-[#16c2d5]/20 bg-origin-border shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-white"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e56a0]/5 to-[#16c2d5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 transform translate-x-1/2 -translate-y-1/2 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                  Our Mission
                </h3>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  At ClikConvert, we believe every website visitor represents an opportunity. Our mission is to
                  <span className="font-semibold">
                    {" "}
                    transform how B2B companies identify and engage with their website visitors
                  </span>
                  , turning anonymous traffic into qualified sales conversations and predictable revenue. We're
                  committed to providing innovative solutions that empower sales teams to connect with the right
                  prospects at the right time.
                </p>

                {/* Stats with animated counting effect */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                    <div className="text-3xl font-bold text-blue-600">250+</div>
                    <div className="text-sm text-gray-600">B2B Companies Served</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
                    <div className="text-3xl font-bold text-indigo-600">$120M+</div>
                    <div className="text-sm text-gray-600">Revenue Generated</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                    <div className="text-3xl font-bold text-cyan-600">35%</div>
                    <div className="text-sm text-gray-600">Avg. Conversion Increase</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values heading */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                These principles guide everything we do and define how we work with our clients.
              </p>
            </div>

            {/* Interactive 3D Values Cards */}
            <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {values.map((value, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 transform hover:shadow-xl"
                  style={{ transformStyle: "preserve-3d", transition: "transform 0.3s ease" }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => setActiveValue(activeValue === index ? null : index)}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-cyan-50/0 hover:from-blue-50 hover:to-cyan-50 rounded-2xl transition-all duration-500"></div>

                  {/* Card content */}
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${value.color} bg-opacity-10`}
                    >
                      <span className="transform hover:scale-125 transition-transform duration-300">{value.icon}</span>
                    </div>

                    <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>

                    {/* Expandable content */}
                    <div
                      className={`mt-4 overflow-hidden transition-all duration-500 ${activeValue === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="pt-4 border-t border-gray-100">
                        <h5 className="font-semibold text-sm text-gray-700 mb-2">How we demonstrate this value:</h5>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">Through continuous innovation in our approach</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">
                              By measuring and reporting on tangible results
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">With transparent communication at every step</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Expand/collapse indicator */}
                    <button
                      className="mt-4 text-sm font-medium text-blue-600 flex items-center"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveValue(activeValue === index ? null : index)
                      }}
                    >
                      {activeValue === index ? "Show less" : "Learn more"}
                      <ArrowRight
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${activeValue === index ? "rotate-90" : ""}`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Link
                href="/book-call"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Learn About Our Approach
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#16c2d5] to-[#1e56a0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Mosaic Section */}
      <TeamMosaic />

      {/* Global Impact Visualization Section */}
      <RippleEffect />
    </main>
  )
}
