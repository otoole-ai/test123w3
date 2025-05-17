import type { Metadata } from "next"
import ProcessDiagram from "../components/process-diagram"

export const metadata: Metadata = {
  title: "How It Works | ClikConvert",
  description:
    "Learn how ClikConvert identifies your high-intent traffic and gets them on your calendar—automatically.",
}

export default function HowItWorksPage() {
  return (
    <main>
      <div className="bg-gray-50 py-12">
        <div className="container-section py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">How ClikConvert Works</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Our proven process turns anonymous website visitors into booked sales calls.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <ProcessDiagram />
      </section>

      <section className="bg-gray-50">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bold text-3xl sm:text-4xl mb-8 text-center">
              Cold outreach has changed. ClikConvert stays ahead of the curve.
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                "Proprietary lead identification tech",
                "Fully-managed systems and copywriting",
                "Built-in warmup and deliverability protection",
                "No cold lists or guesswork—only engaged visitors",
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-6 w-6 text-[#16c2d5] mr-3 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 text-center">
              Most outreach fails because it's generic, manual, and slow. We use data, automation, and proven copy to
              break through the noise and connect with real decision-makers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1e56a0] text-white">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-3xl sm:text-4xl mb-4">Ready to turn your traffic into revenue?</h2>
            <p className="text-xl mb-8">
              Let's build a predictable pipeline from the people already visiting your site.
            </p>
            <a
              href="/book-call"
              className="bg-white text-[#1e56a0] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg inline-block transition-colors duration-200"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
