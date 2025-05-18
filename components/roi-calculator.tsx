"use client"

export default function RoiCalculator() {
  // Static values - no state changes that could cause re-renders
  const revenuePerMeeting = 20000
  const meetingsPerMonth = 15
  const monthlyCost = 500
  const monthlyRevenue = 300000
  const monthlyProfit = 299500
  const roi = 59900

  return (
    <div id="roi-calculator-static" style={{ display: "block", visibility: "visible" }}>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#1e56a0]">Calculate Your Potential ROI</h2>
              <div className="w-24 h-1 bg-[#1e56a0] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Estimate the potential return on investment you could achieve with ClikConvert.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-[#1e56a0] px-6 py-5 text-white">
                <h3 className="text-2xl font-semibold">ROI Calculator</h3>
                <p className="text-white/80 text-sm">Estimate your potential return on investment</p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-lg mb-4 text-gray-800">Investment Assumptions</h4>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Average Revenue Per Meeting
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <input
                          type="text"
                          defaultValue="20,000"
                          className="block w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg"
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meetings Booked Per Month</label>
                      <input
                        type="text"
                        defaultValue="15"
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg"
                        readOnly
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">ClikConvert Monthly Cost</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <input
                          type="text"
                          defaultValue="500"
                          className="block w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-medium text-lg mb-6 text-gray-800">Projected ROI</h4>

                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-500 mb-2">Monthly Revenue</h5>
                      <div className="text-2xl font-bold text-gray-800">$300,000</div>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-500 mb-2">Monthly Profit</h5>
                      <div className="text-2xl font-bold text-gray-800">$299,500</div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="text-sm font-medium text-[#1e56a0] mb-2">Return on Investment (ROI)</h5>
                      <div className="flex items-end">
                        <div className="text-3xl font-bold text-[#1e56a0]">59,900.0</div>
                        <span className="text-sm text-gray-600 ml-1">%</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href="/book-call"
                        className="block w-full bg-[#1e56a0] text-white font-medium py-3 px-4 rounded-lg text-center"
                      >
                        Get a Custom ROI Estimate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
