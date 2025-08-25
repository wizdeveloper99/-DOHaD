"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What is DOHaD and why is it important?",
    answer:
      "The Developmental Origins of Health and Disease (DOHaD) paradigm focuses on how early-life exposures, including during preconception and pregnancy, impact long-term health. The DOHaD India Regional Society is dedicated to advancing this science and creating evidence-based policies and practices, particularly within the Indian context.",
  },
  {
    question: "What is the mission of DOHaD India?",
    answer:
      "DOHaD India aims to promote and coordinate research on the Developmental Origins of Health and Disease, while building the capacity of professionals through research, communication, and advocacy. Its mission is to catalyze collaborative research, capacity building, knowledge dissemination, and policy engagement rooted in the Indian context.",
  },
  {
    question: "Who can become a member of DOHaD India?",
    answer:
      "Membership is open to anyone in India who is interested in DOHaD research, policy, and practice. Membership in DOHaD India also includes a free membership for the International DOHaD Society.",
  },
  {
    question: "What are the benefits of becoming a member?",
    answer:
      "Becoming a member of DOHaD India gives you access to the Journal of Developmental Origins of Health and Disease, newsletters, and resources from workshops and conferences. You also get opportunities for training, capacity building, and career advancement, as well as the chance to network and collaborate with researchers in India and internationally.",
  },
  {
    question: "How do I become a member?",
    answer:
      "To become a member, you need to join the International DOHaD Society and select DOHaD India as your regional society. After that, DOHaD India will contact you with details on how to pay the annual membership fee.",
  },
  {
    question: "How much does a membership cost?",
    answer:
      "The annual membership fees vary based on your career stage. Standard members are Rs. 1000, training/early career researchers are Rs. 500, and undergraduate students are Rs. 250. A portion of your fee will support regional initiatives in India.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-8 md:pb-10 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center  leading-10 break-words
          
          text-4xl md:text-5xl font-bold text-foreground mb-6
          ">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Everything you need to know about DOHaD India and how we are working to promote a healthy start to life
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}