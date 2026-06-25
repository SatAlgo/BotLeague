const RED = '#E8243C'

const MedalIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <path d="M13 4l5 10M27 4l-5 10" stroke={RED} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="20" cy="25" r="11" fill="rgba(232,36,60,0.15)" stroke={RED} strokeWidth="2.5" />
    <path d="M20 19l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L20 19Z" fill={RED} />
  </svg>
)
const GavelIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <rect x="18" y="6" width="14" height="8" rx="2" transform="rotate(45 25 10)" fill={RED} />
    <path d="M11 24l8-8M8 34h14" stroke={RED} strokeWidth="3" strokeLinecap="round" />
    <rect x="6" y="26" width="14" height="6" rx="2" transform="rotate(45 13 29)" fill={RED} />
  </svg>
)
const BriefcaseIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <path d="M14 12V9a3 3 0 013-3h6a3 3 0 013 3v3" stroke={RED} strokeWidth="2.5" />
    <rect x="6" y="12" width="28" height="20" rx="3" fill="rgba(232,36,60,0.15)" stroke={RED} strokeWidth="2.5" />
    <path d="M6 20h28" stroke={RED} strokeWidth="2.5" />
    <rect x="17" y="17" width="6" height="6" rx="1" fill={RED} />
  </svg>
)
const BoltIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <path d="M22 4L9 22h9l-2 14 13-18h-9l2-14Z" fill="rgba(232,36,60,0.2)" stroke={RED} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
)

const advantages = [
  { Icon: MedalIcon, title: 'NATIONAL RECOGNITION', desc: 'Benchmark your skills on India’s official robotics leaderboard.' },
  { Icon: GavelIcon, title: 'FAIR JUDGING', desc: 'Compete with confidence under standardized, expert-led evaluation.' },
  { Icon: BriefcaseIcon, title: 'CAREER OPS', desc: 'Bridge the gap between arena victories and top-tier tech placements.' },
  { Icon: BoltIcon, title: 'HIGH-ENERGY ECO', desc: 'Join a nationwide community of elite innovators and robotics athletes.' },
]

const rows = [
  { rank: '02', score: '22000', accent: 'cyan' },
  { rank: '03', score: '20030', accent: 'cyan' },
  { rank: '04', score: '19500', accent: 'pink' },
  { rank: '05', score: '15060', accent: 'pink' },
  { rank: '06', score: '13865', accent: 'pink' },
  { rank: '07', score: '10954', accent: 'pink' },
  { rank: '08', score: '9057', accent: 'pink' },
] as const

const accentMap = {
  cyan: { bg: 'bg-cyan-500', border: 'border-cyan-400/50', glow: 'shadow-cyan-500/20' },
  pink: { bg: 'bg-pink-500', border: 'border-pink-400/50', glow: 'shadow-pink-500/20' },
}

const AvatarGlyph = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="9" r="4" fill="currentColor" />
    <path d="M4 21c0-5 4-7 8-7s8 2 8 7" fill="currentColor" />
  </svg>
)
const ShieldStar = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3Z" fill="currentColor" />
    <path d="M12 7l1.3 2.7 2.9.4-2.1 2 .5 2.9L12 15.6 9.4 17l.5-2.9-2.1-2 2.9-.4L12 7Z" fill="#111010" />
  </svg>
)

const Leaderboard = () => (
  <div className="relative w-full lg:w-[340px] flex-shrink-0 rounded-xl overflow-hidden border border-arena-border">
    {/* circuit background */}
    <img src="/images/circuit.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
    <div className="absolute inset-0 bg-arena-darker/85" />

    <div className="relative p-5">
      <h3 className="font-orbitron font-bold text-white text-center text-lg tracking-[0.25em] uppercase mb-5">
        Leaderboard
      </h3>

      {/* featured #01 */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-b from-[#F5C518] to-[#d9a800] flex items-center justify-center">
            <AvatarGlyph className="w-12 h-12 text-[#3a2c00]" />
          </div>
          <ShieldStar className="w-7 h-7 text-[#F5C518] absolute -top-2 -right-2 drop-shadow" />
        </div>
        <p className="font-rajdhani text-arena-text text-sm mt-3">#01 - Player Name</p>
        <p className="font-orbitron font-black text-white text-3xl tracking-wide">508754</p>
      </div>

      {/* rows */}
      <div className="flex flex-col gap-2.5">
        {rows.map((r) => {
          const a = accentMap[r.accent]
          return (
            <div
              key={r.rank}
              className={'flex items-center gap-3 rounded-lg bg-black/40 border pl-2 pr-3 py-2 ' + a.border + ' shadow-md ' + a.glow}
            >
              <span className="font-orbitron font-bold text-white text-xs w-7 text-center">{r.rank}</span>
              <span className={'w-8 h-8 rounded-md flex items-center justify-center ' + a.bg}>
                <AvatarGlyph className="w-5 h-5 text-white/90" />
              </span>
              <span className="font-rajdhani font-semibold text-white text-sm flex-1">Player Name</span>
              <span className="font-orbitron font-bold text-arena-text text-xs">{r.score}</span>
              <ShieldStar className={'w-5 h-5 ' + (r.accent === 'cyan' ? 'text-cyan-400' : 'text-pink-400')} />
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

const LeagueAdvantage = () => (
  <section id="ranks" className="bg-arena-darker py-20 lg:py-24">
    <div className="container-arena">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        <div className="flex-1">
          <p className="eyebrow mb-2">Why Register?</p>
          <h2 className="font-orbitron font-black text-white text-3xl lg:text-[40px] mb-10 uppercase tracking-wide">
            The League Advantage
          </h2>
          <div className="flex flex-col gap-7">
            {advantages.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-5 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg border border-arena-border bg-arena-card flex items-center justify-center group-hover:border-arena-red/50 transition-colors">
                  <Icon />
                </div>
                <div>
                  <h3 className="font-orbitron font-black text-white text-base tracking-wide mb-1">{title}</h3>
                  <p className="font-rajdhani text-arena-muted text-[15px] leading-relaxed max-w-md italic">&ldquo;{desc}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Leaderboard />
      </div>
    </div>
  </section>
)

export default LeagueAdvantage
