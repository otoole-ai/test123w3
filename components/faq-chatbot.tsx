"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mic, Send, ChevronRight, MessageSquare, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"

// Types
type MessageType = "assistant" | "user" | "system" | "options"

interface Message {
  id: string
  type: MessageType
  content: React.ReactNode
  timestamp: Date
  mood?: "neutral" | "happy" | "thinking" | "confused"
  options?: {
    id: string
    text: string
  }[]
}

interface FAQCategory {
  id: string
  name: string
}

interface FAQItem {
  id: string
  categoryId: string
  question: string
  answer: React.ReactNode
  relatedQuestions?: string[]
  suggestedReplies?: string[]
}

// FAQ Data
const faqCategories: FAQCategory[] = [
  { id: "technology", name: "About the Technology" },
  { id: "implementation", name: "Implementation" },
  { id: "results", name: "Results & ROI" },
  { id: "pricing", name: "Pricing & Plans" },
]

const faqItems: FAQItem[] = [
  {
    id: "tech-1",
    categoryId: "technology",
    question: "How does ClikConvert identify anonymous website visitors?",
    answer: (
      <div>
        <p>ClikConvert uses advanced visitor identification technology that works in three steps:</p>
        <ol className="list-decimal ml-5 mt-2 space-y-1">
          <li>Captures anonymous visitor data when they land on your site</li>
          <li>Matches this data against our proprietary database of business professionals</li>
          <li>Identifies key decision-makers from companies that visit your website</li>
        </ol>
        <p className="mt-2">
          This happens without requiring visitors to fill out any forms or provide contact information.
        </p>
      </div>
    ),
    relatedQuestions: ["tech-2", "tech-3"],
    suggestedReplies: ["Is this GDPR compliant?", "What information can you identify?", "How accurate is this?"],
  },
  {
    id: "tech-2",
    categoryId: "technology",
    question: "Is ClikConvert compliant with privacy regulations?",
    answer: (
      <div>
        <p>
          Yes, ClikConvert is fully compliant with major privacy regulations including GDPR, CCPA, and other regional
          privacy laws.
        </p>
        <p className="mt-2">
          Our technology only identifies business information that's already publicly available, and we follow strict
          data protection protocols to ensure compliance.
        </p>
        <p className="mt-2">
          We never collect or process personally identifiable information (PII) without proper consent.
        </p>
      </div>
    ),
    relatedQuestions: ["tech-1", "tech-4"],
    suggestedReplies: ["How do you handle data security?", "What about international regulations?"],
  },
  {
    id: "tech-3",
    categoryId: "technology",
    question: "What information can ClikConvert provide about visitors?",
    answer: (
      <div>
        <p>ClikConvert can identify:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Company name and industry</li>
          <li>Company size and revenue</li>
          <li>Key decision-makers and their roles</li>
          <li>Contact information for outreach</li>
          <li>Pages visited and time spent on site</li>
          <li>Visit frequency and engagement patterns</li>
        </ul>
        <p className="mt-2">This information helps you target the right people with personalized outreach.</p>
      </div>
    ),
    relatedQuestions: ["tech-1", "tech-4"],
    suggestedReplies: ["How accurate is this information?", "Can I see a sample report?"],
  },
  {
    id: "tech-4",
    categoryId: "technology",
    question: "How accurate is the visitor identification?",
    answer: (
      <div>
        <p>ClikConvert achieves an industry-leading identification accuracy rate of over 85% for B2B visitors.</p>
        <p className="mt-2">
          Our technology continuously improves through machine learning algorithms that refine identification methods
          based on results.
        </p>
        <p className="mt-2">
          We focus on quality over quantity, ensuring that the leads we identify are highly relevant to your business.
        </p>
      </div>
    ),
    relatedQuestions: ["tech-1", "tech-3"],
    suggestedReplies: ["What happens if a visitor can't be identified?", "How do you verify accuracy?"],
  },
  {
    id: "impl-1",
    categoryId: "implementation",
    question: "How long does it take to implement ClikConvert?",
    answer: (
      <div>
        <p>Implementation is quick and straightforward:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Simple JavaScript snippet installation: 5 minutes</li>
          <li>Account setup and configuration: 1 business day</li>
          <li>Initial data collection period: 7-14 days</li>
          <li>First campaign launch: Within 2 weeks</li>
        </ul>
        <p className="mt-2">
          Our team handles most of the setup process, requiring minimal effort from your technical team.
        </p>
      </div>
    ),
    relatedQuestions: ["impl-2", "impl-3"],
    suggestedReplies: ["Do I need technical knowledge?", "Can it integrate with my CRM?"],
  },
  {
    id: "impl-2",
    categoryId: "implementation",
    question: "Do I need technical knowledge to use ClikConvert?",
    answer: (
      <div>
        <p>No technical knowledge is required to use ClikConvert.</p>
        <p className="mt-2">
          Implementation involves adding a simple JavaScript snippet to your website, which our team can help with if
          needed.
        </p>
        <p className="mt-2">
          The platform features an intuitive dashboard designed for marketing and sales professionals, not technical
          users.
        </p>
        <p className="mt-2">We provide full training and support throughout the onboarding process.</p>
      </div>
    ),
    relatedQuestions: ["impl-1", "impl-3"],
    suggestedReplies: ["What support do you provide?", "How much time will I need to spend managing it?"],
  },
  {
    id: "impl-3",
    categoryId: "implementation",
    question: "Can ClikConvert integrate with my existing CRM?",
    answer: (
      <div>
        <p>Yes, ClikConvert integrates seamlessly with most popular CRM systems, including:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Salesforce</li>
          <li>HubSpot</li>
          <li>Pipedrive</li>
          <li>Zoho CRM</li>
          <li>Microsoft Dynamics</li>
        </ul>
        <p className="mt-2">We also offer an API for custom integrations with other systems.</p>
        <p className="mt-2">
          Our integration ensures that identified leads and meeting bookings flow directly into your existing workflow.
        </p>
      </div>
    ),
    relatedQuestions: ["impl-1", "impl-4"],
    suggestedReplies: ["How does the Salesforce integration work?", "What about custom CRMs?"],
  },
  {
    id: "impl-4",
    categoryId: "implementation",
    question: "What support is provided during implementation?",
    answer: (
      <div>
        <p>We provide comprehensive support throughout the implementation process:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Dedicated implementation specialist</li>
          <li>Technical support for script installation</li>
          <li>Configuration assistance</li>
          <li>Training sessions for your team</li>
          <li>Campaign setup guidance</li>
        </ul>
        <p className="mt-2">
          After implementation, you'll have ongoing access to our customer success team and knowledge base.
        </p>
      </div>
    ),
    relatedQuestions: ["impl-1", "impl-2"],
    suggestedReplies: ["Is there ongoing support after implementation?", "How many training sessions are included?"],
  },
  {
    id: "results-1",
    categoryId: "results",
    question: "How quickly will I see results with ClikConvert?",
    answer: (
      <div>
        <p>Most clients begin seeing results within the first 30 days:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>First 7 days: Visitor identification begins</li>
          <li>Days 7-14: Initial outreach campaigns launch</li>
          <li>Days 14-30: First meetings typically get booked</li>
          <li>After 30 days: Steady flow of qualified meetings</li>
        </ul>
        <p className="mt-2">
          Results improve over time as our system learns from engagement patterns and refines targeting.
        </p>
      </div>
    ),
    relatedQuestions: ["results-2", "results-3"],
    suggestedReplies: ["What ROI can I expect?", "How many meetings per month?"],
  },
  {
    id: "results-2",
    categoryId: "results",
    question: "What ROI can I expect from ClikConvert?",
    answer: (
      <div>
        <p>ClikConvert clients typically see:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>3-5x ROI within the first 90 days</li>
          <li>15-30 qualified sales meetings per month</li>
          <li>50-70% reduction in cost per qualified lead</li>
          <li>30-40% increase in website conversion rate</li>
        </ul>
        <p className="mt-2">
          Results vary based on factors like website traffic volume, industry, and average deal size.
        </p>
        <p className="mt-2">Our performance guarantee ensures you'll see a positive ROI.</p>
      </div>
    ),
    relatedQuestions: ["results-1", "results-3"],
    suggestedReplies: ["Do you have case studies?", "What's your performance guarantee?"],
  },
  {
    id: "results-3",
    categoryId: "results",
    question: "How does ClikConvert compare to traditional lead generation?",
    answer: (
      <div>
        <p>Compared to traditional lead generation methods, ClikConvert offers:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Higher quality leads (already showing interest in your solution)</li>
          <li>Lower cost per qualified meeting (typically 50-70% less)</li>
          <li>Faster time to meeting (no lengthy nurturing required)</li>
          <li>Better conversion rates (3-5x higher than form fills)</li>
          <li>More efficient use of sales team resources</li>
        </ul>
        <p className="mt-2">
          Unlike traditional methods that rely on prospects to identify themselves, ClikConvert proactively identifies
          interested prospects.
        </p>
      </div>
    ),
    relatedQuestions: ["results-1", "results-2"],
    suggestedReplies: ["How is this better than LinkedIn outreach?", "Can this replace our SDR team?"],
  },
  {
    id: "pricing-1",
    categoryId: "pricing",
    question: "How is ClikConvert priced?",
    answer: (
      <div>
        <p>ClikConvert offers flexible pricing models:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>
            <strong>Performance-based:</strong> Pay per qualified meeting booked
          </li>
          <li>
            <strong>Subscription:</strong> Monthly fee based on website traffic volume
          </li>
          <li>
            <strong>Hybrid:</strong> Lower base fee plus performance component
          </li>
        </ul>
        <p className="mt-2">
          All plans include the full suite of features, implementation support, and our performance guarantee.
        </p>
        <p className="mt-2">Contact our team for a custom quote based on your specific needs.</p>
      </div>
    ),
    relatedQuestions: ["pricing-2", "pricing-3"],
    suggestedReplies: ["What's the minimum investment?", "Do you offer any discounts?"],
  },
  {
    id: "pricing-2",
    categoryId: "pricing",
    question: "Is there a minimum contract period?",
    answer: (
      <div>
        <p>We offer flexible contract terms:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Standard contracts are 3, 6, or 12 months</li>
          <li>Longer contracts include preferential pricing</li>
          <li>Month-to-month options available with performance-based pricing</li>
        </ul>
        <p className="mt-2">
          We recommend at least a 3-month commitment to allow sufficient time for optimization and to see meaningful
          results.
        </p>
      </div>
    ),
    relatedQuestions: ["pricing-1", "pricing-3"],
    suggestedReplies: ["Can I cancel anytime?", "What happens at the end of the contract?"],
  },
  {
    id: "pricing-3",
    categoryId: "pricing",
    question: "Do you offer a performance guarantee?",
    answer: (
      <div>
        <p>Yes, ClikConvert offers a performance guarantee:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>If we don't deliver the agreed number of qualified meetings, you don't pay</li>
          <li>Clear definition of "qualified meeting" established upfront</li>
          <li>Monthly performance reviews to ensure we're meeting targets</li>
        </ul>
        <p className="mt-2">
          This guarantee aligns our success with yours and demonstrates our confidence in our solution.
        </p>
      </div>
    ),
    relatedQuestions: ["pricing-1", "pricing-2"],
    suggestedReplies: ["How do you define a qualified meeting?", "What happens if targets aren't met?"],
  },
]

