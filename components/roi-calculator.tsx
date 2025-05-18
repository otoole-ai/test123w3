"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RoiCalculator() {
  const [revenuePerMeeting, setRevenuePerMeeting] = useState(20000)
  const [meetingsPerMonth, setMeetingsPerMonth] = useState(15)
  const [clikConvertCost, setClikConvertCost] = useState(500)

  const [monthlyRevenue, setMonthlyRevenue] = useState(0)
  const [monthlyProfit, setMonthlyProfit] = useState(0)
  const [roi, setRoi] = useState(0)

  useEffect(() => {
    const revenue = revenuePerMeeting * meetingsPerMonth
    const profit = revenue - clikConvertCost
    const calculatedRoi = (profit / clikConvertCost) * 100

    setMonthlyRevenue(revenue)
    setMonthlyProfit(profit)
    setRoi(calculatedRoi)
  }, [revenuePerMeeting, meetingsPerMonth, clikConvertCost])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean white background */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-20 left-[20%] w-72 h-72 rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>

        {/* Floating shapes */}
        <div className="absolute top-[15%] left-[10%] w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 rotate-12 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[25%] right-[15%] w-12 h-12 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-[20%] left-[20%] w-20 h-20 rounded-lg bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 -rotate-12 animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[30%] right-[25%] w-10 h-10 rounded-md bg-gradient-to-br from-[#16c2d5]/10 to-[#1e56a0]/10 rotate-45 animate-[float_9s_ease-in-out_infinite_reverse]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Calculate Your Potential ROI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Estimate the potential return on investment you could achieve with ClikConvert.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] px-6 py-4 text-white">
              <h3 className="text-xl font-semibold">ROI Calculator</h3>
              <p className="text-white/80 text-sm">Estimate your potential return on investment</p>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-medium text-lg mb-4">Investment Assumptions</h4>

                  <div>
                    <label htmlFor="revenue-per-meeting" className="block text-sm font-medium text-gray-700 mb-1">
                      Average Revenue Per Meeting
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="revenue-per-meeting"
                        min="1000"
                        max="100000"
                        value={revenuePerMeeting}
                        onChange={(e) => setRevenuePerMeeting(Number.parseInt(e.target.value) || 0)}
                        className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e56a0] focus:border-[#1e56a0] text-lg"
                        placeholder="20,000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="meetings-per-month" className="block text-sm font-medium text-gray-700 mb-1">
                      Meetings Booked Per Month
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        type="number"
                        id="meetings-per-month"
                        min="1"
                        max="100"
                        value={meetingsPerMonth}
                        onChange={(e) => setMeetingsPerMonth(Number.parseInt(e.target.value) || 0)}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e56a0] focus:border-[#1e56a0] text-lg"
                        placeholder="15"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="clikconvert-cost" className="block text-sm font-medium text-gray-700 mb-1">
                      ClikConvert Monthly Cost
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="clikconvert-cost"
                        min="500"
                        max="5000"
                        value={clikConvertCost}
                        onChange={(e) => setClikConvertCost(Number.parseInt(e.target.value) || 0)}
                        className="block w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e56a0] focus:border-[#1e56a0] text-lg"
                        placeholder="500"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-medium text-lg mb-6">Projected ROI</h4>

                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-500 mb-3">Monthly Revenue</h5>
                    <div className="text-xl font-bold">{formatCurrency(monthlyRevenue)}</div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-500 mb-3">Monthly Profit</h5>
                    <div className="text-xl font-bold">{formatCurrency(monthlyProfit)}</div>
                  </div>

                  <div className="bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 p-4 rounded-lg">
                    <h5 className="text-sm font-medium text-[#1e56a0] mb-2">Return on Investment (ROI)</h5>
                    <div className="flex items-end">
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] bg-clip-text text-transparent">
                        {roi.toFixed(1)}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">%</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/book-call"
                      className="block w-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium py-3 px-4 rounded-lg text-center hover:from-[#174785] hover:to-[#14afc0] transition-colors duration-200"
                    >
                      <span className="flex items-center justify-center">
                        Get a Custom ROI Estimate
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
