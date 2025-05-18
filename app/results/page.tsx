import type { Metadata } from "next"
import ResultsClient from "./ResultsClient"

export const metadata: Metadata = {
  title: "Results & Testimonials | ClikConvert",
  description: "See the real results businesses achieve with ClikConvert's visitor identification and outreach system.",
}

export default function ResultsPage() {
  return <ResultsClient />
}
