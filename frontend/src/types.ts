export interface WorkshopDetail {
  label: string
  value: string
  icon: 'age' | 'duration' | 'mode' | 'fee' | 'calendar'
}

export interface FAQItem {
  question: string
  answer: string
}

export interface EnquiryFormData {
  name: string
  email: string
  phone: string
}

export interface EnquiryResponse {
  success: boolean
  message: string
  data?: EnquiryFormData & { id?: string }
  errors?: Record<string, string>
}

export interface WeekPlan {
  week: number
  title: string
  summary: string
}