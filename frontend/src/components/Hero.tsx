export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-[#0F1729] text-white">
      {/* Faint blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#5B5FEF 1px, transparent 1px), linear-gradient(90deg, #5B5FEF 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        {/* Left: thesis */}
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/40 bg-[#FF6B35]/10 px-4 py-1 font-mono text-xs font-medium tracking-wide text-[#FF6B35]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
            ENROLLMENT OPEN · BATCH STARTS 15 JUL 2026
          </span>

          <h1 className="font-display max-w-xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Build a robot.
            <br />
            Train an AI.
            <br />
            <span className="text-[#5B5FEF]">In four weeks.</span>
          </h1>

          <p className="max-w-md text-lg text-white/70">
            A hands-on online workshop for kids aged 8–14. No coding background needed —
            just curiosity and a laptop. By week four, your child presents a real project
            they built themselves.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToForm}
              className="rounded-full bg-[#FF6B35] px-8 py-3 text-base font-semibold text-[#0F1729] shadow-lg shadow-[#FF6B35]/20 transition-transform hover:scale-105 active:scale-95"
            >
              Enroll Now
            </button>
            <span className="font-mono text-sm text-white/50">
              ₹2,999 · limited seats
            </span>
          </div>
        </div>

        {/* Right: the "build spec" card — signature element */}
        <div className="relative hidden md:block">
          <svg
            className="pointer-events-none absolute -left-10 top-1/2 h-1 w-10 -translate-y-1/2 opacity-60"
            viewBox="0 0 40 4"
          >
            <line x1="0" y1="2" x2="40" y2="2" stroke="#10B981" strokeWidth="2" strokeDasharray="4 3" />
          </svg>

          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 font-mono text-sm backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs uppercase tracking-wider text-white/40">
                project_spec.json
              </span>
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B35]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#5B5FEF]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/70" />
              </span>
            </div>

            <dl className="flex flex-col gap-3">
              {[
                ['age_group', '8–14 yrs'],
                ['duration', '4 weeks'],
                ['mode', 'online'],
                ['fee', '₹2,999'],
                ['start_date', '2026-07-15'],
                ['output', 'AI model + robot demo'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4">
                  <dt className="text-white/40">{k}:</dt>
                  <dd className="text-right font-semibold text-[#10B981]">"{v}"</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}