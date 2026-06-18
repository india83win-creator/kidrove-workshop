import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '../types'

const faqs: FAQItem[] = [
  {
    question: 'Does my child need any prior coding experience?',
    answer:
      'No prior experience is required. The workshop is designed for absolute beginners aged 8–14, starting with the basics and building up gradually each week.',
  },
  {
    question: 'What equipment do we need for the online sessions?',
    answer:
      'Just a laptop or desktop with a stable internet connection. All software used is browser-based and free — no need to purchase any robot kits or special hardware.',
  },
  {
    question: 'Will there be live sessions or is it self-paced?',
    answer:
      'The workshop includes live instructor-led sessions each week, plus recordings for anyone who misses a class, so your child never falls behind.',
  },
  {
    question: 'Is there a certificate at the end of the workshop?',
    answer:
      'Yes, every child who completes the 4-week program and final project receives a certificate of completion they can showcase.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-2">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#7C3AED]">
          Got questions?
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-[#1B1F3B]/10 bg-white"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-[#7C3AED] transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 text-sm text-[#1B1F3B]/65 transition-all ${
                  isOpen ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}