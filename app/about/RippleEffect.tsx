"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { ArrowRight, Globe, Users, BarChart3, Building } from "lucide-react"
import Link from "next/link"

// Impact data for visualization
const impactData = [
  {
    id: 1,
    name: "North America",
    clients: 120,
    revenue: "$65M+",
    position: { x: 30, y: 40 },
    size: 1.2,
  },
  {
    id: 2,
    name: "Europe",
    clients: 85,
    revenue: "$42M+",
    position: { x: 55, y: 35 },
    size: 1,
  },
  {
    id: 3,
    name: "Asia Pacific",
    clients: 45,
    revenue: "$18M+",
    position: { x: 75, y: 45 },
    size: 0.9,
  },
  {
    id: 4,
    name: "Latin America",
    clients: 25,
    revenue: "$8M+",
    position: { x: 40, y: 65 },
    size: 0.8,
  },
  {
    id: 5,
    name: "Middle East",
    clients: 15,
    revenue: "$6M+",
    position: { x: 60, y: 55 },
    size: 0.7,
  },
]

// Impact categories for filtering
const impactCategories = [
  { id: "all", name: "All Impact", icon: Globe },
  { id: "clients", name: "Clients Served", icon: Users },
  { id: "revenue", name: "Revenue Generated", icon: BarChart3 },
  { id: "industries", name: "Industries", icon: Building },
]

// Success stories for nodes
const successStories = [
  {
    id: 1,
    company: "TechGrowth Inc.",
    industry: "SaaS",
    result: "43% increase in qualified leads",
    quote:
      "ClikConvert transformed how we identify and engage with our website visitors, resulting in a significant boost to our pipeline.",
  },
  {
    id: 2,
    company: "Global Manufacturing Co.",
    industry: "Manufacturing",
    result: "28% increase in sales conversions",
    quote:
      "The ability to identify anonymous website visitors has been a game-changer for our sales team's efficiency.",
  },
  {
    id: 3,
    company: "FinServe Solutions",
    industry: "Financial Services",
    result: "52% increase in high-value meetings",
    quote:
      "We're now able to prioritize our outreach based on actual website engagement, focusing our team on the most promising opportunities.",
  },
  {
    id: 4,
    company: "HealthTech Innovations",
    industry: "Healthcare",
    result: "37% reduction in sales cycle",
    quote: "Knowing which pages prospects visited allowed us to tailor our conversations and close deals faster.",
  },
  {
    id: 5,
    company: "EduLearn Platform",
    industry: "Education",
    result: "63% increase in enterprise deals",
    quote:
      "ClikConvert helped us identify when key decision-makers were on our site, allowing for perfectly timed follow-ups.",
  },
]

