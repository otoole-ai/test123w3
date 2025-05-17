"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, X, ChevronRight, BarChart2, Settings, Shield, Users, Mail, Target } from "lucide-react"
import Link from "next/link"

export default function WhyItWorksVisual() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

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

          {/* Visual Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative">
              {/* Traditional vs ClikConvert */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Traditional Approach */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700">Traditional Cold Outreach</h3>
                  </div>

                  <div className="relative h-48 mb-6 bg-gray-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full max-w-xs">
                        <div className="relative">
                          <div className="bg-white rounded-lg shadow-md p-4 mb-3 opacity-30">
                            <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                          </div>
                          <div className="bg-white rounded-lg shadow-md p-4 mb-3 opacity-30">
                            <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                          </div>
                          <div className="bg-white rounded-lg shadow-md p-4 opacity-30">
                            <div className="h-4 w-3/4 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-100 text-red-500 rounded-full p-3">
                              <X className="h-8 w-8" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {[
                      "Generic messages to purchased lists",
                      "No personalization or context",
                      "Low deliverability and open rates",
                      "Manual, time-consuming process",
                    ].map((problem, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5">
                          <X className="h-5 w-5" />
                        </div>
                        <p className="text-gray-600 text-sm">{problem}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 italic text-sm">
                      "We spent thousands on cold emails with almost no results."
                    </p>
                  </div>
                </div>

                {/* ClikConvert Approach */}
                <div className="bg-gradient-to-br from-[#1e56a0]/5 to-[#16c2d5]/5 p-6 rounded-xl border border-[#1e56a0]/20 shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] flex items-center justify-center text-white mr-4">
                      <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e56a0]">ClikConvert Approach</h3>
                  </div>

                  <div className="relative h-48 mb-6 bg-white rounded-lg overflow-hidden border border-[#1e56a0]/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full max-w-xs">
                        <div className="relative">
                          <div className="bg-white rounded-lg shadow-md p-4 mb-3 border-l-4 border-[#1e56a0]">
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 rounded-full bg-[#1e56a0]/10 flex items-center justify-center mr-2">
                                <span className="text-xs font-bold text-[#1e56a0]">TC</span>
                              </div>
                              <div className="text-sm font-medium">TechCorp Inc.</div>
                            </div>
                            <div className="h-3 w-3/4 bg-gray-100 rounded mb-1"></div>
                            <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
                          </div>
                          <div className="bg-white rounded-lg shadow-md p-4 mb-3">
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 rounded-full bg-[#16c2d5]/10 flex items-center justify-center mr-2">
                                <span className="text-xs font-bold text-[#16c2d5]">AC</span>
                              </div>
                              <div className="text-sm font-medium">Acme Corp</div>
                            </div>
                            <div className="h-3 w-3/4 bg-gray-100 rounded mb-1"></div>
                            <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
                          </div>
                          <div className="absolute bottom-0 right-0 bg-[#1e56a0] text-white rounded-full p-1 shadow-lg">
                            <CheckCircle className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {[
                      "Target visitors already interested in your solution",
                      "Personalized outreach based on website behavior",
                      "Advanced deliverability and inbox placement",
                      "Fully automated and managed for you",
                    ].map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <p className="text-gray-700 text-sm">{solution}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 p-3 bg-white rounded-lg border border-[#1e56a0]/10">
                    <p className="text-[#1e56a0] italic text-sm">
                      "ClikConvert delivered 22 qualified meetings in our first month."
                    </p>
                  </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Proprietary Lead Identification Tech",
                  description:
                    "Our technology identifies high-intent visitors others miss, turning anonymous traffic into qualified leads.",
                  icon: <Users className="h-6 w-6" />,
                  color: "from-[#1e56a0] to-[#1e56a0]",
                },
                {
                  title: "Fully-Managed Systems and Copywriting",
                  description:
                    "We handle everything from copywriting to campaign management, so you can focus on closing deals.",
                  icon: <Settings className="h-6 w-6" />,
                  color: "from-[#16c2d5] to-[#16c2d5]",
                },
                {
                  title: "Built-in Warmup and Deliverability Protection",
                  description:
                    "Advanced email warmup and protection ensures your messages reach decision-makers' inboxes.",
                  icon: <Shield className="h-6 w-6" />,
                  color: "from-[#1e56a0] to-[#16c2d5]",
                },
                {
                  title: "No Cold Lists or Guesswork",
                  description:
                    "We only target people who've already shown interest in your business by visiting your website.",
                  icon: <BarChart2 className="h-6 w-6" />,
                  color: "from-[#16c2d5] to-[#1e56a0]",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#1e56a0]/30 flex"
                >
                  <div className="mr-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
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
