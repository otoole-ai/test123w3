import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import ImmersiveFooter from "@/components/immersive-footer"
import ClientLayout from "./ClientLayout"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ClikConvert | Turn Anonymous Website Visitors Into Booked Sales Calls",
  description: "ClikConvert identifies your high-intent traffic and gets them on your calendar—automatically.",
  openGraph: {
    title: "ClikConvert | Turn Anonymous Website Visitors Into Booked Sales Calls",
    description: "ClikConvert identifies your high-intent traffic and gets them on your calendar—automatically.",
    url: "https://clikconvert.com",
    siteName: "ClikConvert",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ClikConvert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClikConvert | Turn Anonymous Website Visitors Into Booked Sales Calls",
    description: "ClikConvert identifies your high-intent traffic and gets them on your calendar—automatically.",
    images: ["/og-image.jpg"],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Simple script to ensure page starts at top */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        if (window.location.hash === '') {
          window.scrollTo(0, 0);
        }
      `,
          }}
        />

        {/* Leadfeeder tracking script */}
        <Script id="leadfeeder" strategy="beforeInteractive">
          {`
            (function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr.q=ldfdr._q||[]).push([].slice.call(arguments));}; 
            (function(d,s){ 
              fs=d.getElementsByTagName(s)[0]; 
              function ce(src){ 
                var cs=d.createElement(s); 
                cs.src=src; 
                cs.async=1; 
                fs.parentNode.insertBefore(cs,fs); 
              }; 
              ce('https://sc.lfeeder.com/lftracker_v1'+ss+(ex?'_'+ex:'')+'.js'); 
            })(document,'script'); 
            })('lAxoEaKzqQ04OYGd');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-white`}>
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <ImmersiveFooter />
      </body>
    </html>
  )
}
