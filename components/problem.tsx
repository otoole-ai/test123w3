import Image from "next/image"

export default function Problem() {
  return (
    <section className="bg-white">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[350px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e56a0]/5 to-[#16c2d5]/5 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/placeholder-k2b6y.png"
                alt="Website visitors disappearing without converting"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-bold text-3xl sm:text-4xl">
              You're driving traffic. But most of it disappears without a trace.
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Up to 98% of your website visitors never fill out a form, book a call, or convert. That's not a traffic
                problem—it's a follow-up problem.
              </p>
              <p className="text-lg">
                If you're still relying on manual outreach or passive forms, you're missing a huge opportunity to grow
                revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
