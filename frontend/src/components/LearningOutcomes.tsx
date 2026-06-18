import { Cpu, Bot, Brain, Puzzle, Presentation, Sparkles } from 'lucide-react'

const outcomes = [
  {
    icon: Brain,
    title: 'Build a working AI model',
    description:
      'Train a simple image-recognition model using kid-friendly drag-and-drop AI tools.',
  },
  {
    icon: Bot,
    title: 'Program a robot from scratch',
    description:
      'Write basic code to control a virtual robot — movement, sensors, and reactions.',
  },
  {
    icon: Cpu,
    title: 'Understand how AI "thinks"',
    description:
      'Learn the core ideas behind machine learning through games and visual demos.',
  },
  {
    icon: Puzzle,
    title: 'Solve real-world mini challenges',
    description:
      'Apply what they learn to fun problems like sorting objects or following a maze.',
  },
  {
    icon: Presentation,
    title: 'Present their final project',
    description:
      'End the workshop with a showcase day, presenting their robot/AI project live.',
  },
  {
    icon: Sparkles,
    title: 'Develop early coding confidence',
    description:
      'Get comfortable with logical thinking and basic programming concepts for the future.',
  },
]

const weeks = [
  { week: 1, title: 'Foundations', summary: 'Logic, sequencing, and first AI demos' },
  { week: 2, title: 'Robotics basics', summary: 'Controlling a virtual robot' },
  { week: 3, title: 'AI training', summary: 'Building & testing a model' },
  { week: 4, title: 'Showcase', summary: 'Final project + live presentation' },
]

export default function LearningOutcomes() {
  return (
    <section className="bg-[#0F1729]/[0.03] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-2">
          <span className="font-mono text-sm font-semibold uppercase tracking-wider text-[#5B5FEF]">
            // what_they_walk_away_with
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Learning Outcomes
          </h2>
        </div>

        <div className="mb-16 grid gap-5 md:grid-cols-2">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon
            return (
              <div
                key={outcome.title}
                className="flex gap-4 rounded-2xl border border-[#0F1729]/10 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#FF6B35]/10">
                  <Icon className="h-5 w-5 text-[#FF6B35]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold">{outcome.title}</h3>
                  <p className="mt-1 text-sm text-[#0F1729]/65">{outcome.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Real sequence: the 4-week build path */}
        <div>
          <span className="font-mono text-sm font-semibold uppercase tracking-wider text-[#5B5FEF]">
            // the_build_path
          </span>
          <div className="relative mt-6 grid gap-6 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-[#0F1729]/10 md:block" />
            {weeks.map((w) => (
              <div key={w.week} className="relative flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#10B981] bg-[#FAFAF8] font-mono text-sm font-bold text-[#10B981]">
                  {w.week}
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wide text-[#0F1729]/80">
                    Week {w.week}: {w.title}
                  </h4>
                  <p className="mt-1 text-sm text-[#0F1729]/60">{w.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}