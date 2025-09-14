"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

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
  index: number
  showAnswers: boolean
  onToggleAnswers: () => void
}

const FAQItem = ({ question, answer, index, showAnswers, onToggleAnswers }: FAQItemProps) => {
  return (
    <div className="group w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm overflow-hidden rounded-xl transition-all duration-300 ease-out">
      {/* Question with toggle button */}
      <div 
        className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
        onClick={onToggleAnswers}
      >
        <div className="flex items-center gap-3 flex-1">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
            {index + 1}
          </div>
          <div className="flex-1 font-medium leading-6 break-words text-gray-800 dark:text-gray-200">
            {question}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            showAnswers 
              ? "bg-primary/10 text-primary rotate-180" 
              : "text-gray-400 dark:text-gray-500 group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:text-primary"
          }`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          showAnswers ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-0">
          <div className="pl-11 pr-4">
            <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-l-3 border-primary/20 dark:border-primary/10 pl-4 py-3 bg-gradient-to-r from-primary/5 dark:from-primary/10 to-transparent rounded-3xl">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [showAnswers, setShowAnswers] = useState(false)
  
  const toggleAnswers = () => {
    setShowAnswers(!showAnswers)
  }
  
  return (
    <section className="w-full py-16 px-5 relative flex flex-col justify-center items-center  overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 dark:from-primary/5 to-transparent rounded-full blur-2xl" />
      
      {/* Header Section */}
      <div className="relative z-10 text-center mb-12 max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-6 shadow-lg">
          <HelpCircle className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent mb-4">
          Frequently Asked Questions
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Everything you need to know about DOHaD India and how we are working to promote a healthy start to life
        </p>
        
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
      </div>
      
      {/* FAQ Items - Always visible */}
      <div className="w-full max-w-4xl relative z-10 space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question}
            answer={faq.answer}
            index={index}
            showAnswers={showAnswers}
            onToggleAnswers={toggleAnswers}
          />
        ))}
      </div>
     
    </section>
  )
}
