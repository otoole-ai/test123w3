"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronRight, Search, Users, Mail, Calendar } from "lucide-react"
import Link from "next/link"

export default function HowItWorksCards() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const steps = [
    {
      id: 1,
      title: "Identify",
      description: "We detect and identify anonymous traffic visiting your site",
      icon: <Search className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Target",
      description: "We build smart outbound email campaigns tailored to your audience",
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Engage",
      description: "Prospects receive personalized outreach at scale, written to convert",
      icon: <Mail className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Book",
      description: "We handle replies and scheduling—your calendar fills up automatically",
      icon: <Calendar className="h-6 w-6" />,
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 p-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] flex items-center justify-center text-white shadow-md mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Step {step.id}</span>
                      <h3 className="font-bold text-xl">{step.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-start">
                        <div className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-700">
                          {step.id === 1 && item === 1 && "Identify companies without form fills"}
                          {step.id === 1 && item === 2 && "Track visitor behavior and interests"}
                          {step.id === 1 && item === 3 && "Prioritize high-intent visitors"}

                          {step.id === 2 && item === 1 && "Find decision-makers at target companies"}
                          {step.id === 2 && item === 2 && "Create personalized outreach sequences"}
                          {step.id === 2 && item === 3 && "Optimize messaging based on site behavior"}

                          {step.id === 3 && item === 1 && "Send personalized, relevant messages"}
                          {step.id === 3 && item === 2 && "Follow up automatically at optimal times"}
                          {step.id === 3 && item === 3 && "Handle objections with proven templates"}

                          {step.id === 4 && item === 1 && "Qualify leads before scheduling"}
                          {step.id === 4 && item === 2 && "Book directly to your calendar"}
                          {step.id === 4 && item === 3 && "Provide context for successful calls"}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
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
