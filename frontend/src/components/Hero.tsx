export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-[#1B1F3B] text-white">
      {/* Circuit-line signature pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="#F59E0B" strokeWidth="1.5">
          <path d="M0 120 H180 V220 H400 V120 H650" />
          <path d="M1200 80 H980 V200 H760" />
          <path d="M0 480 H220 V560 H480 V650" />
          <path d="M1200 600 H940 V500 H700 V420" />
          <path d="M520 0 V90 H620 V0" />
          <path d="M340 700 V600 H460 V520" />
        </g>
        <g fill="#7C3AED">
          <circle cx="180" cy="120" r="5" />
          <circle cx="400" cy="220" r="5" />
          <circle cx="980" cy="200" r="5" />
          <circle cx="220" cy="480" r="5" />
          <circle cx="480" cy="560" r="5" />
          <circle cx="940" cy="500" r="5" />
          <circle cx="620" cy="90" r="5" />
          <circle cx="460" cy="520" r="5" />
        </g>
      </svg>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 md:py-32">
        <span className="rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-4 py-1 text-sm font-medium text-[#F59E0B]">
          Enrollments open · Starts 15 July 2026
        </span>

        <h1 className="font-display max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
          AI &amp; Robotics
          <span className="block text-[#7C3AED]">Summer Workshop</span>
        </h1>

        <p className="max-w-xl text-lg text-white/75 md:text-xl">
          A hands-on 4-week online program where kids aged 8–14 build their first
          AI models and robots — no prior coding experience needed, just curiosity.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={scrollToForm}
            className="rounded-full bg-[#F59E0B] px-8 py-3 text-base font-semibold text-[#1B1F3B] shadow-lg shadow-[#F59E0B]/20 transition-transform hover:scale-105"
          >
            Enroll Now
          </button>
          <span className="text-sm text-white/60">
            Limited seats · ₹2,999 only
          </span>
        </div>
      </div>
    </section>
  )
}