// Helper functions
const getFAQItemById = (id: string): FAQItem | undefined => {
  return faqItems.find((item) => item.id === id)
}

const getFAQItemsByCategory = (categoryId: string): FAQItem[] => {
  return faqItems.filter((item) => item.categoryId === categoryId)
}

const getRelatedFAQItems = (ids: string[] = []): FAQItem[] => {
  return ids.map((id) => getFAQItemById(id)).filter(Boolean) as FAQItem[]
}

// Speech synthesis and recognition setup
const useSpeechSupport = () => {
  const [isSpeechSupported, setIsSpeechSupported] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    // Check if speech recognition is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const speechSynthesis = window.speechSynthesis

    if (SpeechRecognition && speechSynthesis) {
      setIsSpeechSupported(true)
    }
  }, [])

  const startListening = (onResult: (text: string) => void) => {
    if (!isSpeechSupported) return

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    recognitionRef.current = new SpeechRecognition()
    recognitionRef.current.continuous = false
    recognitionRef.current.interimResults = false
    recognitionRef.current.lang = "en-US"

    recognitionRef.current.onstart = () => {
      setIsListening(true)
    }

    recognitionRef.current.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      onResult(transcript)
      stopListening()
    }

    recognitionRef.current.onerror = () => {
      stopListening()
    }

    recognitionRef.current.onend = () => {
      setIsListening(false)
    }

    recognitionRef.current.start()
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const speak = (text: string) => {
    if (!isSpeechSupported) return

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)

    // Get available voices and select a good one
    const voices = window.speechSynthesis.getVoices()
    const preferredVoice = voices.find(
      (voice) =>
        voice.name.includes("Samantha") ||
        voice.name.includes("Google US English Female") ||
        voice.name.includes("Microsoft Zira"),
    )

    if (preferredVoice) {
      utterance.voice = preferredVoice
    }

    utterance.rate = 1.0
    utterance.pitch = 1.0
    utterance.volume = 1.0

    utterance.onstart = () => {
      setIsSpeaking(true)
    }

    utterance.onend = () => {
      setIsSpeaking(false)
    }

    window.speechSynthesis.speak(utterance)
  }

  const stopSpeaking = () => {
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
  }

  return {
    isSpeechSupported,
    isListening,
    isSpeaking,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
  }
}

