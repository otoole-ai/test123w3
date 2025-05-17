"use client"

import type React from "react"
import { MessageSquare } from "lucide-react"

// FAQ data structure
type FAQCategory = {
  id: string
  name: string
  description: string
  icon: React.ReactNode
}

type FAQItem = {
  id: string
  categoryId: string
  question: string
  answer: React.ReactNode
  relatedQuestions?: string[]
}

// Message types for the chat interface
type Message = {
  id: string
  content: React.ReactNode
  sender: "bot" | "user"
  includeOptions?: boolean
  categoryId?: string
}

// Sample FAQ data
const faqCategories: FAQCategory[] = [
  {
    id: "technology",
    name: "About the Technology",
    description: "How ClikConvert works and what makes it unique",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    id: "implementation",
    name: "Implementation",
    description: "How to get started and integrate with your site",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    id: "results",
    name: "Results & ROI",
    description: "What results to expect and timeframes",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    id: "pricing",
    name: "Pricing & Plans",
    description: "Pricing information and available plans",
    icon: <MessageSquare className="h-5 w-5" />,
  },
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
  },
]

// Find FAQ item by ID
const findFaqItemById = (id: string): FAQItem | undefined => {
  return faqItems.find((item) => item.id === id)
}

// Find related questions
const findRelatedQuestions = (ids: string[] = []): FAQItem[] => {
  return ids.map((id) => findFaqItemById(id)).filter((item) => item !== undefined) as FAQItem[]
}

// Find questions by category
const findQuestionsByCategory = (categoryId: string): FAQItem[] => {
  return faqItems.filter((item) => item.categoryId === categoryId)
}

function FAQChatbot() {
  return null
}

export default FAQChatbot
