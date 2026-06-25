const features = [
  { number: '1', title: 'STRUCTURED EVENTS', desc: 'From one-off events to a year-round competitive season.' },
  { number: '2', title: 'DIGITAL IDENTITY', desc: 'Your professional robotics legacy, tracked and verified.' },
  { number: '3', title: 'NATIONAL RANKING', desc: 'Benchmark your skills against the best engineers in India.' },
  { number: '4', title: 'CAREER PATHWAY', desc: 'Turning arena victories into real-world industry opportunities.' },
]

/* Line-art illustration: digital ID card wired down to a briefcase (identity → career) */
const IdentityIllustration = () => (
  <svg viewBox="0 0 220 360" fill="none" className="w-full h-auto text-white/25">
    {/* profile / ID card */}
    <rect x="40" y="10" width="140" height="92" rx="8" stroke="currentColor" strokeWidth="2" />
    <circle cx="74" cy="44" r="12" stroke="currentColor" strokeWidth="2" />
    <path d="M60 74c0-9 6-13 14-13s14 4 14 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M104 36h60M104 50h60M104 64h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* connector wire */}
    <path d="M110 102v40h-46v44" stroke="currentColor" strokeWidth="2" />
    <path d="M110 102v40h46v44" stroke="currentColor" strokeWidth="2" />
    <circle cx="110" cy="102" r="3.5" fill="currentColor" />
    <circle cx="64" cy="186" r="3.5" fill="currentColor" />
    <circle cx="156" cy="186" r="3.5" fill="currentColor" />
    {/* certificate node (left) */}
    <rect x="34" y="196" width="60" height="44" rx="4" stroke="currentColor" strokeWidth="2" />
    <path d="M44 210h40M44 220h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="78" cy="230" r="5" stroke="currentColor" strokeWidth="2" />
    {/* gear node (right) */}
    <circle cx="156" cy="218" r="16" stroke="currentColor" strokeWidth="2" />
    <circle cx="156" cy="218" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M156 196v8M156 232v8M134 218h8M170 218h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* briefcase */}
    <path d="M70 268v-10a8 8 0 018-8h28a8 8 0 018 8v10" stroke="currentColor" strokeWidth="2" />
    <rect x="46" y="268" width="128" height="76" rx="8" stroke="currentColor" strokeWidth="2" />
    <path d="M46 300h128" stroke="currentColor" strokeWidth="2" />
    <rect x="100" y="294" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const WhatIsBotLeague = () => (
  <section id="about" className="bg-arena-dark py-20 lg:py-24">
    <div className="container-arena">
      <h2 className="font-orbitron font-black text-white text-3xl lg:text-[40px] mb-12 uppercase tracking-wide">
        What is BotLeague?
      </h2>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {features.map((f) => (
            <div key={f.number}>
              <span className="font-orbitron font-black text-arena-red text-3xl leading-none">{f.number}.</span>
              <h3 className="font-orbitron font-black text-white text-base mt-3 mb-2 tracking-wide">{f.title}</h3>
              <p className="font-rajdhani text-arena-muted text-[15px] leading-relaxed italic">&ldquo;{f.desc}&rdquo;</p>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex flex-shrink-0 w-60 items-start justify-center">
          <IdentityIllustration />
        </div>
      </div>
    </div>
  </section>
)

export default WhatIsBotLeague
