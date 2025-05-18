"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, ChevronRight, Clock, Calendar, Users, Award, ArrowRight, CheckCheck } from "lucide-react"
import Image from "next/image"

// Define the steps in the application process
type Step = "qualification" | "tier" | "application" | "calendar" | "confirmation"

// Define the tier options
type Tier = "discovery" | "partnership" | "vip"

export default function BookCallClient() {
  const [currentStep, setCurrentStep] = useState<Step>("qualification")
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null)
  const [answers, setAnswers] = useState({
    companySize: "",
    challenge: "",
    timeline: "",
  })
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    goals: "",
  })

  // Handle qualification form submission
  const handleQualificationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("tier")
  }

  // Handle tier selection
  const handleTierSelect = (tier: Tier) => {
    setSelectedTier(tier)
    setCurrentStep("application")
  }

  // Handle application form submission
  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("calendar")
  }

  // Handle calendar selection
  const handleCalendarSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("confirmation")
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name in answers) {
      setAnswers((prev) => ({ ...prev, [name]: value }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  return (
    <>
      {/* Hero Section - Matching About/Results Page Style */}
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
          <div className="absolute top-[15%] left-[10%] w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 rotate-12 animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-[25%] right-[15%] w-12 h-12 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute bottom-[20%] left-[20%] w-20 h-20 rounded-lg bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 -rotate-12 animate-[float_12s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-[30%] right-[25%] w-10 h-10 rounded-md bg-gradient-to-br from-[#16c2d5]/10 to-[#1e56a0]/10 rotate-45 animate-[float_9s_ease-in-out_infinite_reverse]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Heading with 3D effect */}
            <div>
              <div className="relative perspective-[1000px]">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 relative transform hover:scale-[1.02] hover:rotate-x-1 hover:rotate-y-1 transition-all duration-700">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] inline-block pb-2">
                    Apply Now
                  </span>

                  {/* Multiple layered shadows for 3D effect */}
                  <span className="absolute -z-10 top-0 left-0 right-0 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 blur-[2px] transform translate-y-[2px]">
                    Apply Now
                  </span>
                  <span className="absolute -z-20 top-0 left-0 right-0 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0]/5 to-[#16c2d5]/5 blur-[4px] transform translate-y-[4px]">
                    Apply Now
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
                We carefully select clients where we can{" "}
                <span className="font-bold relative inline-block group">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                    deliver exceptional
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-blue-100/50 -z-10 transform -rotate-1 group-hover:h-4 transition-all duration-300"></span>
                </span>{" "}
                results. Currently accepting{" "}
                <span className="font-bold relative inline-block group">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#16c2d5] to-[#1e56a0]">
                    5 new partners
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-3 bg-indigo-100/50 -z-10 transform rotate-1 group-hover:h-4 transition-all duration-300"></span>
                </span>{" "}
                this quarter.
              </p>
            </div>

            {/* Data badge */}
            <div>
              {/* Enhanced data badge with hover effect */}
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-sm text-blue-600 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <span className="mr-2 font-medium">Limited availability for</span>
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                  strategic partnerships
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="relative bg-white py-12 md:py-20">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap justify-between items-center mb-8">
              {[
                { step: "qualification", label: "Qualification" },
                { step: "tier", label: "Select Tier" },
                { step: "application", label: "Application" },
                { step: "calendar", label: "Schedule" },
                { step: "confirmation", label: "Confirmation" },
              ].map((item, index) => (
                <div key={item.step} className="flex flex-col items-center mb-4 md:mb-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      currentStep === item.step
                        ? "bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white"
                        : currentStep === "confirmation" ||
                            index <
                              ["qualification", "tier", "application", "calendar", "confirmation"].indexOf(currentStep)
                          ? "bg-green-100 text-green-600 border border-green-200"
                          : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {currentStep === "confirmation" ||
                    index <
                      ["qualification", "tier", "application", "calendar", "confirmation"].indexOf(currentStep) ? (
                      <CheckCheck size={18} />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div
                    className={`text-sm font-medium ${currentStep === item.step ? "text-[#1e56a0]" : "text-gray-500"}`}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] rounded-full transition-all duration-500"
                style={{
                  width:
                    currentStep === "qualification"
                      ? "20%"
                      : currentStep === "tier"
                        ? "40%"
                        : currentStep === "application"
                          ? "60%"
                          : currentStep === "calendar"
                            ? "80%"
                            : "100%",
                }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="max-w-4xl mx-auto">
            {/* Qualification Step */}
            {currentStep === "qualification" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Let's see if we're a good fit</h2>
                <p className="text-gray-600 mb-8">
                  Answer these brief questions to help us understand your needs and determine if we can deliver
                  exceptional results for your business.
                </p>

                <form onSubmit={handleQualificationSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                      What's the size of your company?
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={answers.companySize}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                    >
                      <option value="">Select an option</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">
                      What's your biggest challenge with converting website visitors?
                    </label>
                    <select
                      id="challenge"
                      name="challenge"
                      value={answers.challenge}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                    >
                      <option value="">Select an option</option>
                      <option value="identification">Identifying who's visiting my site</option>
                      <option value="engagement">Engaging visitors before they leave</option>
                      <option value="qualification">Qualifying leads effectively</option>
                      <option value="conversion">Converting visitors to booked calls</option>
                      <option value="other">Other challenges</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                      What's your implementation timeline?
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={answers.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                    >
                      <option value="">Select an option</option>
                      <option value="immediate">Immediate (within 2 weeks)</option>
                      <option value="soon">Soon (next 1-2 months)</option>
                      <option value="quarter">This quarter</option>
                      <option value="future">Future planning</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:from-[#174785] hover:to-[#14afc0] flex items-center justify-center"
                    >
                      Continue to Partnership Options
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Tier Selection Step */}
            {currentStep === "tier" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Select Your Partnership Tier</h2>
                <p className="text-gray-600 mb-10 text-center max-w-3xl mx-auto">
                  Based on your needs, we offer three partnership levels. Each is designed to deliver exceptional
                  results with different levels of engagement.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Discovery Tier */}
                  <div
                    className={`bg-white rounded-xl shadow-lg border p-6 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                      selectedTier === "discovery" ? "border-[#1e56a0] ring-2 ring-[#1e56a0]/20" : "border-gray-100"
                    }`}
                    onClick={() => handleTierSelect("discovery")}
                  >
                    <div className="text-[#1e56a0] font-semibold mb-2">DISCOVERY</div>
                    <h3 className="text-xl font-bold mb-2">Initial Strategy Session</h3>
                    <div className="text-3xl font-bold mb-4">30 min</div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Problem identification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">High-level solution overview</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Initial recommendations</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <button
                        onClick={() => handleTierSelect("discovery")}
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                          selectedTier === "discovery"
                            ? "bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        Select Discovery
                      </button>
                    </div>
                  </div>

                  {/* Partnership Tier */}
                  <div
                    className={`bg-white rounded-xl shadow-lg border p-6 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                      selectedTier === "partnership" ? "border-[#1e56a0] ring-2 ring-[#1e56a0]/20" : "border-gray-100"
                    }`}
                    onClick={() => handleTierSelect("partnership")}
                  >
                    <div className="text-[#1e56a0] font-semibold mb-2">PARTNERSHIP</div>
                    <h3 className="text-xl font-bold mb-2">Deep Dive Session</h3>
                    <div className="text-3xl font-bold mb-4">60 min</div>
                    <div className="inline-block bg-[#1e56a0]/10 text-[#1e56a0] text-xs font-semibold px-2 py-1 rounded-full mb-4">
                      MOST POPULAR
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Comprehensive assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Customized strategy development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Implementation roadmap</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">ROI projection</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <button
                        onClick={() => handleTierSelect("partnership")}
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                          selectedTier === "partnership"
                            ? "bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        Select Partnership
                      </button>
                    </div>
                  </div>

                  {/* VIP Tier */}
                  <div
                    className={`bg-white rounded-xl shadow-lg border p-6 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                      selectedTier === "vip" ? "border-[#1e56a0] ring-2 ring-[#1e56a0]/20" : "border-gray-100"
                    }`}
                    onClick={() => handleTierSelect("vip")}
                  >
                    <div className="text-[#1e56a0] font-semibold mb-2">VIP</div>
                    <h3 className="text-xl font-bold mb-2">Executive Roadmap</h3>
                    <div className="text-3xl font-bold mb-4">90 min</div>
                    <div className="inline-block bg-[#16c2d5]/10 text-[#16c2d5] text-xs font-semibold px-2 py-1 rounded-full mb-4">
                      APPLICATION ONLY
                    </div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">All Partnership features</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Senior team participation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Custom technology assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Competitive analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Priority implementation</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <button
                        onClick={() => handleTierSelect("vip")}
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                          selectedTier === "vip"
                            ? "bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        Apply for VIP
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Application Form Step */}
            {currentStep === "application" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#1e56a0]/10 text-[#1e56a0] font-medium px-4 py-1 rounded-full">
                    {selectedTier === "discovery"
                      ? "Discovery Session"
                      : selectedTier === "partnership"
                        ? "Partnership Session"
                        : "VIP Executive Roadmap"}
                  </div>
                  <button
                    onClick={() => setCurrentStep("tier")}
                    className="ml-auto text-sm text-gray-500 hover:text-[#1e56a0]"
                  >
                    Change
                  </button>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6">Complete Your Application</h2>
                <p className="text-gray-600 mb-8">
                  Please provide your information to complete your application for a strategic partnership.
                </p>

                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name*
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                      Website URL*
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                    />
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
                      What are your main goals for this session?
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:from-[#174785] hover:to-[#14afc0] flex items-center justify-center"
                    >
                      Continue to Scheduling
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Calendar Step */}
            {currentStep === "calendar" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Select Your Preferred Time</h2>
                <p className="text-gray-600 mb-8">
                  Choose a time that works best for your{" "}
                  {selectedTier === "discovery"
                    ? "30-minute Discovery Session"
                    : selectedTier === "partnership"
                      ? "60-minute Partnership Session"
                      : "90-minute VIP Executive Roadmap"}
                  .
                </p>

                {/* Calendar Placeholder - In a real implementation, you would integrate with a calendar service */}
                <div className="border border-gray-200 rounded-lg p-4 mb-8">
                  <div className="flex justify-between items-center mb-6">
                    <button className="text-[#1e56a0]">
                      <ChevronRight className="h-5 w-5 transform rotate-180" />
                    </button>
                    <h3 className="font-medium">May 2025</h3>
                    <button className="text-[#1e56a0]">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center text-sm text-gray-500 font-medium">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <button
                        key={day}
                        className={`h-10 rounded-lg text-sm ${
                          day === 20
                            ? "bg-[#1e56a0] text-white"
                            : day < 18
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-gray-100 hover:bg-[#1e56a0]/10 text-gray-700"
                        }`}
                        disabled={day < 18}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-medium mb-4">Available Times for May 20, 2025</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time) => (
                      <button
                        key={time}
                        className="py-2 px-4 border border-gray-200 rounded-lg text-sm hover:border-[#1e56a0] hover:bg-[#1e56a0]/5 transition-colors"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1e56a0]/5 rounded-lg p-4 mb-8">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[#1e56a0] mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Your Selected Time</h4>
                      <p className="text-gray-600">May 20, 2025 at 2:00 PM (Your local time)</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleCalendarSubmit}>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:from-[#174785] hover:to-[#14afc0] flex items-center justify-center"
                  >
                    Confirm Appointment
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </motion.div>
            )}

            {/* Confirmation Step */}
            {currentStep === "confirmation" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10 text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4">Application Submitted!</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Thank you for applying for a strategic partnership with ClikConvert. We've received your application
                  and will review it within the next 24 hours.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-md mx-auto">
                  <div className="flex items-start mb-4">
                    <Calendar className="h-5 w-5 text-[#1e56a0] mr-3 mt-0.5" />
                    <div className="text-left">
                      <h4 className="font-medium">Your Appointment</h4>
                      <p className="text-gray-600">May 20, 2025 at 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <Users className="h-5 w-5 text-[#1e56a0] mr-3 mt-0.5" />
                    <div className="text-left">
                      <h4 className="font-medium">Session Type</h4>
                      <p className="text-gray-600">
                        {selectedTier === "discovery"
                          ? "30-minute Discovery Session"
                          : selectedTier === "partnership"
                            ? "60-minute Partnership Session"
                            : "90-minute VIP Executive Roadmap"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-[#1e56a0] mr-3 mt-0.5" />
                    <div className="text-left">
                      <h4 className="font-medium">Next Steps</h4>
                      <p className="text-gray-600">
                        You'll receive a calendar invitation and preparation materials via email shortly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/how-it-works"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-[#1e56a0] bg-[#1e56a0]/10 hover:bg-[#1e56a0]/20 transition-colors"
                  >
                    Learn How It Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>

                  <a
                    href="/results"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-[#16c2d5] bg-[#16c2d5]/10 hover:bg-[#16c2d5]/20 transition-colors"
                  >
                    See Client Results
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative bg-white py-16">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Trusted by Industry Leaders</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Image
                    src="/professional-headshot.png"
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">CMO, TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "ClikConvert transformed our lead generation process. We've seen a 267% increase in qualified leads
                  since implementation."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Image
                    src="/professional-man-headshot.png"
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium">Michael Chen</h4>
                    <p className="text-sm text-gray-500">CEO, GrowthWave</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The strategic partnership with ClikConvert has been game-changing. Our sales team is now focused only
                  on pre-qualified leads."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Image
                    src="/professional-woman-headshot.png"
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-medium">Amanda Torres</h4>
                    <p className="text-sm text-gray-500">Director, SaaS Solutions</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The VIP session exceeded our expectations. We implemented the roadmap and saw results within weeks."
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1e56a0]">94%</div>
                <p className="text-sm text-gray-600 mt-2">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1e56a0]">3.2x</div>
                <p className="text-sm text-gray-600 mt-2">Average ROI</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1e56a0]">14</div>
                <p className="text-sm text-gray-600 mt-2">Days to Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Preview */}
      <section className="relative bg-white py-16">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What to Expect</h2>
            <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Our strategic partnership process is designed to deliver maximum value in every interaction. Here's a
              glimpse into what happens after you apply.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Our Methodology</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#1e56a0]/10 text-[#1e56a0] flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Discovery & Analysis</h4>
                      <p className="text-gray-600 text-sm">
                        We analyze your current visitor data and conversion processes to identify opportunities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#1e56a0]/10 text-[#1e56a0] flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Strategy Development</h4>
                      <p className="text-gray-600 text-sm">
                        We create a customized implementation plan based on your specific business needs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#1e56a0]/10 text-[#1e56a0] flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Implementation Support</h4>
                      <p className="text-gray-600 text-sm">
                        Our team guides you through the implementation process with expert support.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-[#1e56a0]/10 text-[#1e56a0] flex items-center justify-center mr-3 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Optimization & Growth</h4>
                      <p className="text-gray-600 text-sm">
                        We continuously optimize your system to maximize results and drive ongoing growth.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Preparation Guide</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    To make the most of your strategic session, please have the following information ready:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Current website traffic statistics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Existing conversion rates and goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Current lead generation process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Sales cycle information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#16c2d5] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Key business challenges and goals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Meet Your Strategy Team</h3>
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src="/professional-headshot.png"
                      alt="Team Member"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="font-medium">Alex Morgan</h4>
                  <p className="text-sm text-gray-500">Lead Strategist</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src="/professional-woman-headshot.png"
                      alt="Team Member"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="font-medium">Jessica Lee</h4>
                  <p className="text-sm text-gray-500">Implementation Expert</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src="/professional-man-headshot.png"
                      alt="Team Member"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="font-medium">David Chen</h4>
                  <p className="text-sm text-gray-500">Technical Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
