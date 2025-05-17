"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, X, ArrowRight, ChevronRight, BarChart2, Settings, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function WhyItWorks() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const differentiators = [
    {
      title: "Proprietary Lead Identification",
      description:
        "Our technology identifies high-intent visitors others miss, turning anonymous traffic into qualified leads.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Fully-Managed Systems",
      description: "We handle everything from copywriting to campaign management, so you can focus on closing deals.",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      title: "Built-in Deliverability Protection",
      description: "Advanced email warmup and protection ensures your messages reach decision-makers' inboxes.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Only Engaged Visitors",
      description: "No cold lists or guesswork—we only target people who've already shown interest in your business.",
      icon: <BarChart2 className="h-6 w-6" />,
    },
  ]

  return (
    <section ref={containerRef} className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="font-bold text-3xl sm:text-4xl mb-4"
            >
              Cold outreach has changed.
              <span className="block text-[#1e56a0]">ClikConvert stays ahead of the curve.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Most outreach fails because it's generic, manual, and slow. We use data, automation, and proven copy to
              break through the noise and connect with real decision-makers.
            </motion.p>
          </div>

          {/* Traditional vs ClikConvert Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Traditional Approach */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gray-100 text-gray-500 px-4 py-1 rounded-bl-lg font-medium text-sm">
                Traditional Approach
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-700">Cold Outreach Problems</h3>
                <ul className="space-y-3">
                  {[
                    "Generic messages to purchased lists",
                    "No personalization or context",
                    "Low deliverability and open rates",
                    "Manual, time-consuming process",
                    "No way to identify high-intent prospects",
                  ].map((problem, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5">
                        <X className="h-5 w-5" />
                      </div>
                      <p className="text-gray-600">{problem}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-500 italic text-sm">
                    "We wasted thousands on cold email campaigns that went nowhere. It was like shouting into the void."
                  </p>
                </div>
              </div>
            </div>

            {/* ClikConvert Approach */}
            <div className="bg-gradient-to-br from-[#1e56a0]/5 to-[#16c2d5]/5 p-6 rounded-xl border border-[#1e56a0]/20 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                ClikConvert Approach
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-[#1e56a0]">Our Solution</h3>
                <ul className="space-y-3">
                  {[
                    "Target visitors already interested in your solution",
                    "Personalized outreach based on website behavior",
                    "Advanced deliverability and inbox placement",
                    "Fully automated and managed for you",
                    "Identify and connect with actual decision-makers",
                  ].map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-gray-700">{solution}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-white rounded-lg border border-[#1e56a0]/10">
                  <p className="text-[#1e56a0] italic text-sm">
                    "ClikConvert delivered 22 qualified meetings in our first month. These were prospects who already
                    knew our brand."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">What Makes Us Different</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#1e56a0]/30"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 flex items-center justify-center text-[#1e56a0] mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-xl border border-gray-200 shadow-md p-8 mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">The Results Speak for Themselves</h3>
              <p className="text-gray-600">Our clients consistently see these outcomes:</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { value: "15-30", label: "Qualified Meetings Per Month" },
                { value: "3-5x", label: "ROI Within 60 Days" },
                { value: "93%", label: "Meeting Show Rate" },
                { value: "5x", label: "Higher Response Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-[#1e56a0]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/results" className="inline-flex items-center text-[#1e56a0] font-medium hover:underline">
                See detailed case studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
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
      </div>
    </section>
  )
}
