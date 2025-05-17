"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronRight, Search, Users, Mail, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HowItWorksTimeline() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [activeStep, setActiveStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Auto-advance steps when in view
  useEffect(() => {
    if (isInView && activeStep < steps.length) {
      const timer = setTimeout(() => {
        setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView, activeStep])

  const steps = [
    {
      id: 1,
      title: "Identify",
      description: "We detect and identify anonymous traffic visiting your site",
      icon: <Search className="h-6 w-6" />,
      color: "from-[#1e56a0] to-[#16c2d5]",
    },
    {
      id: 2,
      title: "Target",
      description: "We build smart outbound email campaigns tailored to your audience",
      icon: <Users className="h-6 w-6" />,
      color: "from-[#1e56a0] to-[#16c2d5]",
    },
    {
      id: 3,
      title: "Engage",
      description: "Prospects receive personalized outreach at scale, written to convert",
      icon: <Mail className="h-6 w-6" />,
      color: "from-[#1e56a0] to-[#16c2d5]",
    },
    {
      id: 4,
      title: "Book",
      description: "We handle replies and scheduling—your calendar fills up automatically",
      icon: <Calendar className="h-6 w-6" />,
      color: "from-[#1e56a0] to-[#16c2d5]",
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

        {/* Desktop Timeline */}
        {!isMobile && (
          <div className="hidden md:block relative pt-16">
            {/* Timeline Track - MOVED UP */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200"></div>

            {/* Timeline Progress - MOVED UP */}
            <motion.div
              className="absolute top-8 left-0 h-1 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>

            {/* Steps */}
            <div className="flex justify-between relative">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center relative">
                  {/* Step Circle - POSITIONED ABOVE THE LINE */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{
                      scale: activeStep >= index ? 1 : 0.5,
                      opacity: activeStep >= index ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute -top-8 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-4 z-10 shadow-lg`}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step Content - NOW POSITIONED BELOW THE LINE AND ICONS */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: activeStep >= index ? 1 : 0.5,
                      y: activeStep >= index ? 0 : 20,
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-center w-48 mt-12"
                  >
                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </motion.div>

                  {/* Checkmark for completed steps */}
                  <AnimatePresence>
                    {activeStep > index && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute -top-8 right-0 bg-green-500 text-white rounded-full p-1 shadow-md"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Timeline */}
        {isMobile && (
          <div className="md:hidden">
            <div className="relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeStep >= index ? 1 : 0.5,
                    y: activeStep >= index ? 0 : 20,
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="mb-12 flex items-start"
                >
                  {/* Step Circle with Number */}
                  <div className="relative mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] flex items-center justify-center text-white shadow-md z-10">
                      {step.icon}
                    </div>

                    {/* Checkmark for completed steps */}
                    <AnimatePresence>
                      {activeStep > index && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-1 shadow-md"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Step Content - Completely separate from the timeline line */}
                  <div className="flex-1">
                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Vertical line connecting steps - positioned behind content */}
              <div
                className="absolute top-0 left-6 h-full w-0.5 bg-gray-200 -z-10"
                style={{ transform: "translateX(-50%)" }}
              ></div>
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && activeStep === steps.length - 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
