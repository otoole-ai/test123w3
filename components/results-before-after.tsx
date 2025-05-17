"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ChevronRight, Award, Star, Play, ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ResultsBeforeAfter() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const controls = useAnimation()
  const [activeTestimonial, setActiveTestimonial] = useState(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "VP of Marketing",
      company: "TechSolutions Inc.",
      image: "/testimonial-1.png",
      video: "/video-placeholder.mp4",
      quote:
        "We didn't need more traffic—we needed more action. ClikConvert delivered qualified meetings with decision-makers who were already familiar with our brand.",
      before: {
        meetings: 5,
        conversionRate: "1.2%",
        leadQuality: "Low",
      },
      after: {
        meetings: 28,
        conversionRate: "4.7%",
        leadQuality: "High",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CEO",
      company: "Growth Partners",
      image: "/testimonial-2.png",
      video: "/video-placeholder.mp4",
      quote:
        "After wasting thousands on ads that brought low-quality leads, ClikConvert helped us connect with prospects who were already visiting our site. Game changer.",
      before: {
        meetings: 8,
        conversionRate: "1.8%",
        leadQuality: "Medium",
      },
      after: {
        meetings: 32,
        conversionRate: "5.2%",
        leadQuality: "Very High",
      },
    },
    {
      id: 3,
      name: "Jessica Williams",
      title: "Sales Director",
      company: "SaaS Accelerator",
      image: "/testimonial-3.png",
      video: "/video-placeholder.mp4",
      quote:
        "The ROI speaks for itself. Within 45 days, we closed 3 enterprise deals from meetings ClikConvert booked for us. Best marketing investment we've made.",
      before: {
        meetings: 3,
        conversionRate: "0.9%",
        leadQuality: "Very Low",
      },
      after: {
        meetings: 22,
        conversionRate: "4.1%",
        leadQuality: "High",
      },
    },
  ]

  // Handle slider movement
  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value)
  }

  // Handle slider touch/mouse events for mobile
  const handleSliderTouch = (e) => {
    const slider = e.currentTarget
    const rect = slider.getBoundingClientRect()
    const offsetX = e.type.includes("touch") ? e.touches[0].clientX - rect.left : e.clientX - rect.left
    const newPosition = Math.max(0, Math.min(100, (offsetX / rect.width) * 100))
    setSliderPosition(newPosition)
  }

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 text-[#1e56a0] mb-4"
            >
              <Award className="h-4 w-4 mr-2" />
              Proven Results
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold text-3xl sm:text-4xl mb-4"
            >
              See the transformation.
              <span className="block text-[#1e56a0]">Experience the difference.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Our clients consistently see dramatic improvements in their lead generation and meeting booking metrics.
              Explore their before and after stories.
            </motion.p>
          </div>

          {/* Interactive Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-gray-900 to-[#1e56a0] rounded-xl p-6 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  Before vs After: See the ClikConvert Difference
                </h3>

                {/* Slider Control */}
                <div className="mb-8">
                  <div className="relative h-12 flex items-center justify-center mb-2">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-sm font-medium">Before</div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm font-medium">After</div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition}
                      onChange={handleSliderChange}
                      className="w-3/4 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#16c2d5]"
                    />
                  </div>
                  <div className="text-center text-sm">Drag the slider to see the transformation</div>
                </div>

                {/* Before/After Comparison */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Left Side - Metrics */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden">
                    <h4 className="text-xl font-bold mb-4">Key Performance Metrics</h4>

                    <div className="space-y-4">
                      {/* Monthly Meetings */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Monthly Meetings</span>
                          <span className="font-bold">
                            {sliderPosition < 50
                              ? "5-8"
                              : `${Math.round(15 + ((sliderPosition - 50) / 50) * 15)}-${Math.round(20 + ((sliderPosition - 50) / 50) * 10)}`}
                          </span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#16c2d5] to-[#16c2d5]"
                            style={{ width: `${sliderPosition < 50 ? 20 : 20 + ((sliderPosition - 50) / 50) * 80}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Conversion Rate */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Conversion Rate</span>
                          <span className="font-bold">
                            {sliderPosition < 50
                              ? "0.9-1.8%"
                              : `${(1.8 + ((sliderPosition - 50) / 50) * 3.4).toFixed(1)}%`}
                          </span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#16c2d5] to-[#16c2d5]"
                            style={{ width: `${sliderPosition < 50 ? 15 : 15 + ((sliderPosition - 50) / 50) * 85}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Lead Quality */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Lead Quality</span>
                          <span className="font-bold">
                            {sliderPosition < 50 ? "Low" : sliderPosition < 75 ? "High" : "Very High"}
                          </span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#16c2d5] to-[#16c2d5]"
                            style={{ width: `${sliderPosition < 50 ? 25 : 25 + ((sliderPosition - 50) / 50) * 75}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* ROI */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">ROI</span>
                          <span className="font-bold">
                            {sliderPosition < 50 ? "Negative" : sliderPosition < 75 ? "2-3x" : "3-5x"}
                          </span>
                        </div>
                        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#16c2d5] to-[#16c2d5]"
                            style={{ width: `${sliderPosition < 50 ? 10 : 10 + ((sliderPosition - 50) / 50) * 90}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Visual */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center">
                    <div className="relative w-full h-48 md:h-64">
                      {/* Before Image */}
                      <div
                        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                        style={{ opacity: sliderPosition < 50 ? 1 : 0 }}
                      >
                        <div className="text-center">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="text-4xl">📉</span>
                          </div>
                          <p className="font-medium">Missed Opportunities</p>
                          <p className="text-sm text-white/70">98% of visitors leave without converting</p>
                        </div>
                      </div>

                      {/* After Image */}
                      <div
                        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                        style={{ opacity: sliderPosition >= 50 ? 1 : 0 }}
                      >
                        <div className="text-center">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#16c2d5]/30 flex items-center justify-center">
                            <span className="text-4xl">📈</span>
                          </div>
                          <p className="font-medium">Booked Meetings</p>
                          <p className="text-sm text-white/70">15-30 qualified calls per month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slider Caption */}
                <div className="text-center">
                  <p className="text-xl font-bold mb-2">
                    {sliderPosition < 30
                      ? "Before: Wasted website traffic and missed opportunities"
                      : sliderPosition < 70
                        ? "During: Implementing ClikConvert's identification and outreach system"
                        : "After: Qualified meetings with interested prospects"}
                  </p>
                  <p className="text-white/70">
                    {sliderPosition < 30
                      ? "Most businesses lose 98% of their website visitors without any way to follow up."
                      : sliderPosition < 70
                        ? "ClikConvert identifies your anonymous visitors and engages them with personalized outreach."
                        : "Your calendar fills with qualified meetings from prospects who already know your brand."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Video Wall */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Hear From Our Clients</h3>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`bg-white rounded-xl border ${activeTestimonial === testimonial.id ? "border-[#1e56a0] shadow-lg" : "border-gray-200 shadow-md"} overflow-hidden`}
                >
                  {/* Video Thumbnail */}
                  <div
                    className="relative h-48 bg-gradient-to-br from-gray-900 to-[#1e56a0] cursor-pointer overflow-hidden"
                    onClick={() => setActiveTestimonial(activeTestimonial === testimonial.id ? null : testimonial.id)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover opacity-70"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="text-white">
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-white/80">
                          {testimonial.title}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="p-4">
                    <div className="flex mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic mb-4">"{testimonial.quote}"</p>

                    {/* Before/After Metrics - Only show when active */}
                    {activeTestimonial === testimonial.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-100"
                      >
                        <h5 className="font-medium text-sm mb-3">Results Achieved:</h5>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <div className="text-gray-500 mb-1">Before</div>
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span>Meetings/mo:</span>
                                <span className="font-medium">{testimonial.before.meetings}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Conv. Rate:</span>
                                <span className="font-medium">{testimonial.before.conversionRate}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Lead Quality:</span>
                                <span className="font-medium">{testimonial.before.leadQuality}</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#1e56a0]/5 p-3 rounded-lg">
                            <div className="text-[#1e56a0] mb-1">After</div>
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span>Meetings/mo:</span>
                                <span className="font-medium">{testimonial.after.meetings}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Conv. Rate:</span>
                                <span className="font-medium">{testimonial.after.conversionRate}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Lead Quality:</span>
                                <span className="font-medium">{testimonial.after.leadQuality}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => setActiveTestimonial(activeTestimonial === testimonial.id ? null : testimonial.id)}
                      className="mt-3 text-[#1e56a0] text-sm font-medium flex items-center hover:underline"
                    >
                      {activeTestimonial === testimonial.id ? "Hide details" : "See results"}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${activeTestimonial === testimonial.id ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/results" className="inline-flex items-center text-[#1e56a0] font-medium hover:underline">
                View all client success stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Guarantee Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="relative bg-gradient-to-br from-[#1e56a0] to-[#16c2d5] rounded-xl p-6 md:p-10 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center">
                {/* Guarantee Badge */}
                <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white text-[#1e56a0] flex flex-col items-center justify-center shadow-lg border-4 border-white"
                  >
                    <Award className="h-10 w-10 mb-1" />
                    <div className="font-bold text-lg">100%</div>
                    <div className="font-bold text-lg">GUARANTEED</div>
                  </motion.div>
                </div>

                {/* Guarantee Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Performance Guarantee</h3>
                  <p className="mb-6">
                    If we don't deliver the agreed number of qualified meetings within the first 60 days, we'll continue
                    working at no additional cost until we do. No excuses, no fine print—just results.
                  </p>
                  <Link
                    href="/book-call"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-[#1e56a0] font-medium hover:bg-white/90 transition-colors duration-200"
                  >
                    Book a Free Strategy Call
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <Link
              href="/book-call"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium hover:from-[#174785] hover:to-[#14afc0] transition-colors duration-200"
            >
              Book a Free Strategy Call
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Add CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 20px 20px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        }
      `}</style>
    </section>
  )
}
