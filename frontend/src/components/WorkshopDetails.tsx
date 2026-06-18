import { Users, Clock, Wifi, Wallet, CalendarDays } from 'lucide-react'
import type { WorkshopDetail } from '../types'

const details: WorkshopDetail[] = [
  { label: 'Age Group', value: '8–14 Years', icon: 'age' },
  { label: 'Duration', value: '4 Weeks', icon: 'duration' },
  { label: 'Mode', value: 'Online', icon: 'mode' },
  { label: 'Fee', value: '₹2,999', icon: 'fee' },
  { label: 'Start Date', value: '15 July 2026', icon: 'calendar' },
]

const icons = {
  age: Users,
  duration: Clock,
  mode: Wifi,
  fee: Wallet,
  calendar: CalendarDays,
}

export default function WorkshopDetails() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 flex flex-col gap-2">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#7C3AED]">
          Workshop at a glance
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Everything you need to know
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {details.map((detail) => {
          const Icon = icons[detail.icon]
          return (
            <div
              key={detail.label}
              className="flex flex-col items-start gap-3 rounded-2xl border border-[#1B1F3B]/10 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7C3AED]/10">
                <Icon className="h-5 w-5 text-[#7C3AED]" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-[#1B1F3B]/50">
                  {detail.label}
                </p>
                <p className="font-display text-lg font-bold">{detail.value}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}