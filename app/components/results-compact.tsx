"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, TrendingUp, BarChart, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function ResultsCompact() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section ref={containerRef} className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="font-bold text-3xl sm:text-4xl mb-4"
            >
              We don't promise meetings. We guarantee them.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Every campaign comes with a performance guarantee. If we don't deliver qualified, booked calls—we don't
              stop until we do.
            </motion.p>
          </div>

          {/* Results Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: <Calendar className="h-10 w-10" />,
                title: "15–30 booked calls/month",
                color: "from-[#1e56a0] to-[#1e56a0]",
              },
              {
                icon: <TrendingUp className="h-10 w-10" />,
                title: "3–5x ROI within the first 60 days",
                color: "from-[#16c2d5] to-[#16c2d5]",
              },
              {
                icon: <BarChart className="h-10 w-10" />,
                title: "Higher lead quality compared to ads or cold lists",
                color: "from-[#1e56a0] to-[#16c2d5]",
              },
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`h-10 w-10 text-[#1e56a0]`}>{result.icon}</div>
                </div>
                <h3 className="font-bold text-xl">{result.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-lg border border-gray-100 max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <blockquote className="text-xl italic text-gray-700 text-center">
              "We didn't need more traffic—we needed more action. ClikConvert delivered qualified meetings with
              decision-makers who were already familiar with our brand."
            </blockquote>
            <div className="mt-4 text-center">
              <p className="font-medium">— Sarah Johnson, VP of Marketing at TechSolutions Inc.</p>
            </div>
          </motion.div>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <Link href="/results" className="inline-flex items-center text-[#1e56a0] font-medium hover:underline">
              See our results <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
