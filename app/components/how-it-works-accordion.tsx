"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronRight, Search, Users, Mail, Calendar, Plus, Minus } from "lucide-react"
import Link from "next/link"

export default function HowItWorksAccordion() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [activeStep, setActiveStep] = useState(1)

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

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border rounded-lg overflow-hidden ${
                  activeStep === step.id ? "border-[#1e56a0] shadow-md" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md mr-4 ${
                        activeStep === step.id
                          ? "bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-500 mr-2">Step {step.id}</span>
                        <h3 className="font-bold text-xl">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="ml-4">
                    {activeStep === step.id ? (
                      <Minus className="h-5 w-5 text-[#1e56a0]" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 bg-gradient-to-r from-[#1e56a0]/5 to-[#16c2d5]/5">
                        <ul className="space-y-3 pl-16">
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
                              <p className="text-gray-700">{detail}</p>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
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
