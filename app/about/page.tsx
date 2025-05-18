import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About | ClikConvert",
  description:
    "Learn about ClikConvert and our mission to transform anonymous website traffic into qualified sales conversations.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
