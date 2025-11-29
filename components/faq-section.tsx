"use client"

import React from "react"
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
      "Membership is open to anyone interested in DOHaD research, policy, and practice in India and the South Asian region.",
    hasHighlight: true,
    highlightText: "🎁 Membership in DOHaD India includes free membership in the International DOHaD Society!",
  },
  {
    question: "What are the benefits of becoming a member?",
    answer:
      "Becoming a member of DOHaD India gives you access to the Journal of Developmental Origins of Health and Disease, newsletters, and other resources. You can register for workshops and conferences organized by international or regional DOHaD societies at a reduced cost. You also get opportunities for training, capacity building, and career advancement, as well as the chance to network and collaborate with researchers in India and internationally.",
  },
  {
    question: "How do I become a member?",
    answer:
      "To become a member, you need to join the International DOHaD Society and select DOHaD India as your regional society. DOHaD India will then share a welcome note to formally invite you as a member of DOHaD India, and share payment details for the nominal annual membership fee.",
  },
  {
    question: "How much does a membership cost?",
    answer: "",
    hasTable: true,
    tableData: [
      { category: "Standard (for established researchers)", fee: "Rs 1,000" },
      { category: "Training / early career researchers (within 5 years of PhD)", fee: "Rs 500" },
      { category: "Masters and undergraduate students", fee: "Rs 250" },
    ],
    tableFooter: "Membership fees will be solely utilized to support regional society activities in India.",
  },
]

interface FAQItemProps {
  question: string
  answer?: string
  index: number
  isOpen: boolean
  onToggle: () => void
  hasHighlight?: boolean
  highlightText?: string
  hasTable?: boolean
  tableData?: Array<{ category: string; fee: string }>
  tableFooter?: string
}

const FAQItem = ({ 
  question, 
  answer, 
  index, 
  isOpen, 
  onToggle, 
  hasHighlight, 
  highlightText,
  hasTable,
  tableData,
  tableFooter 
}: FAQItemProps) => {
  return (
    <div className="group w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm overflow-hidden rounded-xl transition-all duration-300 ease-out">
      {/* Question with toggle button */}
      <div 
        className="w-full px-6 py-5 flex justify-between items-center gap-4 text-left cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
        onClick={onToggle}
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
            isOpen 
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
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-0">
          <div className="pl-11 pr-4">
            <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-l-3 border-primary/20 dark:border-primary/10 pl-4 py-3 bg-gradient-to-r from-primary/5 dark:from-primary/10 to-transparent rounded-lg">
              {answer && (
                <p className="mb-3">{answer}</p>
              )}
              
              {/* Highlight box for International DOHaD membership */}
              {hasHighlight && highlightText && (
                <div className="mt-3 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 border-l-4 border-primary rounded-lg">
                  <p className="text-primary dark:text-primary-light font-semibold text-base">
                    {highlightText}
                  </p>
                </div>
              )}
              
              {/* Table for membership fees */}
              {hasTable && tableData && (
                <div className="mt-2">
                  <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary/10 dark:bg-primary/20 border-b border-gray-200 dark:border-gray-700">
                          <th className="px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200">
                            Category
                          </th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-800 dark:text-gray-200">
                            Annual Fee (INR)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row, idx) => (
                          <tr 
                            key={idx}
                            className="border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors"
                          >
                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                              {row.category}
                            </td>
                            <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
                              {row.fee}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {tableFooter && (
                    <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 italic">
                      {tableFooter}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  // Each FAQ item tracks its own open/closed state
  const [openItems, setOpenItems] = useState<number[]>([])
  
  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
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
      
      {/* FAQ Items - Each can expand/collapse independently */}
      <div className="w-full max-w-4xl relative z-10 space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question}
            answer={faq.answer}
            index={index}
            isOpen={openItems.includes(index)}
            onToggle={() => toggleItem(index)}
            hasHighlight={faq.hasHighlight}
            highlightText={faq.highlightText}
            hasTable={faq.hasTable}
            tableData={faq.tableData}
            tableFooter={faq.tableFooter}
          />
        ))}
      </div>
     
    </section>
  )
}
