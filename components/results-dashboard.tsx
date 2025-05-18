"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { ArrowUpRight, BarChart3, Users, LineChart, TrendingUp, ExternalLink } from "lucide-react"

// Animation utility for counting up numbers
const AnimatedCounter = ({
  value,
  duration = 2000,
  decimals = 0,
}: { value: number; duration?: number; decimals?: number }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const end = Math.min(value, 999999)
    const incrementTime = duration / end
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {decimals > 0 ? count.toFixed(decimals) : count}
    </span>
  )
}

// Circular progress component
const CircularProgress = ({ percentage, color }: { percentage: number; color: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!inView) return

    const timer = setTimeout(() => {
      setProgress(percentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [inView, percentage])

  const circumference = 2 * Math.PI * 40
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        <circle
          className={`${color}`}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={inView ? strokeDashoffset : circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
          style={{ transition: "stroke-dashoffset 1.5s ease-in-out" }}
        />
      </svg>
      <span className="absolute text-2xl font-bold">{progress}%</span>
    </div>
  )
}

// Bar chart component
const BarChart = ({ data }: { data: { label: string; value: number; color: string }[] }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setVisible(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [inView])

  const maxValue = Math.max(...data.map((item) => item.value))

  return (
    <div ref={ref} className="w-full h-48 flex items-end justify-between gap-2 mt-4">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-2 flex-1">
          <div className="w-full relative flex justify-center">
            <div
              className={`w-full max-w-[40px] rounded-t-md ${item.color}`}
              style={{
                height: visible ? `${(item.value / maxValue) * 100}%` : "0%",
                transition: "height 1s ease-out",
                transitionDelay: `${index * 0.2}s`,
              }}
            ></div>
            <span
              className="absolute -top-7 text-sm font-medium"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease-out",
                transitionDelay: `${index * 0.2 + 0.5}s`,
              }}
            >
              {item.value}%
            </span>
          </div>
          <span className="text-xs text-gray-500 mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function ResultsDashboard() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const barChartData = [
    { label: "Before", value: 12, color: "bg-gray-300" },
    { label: "After", value: 68, color: "bg-gradient-to-t from-[#1e56a0] to-[#16c2d5]" },
  ]

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll(".metric-card")
    const { clientX, clientY } = e

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      const cardElement = card as HTMLElement
      cardElement.style.setProperty("--mouse-x", `${x}px`)
      cardElement.style.setProperty("--mouse-y", `${y}px`)
    })
  }

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden bg-white">
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
        {/* Section header */}
        <div
          className="max-w-3xl mx-auto text-center mb-16"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            opacity: isVisible ? 1 : 0,
            transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
            Real Results, Real Revenue
          </h2>
          <p className="text-xl text-gray-600">
            Our clients see dramatic improvements in lead generation and conversion rates.
          </p>
        </div>

        {/* Metrics grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          onMouseMove={mouseMove}
          style={{
            perspective: "1000px",
          }}
        >
          {/* Metric Card 1 */}
          <div
            className="metric-card relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            style={{
              transform: isVisible ? "rotateX(0deg) translateY(0)" : "rotateX(10deg) translateY(40px)",
              opacity: isVisible ? 1 : 0,
              transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(22, 194, 213, 0.1) 0%, transparent 60%)",
              }}
            ></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Conversion Rate</h3>
              <div className="p-2 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10">
                <TrendingUp className="h-5 w-5 text-[#1e56a0]" />
              </div>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold text-gray-900">
                <AnimatedCounter value={347} />%
              </div>
              <div className="text-sm font-medium text-green-600 flex items-center pb-1">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                Increase
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Average improvement after implementation</p>
          </div>

          {/* Metric Card 2 */}
          <div
            className="metric-card relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            style={{
              transform: isVisible ? "rotateX(0deg) translateY(0)" : "rotateX(10deg) translateY(40px)",
              opacity: isVisible ? 1 : 0,
              transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
              transitionDelay: "0.1s",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(22, 194, 213, 0.1) 0%, transparent 60%)",
              }}
            ></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Qualified Leads</h3>
              <div className="p-2 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10">
                <Users className="h-5 w-5 text-[#1e56a0]" />
              </div>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold text-gray-900">
                <AnimatedCounter value={215} />%
              </div>
              <div className="text-sm font-medium text-green-600 flex items-center pb-1">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                Growth
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Average increase in qualified leads per month</p>
          </div>

          {/* Metric Card 3 */}
          <div
            className="metric-card relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            style={{
              transform: isVisible ? "rotateX(0deg) translateY(0)" : "rotateX(10deg) translateY(40px)",
              opacity: isVisible ? 1 : 0,
              transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
              transitionDelay: "0.2s",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(22, 194, 213, 0.1) 0%, transparent 60%)",
              }}
            ></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Average ROI</h3>
              <div className="p-2 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10">
                <LineChart className="h-5 w-5 text-[#1e56a0]" />
              </div>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold text-gray-900">
                <AnimatedCounter value={12} decimals={1} />x
              </div>
              <div className="text-sm font-medium text-green-600 flex items-center pb-1">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                Return
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Average return on investment within 6 months</p>
          </div>

          {/* Metric Card 4 */}
          <div
            className="metric-card relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            style={{
              transform: isVisible ? "rotateX(0deg) translateY(0)" : "rotateX(10deg) translateY(40px)",
              opacity: isVisible ? 1 : 0,
              transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
              transitionDelay: "0.3s",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(22, 194, 213, 0.1) 0%, transparent 60%)",
              }}
            ></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Time to First Meeting</h3>
              <div className="p-2 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10">
                <BarChart3 className="h-5 w-5 text-[#1e56a0]" />
              </div>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold text-gray-900">
                -<AnimatedCounter value={68} />%
              </div>
              <div className="text-sm font-medium text-green-600 flex items-center pb-1">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                Faster
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Reduction in time to first qualified meeting</p>
          </div>
        </div>

        {/* Data visualization section */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            opacity: isVisible ? 1 : 0,
            transition: "transform 1s ease-out, opacity 1s ease-out",
            transitionDelay: "0.4s",
          }}
        >
          {/* Circular progress chart */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Visitor Identification Rate</h3>
            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
              <div className="text-center">
                <CircularProgress percentage={78} color="text-[#1e56a0]" />
                <p className="mt-4 text-sm text-gray-600">B2B Companies</p>
              </div>
              <div className="text-center">
                <CircularProgress percentage={65} color="text-[#16c2d5]" />
                <p className="mt-4 text-sm text-gray-600">Tech Companies</p>
              </div>
              <div className="text-center">
                <CircularProgress percentage={82} color="text-purple-500" />
                <p className="mt-4 text-sm text-gray-600">Professional Services</p>
              </div>
            </div>
          </div>

          {/* Bar chart */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Conversion Rate Improvement</h3>
            <BarChart data={barChartData} />
            <div className="mt-8 text-center text-sm text-gray-600">
              Average conversion rate before and after implementing ClikConvert
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            opacity: isVisible ? 1 : 0,
            transition: "transform 1s ease-out, opacity 1s ease-out",
            transitionDelay: "0.6s",
          }}
        >
          <div className="inline-flex items-center gap-1 text-sm text-gray-500 mb-6">
            <span>Trusted by 200+ companies</span>
            <div className="flex items-center gap-3 ml-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gray-200"></div>
              ))}
            </div>
          </div>

          <a
            href="/book-call"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white font-medium text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            See How We Can Help You
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
