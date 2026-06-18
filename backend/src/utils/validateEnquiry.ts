interface EnquiryInput {
  name?: unknown
  email?: unknown
  phone?: unknown
}

export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[6-9]\d{9}$/

export function validateEnquiry(body: EnquiryInput): ValidationResult {
  const errors: Record<string, string> = {}

  if (typeof body.name !== 'string' || body.name.trim().length < 2) {
    errors.name = 'Name is required and must be at least 2 characters'
  }

  if (typeof body.email !== 'string' || !EMAIL_REGEX.test(body.email.trim())) {
    errors.email = 'A valid email address is required'
  }

  if (typeof body.phone !== 'string' || !PHONE_REGEX.test(body.phone.trim())) {
    errors.phone = 'A valid 10-digit phone number is required'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}