const outcomes = [
  {
    title: 'Build a working AI model',
    description:
      'Train a simple image-recognition model using kid-friendly drag-and-drop AI tools.',
  },
  {
    title: 'Program a robot from scratch',
    description:
      'Write basic code to control a virtual robot — movement, sensors, and reactions.',
  },
  {
    title: 'Understand how AI "thinks"',
    description:
      'Learn the core ideas behind machine learning through games and visual demos.',
  },
  {
    title: 'Solve real-world mini challenges',
    description:
      'Apply what they learn to fun problems like sorting objects or following a maze.',
  },
  {
    title: 'Present their final project',
    description:
      'End the workshop with a showcase day, presenting their robot/AI project live.',
  },
  {
    title: 'Develop early coding confidence',
    description:
      'Get comfortable with logical thinking and basic programming concepts for the future.',
  },
]

export default function LearningOutcomes() {
  return (
    <section className="bg-[#1B1F3B]/[0.03] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#7C3AED]">
            What they'll walk away with
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Learning Outcomes
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {outcomes.map((outcome, i) => (
            <div
              key={outcome.title}
              className="flex gap-4 rounded-2xl bg-white p-6 border border-[#1B1F3B]/10"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/15 font-display text-sm font-bold text-[#F59E0B]">
                {i + 1}
              </div>
              <div>
                <h3 className="font-display text-base font-bold">{outcome.title}</h3>
                <p className="mt-1 text-sm text-[#1B1F3B]/65">{outcome.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}