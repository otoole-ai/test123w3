"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full flex justify-center px-4 py-4 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={`relative w-full max-w-5xl mx-auto rounded-xl backdrop-blur-sm bg-white/70 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-between px-6 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* Logo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="flex items-center group">
            <div className="relative flex items-center">
              <motion.div whileHover={{ scale: 1.05 }} className="relative w-10 h-10 mr-2">
                <Image
                  src="/logo.png"
                  alt="ClikConvert Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </motion.div>
              <span className="text-xl font-bold text-[#1e56a0] tracking-wide">ClikConvert</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: "How It Works", href: "/how-it-works" },
            { name: "Results", href: "/results" },
            { name: "About", href: "/about" },
          ].map((item, i) => (
            <motion.div key={item.name} custom={i} initial="hidden" animate="visible" variants={navItemVariants}>
              <Link
                href={item.href}
                className={`relative px-1 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive(item.href) ? "text-[#1e56a0]" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/book-call"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg p-0.5"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-[#1e56a0] to-[#16c2d5] group-hover:from-[#1e56a0] group-hover:to-[#16c2d5]"></span>
            <span className="absolute bottom-0 right-0 mb-32 mr-4 block h-[300%] w-[300%] origin-bottom-right -translate-x-full translate-y-full rounded-full bg-[#16c2d5] opacity-30 transition-all duration-500 ease-out group-hover:rotate-45 group-hover:opacity-50"></span>
            <span className="relative flex items-center justify-center rounded-md bg-white px-5 py-2.5 transition-all duration-300 ease-out group-hover:bg-opacity-0">
              <span className="relative flex items-center text-sm font-semibold text-[#1e56a0] group-hover:text-white tracking-wide">
                Book a Free Call
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </span>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-20 mt-2 px-4 md:hidden overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="rounded-xl shadow-lg backdrop-blur-sm bg-white/70 border border-gray-100 overflow-hidden"
            >
              <div className="pt-3 pb-4 space-y-1">
                {[
                  { name: "How It Works", href: "/how-it-works" },
                  { name: "Results", href: "/results" },
                  { name: "About", href: "/about" },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-base font-medium ${
                        isActive(item.href)
                          ? "bg-white text-[#1e56a0]"
                          : "text-gray-700 hover:text-gray-900 hover:bg-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        {isActive(item.href) && (
                          <div className="w-1 h-6 bg-gradient-to-b from-[#1e56a0] to-[#16c2d5] rounded-full mr-3"></div>
                        )}
                        <span className={isActive(item.href) ? "ml-3" : "ml-4"}>{item.name}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="mt-4 mx-4 mb-2"
                >
                  <Link
                    href="/book-call"
                    className="w-full flex items-center justify-center px-4 py-3 text-base font-medium rounded-lg bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white shadow-md hover:shadow-lg transition-shadow duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book a Free Call
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
