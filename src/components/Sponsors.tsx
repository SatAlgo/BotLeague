/* Simple distinct line-mark per sponsor so the row reads like a real logo wall */
const marks: Record<string, JSX.Element> = {
  emblem: (
    <g>
      <circle cx="24" cy="24" r="18" />
      <path d="M24 8v32M8 24h32M13 13l22 22M35 13L13 35" strokeWidth="1.4" />
    </g>
  ),
  bot: (
    <g>
      <rect x="12" y="14" width="24" height="20" rx="5" />
      <circle cx="20" cy="24" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="28" cy="24" r="2.4" fill="currentColor" stroke="none" />
      <path d="M24 8v6M18 34v4M30 34v4" strokeLinecap="round" />
    </g>
  ),
  gear: (
    <g>
      <circle cx="24" cy="24" r="9" />
      <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
      <path d="M24 9v6M24 33v6M9 24h6M33 24h6M13 13l4 4M31 31l4 4M35 13l-4 4M17 31l-4 4" strokeLinecap="round" />
    </g>
  ),
  chip: (
    <g>
      <rect x="14" y="14" width="20" height="20" rx="2" />
      <rect x="20" y="20" width="8" height="8" rx="1" fill="currentColor" stroke="none" />
      <path d="M19 8v6M29 8v6M19 34v6M29 34v6M8 19h6M8 29h6M34 19h6M34 29h6" strokeLinecap="round" />
    </g>
  ),
  shield: (
    <g>
      <path d="M24 8l14 5v9c0 9-6 14-14 18-8-4-14-9-14-18v-9l14-5Z" />
      <path d="M18 24l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  hex: (
    <g>
      <path d="M24 8l14 8v16l-14 8-14-8V16l14-8Z" />
      <path d="M24 16v16M17 20l14 8M31 20l-14 8" strokeWidth="1.3" />
    </g>
  ),
}

const sponsors = [
  { name: 'NIT DELHI', mark: 'emblem' },
  { name: 'INDIAN BIT', mark: 'bot' },
  { name: 'NIT SILCHAR', mark: 'gear' },
  { name: 'ROBO COMPANY', mark: 'shield' },
  { name: 'IIT BOMBAY', mark: 'hex' },
  { name: 'GENERAL ROBOTICS', mark: 'chip' },
]

const SponsorLogo = ({ name, mark }: { name: string; mark: string }) => (
  <div className="flex items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0">
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-11 h-11 text-arena-text flex-shrink-0">
      {marks[mark]}
    </svg>
    <span className="font-orbitron font-bold text-arena-text text-xs tracking-wide leading-tight max-w-[90px]">{name}</span>
  </div>
)

const Sponsors = () => (
  <section className="bg-arena-darker pb-20 pt-6">
    <div className="container-arena">
      <h2 className="font-orbitron font-black text-white text-2xl mb-10 uppercase tracking-[0.2em]">Sponsors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 items-center">
        {sponsors.map((s) => <SponsorLogo key={s.name} {...s} />)}
      </div>
    </div>
  </section>
)

export default Sponsors
