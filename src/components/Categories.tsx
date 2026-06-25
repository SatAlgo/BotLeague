const GOLD = '#F5C518'

const MiniMakersIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
    <circle cx="28" cy="28" r="22" stroke={GOLD} strokeWidth="3.5" />
    <path d="M19 37V21l9 9 9-9v16" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const LightbulbIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
    <path d="M28 12a13 13 0 00-8 23.2c1.3 1 2 2.6 2 4.3V41h12v-1.5c0-1.7.7-3.3 2-4.3A13 13 0 0028 12Z" fill={GOLD} />
    <path d="M23 45h10M24.5 49h7" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
    <path d="M28 4v4M44 12l-3 3M52 28h-4M12 12l3 3M4 28h4" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
  </svg>
)

const EngineerIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
    <circle cx="20" cy="18" r="7" fill={GOLD} />
    <path d="M7 44c0-8 6-13 13-13s13 5 13 13H7Z" fill={GOLD} />
    <circle cx="40" cy="20" r="9" stroke={GOLD} strokeWidth="3" />
    <circle cx="40" cy="20" r="3" fill={GOLD} />
    <path d="M40 7v5M40 28v5M27 20h5M48 20h5M31 11l3.5 3.5M45.5 25.5L49 29M49 11l-3.5 3.5M34.5 25.5L31 29" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

const RoboMindsIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
    <circle cx="28" cy="28" r="22" stroke={GOLD} strokeWidth="3.5" />
    <path d="M24 17v22M21 17h9a5 5 0 010 10h-6m0 0h7a5 5 0 010 10h-10M28 13v5M28 38v5" stroke={GOLD} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const categories = [
  { title: 'MINI MAKERS', desc: 'Where Creativity Meets Logic.', Icon: MiniMakersIcon, featured: true },
  { title: 'JUNIOR INNOVATORS', desc: 'Engineering & Strategy Fundamentals.', Icon: LightbulbIcon, featured: false },
  { title: 'YOUNG ENGINEERS', desc: 'Advanced Wireless & Autonomous Control.', Icon: EngineerIcon, featured: false },
  { title: 'ROBO MINDS', desc: 'Elite Professional Sports & Robotics.', Icon: RoboMindsIcon, featured: false },
]

const Categories = () => (
  <section className="bg-arena-darker py-20 lg:py-24">
    <div className="container-arena">
      <h2 className="font-orbitron font-black text-white text-3xl lg:text-[40px] mb-12 uppercase tracking-wide">
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(({ title, desc, Icon, featured }) => (
          <div
            key={title}
            className={
              'rounded-lg p-7 flex flex-col gap-5 transition-all duration-300 cursor-pointer group ' +
              (featured
                ? 'bg-gradient-to-b from-[#2a2410] to-arena-card border border-[#F5C518]/60'
                : 'bg-arena-card border border-arena-border hover:border-[#F5C518]/40')
            }
          >
            <Icon />
            <h3 className="font-orbitron font-black text-white text-lg leading-tight tracking-wide">{title}</h3>
            <p className="font-rajdhani text-arena-muted text-[15px] flex-1">{desc}</p>
            <button className="flex items-center gap-2 text-arena-red font-orbitron font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
              Learn More
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Categories
