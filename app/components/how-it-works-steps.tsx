"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

export default function HowItWorksSteps() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: "Identify",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description: "We detect and identify anonymous traffic visiting your site",
      details:
        "Our proprietary technology identifies companies visiting your website without requiring them to fill out forms. We track their behavior, pages visited, and time spent to determine their level of interest.",
      stat: "98%",
      statDescription: "of website visitors never fill out a form",
      features: [
        "Proprietary visitor identification technology",
        "Company-level tracking without cookies",
        "Behavior analysis to identify intent",
      ],
      metrics: [
        { label: "Anonymous", value: 98 },
        { label: "Identified", value: 2 },
      ],
    },
    {
      id: 2,
      title: "Target",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description: "We build smart outbound email campaigns tailored to your audience",
      details:
        "Once we identify companies visiting your site, we find the right decision-makers and create personalized outreach campaigns based on their specific interests and behavior on your website.",
      stat: "93%",
      statDescription: "accuracy in identifying the right decision makers",
      features: [
        "AI-powered contact discovery",
        "Personalized messaging based on site behavior",
        "Multi-channel outreach strategies",
      ],
      metrics: [
        { label: "Accurate", value: 93 },
        { label: "Inaccurate", value: 7 },
      ],
    },
    {
      id: 3,
      title: "Engage",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description: "Prospects receive personalized outreach at scale, written to convert",
      details:
        "Our team crafts personalized messages that reference their specific website activity and interests. This personalized approach generates 5x higher response rates than traditional cold outreach.",
      stat: "5x",
      statDescription: "higher response rate than traditional cold outreach",
      features: [
        "Personalized messaging at scale",
        "Automated follow-up sequences",
        "Response handling and objection management",
      ],
      metrics: [
        { label: "ClikConvert", value: 83 },
        { label: "Traditional", value: 17 },
      ],
    },
    {
      id: 4,
      title: "Book",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description: "We handle replies and scheduling—your calendar fills up automatically",
      details:
        "We manage all responses, handle objections, and qualify prospects before scheduling them directly on your calendar. You just show up to the calls with prepared prospects.",
      stat: "15-30",
      statDescription: "qualified meetings booked per month",
      features: [
        "Automated calendar scheduling",
        "Pre-call qualification and briefing",
        "Meeting reminder and follow-up system",
      ],
      metrics: [
        { label: "Qualified", value: 90 },
        { label: "Unqualified", value: 10 },
      ],
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

  const activeStepData = steps.find((step) => step.id === activeStep) || steps[0]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Step Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2 md:space-x-4">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => goToStep(step.id)}
                className={`flex items-center px-4 py-2 rounded-full transition-all ${
                  activeStep === step.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
                    activeStep === step.id ? "bg-white text-blue-600" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {step.id}
                </div>
                <span className="whitespace-nowrap">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            {/* Step Header */}
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                {activeStepData.id}
              </div>
              <h3 className="text-2xl font-bold">{activeStepData.title}</h3>
            </div>

            {/* Step Description */}
            <p className="text-lg text-gray-700 mb-6">{activeStepData.description}</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                {/* Details Box */}
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                  <p className="text-gray-700">{activeStepData.details}</p>
                </div>

                {/* Stat */}
                <div className="mb-6">
                  <div className="text-5xl font-bold text-blue-600">{activeStepData.stat}</div>
                  <div className="text-gray-600">{activeStepData.statDescription}</div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {activeStepData.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Metrics */}
                <div>
                  <h4 className="font-medium mb-4">Performance Metrics:</h4>
                  <div className="space-y-4">
                    {activeStepData.metrics.map((metric, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span>{metric.label}</span>
                          <span>{metric.value}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${index === 0 ? "bg-blue-600" : "bg-gray-400"}`}
                            style={{ width: `${metric.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="mt-8 bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <img
                    src={`/${activeStepData.title.toLowerCase()}-infographic.png`}
                    alt={`${activeStepData.title} visualization`}
                    className="max-w-full h-auto"
                    onError={(e) => {
                      e.currentTarget.src = "/data-visualization-abstract.png"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="bg-gray-50 px-8 py-4 flex items-center justify-between">
            <div className="flex space-x-1">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => goToStep(step.id)}
                  className={`w-2 h-2 rounded-full ${
                    activeStep === step.id ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to step ${step.id}`}
                ></button>
              ))}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={prevStep}
                disabled={activeStep === 1}
                className="p-2 rounded-lg border border-gray-200 disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextStep}
                disabled={activeStep === steps.length}
                className="p-2 rounded-lg border border-gray-200 disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="/book-call"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book a Strategy Call
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
