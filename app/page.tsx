"use client"

import { useEffect } from "react"
import Hero from "./components/hero"
import ProblemCalculator from "./components/problem-calculator"
import SolutionSection from "./components/solution-section"
import HowItWorksPanels from "./components/how-it-works-panels"
import WhyItWorks from "./components/why-it-works"
import ResultsBeforeAfter from "@/components/results-before-after"
import FAQChatbot from "@/components/faq-chatbot"

export default function Home() {
  // Force scroll to top when the page loads
  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0)

    // Also set a timeout to ensure it happens after any other effects
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Hero />
      <ProblemCalculator />
      <SolutionSection />
      <HowItWorksPanels />
      <WhyItWorks />
      <ResultsBeforeAfter />
      <FAQChatbot />
    </main>
  )
}
