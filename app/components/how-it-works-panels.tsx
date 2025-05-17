"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Define the panel data structure
interface Panel {
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
}

export default function HowItWorksPanels() {
  // Panel data
  const panels: Panel[] = [
    {
      id: "identify",
      title: "1. Identify Anonymous Visitors",
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
      color: "from-blue-600 to-blue-700",
    },
    {
      id: "target",
      title: "2. Target High-Intent Prospects",
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
      color: "from-purple-600 to-purple-700",
    },
    {
      id: "engage",
      title: "3. Engage With Personalized Outreach",
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
      color: "from-teal-600 to-teal-700",
    },
    {
      id: "book",
      title: "4. Book Qualified Meetings",
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
      color: "from-green-600 to-green-700",
    },
  ]

  // State for the active panel
  const [activePanel, setActivePanel] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Handle auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActivePanel((prev) => (prev + 1) % panels.length)
      }, 5000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying, panels.length])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActivePanel((prev) => (prev - 1 + panels.length) % panels.length)
      } else if (e.key === "ArrowRight") {
        setActivePanel((prev) => (prev + 1) % panels.length)
      } else if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault()
        setIsPlaying((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [panels.length])

  // Handle navigation
  const goToPanel = (index: number) => {
    setActivePanel(index)
    if (isPlaying) {
      setIsPlaying(false)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }

  const nextPanel = () => {
    setActivePanel((prev) => (prev + 1) % panels.length)
    if (isPlaying) setIsPlaying(false)
  }

  const prevPanel = () => {
    setActivePanel((prev) => (prev - 1 + panels.length) % panels.length)
    if (isPlaying) setIsPlaying(false)
  }

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <section ref={containerRef} className="bg-white text-gray-900 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main headline */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We turn lost traffic into live conversations.
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ClikConvert uncovers the identities of your anonymous visitors and turns them into warm leads. Then, our
            done-for-you outreach system books qualified calls directly to your calendar.
          </p>
        </div>

        {/* Floating Cards Navigation */}
        <div className="mt-12 max-w-6xl mx-auto">
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {panels.map((panel, index) => (
              <button
                key={panel.id}
                onClick={() => goToPanel(index)}
                className={cn(
                  "px-5 py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2",
                  activePanel === index
                    ? `bg-white text-gray-900 shadow-lg border border-gray-100 transform -translate-y-1`
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100 shadow-sm",
                )}
                aria-selected={activePanel === index}
                role="tab"
              >
                <span
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-sm",
                    activePanel === index
                      ? index === 0
                        ? "bg-blue-600 text-white"
                        : index === 1
                          ? "bg-purple-600 text-white"
                          : index === 2
                            ? "bg-teal-600 text-white"
                            : "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-700",
                  )}
                >
                  {index + 1}
                </span>
                <span>{panel.title.split(".")[1].trim()}</span>
              </button>
            ))}
          </div>

          {/* Content Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-10 items-start">
                  {/* Left Column - Content */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                        <span
                          className={cn(
                            "flex items-center justify-center w-10 h-10 rounded-full text-white text-lg",
                            activePanel === 0
                              ? "bg-blue-600"
                              : activePanel === 1
                                ? "bg-purple-600"
                                : activePanel === 2
                                  ? "bg-teal-600"
                                  : "bg-green-600",
                          )}
                        >
                          {activePanel + 1}
                        </span>
                        {panels[activePanel].title.split(".")[1].trim()}
                      </h3>
                      <p className="text-gray-600 text-lg">{panels[activePanel].description}</p>
                    </div>

                    {/* Info Box */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <p className="text-gray-700">
                        Our proprietary technology identifies companies visiting your website, even if they don't fill
                        out a form. We track their behavior, pages visited, and time spent to determine their level of
                        interest.
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {panels[activePanel].stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                          <div
                            className={cn(
                              "text-3xl md:text-4xl font-bold",
                              activePanel === 0
                                ? "text-blue-600"
                                : activePanel === 1
                                  ? "text-purple-600"
                                  : activePanel === 2
                                    ? "text-teal-600"
                                    : "text-green-600",
                            )}
                          >
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Features & Visualization */}
                  <div className="space-y-8">
                    {/* Features */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <div className="space-y-4">
                        {panels[activePanel].features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="flex items-start"
                          >
                            <div
                              className={cn(
                                "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1 mr-3",
                                activePanel === 0
                                  ? "bg-blue-600"
                                  : activePanel === 1
                                    ? "bg-purple-600"
                                    : activePanel === 2
                                      ? "bg-teal-600"
                                      : "bg-green-600",
                              )}
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 3L4.5 8.5L2 6"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{feature.title}</h4>
                              <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-4">Performance Metrics:</h4>

                    {activePanel === 0 && (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Anonymous</span>
                            <span className="text-sm font-medium text-gray-900">98%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "98%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Identified</span>
                            <span className="text-sm font-medium text-gray-900">2%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "2%" }}></div>
                          </div>
                        </div>

                        <div className="text-center text-gray-600 text-sm mt-4">
                          <p>Without ClikConvert, you're missing out on 98% of your website visitors</p>
                        </div>
                      </div>
                    )}

                    {activePanel === 1 && (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">High Intent</span>
                            <span className="text-sm font-medium text-gray-900">23%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "23%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Medium Intent</span>
                            <span className="text-sm font-medium text-gray-900">45%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Low Intent</span>
                            <span className="text-sm font-medium text-gray-900">32%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "32%" }}></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activePanel === 2 && (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Response Rate</span>
                            <span className="text-sm font-medium text-gray-900">32%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "32%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Traditional Outreach</span>
                            <span className="text-sm font-medium text-gray-900">10%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                          </div>
                        </div>

                        <div className="text-center text-gray-600 text-sm mt-4">
                          <p>3.2x higher response rate than traditional outreach</p>
                        </div>
                      </div>
                    )}

                    {activePanel === 3 && (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Meeting Show Rate</span>
                            <span className="text-sm font-medium text-gray-900">92%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "92%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Qualified Leads</span>
                            <span className="text-sm font-medium text-gray-900">78%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                          </div>
                        </div>

                        <div className="text-center text-gray-600 text-sm mt-4">
                          <p>5.4x more meetings booked than traditional methods</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer with Navigation */}
              <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={prevPanel}
                  className={cn(
                    "px-4 py-2 rounded-lg transition-colors",
                    activePanel === 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 hover:bg-white hover:shadow-sm",
                  )}
                  disabled={activePanel === 0}
                  aria-label="Previous panel"
                >
                  <div className="flex items-center gap-2">
                    <ChevronLeft size={16} />
                    <span className="hidden sm:inline">Previous</span>
                  </div>
                </button>

                <div className="flex items-center space-x-2">
                  {panels.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToPanel(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activePanel === index
                          ? index === 0
                            ? "bg-blue-600 w-4"
                            : index === 1
                              ? "bg-purple-600 w-4"
                              : index === 2
                                ? "bg-teal-600 w-4"
                                : "bg-green-600 w-4"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={nextPanel}
                  className={cn(
                    "px-4 py-2 rounded-lg transition-colors",
                    activePanel === panels.length - 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 hover:bg-white hover:shadow-sm",
                  )}
                  disabled={activePanel === panels.length - 1}
                  aria-label="Next panel"
                >
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight size={16} />
                  </div>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a
              href="/book-call"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transition-all md:py-4 md:text-lg md:px-8"
            >
              Book a Strategy Call
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
