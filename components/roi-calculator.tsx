"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function RoiCalculator() {
  // Interactive state
  const [revenuePerMeeting, setRevenuePerMeeting] = useState(20000)
  const [meetingsPerMonth, setMeetingsPerMonth] = useState(15)
  const [monthlyCost, setMonthlyCost] = useState(500)
  const [monthlyRevenue, setMonthlyRevenue] = useState(300000)
  const [monthlyProfit, setMonthlyProfit] = useState(299500)
  const [roi, setRoi] = useState(59900)

  // Calculate results when inputs change
  useEffect(() => {
    const revenue = revenuePerMeeting * meetingsPerMonth
    const profit = revenue - monthlyCost
    const roiValue = monthlyCost > 0 ? (profit / monthlyCost) * 100 : 0

    setMonthlyRevenue(revenue)
    setMonthlyProfit(profit)
    setRoi(roiValue)
  }, [revenuePerMeeting, meetingsPerMonth, monthlyCost])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#1e56a0]">Calculate Your Potential ROI</h2>
            <div className="w-24 h-1 bg-[#1e56a0] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estimate the potential return on investment you could achieve with ClikConvert.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] px-6 py-5 text-white">
              <h3 className="text-2xl font-semibold">ROI Calculator</h3>
              <p className="text-white/80 text-sm">Estimate your potential return on investment</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-lg mb-4 text-gray-800">Investment Assumptions</h4>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Average Revenue Per Meeting</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                      <input
                        type="number"
                        value={revenuePerMeeting}
                        onChange={(e) => setRevenuePerMeeting(Number(e.target.value) || 0)}
                        className="block w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Meetings Booked Per Month</label>
                    <input
                      type="number"
                      value={meetingsPerMonth}
                      onChange={(e) => setMeetingsPerMonth(Number(e.target.value) || 0)}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">ClikConvert Monthly Cost</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                      <input
                        type="number"
                        value={monthlyCost}
                        onChange={(e) => setMonthlyCost(Number(e.target.value) || 0)}
                        className="block w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-medium text-lg mb-6 text-gray-800">Projected ROI</h4>

                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-500 mb-2">Monthly Revenue</h5>
                    <div className="text-2xl font-bold text-gray-800">${monthlyRevenue.toLocaleString()}</div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-500 mb-2">Monthly Profit</h5>
                    <div className="text-2xl font-bold text-gray-800">${monthlyProfit.toLocaleString()}</div>
                  </div>

                  <div className="bg-[#1e56a0]/10 p-4 rounded-lg">
                    <h5 className="text-sm font-medium text-[#1e56a0] mb-2">Return on Investment (ROI)</h5>
                    <div className="flex items-end">
                      <div className="text-3xl font-bold text-[#1e56a0]">
                        {roi.toLocaleString(undefined, { maximumFractionDigits: 1 })}
                      </div>
                      <span className="text-sm text-gray-600 ml-1">%</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/book-call"
                      className="block w-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium py-3 px-4 rounded-lg text-center hover:from-[#174785] hover:to-[#14afc0]"
                    >
                      Get a Custom ROI Estimate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
