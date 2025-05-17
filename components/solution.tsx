import Image from "next/image"

export default function Solution() {
  return (
    <section className="bg-gray-50">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-bold text-3xl sm:text-4xl">We turn lost traffic into live conversations.</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                ClikConvert uncovers the identities of your anonymous visitors and turns them into warm leads. Then, our
                done-for-you outreach system books qualified calls directly to your calendar.
              </p>
              <p className="text-lg">
                You don't need new traffic—you need better conversion from the traffic you already have.
              </p>
            </div>
          </div>
          <div className="relative h-[350px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e56a0]/5 to-[#16c2d5]/5 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/placeholder-7mu9z.png"
                alt="ClikConvert turning anonymous visitors into leads"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
