import type { Metadata } from "next"
import BookCallClient from "./BookCallClient"

export const metadata: Metadata = {
  title: "Apply for a Strategic Partnership | ClikConvert",
  description:
    "Apply to work with ClikConvert and transform how you convert anonymous website visitors into booked sales calls. Limited spots available.",
}

export default function BookCallPage() {
  return (
    <main>
      <BookCallClient />
    </main>
  )
}
