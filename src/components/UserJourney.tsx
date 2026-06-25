const steps = [
  { number: 'STEP 1', title: 'BUILD YOUR TEAM' },
  { number: 'STEP 2', title: 'COMPETE ACROSS INDIA' },
  { number: 'STEP 3', title: 'EARN NATIONAL RANKING & VALUE' },
  { number: 'STEP 4', title: 'JOIN THE LEAGUE' },
]

const StepIcon = ({ index }: { index: number }) => {
  const icons = [
    // Build team — wrench + gear
    <g key={0}>
      <path d="M20 28l8-8M28 20a4 4 0 10-5.6-5.6l3.2 3.2L22 21l-3.4-3.4A4 4 0 1024 23" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>,
    // Compete across India — monument
    <g key={1}>
      <path d="M24 11l8 5H16l8-5Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path d="M18 16v16M24 16v16M30 16v16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 34h20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </g>,
    // National ranking — podium/trophy
    <g key={2}>
      <path d="M19 13h10v4a5 5 0 01-10 0v-4Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path d="M29 14h3v2a3 3 0 01-3 3M19 14h-3v2a3 3 0 003 3M24 22v5M20 31h8M21 27h6l-1 4h-4l-1-4Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>,
    // Join league — people
    <g key={3}>
      <circle cx="24" cy="18" r="4.5" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M15 34c0-5 4-8 9-8s9 3 9 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="14" cy="20" r="3" stroke="#fff" strokeWidth="1.6" fill="none" />
      <circle cx="34" cy="20" r="3" stroke="#fff" strokeWidth="1.6" fill="none" />
    </g>,
  ]
  return (
    <div className="relative w-24 h-24 rounded-full bg-arena-darker border-2 border-arena-blue flex items-center justify-center transition-all duration-300 group-hover:border-arena-red group-hover:shadow-lg group-hover:shadow-arena-blue/20">
      <span className="absolute inset-1.5 rounded-full border border-arena-blue/30" />
      <svg viewBox="0 0 48 48" className="w-11 h-11 relative z-10">{icons[index]}</svg>
    </div>
  )
}

const UserJourney = () => (
  <section id="programs" className="bg-arena-dark py-20 lg:py-24 relative overflow-hidden">
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-arena-blue/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="container-arena relative z-10 text-center">
      <p className="eyebrow mb-3">User Journey</p>
      <h2 className="font-orbitron font-black text-white text-3xl lg:text-[44px] mb-3 uppercase tracking-wide">
        Your Path to the League
      </h2>
      <p className="font-rajdhani text-arena-muted text-lg mb-16 max-w-2xl mx-auto">
        From your first build to the national podium — four steps that turn a team into a ranked contender.
      </p>

      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4">
        {/* connecting line */}
        <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-arena-blue/0 via-arena-blue to-arena-blue/0" />
        {steps.map((step) => (
          <div key={step.number} className="relative z-10 flex flex-col items-center group cursor-default">
            <StepIcon index={steps.indexOf(step)} />
            <p className="font-orbitron text-arena-red text-[11px] font-bold tracking-widest uppercase mt-5 mb-2">
              {step.number}
            </p>
            <p className="font-orbitron font-bold text-white text-xs leading-snug uppercase max-w-[150px]">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default UserJourney
