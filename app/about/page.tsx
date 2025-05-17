import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | ClikConvert",
  description:
    "Learn about ClikConvert and our mission to transform anonymous website traffic into qualified sales conversations.",
}

export default function AboutPage() {
  return (
    <main>
      <div className="bg-gray-50 py-12">
        <div className="container-section py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About ClikConvert</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We're on a mission to transform anonymous website traffic into qualified sales conversations.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-bold text-3xl sm:text-4xl">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  ClikConvert was founded by a team of B2B marketing experts who saw a critical gap in the market:
                  businesses were spending thousands on driving traffic, but had no way to identify or follow up with
                  the 98% of visitors who never converted.
                </p>
                <p className="text-lg">
                  We built ClikConvert to solve this problem, combining visitor identification technology with proven
                  outreach systems to turn anonymous traffic into booked sales calls.
                </p>
              </div>
            </div>
            <div className="relative h-[350px] bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-lg">Team Image</div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-bold text-3xl sm:text-4xl mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Results-Driven",
                  description: "We measure success by the number of qualified meetings we book for our clients.",
                },
                {
                  title: "Transparency",
                  description:
                    "We provide clear reporting and honest communication about what's working and what's not.",
                },
                {
                  title: "Continuous Improvement",
                  description: "We're constantly testing and refining our approach to stay ahead of the curve.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-xl mb-3 text-[#1e56a0]">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-3xl sm:text-4xl mb-6">Our Team</h2>
            <p className="text-lg text-gray-700 mb-12">
              We're a team of marketers, developers, and sales experts passionate about helping B2B companies grow.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Jane Smith",
                  title: "Founder & CEO",
                },
                {
                  name: "John Doe",
                  title: "Head of Operations",
                },
                {
                  name: "Sarah Johnson",
                  title: "Lead Developer",
                },
              ].map((person, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">
                    Photo
                  </div>
                  <h3 className="font-bold text-xl">{person.name}</h3>
                  <p className="text-gray-600">{person.title}</p>
                </div>
              ))}
            </div>
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
