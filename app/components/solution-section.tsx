"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Users, Mail, Calendar, Search, UserCheck, ArrowRight, ChevronRight, Star } from "lucide-react"
import Link from "next/link"

export default function SolutionSection() {
  const containerRef = useRef(null)
  const [activeStep, setActiveStep] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-[#f8faff] py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements - monochromatic */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-[#1e56a0]/5 rounded-full"></div>
      <div className="absolute top-20 right-20 w-8 h-8 bg-[#1e56a0]/10 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#1e56a0]/5 rounded-full"></div>
      <div className="absolute bottom-24 left-20 w-6 h-6 bg-[#1e56a0]/10 rounded-full"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1e56a0]"
            >
              We turn lost traffic into live conversations.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#1e56a0]/70 max-w-3xl mx-auto"
            >
              ClikConvert uncovers the identities of your anonymous visitors and turns them into warm leads. Then, our
              done-for-you outreach system books qualified calls directly to your calendar.
            </motion.p>
          </div>

          {/* Connected timeline (visible on desktop) */}
          {!isMobile && (
            <div className="absolute left-1/2 top-[240px] bottom-[120px] w-0.5 bg-[#1e56a0]/10 hidden md:block"></div>
          )}

          {/* Connected timeline (visible on mobile) */}
          {isMobile && <div className="absolute left-6 top-[240px] bottom-[120px] w-0.5 bg-[#1e56a0]/10"></div>}

          {/* Step-by-step process */}
          <div className="space-y-16 md:space-y-24 relative">
            <StepItem
              number={1}
              title="Identify Anonymous Visitors"
              description="Our proprietary technology identifies the companies visiting your website, even if they don't fill out a form."
              icon={<Search className="w-full h-full p-4 text-white" />}
              stats={[
                { label: "of website visitors", value: "98%", suffix: "", highlight: true },
                { label: "never fill out a form", value: "", suffix: "", highlight: false },
              ]}
              isActive={activeStep === 1}
            >
              <div className="relative h-64 md:h-80 bg-[#f0f5ff] rounded-lg overflow-hidden border border-[#1e56a0]/10 shadow-sm transition-all duration-500 hover:shadow-md group">
                {/* Animated background - more subtle */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-sm">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="bg-white rounded-lg shadow-sm border border-[#1e56a0]/10 p-4 mb-3 mx-auto transform transition-transform duration-300 group-hover:scale-105 hover:shadow-md"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 mr-3">
                          <Users size={20} />
                        </div>
                        <div>
                          <div className="font-medium text-[#1e56a0]">TechCorp Inc.</div>
                          <div className="text-xs text-[#1e56a0]/60">Visited your pricing page</div>
                        </div>
                        <div className="ml-auto">
                          <motion.div
                            animate={{ rotate: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                            className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600"
                          >
                            <Star size={12} />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-white rounded-lg shadow-sm border border-[#1e56a0]/10 p-4 mb-3 mx-auto transform transition-transform duration-300 group-hover:scale-105 hover:shadow-md"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 mr-3">
                          <Users size={20} />
                        </div>
                        <div>
                          <div className="font-medium text-[#1e56a0]">Global Solutions Ltd.</div>
                          <div className="text-xs text-[#1e56a0]/60">Viewed 5 pages in 3 minutes</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="bg-white rounded-lg shadow-sm border border-[#1e56a0]/10 p-4 mx-auto transform transition-transform duration-300 group-hover:scale-105 hover:shadow-md"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 mr-3">
                          <Users size={20} />
                        </div>
                        <div>
                          <div className="font-medium text-[#1e56a0]">Acme Corp</div>
                          <div className="text-xs text-[#1e56a0]/60">Returned 3 times this week</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </StepItem>

            <StepItem
              number={2}
              title="Target Decision Makers"
              description="We identify the right decision-makers at each company and build personalized outreach campaigns."
              icon={<UserCheck className="w-full h-full p-4 text-white" />}
              stats={[
                { label: "accuracy in identifying", value: "93%", suffix: "", highlight: true },
                { label: "the right decision makers", value: "", suffix: "", highlight: false },
              ]}
              reversed
              isActive={activeStep === 2}
            >
              <div className="relative h-64 md:h-80 bg-[#f0f5ff] rounded-lg overflow-hidden border border-[#1e56a0]/10 shadow-sm transition-all duration-500 hover:shadow-md group">
                {/* Animated background - more subtle */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-sm">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="bg-white rounded-lg shadow-sm border border-[#1e56a0]/10 p-4 mb-4 mx-auto transform transition-transform duration-300 group-hover:scale-105 hover:shadow-md"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <div className="mb-3 flex justify-between items-center">
                        <div>
                          <div className="font-medium text-[#1e56a0]">TechCorp Inc.</div>
                          <div className="text-xs text-[#1e56a0]/60">Company Profile</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-[#1e56a0]/5">
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white mr-2">
                            <span className="text-xs font-bold">JD</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#1e56a0]">John Doe</div>
                            <div className="text-xs text-[#1e56a0]/60">CTO • Primary Decision Maker</div>
                          </div>
                          <div className="ml-auto">
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600"
                            >
                              <CheckCircle size={14} />
                            </motion.div>
                          </div>
                        </div>
                        <div className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-[#16c2d5]/5">
                          <div className="w-8 h-8 bg-[#16c2d5]/10 rounded-full flex items-center justify-center text-[#16c2d5] mr-2">
                            <span className="text-xs font-bold">AS</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#1e56a0]">Alice Smith</div>
                            <div className="text-xs text-[#1e56a0]/60">VP of Marketing • Influencer</div>
                          </div>
                        </div>
                        <div className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-gray-50">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 mr-2">
                            <span className="text-xs font-bold">RJ</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#1e56a0]">Robert Johnson</div>
                            <div className="text-xs text-[#1e56a0]/60">CEO • Final Approver</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </StepItem>

            <StepItem
              number={3}
              title="Engage With Personalized Outreach"
              description="Our team crafts personalized messages that reference their specific website activity and interests."
              icon={<Mail className="w-full h-full p-4 text-white" />}
              stats={[
                { label: "higher response rate than", value: "5x", suffix: "", highlight: true },
                { label: "traditional cold outreach", value: "", suffix: "", highlight: false },
              ]}
              isActive={activeStep === 3}
            >
              <div className="relative h-64 md:h-80 bg-[#f0f5ff] rounded-lg overflow-hidden border border-[#1e56a0]/10 shadow-sm transition-all duration-500 hover:shadow-md group">
                {/* Animated background - more subtle */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-lg shadow-sm border border-[#1e56a0]/10 p-4 max-w-sm mx-auto transform transition-transform duration-300 group-hover:scale-105 hover:shadow-md"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white mr-2">
                        <span className="text-xs font-bold">CC</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#1e56a0]">ClikConvert</div>
                        <div className="text-xs text-[#1e56a0]/60">to John Doe (TechCorp)</div>
                      </div>
                      <div className="ml-auto text-xs text-gray-400">9:32 AM</div>
                    </div>
                    <div className="text-sm text-gray-700 mb-3">
                      <p>Hi John,</p>
                      <p className="my-2">
                        I noticed you've been exploring our pricing page at TechCorp. Many of our clients in the tech
                        industry have found our solution helps increase conversion rates by 3x.
                      </p>
                      <p>Would you be open to a quick call to discuss how we could help TechCorp specifically?</p>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 text-xs bg-gray-700 text-white rounded flex items-center"
                      >
                        Book a Call
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                      >
                        Reply
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </StepItem>

            <StepItem
              number={4}
              title="Book Qualified Meetings"
              description="We handle all replies and objections, then schedule qualified prospects directly on your calendar."
              icon={<Calendar className="w-full h-full p-4 text-white" />}
              stats={[
                { label: "qualified meetings booked", value: "15-30", suffix: "/mo", highlight: true },
                { label: "on average per client", value: "", suffix: "", highlight: false },
              ]}
              reversed
              isActive={activeStep === 4}
            >
              <div className="relative h-64 md:h-80 bg-[#f0f5ff] rounded-lg overflow-hidden border border-[#1e56a0]/10 shadow-sm transition-all duration-500 hover:shadow-md group">
                {/* Animated background - more subtle */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-lg shadow-sm border border-[#1e56a0]/10 p-4 max-w-sm mx-auto transform transition-transform duration-300 group-hover:scale-105 hover:shadow-md"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div className="text-center mb-3">
                      <div className="font-medium text-[#1e56a0]">Your Calendar</div>
                      <div className="text-xs text-[#1e56a0]/60">Upcoming Meetings</div>
                    </div>
                    <div className="space-y-3">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center p-2 bg-gray-100 rounded-lg border border-gray-200 cursor-pointer"
                      >
                        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white mr-3">
                          <span className="text-xs font-bold">JD</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#1e56a0]">John Doe - TechCorp</div>
                          <div className="text-xs text-[#1e56a0]/60">Tomorrow, 10:00 AM</div>
                        </div>
                        <div className="ml-auto">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600"
                          >
                            <CheckCircle size={14} />
                          </motion.div>
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center p-2 bg-white rounded-lg border border-gray-100 cursor-pointer"
                      >
                        <div className="w-10 h-10 bg-[#16c2d5] rounded-full flex items-center justify-center text-white mr-3">
                          <span className="text-xs font-bold">AS</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#1e56a0]">Alice Smith - Global Solutions</div>
                          <div className="text-xs text-[#1e56a0]/60">Thursday, 2:00 PM</div>
                        </div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center p-2 bg-white rounded-lg border border-gray-100 cursor-pointer"
                      >
                        <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white mr-3">
                          <span className="text-xs font-bold">RJ</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#1e56a0]">Robert Johnson - Acme Corp</div>
                          <div className="text-xs text-[#1e56a0]/60">Friday, 11:30 AM</div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </StepItem>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              href="/book-call"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium hover:from-[#174785] hover:to-[#14afc0] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Turn Your Traffic Into Revenue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Add CSS for grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 20px 20px;
          background-image: linear-gradient(to right, rgba(30, 86, 160, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30, 86, 160, 0.05) 1px, transparent 1px);
        }
      `}</style>
    </section>
  )
}

interface StepItemProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  stats: Array<{
    label: string
    value: string
    suffix: string
    highlight: boolean
  }>
  reversed?: boolean
  isActive?: boolean
  children: React.ReactNode
}

function StepItem({
  number,
  title,
  description,
  icon,
  stats,
  reversed = false,
  isActive = false,
  children,
}: StepItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div ref={ref} className={`relative step-item ${isActive ? "active-step" : ""}`}>
      {/* Step number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className={`absolute ${isMobile ? "top-0 left-6 -translate-x-1/2" : "top-0 left-1/2 -translate-x-1/2"} -translate-y-1/2 z-10`}
      >
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-[#1e56a0] text-white text-xl font-bold shadow-sm transition-all duration-300 ${isActive ? "scale-110 shadow-md" : ""}`}
        >
          {number}
        </div>
      </motion.div>

      {/* Content */}
      <div className={`grid md:grid-cols-2 gap-4 md:gap-12 items-center ${reversed ? "md:flex-row-reverse" : ""}`}>
        <div className={reversed ? "md:order-2" : ""}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <motion.div
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-full bg-[#1e56a0] flex-shrink-0 mr-4 shadow-sm"
              >
                {icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-[#1e56a0]">{title}</h3>
            </div>
            <p className="text-[#1e56a0]/80">{description}</p>

            <div className="flex items-baseline">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-baseline">
                  {stat.value && (
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className={`text-2xl md:text-3xl font-bold mr-1 ${
                        stat.highlight ? "text-[#1e56a0]" : "text-[#1e56a0]/70"
                      }`}
                    >
                      {stat.value}
                    </motion.span>
                  )}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-[#1e56a0]/70"
                  >
                    {stat.label}
                    {stat.suffix}
                  </motion.span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: reversed ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reversed ? -20 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={reversed ? "md:order-1" : ""}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
