"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronRight, Search, Users, Mail, Calendar } from "lucide-react"
import Link from "next/link"

export default function HowItWorksBlocks() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [activeStep, setActiveStep] = useState(null)

  const steps = [
    {
      id: 1,
      title: "Identify",
      description: "We detect and identify anonymous traffic visiting your site",
      icon: <Search className="h-6 w-6" />,
      details:
        "Our proprietary technology identifies companies visiting your website without requiring them to fill out forms. We track their behavior, pages visited, and time spent to determine their level of interest.",
      stat: "98% of website visitors never fill out a form",
    },
    {
      id: 2,
      title: "Target",
      description: "We build smart outbound email campaigns tailored to your audience",
      icon: <Users className="h-6 w-6" />,
      details:
        "Once we identify companies visiting your site, we find the right decision-makers and create personalized outreach campaigns based on their specific interests and behavior on your website.",
      stat: "93% accuracy in identifying the right decision makers",
    },
    {
      id: 3,
      title: "Engage",
      description: "Prospects receive personalized outreach at scale, written to convert",
      icon: <Mail className="h-6 w-6" />,
      details:
        "Our team crafts personalized messages that reference their specific website activity and interests. This personalized approach generates 5x higher response rates than traditional cold outreach.",
      stat: "5x higher response rate than traditional cold outreach",
    },
    {
      id: 4,
      title: "Book",
      description: "We handle replies and scheduling—your calendar fills up automatically",
      icon: <Calendar className="h-6 w-6" />,
      details:
        "We manage all responses, handle objections, and qualify prospects before scheduling them directly on your calendar. You just show up to the calls with prepared prospects.",
      stat: "15-30 qualified meetings booked per month",
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
          {/* Step Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {steps.map((step) => (
              <motion.button
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 + step.id * 0.1 }}
                className={`relative p-6 rounded-xl text-center transition-all duration-300 ${
                  activeStep === step.id
                    ? "bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white shadow-lg"
                    : "bg-white border border-gray-200 hover:border-[#1e56a0]/50 hover:shadow-md"
                }`}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
                      activeStep === step.id
                        ? "bg-white text-[#1e56a0]"
                        : "bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 text-[#1e56a0]"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span className="text-sm font-medium mb-1">Step {step.id}</span>
                  <h3 className="font-bold text-xl">{step.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Step Details */}
          <AnimatePresence mode="wait">
            {activeStep && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 mb-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] flex items-center justify-center text-white shadow-md mr-4">
                    {steps[activeStep - 1].icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Step {activeStep}</span>
                    <h3 className="font-bold text-2xl">{steps[activeStep - 1].title}</h3>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-6">{steps[activeStep - 1].details}</p>

                <div className="bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 p-4 rounded-lg">
                  <p className="font-medium text-[#1e56a0]">{steps[activeStep - 1].stat}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Default view when no step is selected */}
          {!activeStep && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center bg-gray-50 rounded-xl p-8 mb-8"
            >
              <p className="text-lg text-gray-600">Select a step above to learn more about our process.</p>
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
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
