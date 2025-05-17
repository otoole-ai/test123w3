"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function ProcessDiagramInteractive() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: "Identify",
      description: "We detect and identify anonymous traffic visiting your site",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Target",
      description: "We build smart outbound email campaigns tailored to your audience",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 17C17.5186 15.4002 15.8541 14 12 14C8.14591 14 6.48142 15.4002 5 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Engage",
      description: "Prospects receive personalized outreach at scale, written to convert",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Book",
      description: "We handle replies and scheduling—your calendar fills up automatically",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  const nextStep = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1)
    }
  }

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1)
    }
  }

  const goToStep = (stepId) => {
    setActiveStep(stepId)
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Step Selector */}
          <div className="hidden md:flex justify-between mb-12 relative">
            {/* Progress Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            <div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] -translate-y-1/2 z-0"
              style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
            ></div>

            {steps.map((step) => (
              <button
                key={step.id}
                className={`relative z-10 flex flex-col items-center`}
                onClick={() => goToStep(step.id)}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-all duration-300 ${
                    activeStep >= step.id
                      ? "bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white"
                      : "bg-white text-gray-400 border border-gray-200"
                  }`}
                >
                  {step.id}
                </div>
                <span
                  className={`mt-2 font-medium transition-colors duration-300 ${
                    activeStep === step.id ? "text-[#1e56a0]" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Step Selector - Mobile */}
          <div className="md:hidden mb-8">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <h3 className="font-bold text-xl">
                Step {activeStep}: {steps[activeStep - 1].title}
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={prevStep}
                  disabled={activeStep === 1}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextStep}
                  disabled={activeStep === steps.length}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 disabled:opacity-50"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 hidden md:block">
                  Step {activeStep}: {steps[activeStep - 1].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {activeStep === 1 &&
                    "Our proprietary technology identifies companies visiting your website without requiring them to fill out forms. We track their behavior, pages visited, and time spent to determine their level of interest."}
                  {activeStep === 2 &&
                    "Once we identify companies visiting your site, we find the right decision-makers and create personalized outreach campaigns based on their specific interests and behavior on your website."}
                  {activeStep === 3 &&
                    "Our team crafts personalized messages that reference their specific website activity and interests. This personalized approach generates 5x higher response rates than traditional cold outreach."}
                  {activeStep === 4 &&
                    "We manage all responses, handle objections, and qualify prospects before scheduling them directly on your calendar. You just show up to the calls with prepared prospects."}
                </p>
                <div className="bg-gradient-to-r from-[#1e56a0]/10 to-[#16c2d5]/10 p-4 rounded-lg">
                  <p className="font-medium text-[#1e56a0]">
                    {activeStep === 1 && "98% of website visitors never fill out a form"}
                    {activeStep === 2 && "93% accuracy in identifying the right decision makers"}
                    {activeStep === 3 && "5x higher response rate than traditional cold outreach"}
                    {activeStep === 4 && "15-30 qualified meetings booked per month"}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={prevStep}
                  disabled={activeStep === 1}
                  className="px-4 py-2 rounded-lg border border-gray-200 flex items-center disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </button>
                <button
                  onClick={nextStep}
                  disabled={activeStep === steps.length}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white flex items-center disabled:opacity-50"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Animation/Illustration */}
            <div className="order-1 md:order-2 relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden shadow-lg aspect-video flex items-center justify-center">
                <img
                  src={
                    activeStep === 1
                      ? "/identify-infographic.png"
                      : activeStep === 2
                        ? "/target-infographic.png"
                        : activeStep === 3
                          ? "/engage-infographic.png"
                          : "/book-infographic.png"
                  }
                  alt={`Step ${activeStep}: ${steps[activeStep - 1].title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Step Indicator */}
              <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-medium shadow-md">
                {activeStep} of {steps.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
