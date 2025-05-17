import FAQChatbot from "@/components/faq-chatbot"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | ClikConvert",
  description:
    "Get answers to common questions about ClikConvert - how our technology works, implementation process, expected results, and pricing options.",
}

export default function FAQPage() {
  return (
    <main className="pt-16">
      <FAQChatbot />
    </main>
  )
}
