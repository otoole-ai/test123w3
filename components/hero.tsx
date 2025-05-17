import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Turn Anonymous Website Visitors Into Booked Sales Calls</h1>
            <p className="text-xl text-gray-600">
              ClikConvert identifies your high-intent traffic and gets them on your calendar—automatically.
            </p>
            <Link
              href="/book-call"
              className="bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white hover:from-[#174785] hover:to-[#14afc0] font-medium py-3 px-8 rounded-lg text-lg inline-block transition-colors duration-200"
            >
              Book a Free Strategy Call
            </Link>
          </div>
          <div className="relative h-[350px] bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-gray-400 text-lg">Hero Illustration</div>
          </div>
        </div>
      </div>
    </section>
  )
}
