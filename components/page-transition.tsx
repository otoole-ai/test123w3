"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  // Check if we're on the How It Works page
  const isHowItWorksPage = pathname === "/how-it-works"

  // Default fade transition for most pages
  if (!isHowItWorksPage) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    )
  }

  // Special staggered transition for How It Works page
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  )
}
