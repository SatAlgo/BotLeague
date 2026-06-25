const upcomingEvents = [
  { name: 'Event in Mumbai', desc: 'Regional qualifier · Open + Junior', date: '11/11/25', location: 'BKC', category: 'Open' },
  { name: 'Event in Delhi', desc: 'National showcase weekend', date: '11/11/25', location: 'BKC', category: 'Open' },
]

const pastEvents = [
  { name: 'Bengaluru Regionals', desc: 'Concluded · 64 teams', date: '05/10/25' },
  { name: 'Hyderabad Cup', desc: 'Concluded · 48 teams', date: '15/09/25' },
  { name: 'Pune Open', desc: 'Concluded · 40 teams', date: '01/08/25' },
]

/* Single-elimination bracket for the LIVE column */
const Bracket = () => {
  const Seed = ({ label, win = false }: { label: string; win?: boolean }) => (
    <div
      className={
        'h-7 px-2.5 flex items-center rounded-sm text-[11px] font-rajdhani font-semibold ' +
        (win
          ? 'bg-arena-red/15 border border-arena-red/60 text-white'
          : 'bg-arena-gray border border-arena-border text-arena-muted')
      }
    >
      {label}
    </div>
  )
  return (
    <div className="flex items-stretch gap-2 mt-1">
      <div className="flex flex-col justify-between gap-3 flex-1">
        <div className="flex flex-col gap-2">
          <Seed label="Team Alpha" win />
          <Seed label="Team Volt" />
        </div>
        <div className="flex flex-col gap-2">
          <Seed label="Team Nova" win />
          <Seed label="Team Apex" />
        </div>
      </div>
      <svg width="22" className="flex-shrink-0 text-arena-border" viewBox="0 0 22 120" preserveAspectRatio="none" fill="none">
        <path d="M0 16 H11 V44 H22 M0 44 H11" stroke="currentColor" strokeWidth="1.5" />
        <path d="M0 76 H11 V104 H22 M0 104 H11" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="flex flex-col justify-around flex-1">
        <Seed label="Team Alpha" win />
        <Seed label="Team Nova" />
      </div>
      <svg width="20" className="flex-shrink-0 text-arena-red" viewBox="0 0 20 120" preserveAspectRatio="none" fill="none">
        <path d="M0 30 H10 V90 H20 M0 90 H10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="flex flex-col justify-center flex-1">
        <div className="h-8 px-2.5 flex items-center rounded-sm bg-arena-red text-white text-[11px] font-orbitron font-bold tracking-wider">
          FINAL
        </div>
      </div>
    </div>
  )
}

const ColumnHeader = ({ label, active = false }: { label: string; active?: boolean }) => (
  <div className="flex items-center gap-2 mb-5">
    {active && <span className="w-2 h-2 rounded-full bg-arena-red animate-pulse-dot" />}
    <h3 className={'font-orbitron font-bold text-base tracking-widest uppercase ' + (active ? 'text-arena-red' : 'text-white')}>
      {label}
    </h3>
  </div>
)

const CompetitionsEvents = () => {
  return (
    <section id="events" className="bg-arena-darker py-20 lg:py-24">
      <div className="container-arena">
        <h2 className="font-orbitron font-black text-white text-3xl lg:text-[40px] mb-12 tracking-wide uppercase">
          Competitions &amp; Events
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LIVE NOW */}
          <div>
            <ColumnHeader label="Live Now" active />
            <div className="bg-arena-card border border-arena-border rounded-md p-5">
              <div className="flex items-start justify-between gap-3 mb-1">
                <div>
                  <h4 className="font-rajdhani font-bold text-white text-lg leading-tight">Bengaluru Regionals</h4>
                  <p className="font-rajdhani text-arena-muted text-sm">Quarter-finals in progress</p>
                </div>
                <span className="flex-shrink-0 bg-arena-red text-white text-[10px] font-orbitron font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  Ongoing
                </span>
              </div>
              <Bracket />
            </div>
          </div>

          {/* UPCOMING */}
          <div>
            <ColumnHeader label="Upcoming" />
            <div className="flex flex-col gap-4">
              {upcomingEvents.map((e) => (
                <div key={e.name} className="bg-arena-card border border-arena-border rounded-md p-5 hover:border-arena-red/50 transition-colors">
                  <h4 className="font-rajdhani font-bold text-white text-lg leading-tight">{e.name}</h4>
                  <p className="font-rajdhani text-arena-muted text-sm mb-4">{e.desc}</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[['Date', e.date], ['Location', e.location], ['Category', e.category]].map(([k, v]) => (
                      <div key={k}>
                        <p className="font-orbitron text-white text-[10px] uppercase tracking-wider mb-0.5">{k}</p>
                        <p className="font-rajdhani text-arena-muted text-sm">{v}</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-arena-red hover:bg-arena-red-dark text-white font-orbitron font-bold text-xs py-2.5 rounded-sm uppercase tracking-widest transition-colors">
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* PAST RESULTS */}
          <div>
            <ColumnHeader label="Past Results" />
            <div className="bg-arena-card border border-arena-border rounded-md divide-y divide-arena-border">
              {pastEvents.map((e) => (
                <div key={e.name} className="p-5 flex items-center justify-between gap-3 hover:bg-white/[0.02] transition-colors">
                  <div>
                    <h4 className="font-rajdhani font-bold text-white text-base leading-tight">{e.name}</h4>
                    <p className="font-rajdhani text-arena-muted text-sm">{e.desc}</p>
                  </div>
                  <button className="flex-shrink-0 border border-arena-border hover:border-arena-red text-arena-text hover:text-white font-orbitron font-bold text-[10px] px-3 py-2 rounded-sm uppercase tracking-wider transition-colors">
                    Results
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompetitionsEvents
