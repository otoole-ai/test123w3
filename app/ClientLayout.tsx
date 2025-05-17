"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/header"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style jsx global>{`
          /* Hide any floating circle elements */
          div[style*="border-radius: 50%"],
          div[style*="border-radius:50%"],
          div[style*="rounded-full"],
          div[class*="circle"],
          div[class*="dot"],
          div[class*="orb"],
          div[class*="cursor"] {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
          
          /* Target the specific area where the circle appears */
          section:has(h3:contains("We turn lost traffic")) div[style*="position: absolute"],
          section:has(h3:contains("We turn lost traffic")) div[style*="position:absolute"],
          section:has(h3:contains("We turn lost traffic")) div[class*="absolute"],
          section:has(h3:contains("We turn lost traffic")) div[class*="fixed"] {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
