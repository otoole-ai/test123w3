"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react"

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    image: "/professional-woman-headshot.png",
    experience: 15,
    bio: "Sarah has 15+ years of experience in B2B sales and marketing. Prior to founding ClikConvert, she led sales teams at several SaaS companies, where she recognized the need for better website visitor identification.",
    expertise: ["B2B Sales Strategy", "Go-to-Market Planning", "Team Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@clikconvert.com",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    image: "/professional-man-headshot.png",
    experience: 12,
    bio: "Michael brings 12+ years of technical expertise in data analytics and machine learning. He architected ClikConvert's core identification algorithm that powers our visitor recognition technology.",
    expertise: ["Machine Learning", "Data Analytics", "Software Architecture"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@clikconvert.com",
    },
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Head of Customer Success",
    image: "/professional-headshot.png",
    experience: 8,
    bio: "David ensures our clients achieve maximum ROI from the ClikConvert platform. His team works closely with clients to optimize their visitor identification and engagement strategies.",
    expertise: ["Customer Onboarding", "Success Metrics", "Client Retention"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@clikconvert.com",
    },
  },
]

export default function TeamMosaic() {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null)

  // Calculate total years of experience
  const totalExperience = teamMembers.reduce((total, member) => total + member.experience, 0)

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background elements - same as hero */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean white background */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Decorative elements */}
        <div className="absolute top-[30%] right-[15%] w-80 h-80 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 rounded-full bg-indigo-50 opacity-60 blur-3xl"></div>

        {/* Floating shapes */}
        <div className="absolute top-[40%] left-[20%] w-16 h-16 rounded-xl bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 rotate-12 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[15%] right-[25%] w-12 h-12 rounded-full bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-[30%] right-[10%] w-20 h-20 rounded-lg bg-gradient-to-br from-[#1e56a0]/10 to-[#16c2d5]/10 -rotate-12 animate-[float_12s_ease-in-out_infinite]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5]">
                Our Team
              </span>
              {/* Subtle underline */}
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] transform translate-y-2"></span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet the passionate experts behind ClikConvert who are dedicated to transforming how B2B companies
              identify and engage with their website visitors.
            </p>
          </div>

          {/* Team experience counter */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 border border-blue-100 shadow-sm">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] mr-2">
                {totalExperience}+
              </span>
              <span className="font-medium">Years Combined Experience</span>
            </div>
          </div>

          {/* Team mosaic grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 cursor-pointer ${
                  index === 1 ? "md:translate-y-12" : ""
                } ${index === 2 ? "md:translate-y-6" : ""} hover:shadow-xl hover:-translate-y-2`}
                style={{ perspective: "1000px" }}
                onClick={() => setActiveTeamMember(member.id)}
              >
                {/* Image with gradient overlay */}
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-110"
                  />

                  {/* Name and role overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-white/80">{member.role}</p>
                  </div>
                </div>

                {/* Quick info */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {member.experience}+ Years Experience
                    </div>
                    <div className="flex space-x-2">
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-indigo-600 transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 line-clamp-3 mb-4">{member.bio}</p>

                  <button className="text-blue-600 font-medium flex items-center text-sm">
                    View Full Profile
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Team member modal */}
          {activeTeamMember && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl transform transition-all duration-500 animate-in">
                <div className="relative">
                  <button
                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-600 hover:text-gray-900 z-10"
                    onClick={() => setActiveTeamMember(null)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Content will be populated based on active team member */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">
                      {teamMembers.find((m) => m.id === activeTeamMember)?.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-6">
                      {teamMembers.find((m) => m.id === activeTeamMember)?.role}
                    </p>

                    {/* Additional content would go here */}
                    <p className="text-gray-600 mb-6">{teamMembers.find((m) => m.id === activeTeamMember)?.bio}</p>

                    <h4 className="font-bold text-gray-800 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {teamMembers
                        .find((m) => m.id === activeTeamMember)
                        ?.expertise.map((skill, i) => (
                          <span key={i} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                    </div>

                    <div className="border-t border-gray-100 pt-6 mt-6">
                      <h4 className="font-bold text-gray-800 mb-4">
                        Connect with {teamMembers.find((m) => m.id === activeTeamMember)?.name}
                      </h4>
                      <div className="flex space-x-4">
                        <a
                          href={teamMembers.find((m) => m.id === activeTeamMember)?.social.linkedin}
                          className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-3 rounded-full transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                        <a
                          href={teamMembers.find((m) => m.id === activeTeamMember)?.social.twitter}
                          className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-3 rounded-full transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                        <a
                          href={`mailto:${teamMembers.find((m) => m.id === activeTeamMember)?.social.email}`}
                          className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-3 rounded-full transition-colors"
                        >
                          <Mail size={20} />
                        </a>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/book-call"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1e56a0] to-[#16c2d5] text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Schedule a Call with {teamMembers.find((m) => m.id === activeTeamMember)?.name.split(" ")[0]}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Join our team CTA */}
          <div className="text-center">
            <Link
              href="/book-call"
              className="group relative inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-medium text-lg border border-blue-200 shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