// Extract plain text from React nodes for speech
const extractTextFromReactNode = (node: React.ReactNode): string => {
  if (typeof node === "string") return node
  if (typeof node === "number") return node.toString()
  if (node === null || node === undefined) return ""

  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNode).join(" ")
  }

  if (typeof node === "object") {
    const reactElement = node as React.ReactElement

    if (reactElement.props && reactElement.props.children) {
      return extractTextFromReactNode(reactElement.props.children)
    }

    return ""
  }

  return ""
}

export default function FAQChatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentMood, setCurrentMood] = useState<"neutral" | "happy" | "thinking" | "confused">("neutral")
  const [isMobileView, setIsMobileView] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { isSpeechSupported, isListening, isSpeaking, startListening, stopListening, speak, stopSpeaking } =
    useSpeechSupport()

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth < 768)
      // On mobile, start with chat collapsed
      if (window.innerWidth < 768) {
        setIsExpanded(false)
      }
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Initialize chat with welcome message
  useEffect(() => {
    const initialMessages: Message[] = [
      {
        id: "welcome",
        type: "assistant",
        content: (
          <div>
            <p className="font-medium">Hi there! 👋 I'm Clik, your ClikConvert assistant.</p>
            <p className="mt-2">
              I can help answer any questions you have about our service. What would you like to know?
            </p>
          </div>
        ),
        timestamp: new Date(),
        mood: "happy",
      },
      {
        id: "options",
        type: "options",
        content: "I can help with these topics:",
        timestamp: new Date(),
        options: [
          { id: "technology", text: "How the technology works" },
          { id: "implementation", text: "Implementation process" },
          { id: "results", text: "Results & ROI" },
          { id: "pricing", text: "Pricing & plans" },
        ],
      },
    ]

    setMessages(initialMessages)
    setCurrentMood("happy")
  }, [])

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Add a message with typing effect
  const addMessage = (message: Omit<Message, "id" | "timestamp">) => {
    const newMessage: Message = {
      ...message,
      id: `msg-${Date.now()}`,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
  }

  // Add a typing indicator, then a message after delay
  const addMessageWithTyping = (message: Omit<Message, "id" | "timestamp">, typingDuration = 1500) => {
    setIsTyping(true)
    setCurrentMood("thinking")

    setTimeout(() => {
      setIsTyping(false)
      addMessage(message)

      // Update mood based on message type
      if (message.mood) {
        setCurrentMood(message.mood)
      } else if (message.type === "assistant") {
        setCurrentMood("happy")
      }

      // If speech is enabled and it's an assistant message, speak it
      if (message.type === "assistant" && isSpeechSupported) {
        const textToSpeak = extractTextFromReactNode(message.content)
        speak(textToSpeak)
      }
    }, typingDuration)
  }

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    const category = faqCategories.find((c) => c.id === categoryId)
    if (!category) return

    // Add user message
    addMessage({
      type: "user",
      content: `Tell me about ${category.name}`,
    })

    // Add typing indicator, then bot response
    addMessageWithTyping(
      {
        type: "assistant",
        content: `I'd be happy to tell you about ${category.name}! Here are some common questions:`,
        mood: "happy",
      },
      1500,
    )

    // Get questions for this category
    const categoryQuestions = getFAQItemsByCategory(categoryId)

    // Add options message with questions
    setTimeout(() => {
      addMessage({
        type: "options",
        content: "Select a question to learn more:",
        options: categoryQuestions.map((q) => ({
          id: q.id,
          text: q.question,
        })),
      })
    }, 2500)
  }

  // Handle question selection
  const handleQuestionSelect = (questionId: string) => {
    const question = getFAQItemById(questionId)
    if (!question) return

    // Add user message
    addMessage({
      type: "user",
      content: question.question,
    })

    // Add typing indicator, then bot response with answer
    const typingDuration = Math.min(2000, question.answer.toString().length * 3)

    // Show thinking mood while typing
    setCurrentMood("thinking")

    addMessageWithTyping(
      {
        type: "assistant",
        content: question.answer,
        mood: "happy",
      },
      typingDuration,
    )

    // If there are suggested replies, add them after a delay
    if (question.suggestedReplies && question.suggestedReplies.length > 0) {
      setTimeout(() => {
        addMessage({
          type: "options",
          content: "Quick follow-up questions:",
          options: question.suggestedReplies.map((reply, index) => ({
            id: `suggested-${questionId}-${index}`,
            text: reply,
          })),
        })
      }, typingDuration + 1000)
    }

    // If there are related questions but no suggested replies, add them after a delay
    else if (question.relatedQuestions && question.relatedQuestions.length > 0) {
      setTimeout(() => {
        const relatedQuestions = getRelatedFAQItems(question.relatedQuestions)
        if (relatedQuestions.length > 0) {
          addMessage({
            type: "options",
            content: "You might also be interested in:",
            options: relatedQuestions.map((q) => ({
              id: q.id,
              text: q.question,
            })),
          })
        }
      }, typingDuration + 1000)
    }
  }

  // Handle suggested reply selection
  const handleSuggestedReplySelect = (replyId: string, replyText: string) => {
    // Add user message
    addMessage({
      type: "user",
      content: replyText,
    })

    // Extract the original question ID from the suggested reply ID
    const parts = replyId.split("-")
    if (parts.length >= 2) {
      const originalQuestionId = parts[1]

      // Find questions that might answer this follow-up
      const relatedQuestions = faqItems.filter(
        (item) =>
          item.question.toLowerCase().includes(replyText.toLowerCase()) ||
          item.answer.toString().toLowerCase().includes(replyText.toLowerCase()),
      )

      if (relatedQuestions.length > 0) {
        // We found a good match, use that answer
        const bestMatch = relatedQuestions[0]

        const typingDuration = Math.min(2000, bestMatch.answer.toString().length * 3)
        addMessageWithTyping(
          {
            type: "assistant",
            content: bestMatch.answer,
            mood: "happy",
          },
          typingDuration,
        )

        // Add suggested replies for this answer
        if (bestMatch.suggestedReplies && bestMatch.suggestedReplies.length > 0) {
          setTimeout(() => {
            addMessage({
              type: "options",
              content: "Anything else you'd like to know?",
              options: bestMatch.suggestedReplies.map((reply, index) => ({
                id: `suggested-${bestMatch.id}-${index}`,
                text: reply,
              })),
            })
          }, typingDuration + 1000)
        }
      } else {
        // No good match, give a generic response
        addMessageWithTyping(
          {
            type: "assistant",
            content: (
              <div>
                <p>
                  That's a great question! While I don't have a specific answer prepared for that, I'd be happy to
                  connect you with our team who can provide more details.
                </p>
                <div className="mt-4">
                  <a
                    href="/book-call"
                    className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white text-sm font-medium hover:from-[#174785] hover:to-[#14afc0] transition-colors"
                  >
                    Book a Free Strategy Call
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ),
            mood: "confused",
          },
          1500,
        )

        // Show categories again
        setTimeout(() => {
          addMessage({
            type: "options",
            content: "Or I can tell you about:",
            options: faqCategories.map((category) => ({
              id: category.id,
              text: category.name,
            })),
          })
        }, 3000)
      }
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    addMessage({
      type: "user",
      content: inputValue,
    })

    const userQuery = inputValue.trim()
    setInputValue("")

    // Simple search through questions
    const query = userQuery.toLowerCase()
    const matchingQuestions = faqItems.filter(
      (item) => item.question.toLowerCase().includes(query) || item.answer.toString().toLowerCase().includes(query),
    )

    if (matchingQuestions.length > 0) {
      // Found matching questions
      addMessageWithTyping(
        {
          type: "assistant",
          content: "I found some information that might help answer your question:",
          mood: "happy",
        },
        1200,
      )

      setTimeout(() => {
        addMessage({
          type: "options",
          content: "Select the most relevant question:",
          options: matchingQuestions.slice(0, 3).map((q) => ({
            id: q.id,
            text: q.question,
          })),
        })
      }, 2000)
    } else {
      // No matching questions
      addMessageWithTyping(
        {
          type: "assistant",
          content: (
            <div>
              <p>
                I'm not quite sure how to answer that specific question. Our team would be happy to provide you with
                more personalized information.
              </p>
              <div className="mt-4">
                <a
                  href="/book-call"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white text-sm font-medium hover:from-[#174785] hover:to-[#14afc0] transition-colors"
                >
                  Book a Free Strategy Call
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ),
          mood: "confused",
        },
        1500,
      )

      // Show categories again
      setTimeout(() => {
        addMessage({
          type: "options",
          content: "In the meantime, I can tell you about:",
          options: faqCategories.map((category) => ({
            id: category.id,
            text: category.name,
          })),
        })
      }, 3000)
    }
  }

  // Handle voice input
  const handleVoiceInput = () => {
    if (isListening) {
      stopListening()
      return
    }

    startListening((transcript) => {
      setInputValue(transcript)

      // Auto-submit after a short delay
      setTimeout(() => {
        const fakeEvent = { preventDefault: () => {} } as React.FormEvent
        handleSubmit(fakeEvent)
      }, 500)
    })
  }

  // Toggle speech output
  const handleToggleSpeech = () => {
    if (isSpeaking) {
      stopSpeaking()
    } else {
      // Find the last assistant message and speak it
      const lastAssistantMessage = [...messages].reverse().find((m) => m.type === "assistant")
      if (lastAssistantMessage) {
        const textToSpeak = extractTextFromReactNode(lastAssistantMessage.content)
        speak(textToSpeak)
      }
    }
  }

  // Toggle chat expansion
  const toggleChat = () => {
    setIsExpanded(!isExpanded)
  }

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <section className="py-16 relative bg-white border-b-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chat with our AI assistant to get instant answers about ClikConvert
          </p>
        </div>

        {/* Chat container */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-300 ${
            isMobileView ? "fixed inset-x-4 bottom-4 z-50" : "relative"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
              isExpanded ? "h-[600px] md:h-[700px]" : "h-16"
            }`}
          >
            {/* Chat header */}
            <div
              onClick={toggleChat}
              className="bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] p-4 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3 relative">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=40&width=40&query=friendly AI assistant avatar with blue background`}
                      alt="AI Assistant"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-white">Clik</h3>
                  <p className="text-xs text-blue-100">ClikConvert AI Assistant</p>
                </div>
              </div>
              <div className="text-white">
                <ChevronRight
                  className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? "rotate-90" : "-rotate-90"}`}
                />
              </div>
            </div>

            {/* Chat content - only render when expanded */}
            {isExpanded && (
              <>
                {/* Assistant avatar and mood */}
                <div className="bg-gradient-to-b from-blue-50 to-transparent pt-6 pb-4 px-4 flex flex-col items-center">
                  <div className="relative h-24 w-24 mb-2">
                    <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={`/placeholder-hm3cy.png?key=0m12y&height=96&width=96&query=friendly AI assistant avatar with blue background, ${currentMood} expression`}
                        alt={`AI Assistant with ${currentMood} expression`}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    {isListening && (
                      <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-red-500 flex items-center justify-center border-2 border-white">
                        <div className="h-3 w-3 rounded-full bg-white animate-pulse"></div>
                      </div>
                    )}
                    {isSpeaking && (
                      <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white">
                        <div className="flex space-x-0.5">
                          <div className="h-3 w-1 bg-white animate-pulse" style={{ animationDelay: "0ms" }}></div>
                          <div className="h-3 w-1 bg-white animate-pulse" style={{ animationDelay: "150ms" }}></div>
                          <div className="h-3 w-1 bg-white animate-pulse" style={{ animationDelay: "300ms" }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    {isListening ? "Listening..." : isSpeaking ? "Speaking..." : "How can I help you today?"}
                  </p>

                  {/* Speech controls */}
                  {isSpeechSupported && (
                    <div className="flex space-x-2 mt-2">
                      <button
                        onClick={handleToggleSpeech}
                        className={`p-2 rounded-full ${isSpeaking ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"} hover:bg-gray-200 transition-colors`}
                        title={isSpeaking ? "Stop speaking" : "Read aloud"}
                      >
                        {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </button>
                    </div>
                  )}
                </div>

                {/* Messages container */}
                <div
                  className="h-[calc(100%-16rem)] md:h-[calc(100%-18rem)] overflow-y-auto p-4 md:p-6"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#CBD5E0 #EDF2F7",
                  }}
                >
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={`mb-4 ${message.type === "system" ? "flex justify-center" : ""}`}
                      >
                        {message.type === "assistant" && (
                          <div className="flex items-start max-w-[85%]">
                            <div className="bg-blue-50 rounded-2xl rounded-tl-none p-4 shadow-sm border border-blue-100">
                              <div className="prose prose-sm max-w-none">{message.content}</div>
                            </div>
                            <div className="mt-1 ml-2 text-xs text-gray-500">{formatTime(message.timestamp)}</div>
                          </div>
                        )}

                        {message.type === "user" && (
                          <div className="flex items-start justify-end">
                            <div className="mr-2 text-right">
                              <div className="bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white rounded-2xl rounded-tr-none p-4 shadow-sm">
                                <p>{message.content}</p>
                              </div>
                              <div className="mt-1 mr-2 text-xs text-gray-500">{formatTime(message.timestamp)}</div>
                            </div>
                          </div>
                        )}

                        {message.type === "system" && (
                          <div className="inline-block bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
                            {message.content}
                          </div>
                        )}

                        {message.type === "options" && (
                          <div className="my-4">
                            <p className="text-sm text-gray-500 mb-2">{message.content}</p>
                            <div className="space-y-2">
                              {message.options?.map((option) => (
                                <motion.button
                                  key={option.id}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => {
                                    if (
                                      option.id.startsWith("tech-") ||
                                      option.id.startsWith("impl-") ||
                                      option.id.startsWith("results-") ||
                                      option.id.startsWith("pricing-")
                                    ) {
                                      handleQuestionSelect(option.id)
                                    } else if (option.id.startsWith("suggested-")) {
                                      handleSuggestedReplySelect(option.id, option.text)
                                    } else {
                                      handleCategorySelect(option.id)
                                    }
                                  }}
                                  className="w-full text-left flex items-center p-3 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all duration-200 shadow-sm hover:shadow"
                                >
                                  <span className="font-medium">{option.text}</span>
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {/* Typing indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start max-w-[85%] mb-4"
                      >
                        <div className="bg-blue-50 rounded-2xl rounded-tl-none p-4 shadow-sm border border-blue-100">
                          <div className="flex space-x-2">
                            <div
                              className="h-2 w-2 rounded-full bg-blue-300 animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="h-2 w-2 rounded-full bg-blue-300 animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="h-2 w-2 rounded-full bg-blue-300 animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </AnimatePresence>
                </div>

                {/* Input area */}
                <div className="h-16 border-t border-gray-100 p-2">
                  <form onSubmit={handleSubmit} className="flex h-full">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your question here..."
                      className="flex-1 px-4 rounded-l-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {isSpeechSupported && (
                      <button
                        type="button"
                        onClick={handleVoiceInput}
                        className={`px-3 ${
                          isListening ? "bg-red-500 text-white" : "bg-gray-100 text-gray-600"
                        } border-y border-gray-200`}
                      >
                        <Mic className="h-5 w-5" />
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={!inputValue.trim() && !isListening}
                      className="bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white rounded-r-full px-6 flex items-center justify-center disabled:opacity-50"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>

          {/* Mobile chat button - only show when collapsed */}
          {isMobileView && !isExpanded && (
            <div className="absolute bottom-4 right-4">
              <button
                onClick={toggleChat}
                className="h-14 w-14 rounded-full bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white shadow-lg flex items-center justify-center"
              >
                <MessageSquare className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>

        {/* Additional help text */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Want to speak with a human?{" "}
            <a href="/book-call" className="text-blue-600 hover:underline font-medium">
              Book a free strategy call
            </a>{" "}
            with our team.
          </p>
        </div>
      </div>
    </section>
  )
}
