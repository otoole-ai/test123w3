"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"

// Animation counter hook
const useCounter = (end: number, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (!inView) return

    countRef.current = start
    const step = (end - start) / (duration / 16)
    let animationFrame: number

    const updateCount = () => {
      if (countRef.current < end) {
        countRef.current += step
        setCount(Math.min(Math.floor(countRef.current), end))
        animationFrame = requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, start, duration, inView])

  return [count, inViewRef] as const
}

// Stat counter component
const StatCounter = ({
  value,
  label,
  suffix = "+",
}: {
  value: number
  label: string
  suffix?: string
}) => {
  const [count, ref] = useCounter(value)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2 text-white flex items-center justify-center">
        <span className="tabular-nums">{count}</span>
        <span className="text-[#16c2d5]">{suffix}</span>
      </div>
      <p className="text-gray-300">{label}</p>
    </div>
  )
}

// Client logo component
const ClientLogo = ({ src, alt, delay }: { src: string; alt: string; delay: number }) => {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative h-12 w-24 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110">
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" />
      </div>
    </div>
  )
}

// Footer link component with animation
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="group relative text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
    >
      <span className="inline-block">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16c2d5] group-hover:w-full transition-all duration-300"></span>
    </Link>
  )
}

// Main footer component
export default function ImmersiveFooter() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const footerRef = useRef<HTMLElement>(null)
  const [isFooterInView, setIsFooterInView] = useState(false)

  // Handle mouse movement for particle effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!footerRef.current) return

      const rect = footerRef.current.getBoundingClientRect()
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        setIsFooterInView(true)
        setMousePosition({
          x: e.clientX,
          y: e.clientY - rect.top,
        })
      } else {
        setIsFooterInView(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Prevent auto-scrolling to footer on page load
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#0a1930] via-[#1a2a4a] to-[#1e1a40] text-white"
    >
      {/* Mouse follower effect - only visible on desktop */}
      {isFooterInView && (
        <div
          className="hidden lg:block absolute pointer-events-none w-40 h-40 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(22, 194, 213, 0.15) 0%, rgba(22, 194, 213, 0) 70%)",
            transform: `translate(${mousePosition.x - 80}px, ${mousePosition.y - 80}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      )}

      {/* Wave divider - white color to match background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container-section pt-24 pb-16 relative z-10">
        {/* Mission statement */}
        <div>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="block">Turning Anonymous Website Visitors</span>
              <span className="relative inline-block">
                Into
                <span className="relative mx-2">
                  <span className="relative z-10">Qualified Sales Conversations</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#16c2d5]/20 -z-0"></span>
                </span>
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our mission is to help B2B companies unlock the hidden value in their website traffic by connecting with
              the right decision-makers at the perfect moment.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <StatCounter value={87} label="Conversion Rate" suffix="%" />
          <StatCounter value={3500} label="Meetings Booked" />
          <StatCounter value={42} label="Enterprise Clients" />
          <StatCounter value={12} label="Industry Verticals" />
        </div>

        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="relative w-10 h-10 mr-3">
                  <Image src="/logo.png" alt="ClikConvert Logo" fill className="object-contain" />
                </div>
                <h3 className="text-2xl font-bold">ClikConvert</h3>
              </div>
              <p className="text-gray-300">
                Done-for-you cold outreach that converts anonymous traffic into qualified sales conversations.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#16c2d5] mt-1 mr-3" />
                <span>hello@clikconvert.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#16c2d5] mt-1 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#16c2d5] mt-1 mr-3" />
                <span>123 Conversion Ave, San Francisco, CA 94103</span>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <div>
              <h4 className="font-semibold text-xl mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <FooterLink href="/about">About Us</FooterLink>
                </li>
                <li>
                  <FooterLink href="/how-it-works">How It Works</FooterLink>
                </li>
                <li>
                  <FooterLink href="/why-it-works">Why It Works</FooterLink>
                </li>
                <li>
                  <FooterLink href="/results">Results</FooterLink>
                </li>
                <li>
                  <FooterLink href="/faq">FAQ</FooterLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div>
            <div>
              <h4 className="font-semibold text-xl mb-6">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <FooterLink href="#">
                    Case Studies <ArrowUpRight className="ml-1 w-3 h-3 inline" />
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#">
                    ROI Calculator <ArrowUpRight className="ml-1 w-3 h-3 inline" />
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#">
                    Blog <ArrowUpRight className="ml-1 w-3 h-3 inline" />
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="#">
                    Webinars <ArrowUpRight className="ml-1 w-3 h-3 inline" />
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div>
              <h4 className="font-semibold text-xl mb-6">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Terms of Service</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Cookie Policy</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">GDPR Compliance</FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h4 className="font-semibold text-xl mb-3">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Get the latest insights on converting website visitors into customers.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#16c2d5] text-white placeholder:text-gray-400"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#16c2d5] hover:bg-[#14afc0] rounded-md font-medium transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Attribution and copyright */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ClikConvert. All rights reserved.
            </p>

            <div className="flex items-center">
              <span className="text-gray-400 mr-2">Designed & Developed by</span>
              <a href="https://otoole.ai" target="_blank" rel="noopener noreferrer" className="relative group">
                <span className="bg-gradient-to-r from-[#16c2d5] to-[#a64dff] bg-clip-text text-transparent font-mono tracking-wider text-lg px-2 py-1 border border-white/10 rounded-md backdrop-blur-sm">
                  otoole.ai
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#16c2d5] to-[#a64dff] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
