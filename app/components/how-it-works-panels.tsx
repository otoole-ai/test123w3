"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
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
    <section ref={containerRef} className="bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-300">
            Most businesses focus on getting more traffic, but the real opportunity is converting the traffic you
            already have.
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 text-sm">
            <span className="mr-2">Based on data from 500+ B2B companies</span>
          </div>
        </div>

        {/* Main content area */}
        <div className="relative">
          {/* Main headline */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              We turn lost traffic into live conversations.
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              ClikConvert uncovers the identities of your anonymous visitors and turns them into warm leads. Then, our
              done-for-you outreach system books qualified calls directly to your calendar.
            </p>
          </div>

          {/* Infographic Panels */}
          <div className="mt-12">
            {/* Navigation Pills */}
            <div className="flex justify-center mb-8 overflow-x-auto no-scrollbar">
              <div className="flex space-x-2 p-1 bg-gray-800/50 rounded-full">
                {panels.map((panel, index) => (
                  <button
                    key={panel.id}
                    onClick={() => goToPanel(index)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                      activePanel === index
                        ? `bg-gradient-to-r ${panel.color} text-white`
                        : "text-gray-300 hover:text-white",
                    )}
                  >
                    {panel.title.split(".")[0]}.{" "}
                    <span className="hidden sm:inline">{panel.title.split(".")[1].trim()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Panel Content */}
            <div className="relative bg-gray-900 rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePanel}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 md:p-10"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Content */}
                    <div>
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${
                          panels[activePanel].color
                        } text-white font-bold text-xl mb-4`}
                      >
                        {activePanel + 1}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {panels[activePanel].title.split(".")[1].trim()}
                      </h3>
                      <p className="text-gray-300 mb-6">{panels[activePanel].description}</p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {panels[activePanel].stats.map((stat, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="bg-gray-800 p-4 rounded-lg"
                          >
                            <div
                              className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${panels[activePanel].color} bg-clip-text text-transparent`}
                            >
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Features */}
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
                              className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${
                                panels[activePanel].color
                              } flex items-center justify-center mt-1 mr-3`}
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
                              <h4 className="font-medium text-white">{feature.title}</h4>
                              <p className="text-sm text-gray-400">{feature.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Visualization */}
                    <div className="relative">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`bg-gradient-to-br ${panels[activePanel].color} bg-opacity-10 rounded-xl p-6 aspect-square max-w-md mx-auto flex items-center justify-center`}
                      >
                        <div className="text-center">
                          <div className="text-6xl font-bold mb-4">{activePanel + 1}</div>
                          <div className="text-xl font-medium">{panels[activePanel].title.split(".")[1].trim()}</div>

                          {/* Data visualization would go here */}
                          <div className="mt-6">
                            <div className="h-4 bg-gray-700 rounded-full w-full max-w-xs mx-auto overflow-hidden">
                              <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full bg-gradient-to-r ${panels[activePanel].color}`}
                              ></motion.div>
                            </div>
                            <div className="mt-4 text-sm text-gray-400">Conversion improvement</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex justify-between items-center p-4 border-t border-gray-800">
                <div className="flex space-x-2">
                  <button
                    onClick={togglePlayPause}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                </div>

                <div className="flex items-center space-x-1">
                  {panels.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToPanel(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activePanel === index ? "bg-white w-4" : "bg-gray-600 hover:bg-gray-500"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevPanel}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    aria-label="Previous panel"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextPanel}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    aria-label="Next panel"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
