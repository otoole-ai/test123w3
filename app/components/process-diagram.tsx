"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Search, Users, Mail, Calendar, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ProcessDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useState(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }
      checkMobile()
      window.addEventListener("resize", checkMobile)
      return () => window.removeEventListener("resize", checkMobile)
    }
  })

  const steps = [
    {
      id: 1,
      title: "Identify",
      description: "We detect and identify anonymous traffic visiting your site",
      icon: <Search className="h-6 w-6" />,
      details: [
        "Proprietary visitor identification technology",
        "Company-level tracking without cookies",
        "Behavior analysis to identify intent",
      ],
    },
    {
      id: 2,
      title: "Target",
      description: "We build smart outbound email campaigns tailored to your audience",
      icon: <Users className="h-6 w-6" />,
      details: ["Decision-maker identification", "Personalized campaign creation", "Multi-channel approach"],
    },
    {
      id: 3,
      title: "Engage",
      description: "Prospects receive personalized outreach at scale, written to convert",
      icon: <Mail className="h-6 w-6" />,
      details: ["Proven messaging frameworks", "Automated follow-up sequences", "A/B testing for optimization"],
    },
    {
      id: 4,
      title: "Book",
      description: "We handle replies and scheduling—your calendar fills up automatically",
      icon: <Calendar className="h-6 w-6" />,
      details: ["Qualification before booking", "Direct calendar integration", "Pre-call briefing documents"],
    },
  ]

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-3xl sm:text-4xl mb-4"
          >
            Our Process: Done-for-You, Start to Finish
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We handle everything from identifying visitors to booking qualified calls on your calendar.
          </motion.p>
        </div>

        {/* Process Diagram - Desktop */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Central Flow Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] -translate-y-1/2 origin-left"
          ></motion.div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative"
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Step Circle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                </div>

                {/* Step Card */}
                <div
                  className={`pt-12 pb-6 px-4 bg-white rounded-lg border ${
                    activeStep === step.id ? "border-[#1e56a0]" : "border-gray-200"
                  } shadow-md transition-all duration-300 ${activeStep === step.id ? "shadow-lg -translate-y-2" : ""}`}
                >
                  <h3 className="font-bold text-xl mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center mb-4">{step.description}</p>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {activeStep === step.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 mt-4">
                          {step.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                  <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <p className="text-sm text-gray-700">{detail}</p>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Arrow to next step */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="absolute top-1/2 -right-4 -translate-y-1/2 z-10"
                  >
                    <ArrowRight className="h-8 w-8 text-[#1e56a0]" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Diagram - Mobile */}
        <div className="md:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden"
              >
                {/* Step Header */}
                <div className="bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 p-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] flex items-center justify-center text-white shadow-md mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{step.title}</h3>
                      <p className="text-sm text-gray-700">Step {step.id} of 4</p>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="p-4">
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  {/* Expandable Details */}
                  <details className="group">
                    <summary className="flex items-center cursor-pointer text-[#1e56a0] font-medium mb-2">
                      <span>Learn more</span>
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform group-open:rotate-90" />
                    </summary>
                    <ul className="space-y-2 mt-4 pl-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-gray-700">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>

                {/* Arrow to next step */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2 bg-gray-50">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
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
