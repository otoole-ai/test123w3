import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Free Strategy Call | ClikConvert",
  description:
    "Schedule a free strategy call with our team to learn how ClikConvert can help you turn anonymous website visitors into booked sales calls.",
}

export default function BookCallPage() {
  return (
    <main>
      <div className="bg-gray-50 py-12">
        <div className="container-section py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Book a Free Strategy Call</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Let's discuss how ClikConvert can help you turn anonymous website visitors into booked sales calls.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="container-section max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Schedule Your Call</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e56a0] focus:border-[#1e56a0]"
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
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e56a0] focus:border-[#1e56a0]"
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e56a0] focus:border-[#1e56a0]"
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e56a0] focus:border-[#1e56a0]"
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
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  What are your main goals?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1e56a0] focus:border-[#1e56a0]"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 hover:from-[#174785] hover:to-[#14afc0]"
                >
                  Request Your Strategy Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
