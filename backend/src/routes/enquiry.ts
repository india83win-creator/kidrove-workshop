import { Router, Request, Response } from 'express'
import mongoose from 'mongoose'
import Enquiry from '../models/Enquiry'
import { validateEnquiry } from '../utils/validateEnquiry'

const router = Router()

router.post('/enquiry', async (req: Request, res: Response) => {
  try {
    const { isValid, errors } = validateEnquiry(req.body)

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: 'Please correct the highlighted fields and try again.',
        errors,
      })
    }

    const { name, email, phone } = req.body
    const isDbConnected = mongoose.connection.readyState === 1

    if (isDbConnected) {
      const enquiry = await Enquiry.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
      })

      return res.status(201).json({
        success: true,
        message: 'Registration received successfully.',
        data: {
          id: enquiry._id,
          name: enquiry.name,
          email: enquiry.email,
          phone: enquiry.phone,
        },
      })
    }

    console.log('Enquiry received (DB unavailable, logged only):', { name, email, phone })
    return res.status(201).json({
      success: true,
      message: 'Registration received successfully.',
      data: { name: name.trim(), email: email.trim().toLowerCase(), phone: phone.trim() },
    })
  } catch (error) {
    console.error('Error saving enquiry:', error)
    return res.status(500).json({
      success: false,
      message: 'Something went wrong on our end. Please try again shortly.',
    })
  }
})

export default router