"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ArrowRight, User, Calendar, CheckCircle, Bell } from "lucide-react"

export default function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [showVisitorCard, setShowVisitorCard] = useState(false)
  const [showLeadCard, setShowLeadCard] = useState(false)
  const [showMeetingCard, setShowMeetingCard] = useState(false)

  useEffect(() => {
    // Start the animation sequence
    const timer1 = setTimeout(() => setShowVisitorCard(true), 1000)
    const timer2 = setTimeout(() => setShowLeadCard(true), 2000)
    const timer3 = setTimeout(() => setShowMeetingCard(true), 3000)
    const timer4 = setTimeout(() => setAnimationComplete(true), 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 md:pr-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 text-[#1e56a0] mb-2"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#1e56a0] mr-2"></span>
              Identify & Convert Your Website Visitors
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight"
            >
              <span className="block">Turn Anonymous Visitors</span>
              <span className="block mt-1 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] bg-clip-text text-transparent">
                Into Booked Sales Calls
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl"
            >
              ClikConvert identifies your high-intent traffic and gets them on your calendar—automatically.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                href="/book-call"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-0.5 font-medium"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-[#1e56a0] to-[#16c2d5] group-hover:from-[#174785] group-hover:to-[#14afc0]"></span>
                <span className="relative flex items-center justify-center rounded-md bg-white px-6 py-3 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  <span className="relative flex items-center text-[#1e56a0] group-hover:text-white">
                    Book a Free Strategy Call
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex items-center px-6 py-3 rounded-lg text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right side - Dashboard visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
          >
            {/* Dashboard header */}
            <div className="h-12 bg-[#1e56a0] flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-white font-medium ml-4">ClikConvert Dashboard</div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 h-[calc(100%-3rem)]">
              {/* Dashboard sidebar */}
              <div className="absolute left-4 top-16 bottom-4 w-16 bg-white rounded-lg border border-gray-100 flex flex-col items-center py-4 space-y-6">
                <div className="w-8 h-8 bg-[#1e56a0] rounded-lg flex items-center justify-center text-white">
                  <User size={16} />
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  <Bell size={16} />
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  <Calendar size={16} />
                </div>
              </div>

              {/* Dashboard main content */}
              <div className="absolute left-24 right-4 top-16 bottom-4 bg-white rounded-lg border border-gray-100 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Visitor Activity</h3>
                  <div className="text-sm text-[#1e56a0] font-medium">Today</div>
                </div>

                {/* Visitor stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="bg-white p-3 rounded-lg border border-gray-100"
                  >
                    <div className="text-sm text-gray-500">Total Visitors</div>
                    <div className="text-xl font-bold">247</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="bg-white p-3 rounded-lg border border-gray-100"
                  >
                    <div className="text-sm text-gray-500">Identified</div>
                    <div className="text-xl font-bold text-[#1e56a0]">42</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="bg-white p-3 rounded-lg border border-gray-100"
                  >
                    <div className="text-sm text-gray-500">Meetings</div>
                    <div className="text-xl font-bold text-[#16c2d5]">8</div>
                  </motion.div>
                </div>

                {/* Activity graph placeholder */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="h-24 bg-white rounded-lg border border-gray-100 mb-4 overflow-hidden"
                >
                  <div className="h-full w-full flex items-end px-2">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: "0%" }}
                        animate={{ height: `${Math.random() * 70 + 10}%` }}
                        transition={{ duration: 0.4, delay: 0.8 + i * 0.03 }}
                        className={`flex-1 mx-0.5 ${
                          i > 18 ? "bg-[#16c2d5]" : i > 12 ? "bg-[#1e56a0]" : "bg-gray-200"
                        } rounded-t-sm`}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Recent activity */}
                <div className="text-sm font-medium mb-2">Recent Activity</div>
                <div className="space-y-2 relative">
                  {/* Notification cards */}
                  <AnimatePresence>
                    {showVisitorCard && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, x: 0 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex items-center"
                      >
                        <div className="w-8 h-8 bg-[#1e56a0]/10 rounded-full flex items-center justify-center text-[#1e56a0] mr-3">
                          <User size={16} />
                        </div>
                        <div>
                          <div className="font-medium">Visitor Identified</div>
                          <div className="text-xs text-gray-500">Company: TechCorp Inc.</div>
                        </div>
                        <div className="ml-auto text-xs text-gray-400">Just now</div>
                      </motion.div>
                    )}

                    {showLeadCard && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, x: 0 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm flex items-center"
                      >
                        <div className="w-8 h-8 bg-[#16c2d5]/10 rounded-full flex items-center justify-center text-[#16c2d5] mr-3">
                          <CheckCircle size={16} />
                        </div>
                        <div>
                          <div className="font-medium">Lead Qualified</div>
                          <div className="text-xs text-gray-500">Decision Maker: John Smith</div>
                        </div>
                        <div className="ml-auto text-xs text-gray-400">2m ago</div>
                      </motion.div>
                    )}

                    {showMeetingCard && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, x: 0 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white p-3 rounded-lg border border-[#16c2d5] shadow-sm flex items-center"
                      >
                        <div className="w-8 h-8 bg-[#16c2d5] rounded-full flex items-center justify-center text-white mr-3">
                          <Calendar size={16} />
                        </div>
                        <div>
                          <div className="font-medium">Meeting Booked</div>
                          <div className="text-xs text-gray-500">Tomorrow at 2:00 PM</div>
                        </div>
                        <div className="ml-auto text-xs text-gray-400">5m ago</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#1e56a0]/5 to-[#16c2d5]/5 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute top-24 -left-24 w-64 h-64 bg-gradient-to-br from-[#16c2d5]/5 to-[#1e56a0]/5 rounded-full opacity-40 blur-3xl"></div>
    </section>
  )
}
