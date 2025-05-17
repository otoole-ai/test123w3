"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, TrendingUp, BarChart, Award, Star, ChevronRight, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ResultsCredibility() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const testimonials = [
    {
      quote:
        "We didn't need more traffic—we needed more action. ClikConvert delivered qualified meetings with decision-makers who were already familiar with our brand.",
      author: "Sarah Johnson",
      title: "VP of Marketing",
      company: "TechSolutions Inc.",
      image: "/testimonial-1.png",
    },
    {
      quote:
        "After wasting thousands on ads that brought low-quality leads, ClikConvert helped us connect with prospects who were already visiting our site. Game changer.",
      author: "Michael Chen",
      title: "CEO",
      company: "Growth Partners",
      image: "/testimonial-2.png",
    },
    {
      quote:
        "The ROI speaks for itself. Within 45 days, we closed 3 enterprise deals from meetings ClikConvert booked for us. Best marketing investment we've made.",
      author: "Jessica Williams",
      title: "Sales Director",
      company: "SaaS Accelerator",
      image: "/testimonial-3.png",
    },
  ]

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
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

          {/* Results Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: <Calendar className="h-10 w-10" />,
                title: "15–30 booked calls/month",
                description: "Qualified meetings with decision-makers, not gatekeepers",
                color: "from-[#1e56a0] to-[#1e56a0]",
              },
              {
                icon: <TrendingUp className="h-10 w-10" />,
                title: "3–5x ROI within the first 60 days",
                description: "Measurable return on your investment, guaranteed",
                color: "from-[#16c2d5] to-[#16c2d5]",
              },
              {
                icon: <BarChart className="h-10 w-10" />,
                title: "Higher lead quality",
                description: "Compared to ads or cold lists, with better conversion rates",
                color: "from-[#1e56a0] to-[#16c2d5]",
              },
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${result.color} flex items-center justify-center text-white shadow-md`}
                  >
                    {result.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{result.title}</h3>
                <p className="text-gray-600 text-center">{result.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">What Our Clients Say</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-md relative"
                >
                  <div className="absolute top-4 right-4 text-[#16c2d5]">
                    <Quote className="h-8 w-8 opacity-20" />
                  </div>
                  <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.title}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-[#1e56a0]/5 to-[#16c2d5]/5 rounded-xl p-8 border border-[#1e56a0]/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Trusted by Growing B2B Companies</h3>
                <p className="text-gray-600">Companies like yours rely on ClikConvert to drive qualified meetings</p>
              </div>

              {/* Client Logos */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[1, 2, 3, 4].map((logo) => (
                  <div key={logo} className="bg-white p-4 rounded-lg flex items-center justify-center h-20">
                    <div className="text-gray-300 font-medium">Client Logo</div>
                  </div>
                ))}
              </div>

              {/* Satisfaction Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "97%", label: "Client Satisfaction" },
                  { value: "93%", label: "Meeting Show Rate" },
                  { value: "85%", label: "Clients Renew" },
                  { value: "4.9/5", label: "Average Rating" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="text-2xl font-bold text-[#1e56a0]">{stat.value}</div>
                      {stat.label === "Average Rating" && (
                        <div className="flex ml-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-4 w-4 text-yellow-400"
                              fill={star <= 5 ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Guarantee Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
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
                    href="/guarantee"
                    className="inline-flex items-center text-[#1e56a0] font-medium hover:underline"
                  >
                    Learn more about our guarantee
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
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
