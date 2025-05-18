"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { DollarSign, ArrowRight } from "lucide-react"
import ResultsDashboard from "@/components/results-dashboard"
import ClientSuccessStories from "@/components/client-success-stories"
import IndustrySpecificResults from "@/components/industry-specific-results"
import ResultsGuarantee from "@/components/results-guarantee"

function RoiCalculatorStatic() {
  const [revenuePerMeeting, setRevenuePerMeeting] = useState(20000)
  const [meetingsPerMonth, setMeetingsPerMonth] = useState(15)
  const [clikConvertCost, setClikConvertCost] = useState(500)

  const [monthlyRevenue, setMonthlyRevenue] = useState(300000)
  const [monthlyProfit, setMonthlyProfit] = useState(299500)
  const [roi, setRoi] = useState(59900.0)

  useEffect(() => {
    // Calculate values immediately on component mount and when inputs change
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
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your Potential ROI</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estimate the potential return on investment you could achieve with ClikConvert.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ResultsPageClient() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
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
          <div className="absolute top-[15%] left-[10%] w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 rotate-12"></div>
          <div className="absolute top-[25%] right-[15%] w-12 h-12 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10"></div>
          <div className="absolute bottom-[20%] left-[20%] w-20 h-20 rounded-lg bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 -rotate-12"></div>
          <div className="absolute bottom-[30%] right-[25%] w-10 h-10 rounded-md bg-gradient-to-br from-[#16c2d5]/10 to-[#1e56a0]/10 rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Heading with 3D effect */}
            <div>
              <div className="relative perspective-[1000px]">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 relative transform hover:scale-[1.02] hover:rotate-x-1 hover:rotate-y-1 transition-all duration-700">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] inline-block pb-2">
                    Our Results
                  </span>

                  {/* Multiple layered shadows for 3D effect */}
                  <span className="absolute -z-10 top-0 left-0 right-0 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 blur-[2px] transform translate-y-[2px]">
                    Our Results
                  </span>
                  <span className="absolute -z-20 top-0 left-0 right-0 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0]/5 to-[#16c2d5]/5 blur-[4px] transform translate-y-[4px]">
                    Our Results
                  </span>
                </h1>
              </div>

              {/* Animated divider */}
              <div className="relative h-1.5 w-40 mx-auto mb-10 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]"></div>
                <div className="absolute inset-0 w-1/2 bg-white/30 animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>

            {/* Subheading */}
            <div>
              {/* Enhanced subheading with animated underlines */}
              <p className="text-2xl md:text-3xl text-gray-800 max-w-3xl mx-auto mb-12 leading-relaxed">
                We don't{" "}
                <span className="font-bold relative inline-block group">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                    promise
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-blue-100/50 -z-10 transform -rotate-1 group-hover:h-4 transition-all duration-300"></span>
                </span>{" "}
                meetings. We{" "}
                <span className="font-bold relative inline-block group">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#16c2d5] to-[#1e56a0]">
                    guarantee
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-indigo-100/50 -z-10 transform rotate-1 group-hover:h-4 transition-all duration-300"></span>
                </span>{" "}
                them.
              </p>
            </div>

            {/* Data badge */}
            <div>
              {/* Enhanced data badge with hover effect */}
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-sm text-blue-600 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <span className="mr-2 font-medium">Proven results with</span>
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                  500+ B2B companies
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Dashboard section */}
      <ResultsDashboard />

      {/* Client Success Stories section */}
      <ClientSuccessStories />

      {/* Industry-Specific Results section */}
      <IndustrySpecificResults />

      {/* ROI Calculator section - directly embedded */}
      <RoiCalculatorStatic />

      {/* Results Guarantee section */}
      <ResultsGuarantee />
    </main>
  )
}
