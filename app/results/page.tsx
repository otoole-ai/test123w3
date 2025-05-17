import type { Metadata } from "next"
import ResultsBeforeAfter from "@/components/results-before-after"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Results & Testimonials | ClikConvert",
  description: "See the real results businesses achieve with ClikConvert's visitor identification and outreach system.",
}

export default function ResultsPage() {
  return (
    <main>
      <div className="bg-gray-50 py-12">
        <div className="container-section py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Results</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We don't promise meetings. We guarantee them.
          </p>
        </div>
      </div>

      <ResultsBeforeAfter />

      <section className="bg-[#1e56a0] text-white">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-3xl sm:text-4xl mb-4">Ready to turn your traffic into revenue?</h2>
            <p className="text-xl mb-8">
              Let's build a predictable pipeline from the people already visiting your site.
            </p>
            <Link
              href="/book-call"
              className="bg-white text-[#1e56a0] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg inline-flex items-center transition-colors duration-200"
            >
              Book a Free Strategy Call
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
