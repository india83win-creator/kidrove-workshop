export default function Navbar() {
  const scrollToForm = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#1B1F3B]/10 bg-[#FAFAF8]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1B1F3B]">
            <span className="font-display text-sm font-bold text-[#F59E0B]">K</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            kidrove<span className="text-[#7C3AED]">.workshops</span>
          </span>
        </div>
        <button
          onClick={scrollToForm}
          className="rounded-full bg-[#7C3AED] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
        >
          Enroll Now
        </button>
      </div>
    </header>
  )
}