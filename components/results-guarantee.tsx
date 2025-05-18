"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ResultsGuarantee() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section ref={containerRef} className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full bg-gradient-to-br from-[#1e56a0]/30 to-[#16c2d5]/30 blur-[60px] opacity-70"></div>
        <div className="absolute bottom-[10%] left-[5%] w-80 h-80 rounded-full bg-gradient-to-br from-[#16c2d5]/30 to-[#1e56a0]/30 blur-[70px] opacity-70"></div>
        <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-lg bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 rotate-12 animate-[float_10s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[30%] right-[15%] w-20 h-20 rounded-lg bg-gradient-to-br from-[#16c2d5]/10 to-[#1e56a0]/10 -rotate-12 animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute top-[60%] left-[20%] w-12 h-12 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 animate-[float_9s_ease-in-out_infinite]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
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
              Performance Guarantee
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold text-3xl sm:text-4xl mb-4"
            >
              We don't promise meetings.
              <span className="block text-[#1e56a0]">We guarantee them.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Every campaign comes with a performance guarantee. If we don't deliver qualified, booked calls—we don't
              stop until we do.
            </motion.p>
          </div>

          {/* Guarantee Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl border-2 border-[#1e56a0] p-8 mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-[#1e56a0] text-white px-4 py-2 rounded-bl-lg font-medium">
              Guaranteed
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="w-24 h-24 rounded-full bg-[#1e56a0]/10 flex items-center justify-center">
                  <Award className="h-12 w-12 text-[#1e56a0]" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-3 text-center md:text-left">Our Performance Guarantee</h3>
                <p className="text-gray-600 mb-4">
                  If we don't deliver the agreed number of qualified meetings within the first 60 days, we'll continue
                  working at no additional cost until we do. No excuses, no fine print—just results.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link
                    href="/book-call"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium hover:from-[#174785] hover:to-[#14afc0] transition-colors duration-200"
                  >
                    Book a Free Strategy Call
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
