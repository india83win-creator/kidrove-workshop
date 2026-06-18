export default function Navbar() {
  const scrollToForm = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#0F1729]/10 bg-[#FAFAF8]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0F1729]">
            <span className="font-display text-sm font-bold text-[#FF6B35]">K</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            kidrove<span className="text-[#5B5FEF]">.workshops</span>
          </span>
        </div>
        <button
          onClick={scrollToForm}
          className="rounded-full bg-[#5B5FEF] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4B4FDB]"
        >
          Enroll Now
        </button>
      </div>
    </header>
  )
}