export default function RippleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeNode, setActiveNode] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState<any[]>([])
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle canvas setup and animation
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    // Set canvas size
    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Canvas context
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Animation variables
    let animationFrameId: number
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Draw ripple effect
    const drawRipples = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw central orb
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 50)
      gradient.addColorStop(0, "#1e56a0")
      gradient.addColorStop(1, "#16c2d5")

      ctx.beginPath()
      ctx.arc(centerX, centerY, 30 + Math.sin(Date.now() / 500) * 5, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Glow effect
      ctx.save()
      ctx.beginPath()
      ctx.arc(centerX, centerY, 40 + Math.sin(Date.now() / 500) * 8, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(22, 194, 213, 0.2)"
      ctx.filter = "blur(10px)"
      ctx.fill()
      ctx.restore()

      // Draw concentric rings
      for (let i = 0; i < 4; i++) {
        const radius = 80 + i * 60 + Math.sin(Date.now() / 1000 + i) * 5
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(30, 86, 160, ${0.3 - i * 0.07})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      // Draw impact nodes
      impactData.forEach((node) => {
        // Skip if filtered out
        if (activeCategory !== "all" && activeCategory !== "clients" && activeCategory !== "revenue") return

        const nodeX = (canvas.width * node.position.x) / 100
        const nodeY = (canvas.height * node.position.y) / 100
        const nodeSize = 10 * node.size

        // Node glow
        ctx.save()
        ctx.beginPath()
        ctx.arc(nodeX, nodeY, nodeSize + 5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(22, 194, 213, 0.3)"
        ctx.filter = "blur(8px)"
        ctx.fill()
        ctx.restore()

        // Node circle
        ctx.beginPath()
        ctx.arc(nodeX, nodeY, nodeSize, 0, Math.PI * 2)
        ctx.fillStyle = node.id === activeNode ? "#1e56a0" : "#16c2d5"
        ctx.fill()

        // Pulsating effect
        if (node.id === activeNode) {
          ctx.beginPath()
          ctx.arc(nodeX, nodeY, nodeSize + 10 + Math.sin(Date.now() / 300) * 5, 0, Math.PI * 2)
          ctx.strokeStyle = "rgba(30, 86, 160, 0.5)"
          ctx.lineWidth = 2
          ctx.stroke()
        }
      })

      // Draw user-generated ripples
      ripples.forEach((ripple, index) => {
        ripple.radius += 2
        ripple.opacity -= 0.01

        if (ripple.opacity <= 0) {
          // Remove faded ripples
          setRipples((prev) => prev.filter((_, i) => i !== index))
          return
        }

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(22, 194, 213, ${ripple.opacity})`
        ctx.lineWidth = 2
        ctx.stroke()
      })

      // Draw particles flowing along rings
      const time = Date.now() / 1000
      for (let i = 0; i < 4; i++) {
        const radius = 80 + i * 60
        const particleCount = 8

        for (let j = 0; j < particleCount; j++) {
          const angle = (time * (0.5 - i * 0.1) + j * ((Math.PI * 2) / particleCount)) % (Math.PI * 2)
          const x = centerX + Math.cos(angle) * radius
          const y = centerY + Math.sin(angle) * radius

          ctx.beginPath()
          ctx.arc(x, y, 3, 0, Math.PI * 2)
          ctx.fillStyle = j % 2 === 0 ? "#1e56a0" : "#16c2d5"
          ctx.fill()
        }
      }

      // Continue animation
      animationFrameId = requestAnimationFrame(drawRipples)
    }

    // Start animation
    drawRipples()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [activeNode, ripples, activeCategory])

  // Handle canvas interaction
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Add new ripple
    setRipples((prev) => [...prev, { x, y, radius: 10, opacity: 0.8 }])

    // Check if clicked on a node
    impactData.forEach((node) => {
      const nodeX = (canvas.width * node.position.x) / 100
      const nodeY = (canvas.height * node.position.y) / 100
      const distance = Math.sqrt(Math.pow(x - nodeX, 2) + Math.pow(y - nodeY, 2))

      if (distance < 20) {
        setActiveNode(node.id)
      }
    })
  }

  // Handle mouse movement for lens effect
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-[30%] right-[15%] w-80 h-80 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                Our Global Impact
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] transform translate-y-2"></span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Since 2018, we've helped B2B companies around the world transform how they identify and engage with their
              website visitors, creating measurable impact across industries and regions.
            </p>
          </div>

          {/* Enhanced CSS-based impact visualization */}
          <div className="mb-16 relative">
            <div className="aspect-[16/9] w-full bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 relative">
              {/* Background glow effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[70%] h-[70%] -translate-x-1/2 -translate-y-1/2 bg-blue-50/50 rounded-full blur-3xl"></div>
                <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] -translate-x-1/2 -translate-y-1/2 bg-cyan-50/30 rounded-full blur-3xl"></div>
                <div className="absolute top-[60%] left-[70%] w-[30%] h-[30%] -translate-x-1/2 -translate-y-1/2 bg-indigo-50/30 rounded-full blur-3xl"></div>
              </div>

              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,86,160,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,86,160,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

              {/* Central orb with enhanced ripple effects */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                {/* Ripple animations - more dramatic */}
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="absolute inset-0 border-[6px] border-[#1e56a0]/20 rounded-full animate-ping"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute inset-0 border-[4px] border-[#16c2d5]/15 rounded-full animate-ping"
                    style={{ animationDuration: "4s", animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute inset-0 border-[8px] border-[#1e56a0]/10 rounded-full animate-ping"
                    style={{ animationDuration: "5s", animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute inset-0 border-[3px] border-[#16c2d5]/10 rounded-full animate-ping"
                    style={{ animationDuration: "6s", animationDelay: "1.5s" }}
                  ></div>
                </div>

                {/* Enhanced central orb with glow */}
                <div
                  className="relative w-32 h-32 rounded-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] shadow-[0_0_30px_rgba(22,194,213,0.6)] z-30 animate-pulse overflow-hidden"
                  style={{ animationDuration: "2s" }}
                >
                  <div className="absolute inset-0 rounded-full bg-white/20"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4)_0%,transparent_70%)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                    ClikConvert
                  </div>
                </div>
              </div>

              {/* Enhanced impact nodes with 3D effect and glow */}
              <div className="absolute top-[40%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#16c2d5]/30 blur-md transform scale-125"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e56a0] to-[#16c2d5] shadow-[0_0_15px_rgba(22,194,213,0.5)] group-hover:shadow-[0_0_25px_rgba(22,194,213,0.7)] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">120+</span>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl transition-all duration-300 z-40 w-64 scale-90 group-hover:scale-100 border border-blue-100">
                  <p className="font-bold text-lg text-[#1e56a0]">North America</p>
                  <p className="text-sm text-blue-600 mb-2">120 Clients • $65M+ Revenue</p>
                  <p className="text-xs text-gray-600 italic">
                    "ClikConvert transformed how we identify and engage with our website visitors."
                  </p>
                </div>
                {/* Connection line to central orb */}
                <div className="absolute top-1/2 left-1/2 w-[150px] h-[1px] bg-gradient-to-r from-[#1e56a0]/50 to-transparent transform origin-left rotate-[30deg]"></div>
              </div>

              <div className="absolute top-[35%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#16c2d5]/30 blur-md transform scale-125"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e56a0] to-[#16c2d5] shadow-[0_0_15px_rgba(22,194,213,0.5)] group-hover:shadow-[0_0_25px_rgba(22,194,213,0.7)] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">85+</span>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl transition-all duration-300 z-40 w-64 scale-90 group-hover:scale-100 border border-blue-100">
                  <p className="font-bold text-lg text-[#1e56a0]">Europe</p>
                  <p className="text-sm text-blue-600 mb-2">85 Clients • $42M+ Revenue</p>
                  <p className="text-xs text-gray-600 italic">
                    "The ability to identify anonymous website visitors has been a game-changer for our sales team."
                  </p>
                </div>
                {/* Connection line to central orb */}
                <div className="absolute top-1/2 left-1/2 w-[100px] h-[1px] bg-gradient-to-r from-[#1e56a0]/50 to-transparent transform origin-left rotate-[150deg]"></div>
              </div>

              <div className="absolute top-[45%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#16c2d5]/30 blur-md transform scale-125"></div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1e56a0] to-[#16c2d5] shadow-[0_0_15px_rgba(22,194,213,0.5)] group-hover:shadow-[0_0_25px_rgba(22,194,213,0.7)] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">45+</span>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl transition-all duration-300 z-40 w-64 scale-90 group-hover:scale-100 border border-blue-100">
                  <p className="font-bold text-lg text-[#1e56a0]">Asia Pacific</p>
                  <p className="text-sm text-blue-600 mb-2">45 Clients • $18M+ Revenue</p>
                  <p className="text-xs text-gray-600 italic">
                    "We're now able to prioritize our outreach based on actual website engagement."
                  </p>
                </div>
                {/* Connection line to central orb */}
                <div className="absolute top-1/2 left-1/2 w-[180px] h-[1px] bg-gradient-to-r from-[#1e56a0]/50 to-transparent transform origin-left rotate-[190deg]"></div>
              </div>

              <div className="absolute top-[65%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#16c2d5]/30 blur-md transform scale-125"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1e56a0] to-[#16c2d5] shadow-[0_0_15px_rgba(22,194,213,0.5)] group-hover:shadow-[0_0_25px_rgba(22,194,213,0.7)] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">25+</span>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl transition-all duration-300 z-40 w-64 scale-90 group-hover:scale-100 border border-blue-100">
                  <p className="font-bold text-lg text-[#1e56a0]">Latin America</p>
                  <p className="text-sm text-blue-600 mb-2">25 Clients • $8M+ Revenue</p>
                  <p className="text-xs text-gray-600 italic">
                    "Knowing which pages prospects visited allowed us to tailor our conversations and close deals
                    faster."
                  </p>
                </div>
                {/* Connection line to central orb */}
                <div className="absolute top-1/2 left-1/2 w-[120px] h-[1px] bg-gradient-to-r from-[#1e56a0]/50 to-transparent transform origin-left rotate-[250deg]"></div>
              </div>

              <div className="absolute top-[55%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#16c2d5]/30 blur-md transform scale-125"></div>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1e56a0] to-[#16c2d5] shadow-[0_0_15px_rgba(22,194,213,0.5)] group-hover:shadow-[0_0_25px_rgba(22,194,213,0.7)] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">15+</span>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl transition-all duration-300 z-40 w-64 scale-90 group-hover:scale-100 border border-blue-100">
                  <p className="font-bold text-lg text-[#1e56a0]">Middle East</p>
                  <p className="text-sm text-blue-600 mb-2">15 Clients • $6M+ Revenue</p>
                  <p className="text-xs text-gray-600 italic">
                    "ClikConvert helped us identify when key decision-makers were on our site, allowing for perfectly
                    timed follow-ups."
                  </p>
                </div>
                {/* Connection line to central orb */}
                <div className="absolute top-1/2 left-1/2 w-[90px] h-[1px] bg-gradient-to-r from-[#1e56a0]/50 to-transparent transform origin-left rotate-[300deg]"></div>
              </div>

              {/* Enhanced flowing particles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                {/* Larger particles */}
                <div
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] absolute animate-orbit shadow-[0_0_10px_rgba(22,194,213,0.7)]"
                  style={{ animationDuration: "15s", "--orbit-size": "250px" } as React.CSSProperties}
                ></div>
                <div
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-[#16c2d5] to-[#1e56a0] absolute animate-orbit shadow-[0_0_8px_rgba(22,194,213,0.6)]"
                  style={
                    { animationDuration: "20s", animationDelay: "2s", "--orbit-size": "300px" } as React.CSSProperties
                  }
                ></div>

                {/* Smaller particles */}
                <div
                  className="w-2 h-2 rounded-full bg-[#1e56a0] absolute animate-orbit shadow-[0_0_5px_rgba(30,86,160,0.5)]"
                  style={
                    { animationDuration: "12s", animationDelay: "1s", "--orbit-size": "200px" } as React.CSSProperties
                  }
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-[#16c2d5] absolute animate-orbit shadow-[0_0_5px_rgba(22,194,213,0.5)]"
                  style={
                    { animationDuration: "18s", animationDelay: "3s", "--orbit-size": "350px" } as React.CSSProperties
                  }
                ></div>

                {/* Tiny particles */}
                <div
                  className="w-1 h-1 rounded-full bg-white absolute animate-orbit"
                  style={{ animationDuration: "10s", "--orbit-size": "180px" } as React.CSSProperties}
                ></div>
                <div
                  className="w-1 h-1 rounded-full bg-white absolute animate-orbit"
                  style={
                    { animationDuration: "14s", animationDelay: "4s", "--orbit-size": "220px" } as React.CSSProperties
                  }
                ></div>
                <div
                  className="w-1 h-1 rounded-full bg-white absolute animate-orbit"
                  style={
                    { animationDuration: "22s", animationDelay: "6s", "--orbit-size": "280px" } as React.CSSProperties
                  }
                ></div>
              </div>

              {/* Enhanced timeline */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 max-w-md z-30">
                <div className="bg-white/90 backdrop-blur-sm rounded-full h-2 w-full shadow-inner">
                  <div className="bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] h-full rounded-full w-3/4 shadow-[0_0_10px_rgba(22,194,213,0.5)]"></div>
                </div>
                <div className="flex justify-between text-xs font-medium text-gray-600 mt-2">
                  <span className="bg-white/80 px-2 py-1 rounded-md">2018</span>
                  <span className="bg-white/80 px-2 py-1 rounded-md">2020</span>
                  <span className="bg-white/80 px-2 py-1 rounded-md">2022</span>
                  <span className="bg-white/80 px-2 py-1 rounded-md">Today</span>
                </div>
              </div>

              {/* Instructional overlay */}
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-600 shadow-md z-30 border border-blue-100">
                <p>Hover over nodes to see regional impact details</p>
              </div>
            </div>
          </div>

          {/* Impact stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] mb-2">
                290+
              </div>
              <div className="text-gray-600">B2B Companies Worldwide</div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] w-[85%]"></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] mb-2">
                $140M+
              </div>
              <div className="text-gray-600">Revenue Generated</div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] w-[75%]"></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] mb-2">
                12
              </div>
              <div className="text-gray-600">Industries Transformed</div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] w-[60%]"></div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link
              href="/book-call"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Add Your Success Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#16c2d5] to-[#1e56a0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
