import { useState } from 'react'
import { Loader2, CheckCircle2, ShieldCheck, Users2, Award } from 'lucide-react'
import type { EnquiryFormData, EnquiryResponse } from '../types'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

type FormErrors = Partial<Record<keyof EnquiryFormData, string>>

function validate(data: EnquiryFormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address'
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!/^[6-9]\d{9}$/.test(data.phone.trim())) {
    errors.phone = 'Enter a valid 10-digit phone number'
  }

  return errors
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState('')

  const handleChange = (field: keyof EnquiryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validate(formData)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('loading')
    setServerMessage('')

    try {
      const res = await fetch(`${API_URL}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result: EnquiryResponse = await res.json()

      if (res.ok && result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '' })
      } else {
        setStatus('error')
        setServerMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setServerMessage('Could not reach the server. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <section id="register" className="mx-auto max-w-2xl px-6 py-20">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-[#0F1729]/10 bg-white p-10 text-center">
          <CheckCircle2 className="h-12 w-12 text-[#10B981]" />
          <h2 className="font-display text-2xl font-bold">You're registered!</h2>
          <p className="text-[#0F1729]/65">
            We've received your details. Our team will reach out shortly with the next steps
            before the workshop begins on 15 July 2026.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-2 text-sm font-semibold text-[#5B5FEF] hover:underline"
          >
            Register another child
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="mx-auto max-w-2xl px-6 py-20">
      <div className="mb-8 flex flex-col gap-2 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-wider text-[#5B5FEF]">
          // reserve_a_seat
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Register Now
        </h2>
        <p className="text-[#0F1729]/65">Seats are limited for the July batch.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 rounded-2xl border border-[#0F1729]/10 bg-white p-8"
        noValidate
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Child's Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Enter full name"
            aria-invalid={!!errors.name}
            className={`rounded-lg border px-4 py-2.5 outline-none transition-colors focus:border-[#5B5FEF] ${
              errors.name ? 'border-red-400' : 'border-[#0F1729]/15'
            }`}
          />
          {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Parent's Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            className={`rounded-lg border px-4 py-2.5 outline-none transition-colors focus:border-[#5B5FEF] ${
              errors.email ? 'border-red-400' : 'border-[#0F1729]/15'
            }`}
          />
          {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="10-digit mobile number"
            aria-invalid={!!errors.phone}
            className={`rounded-lg border px-4 py-2.5 outline-none transition-colors focus:border-[#5B5FEF] ${
              errors.phone ? 'border-red-400' : 'border-[#0F1729]/15'
            }`}
          />
          {errors.phone && <span className="text-xs text-red-500">{errors.phone}</span>}
        </div>

        {status === 'error' && (
          <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">
            {serverMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#5B5FEF] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4B4FDB] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            'Enroll Now'
          )}
        </button>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[#0F1729]/10 pt-5 text-xs text-[#0F1729]/50">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#10B981]" /> Safe & verified
          </span>
          <span className="flex items-center gap-1.5">
            <Users2 className="h-4 w-4 text-[#10B981]" /> Small batch sizes
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="h-4 w-4 text-[#10B981]" /> Certificate included
          </span>
        </div>
      </form>
    </section>
  )
}