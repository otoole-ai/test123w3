"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DollarSign, Users, BarChart3, ArrowRight, Info } from "lucide-react"

export default function ProblemCalculator() {
  // State for calculator inputs and results
  const [monthlyVisitors, setMonthlyVisitors] = useState(5000)
  const [averageDealValue, setAverageDealValue] = useState(5000)
  const [conversionRate, setConversionRate] = useState(2) // Default 2% conversion
  const [improvedConversionRate, setImprovedConversionRate] = useState(5) // Default 5% with ClikConvert

  // Calculated values
  const [currentLeads, setCurrentLeads] = useState(0)
  const [potentialLeads, setPotentialLeads] = useState(0)
  const [currentRevenue, setCurrentRevenue] = useState(0)
  const [potentialRevenue, setPotentialRevenue] = useState(0)
  const [revenueDifference, setRevenueDifference] = useState(0)

  // Animation control
  const [hasCalculated, setHasCalculated] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  // Calculate results whenever inputs change
  useEffect(() => {
    // Calculate current scenario
    const currentLeadsValue = Math.round(monthlyVisitors * (conversionRate / 100))
    const currentRevenueValue = currentLeadsValue * averageDealValue

    // Calculate potential with ClikConvert
    const potentialLeadsValue = Math.round(monthlyVisitors * (improvedConversionRate / 100))
    const potentialRevenueValue = potentialLeadsValue * averageDealValue

    // Calculate difference
    const revenueDifferenceValue = potentialRevenueValue - currentRevenueValue

    // Update state
    setCurrentLeads(currentLeadsValue)
    setPotentialLeads(potentialLeadsValue)
    setCurrentRevenue(currentRevenueValue)
    setPotentialRevenue(potentialRevenueValue)
    setRevenueDifference(revenueDifferenceValue)

    // Trigger animation if not already calculated
    if (!hasCalculated) {
      setHasCalculated(true)
    }
  }, [monthlyVisitors, averageDealValue, conversionRate, improvedConversionRate, hasCalculated])

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Calculate Your Lost Revenue Opportunity
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Up to 98% of your website visitors never convert. See how much revenue you could be missing out on.
            </motion.p>
          </div>

          {/* Calculator card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-xl border border-gray-200 shadow-lg overflow-hidden"
          >
            {/* Calculator header */}
            <div className="bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] px-6 py-4 text-white">
              <h3 className="text-xl font-semibold">Revenue Opportunity Calculator</h3>
              <p className="text-white/80 text-sm">See how much more revenue you could generate with ClikConvert</p>
            </div>

            {/* Calculator body */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Input section */}
                <div className="space-y-6">
                  <h4 className="font-medium text-lg mb-4">Your Website Metrics</h4>

                  {/* Monthly visitors input */}
                  <div>
                    <label htmlFor="monthly-visitors" className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly Website Visitors
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="monthly-visitors"
                        min="100"
                        max="1000000"
                        value={monthlyVisitors}
                        onChange={(e) => setMonthlyVisitors(Number.parseInt(e.target.value) || 0)}
                        className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-[#1e56a0] focus:border-[#1e56a0] text-lg"
                        placeholder="5,000"
                      />
                    </div>
                    <div className="mt-1 flex justify-between items-center">
                      <span className="text-xs text-gray-500">Min: 100</span>
                      <input
                        type="range"
                        min="100"
                        max="100000"
                        step="100"
                        value={monthlyVisitors}
                        onChange={(e) => setMonthlyVisitors(Number.parseInt(e.target.value))}
                        className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1e56a0]"
                      />
                      <span className="text-xs text-gray-500">Max: 100k</span>
                    </div>
                  </div>

                  {/* Average deal value input */}
                  <div>
                    <label htmlFor="deal-value" className="block text-sm font-medium text-gray-700 mb-1">
                      Average Deal Value
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="deal-value"
                        min="500"
                        max="100000"
                        value={averageDealValue}
                        onChange={(e) => setAverageDealValue(Number.parseInt(e.target.value) || 0)}
                        className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-[#1e56a0] focus:border-[#1e56a0] text-lg"
                        placeholder="5,000"
                      />
                    </div>
                    <div className="mt-1 flex justify-between items-center">
                      <span className="text-xs text-gray-500">Min: $500</span>
                      <input
                        type="range"
                        min="500"
                        max="50000"
                        step="500"
                        value={averageDealValue}
                        onChange={(e) => setAverageDealValue(Number.parseInt(e.target.value))}
                        className="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1e56a0]"
                      />
                      <span className="text-xs text-gray-500">Max: $50k</span>
                    </div>
                  </div>

                  {/* Conversion rates */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-700">Current Conversion Rate</span>
                        <div className="relative ml-1">
                          <button
                            type="button"
                            onClick={() => setIsTooltipVisible(!isTooltipVisible)}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <Info className="h-4 w-4" />
                          </button>
                          {isTooltipVisible && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 z-10">
                              Industry average for B2B websites is 1-3%
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="font-semibold text-gray-900">{conversionRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="5"
                      step="0.1"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number.parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1e56a0]"
                    />

                    <div className="flex justify-between items-center mt-4 mb-2">
                      <span className="text-sm font-medium text-[#1e56a0]">With ClikConvert</span>
                      <span className="font-semibold text-[#1e56a0]">{improvedConversionRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="10"
                      step="0.1"
                      value={improvedConversionRate}
                      onChange={(e) => setImprovedConversionRate(Number.parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#16c2d5]"
                    />
                  </div>
                </div>

                {/* Results section */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-medium text-lg mb-6">Your Results</h4>

                  {/* Current scenario */}
                  <div className="mb-6">
                    <h5 className="text-sm font-medium text-gray-500 mb-3">Current Scenario</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-500">Monthly Leads</div>
                        <motion.div
                          key={currentLeads}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xl font-bold"
                        >
                          {currentLeads}
                        </motion.div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-500">Monthly Revenue</div>
                        <motion.div
                          key={currentRevenue}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xl font-bold"
                        >
                          {formatCurrency(currentRevenue)}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* With ClikConvert */}
                  <div className="mb-6">
                    <h5 className="text-sm font-medium text-[#1e56a0] mb-3">With ClikConvert</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#1e56a0]/5 p-3 rounded-lg border border-[#1e56a0]/20">
                        <div className="text-sm text-[#1e56a0]/80">Monthly Leads</div>
                        <motion.div
                          key={potentialLeads}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xl font-bold text-[#1e56a0]"
                        >
                          {potentialLeads}
                        </motion.div>
                      </div>
                      <div className="bg-[#1e56a0]/5 p-3 rounded-lg border border-[#1e56a0]/20">
                        <div className="text-sm text-[#1e56a0]/80">Monthly Revenue</div>
                        <motion.div
                          key={potentialRevenue}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xl font-bold text-[#1e56a0]"
                        >
                          {formatCurrency(potentialRevenue)}
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Revenue opportunity */}
                  <div className="bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 p-4 rounded-lg border border-[#1e56a0]/20">
                    <h5 className="text-sm font-medium text-[#1e56a0] mb-2">Additional Revenue Opportunity</h5>
                    <div className="flex items-end">
                      <motion.div
                        key={revenueDifference}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] bg-clip-text text-transparent"
                      >
                        {formatCurrency(revenueDifference)}
                      </motion.div>
                      <span className="text-sm text-gray-600 ml-2 mb-1">per month</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      That's {formatCurrency(revenueDifference * 12)} in additional annual revenue!
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <a
                      href="/book-call"
                      className="block w-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium py-3 px-4 rounded-lg text-center hover:from-[#174785] hover:to-[#14afc0] transition-colors duration-200"
                    >
                      <span className="flex items-center justify-center">
                        Unlock This Revenue Opportunity
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Most businesses focus on getting more traffic, but the real opportunity is converting the traffic you
              already have.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#1e56a0]/10 text-[#1e56a0]">
                <BarChart3 className="h-4 w-4 mr-2" />
                Based on data from 500+ B2B companies
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
