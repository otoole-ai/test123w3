"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

export default function HowItWorksAnimated() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: "Identify",
      description: "We detect and identify anonymous traffic visiting your site",
      longDescription:
        "Our proprietary technology identifies companies visiting your website without requiring them to fill out forms. We track their behavior, pages visited, and time spent to determine their level of interest.",
      stats: "98% of website visitors never fill out a form",
      animation: "/placeholder-o369l.png",
    },
    {
      id: 2,
      title: "Target",
      description: "We build smart outbound email campaigns tailored to your audience",
      longDescription:
        "Once we identify companies visiting your site, we find the right decision-makers and create personalized outreach campaigns based on their specific interests and behavior on your website.",
      stats: "93% accuracy in identifying the right decision makers",
      animation: "/placeholder-ay3a0.png",
    },
    {
      id: 3,
      title: "Engage",
      description: "Prospects receive personalized outreach at scale, written to convert",
      longDescription:
        "Our team crafts personalized messages that reference their specific website activity and interests. This personalized approach generates 5x higher response rates than traditional cold outreach.",
      stats: "5x higher response rate than traditional cold outreach",
      animation: "/placeholder-ylkgb.png",
    },
    {
      id: 4,
      title: "Book",
      description: "We handle replies and scheduling—your calendar fills up automatically",
      longDescription:
        "We manage all responses, handle objections, and qualify prospects before scheduling them directly on your calendar. You just show up to the calls with prepared prospects.",
      stats: "15-30 qualified meetings booked per month",
      animation: "/placeholder-etdcr.png",
    },
  ]

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="font-bold text-3xl sm:text-4xl mb-4"
          >
            Our Process: Done-for-You, Start to Finish
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We handle everything from identifying visitors to booking qualified calls on your calendar.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Step Selector - Desktop */}
          <div className="hidden md:flex justify-between mb-12 relative">
            {/* Progress Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] -translate-y-1/2 z-0"
              initial={{ width: "0%" }}
              animate={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>

            {steps.map((step) => (
              <motion.button
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 + step.id * 0.1 }}
                className={`relative z-10 flex flex-col items-center`}
                onClick={() => setActiveStep(step.id)}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-all duration-300 ${
                    activeStep >= step.id
                      ? "bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white"
                      : "bg-white text-gray-400 border border-gray-200"
                  }`}
                >
                  {step.id}
                </div>
                <span
                  className={`mt-2 font-medium transition-colors duration-300 ${
                    activeStep === step.id ? "text-[#1e56a0]" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Step Selector - Mobile */}
          <div className="md:hidden mb-8">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <h3 className="font-bold text-xl">
                Step {activeStep}: {steps[activeStep - 1].title}
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
                  disabled={activeStep === 1}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 disabled:opacity-50"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length))}
                  disabled={activeStep === steps.length}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 disabled:opacity-50"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Text Content */}
              <div className="order-2 md:order-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 hidden md:block">
                    Step {activeStep}: {steps[activeStep - 1].title}
                  </h3>
                  <p className="text-gray-600 mb-4">{steps[activeStep - 1].longDescription}</p>
                  <div className="bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 p-4 rounded-lg">
                    <p className="font-medium text-[#1e56a0]">{steps[activeStep - 1].stats}</p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
                    disabled={activeStep === 1}
                    className="px-4 py-2 rounded-lg border border-gray-200 flex items-center disabled:opacity-50"
                  >
                    <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                    Previous
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length))}
                    disabled={activeStep === steps.length}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white flex items-center disabled:opacity-50"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* Animation/Illustration */}
              <div className="order-1 md:order-2 relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden shadow-lg aspect-video flex items-center justify-center">
                  <img
                    src={steps[activeStep - 1].animation || "/placeholder.svg"}
                    alt={`Step ${activeStep}: ${steps[activeStep - 1].title}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Step Indicator */}
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium shadow-md">
                  {activeStep} of {steps.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
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
    </section>
  )
}
