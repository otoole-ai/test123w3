"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function ProblemSection() {
  const controls = useAnimation()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [count, setCount] = useState(0)
  const [visitorCount, setVisitorCount] = useState(0)
  const [showIdentified, setShowIdentified] = useState(false)
  const [showConverted, setShowConverted] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")

      // Animate the counter from 0 to 98
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCount((prev) => {
            if (prev >= 98) {
              clearInterval(interval)
              return 98
            }
            return prev + 1
          })
        }, 20)

        return () => clearInterval(interval)
      }, 500)

      // Animate visitor dots
      const visitorTimer = setTimeout(() => {
        const interval = setInterval(() => {
          setVisitorCount((prev) => {
            if (prev >= 100) {
              clearInterval(interval)
              return 100
            }
            return prev + 1
          })
        }, 10)

        return () => clearInterval(interval)
      }, 500)

      // Show identified visitors
      const identifiedTimer = setTimeout(() => {
        setShowIdentified(true)
      }, 2500)

      // Show converted visitors
      const convertedTimer = setTimeout(() => {
        setShowConverted(true)
      }, 3500)

      return () => {
        clearTimeout(timer)
        clearTimeout(visitorTimer)
        clearTimeout(identifiedTimer)
        clearTimeout(convertedTimer)
      }
    }
  }, [isInView, controls])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * custom,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.005 * custom,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <motion.h2
              custom={0}
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              You're driving traffic. But most of it disappears without a trace.
            </motion.h2>

            <motion.div
              custom={1}
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="flex items-center"
            >
              <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] bg-clip-text text-transparent">
                {count}%
              </span>
              <span className="ml-3 text-xl text-gray-700">of visitors leave without converting</span>
            </motion.div>

            <div className="space-y-4 mt-6">
              {[
                "Lost opportunities from anonymous visitors",
                "No way to follow up with interested prospects",
                "Wasted marketing spend on traffic that doesn't convert",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  custom={index + 2}
                  initial="hidden"
                  animate={controls}
                  variants={textVariants}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              custom={5}
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="text-lg text-gray-700"
            >
              That's not a traffic problem—it's a <span className="font-semibold">follow-up problem</span>.
            </motion.p>
          </div>

          {/* Right side - Visualization */}
          <div className="relative h-[400px] md:h-[450px] bg-gray-50 rounded-xl p-4 overflow-hidden">
            {/* Website representation */}
            <div className="absolute top-4 left-4 right-4 h-16 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
              <div className="w-8 h-8 mr-2">
                <img src="/logo.png" alt="Website" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-medium">Your Website</span>
            </div>

            {/* Visitor dots container */}
            <div className="absolute top-28 left-0 right-0 bottom-0">
              {/* Generate 100 visitor dots */}
              {Array.from({ length: 100 }).map((_, i) => {
                // Determine if this dot is one of the 2% that converts
                const isConverting = i >= 98

                // Only show dots up to the current count
                if (i >= visitorCount) return null

                // Position dots randomly but with some structure
                const left = `${10 + (i % 9) * 10}%`
                const top = `${10 + Math.floor(i / 9) * 8}%`

                return (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate={controls}
                    variants={dotVariants}
                    className={`absolute w-3 h-3 rounded-full ${
                      isConverting && showIdentified ? "bg-[#1e56a0]" : "bg-gray-300"
                    }`}
                    style={{
                      left,
                      top,
                      zIndex: isConverting ? 10 : 1,
                    }}
                  />
                )
              })}

              {/* Conversion funnel */}
              <div className="absolute right-4 bottom-4 w-32 h-40 border-l-2 border-r-2 border-t-2 border-dashed border-[#1e56a0] rounded-t-3xl"></div>

              {/* Identified visitor cards */}
              <AnimatePresence>
                {showIdentified && (
                  <>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                      className="absolute right-36 top-20 bg-white p-3 rounded-lg shadow-md border border-gray-200 w-48 z-20"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#1e56a0] rounded-full flex items-center justify-center text-white mr-2">
                          ID
                        </div>
                        <div>
                          <p className="text-sm font-semibold">Visitor Identified</p>
                          <p className="text-xs text-gray-500">Company: TechCorp</p>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                {showConverted && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    className="absolute right-8 bottom-16 bg-white p-3 rounded-lg shadow-md border border-gray-200 w-48 z-20"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#16c2d5] rounded-full flex items-center justify-center text-white mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Meeting Booked</p>
                        <p className="text-xs text-gray-500">Tomorrow, 2:00 PM</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
