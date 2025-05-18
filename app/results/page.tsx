import type { Metadata } from "next"
import ResultsDashboard from "@/components/results-dashboard"
import ClientSuccessStories from "@/components/client-success-stories"
import IndustrySpecificResults from "@/components/industry-specific-results"
import RoiCalculator from "@/components/roi-calculator"
import ResultsGuarantee from "@/components/results-guarantee"

export const metadata: Metadata = {
  title: "Results & Testimonials | ClikConvert",
  description: "See the real results businesses achieve with ClikConvert's visitor identification and outreach system.",
}

export default function ResultsPage() {
  return (
    <main>
      {/* Hero Section - Framer-like design */}
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

      {/* ROI Calculator section */}
      <RoiCalculator />

      {/* Results Guarantee section */}
      <ResultsGuarantee />
    </main>
  )
}
