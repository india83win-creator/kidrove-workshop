import dns from 'dns'
dns.setDefaultResultOrder('ipv4first')

import express, { Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import enquiryRoutes from './routes/enquiry'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || ''

app.use(cors())
app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Kidrove Workshop API is running',
    dbConnected: mongoose.connection.readyState === 1,
  })
})

app.use('/api', enquiryRoutes)

function connectToDatabase() {
  if (!MONGODB_URI) {
    console.warn('No MONGODB_URI provided — running without database connection')
    return
  }

  mongoose
    .connect(MONGODB_URI, { serverSelectionTimeoutMS: 8000 })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {
      console.error('MongoDB connection failed, continuing without database:', error.message)
    })
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  connectToDatabase()
})