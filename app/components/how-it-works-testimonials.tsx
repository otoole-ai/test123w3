"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronRight, Search, Users, Mail, Calendar, Quote } from "lucide-react"
import Link from "next/link"

export default function HowItWorksTestimonials() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const steps = [
    {
      id: 1,
      title: "Identify",
      description: "We detect and identify anonymous traffic visiting your site",
      icon: <Search className="h-6 w-6" />,
      color: "from-[#1e56a0] to-[#16c2d5]",
      testimonial: {
        quote:
          "We were shocked to see how many potential customers were visiting our site without converting. ClikConvert revealed who they were and turned them into leads.",
        author: "Sarah Johnson",
        company: "TechSolutions Inc.",
        image: "/professional-woman-headshot.png",
      },
    },
    {
      id: 2,
      title: "Target",
      description: "We build smart outbound email campaigns tailored to your audience",
      icon: <Users className="h-6 w-6" />,
      color: "from-[#1e56a0] to-[#16c2d5]",
      testimonial: {
        quote:
          "The targeting was spot-on. They found decision-makers at companies we'd been trying to reach for months, all based on website visits we didn't even know about.",
        author: "Michael Chen",
        company: "Growth Partners",
        image: "/professional-man-headshot.png",
      },
    },
    {
      id: 3,
      title: "Engage",
      description: "Prospects receive personalized outreach at scale, written to convert",
      icon: <Mail className="h-6 w-6" />,
      color: "from-[#1e56a0] to-[#16c2d5]",
      testimonial: {
        quote:
          "The personalized messages they sent were incredible. Prospects thought we'd been watching their every move on our site—which technically, we had been!",
        author: "Alex Rivera",
        company: "MarketBoost",
        image: "/professional-headshot.png",
      },
    },
    {
      id: 4,
      title: "Book",
      description: "We handle replies and scheduling—your calendar fills up automatically",
      icon: <Calendar className="h-6 w-6" />,
      color: "from-[#1e56a0] to-[#16c2d5]",
      testimonial: {
        quote:
          "I literally just show up to the calls. ClikConvert handles everything else—from identifying prospects to qualifying them and getting them on my calendar.",
        author: "Jessica Williams",
        company: "SaaS Accelerator",
        image: "/professional-woman-headshot.png",
      },
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
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-16 ${index !== steps.length - 1 ? "pb-16" : ""}`}
            >
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#1e56a0] to-[#16c2d5] hidden md:block"></div>
              )}

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Step Content */}
                <div className="relative">
                  <div className="flex items-start">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] flex items-center justify-center text-white shadow-lg mr-6 flex-shrink-0">
                      <div className="text-2xl font-bold">{step.id}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>

                      {/* Feature Points */}
                      <ul className="space-y-2">
                        {[1, 2, 3].map((item) => (
                          <li key={item} className="flex items-start">
                            <div className="h-6 w-6 text-[#16c2d5] mr-3 flex-shrink-0 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <p className="text-gray-700">
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
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-md relative">
                  <div className="absolute top-6 left-6 text-[#1e56a0]/10">
                    <Quote className="h-16 w-16" />
                  </div>
                  <div className="relative">
                    <p className="text-gray-700 italic mb-6 relative z-10">"{step.testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={step.testimonial.image || "/placeholder.svg"}
                          alt={step.testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{step.testimonial.author}</div>
                        <div className="text-sm text-gray-500">{step.testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto mt-8 mb-16 bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">The Results Speak for Themselves</h3>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-3xl font-bold text-[#1e56a0]">15-30</div>
              <div className="text-gray-600">Booked Calls/Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1e56a0]">3-5x</div>
              <div className="text-gray-600">ROI in 60 Days</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1e56a0]">93%</div>
              <div className="text-gray-600">Meeting Show Rate</div>
            </div>
          </div>
          <p className="text-gray-700">
            Our clients consistently see these results because we handle the entire process from start to finish.
          </p>
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
    </section>
  )
}
