const disciplines = [
  { name: 'Robo Race', img: '/images/disc-robo-race.jpg' },
  { name: 'Line Follower', img: '/images/disc-line-follower.jpg' },
  { name: 'RC Racing', img: '/images/disc-rc-racing.jpg' },
  { name: 'FPV Drone Racing & Aeromodelling', img: '/images/disc-fpv-drone.jpg' },
  { name: 'Robo Hockey', img: '/images/disc-robo-hockey.jpg' },
  { name: 'Robo War', img: '/images/disc-robo-war.jpg' },
]

const DisciplineCard = ({ name, img }: { name: string; img: string }) => (
  <div className="relative overflow-hidden rounded-lg group cursor-pointer h-56 border border-arena-border hover:border-arena-red/60 transition-all duration-300">
    <img
      src={img}
      alt={name}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
    <div className="absolute inset-0 bg-arena-red/0 group-hover:bg-arena-red/10 transition-colors duration-300" />
    <div className="absolute bottom-0 left-0 right-0 px-4 py-4">
      <p className="font-orbitron font-bold text-white text-sm leading-tight drop-shadow-lg">{name}</p>
    </div>
  </div>
)

/* Decorative circuit panel that fills the empty grid cells, like the design */
const CircuitPanel = () => (
  <div className="relative hidden lg:block lg:col-span-2 h-56 rounded-lg overflow-hidden border border-arena-border bg-arena-darker">
    <svg viewBox="0 0 400 220" className="absolute inset-0 w-full h-full text-arena-red/30" fill="none" preserveAspectRatio="xMidYMid slice">
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M20 40h80v50h120M120 90v60h100M40 180h140v-40h120" />
        <path d="M300 30v70h60M260 200v-50h120M0 120h60v40h60" />
      </g>
      <g fill="currentColor">
        {[[100,40],[220,90],[120,150],[220,150],[300,100],[360,100],[180,140],[300,140],[60,120],[120,160]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="4" />
        ))}
      </g>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="font-orbitron font-bold text-white/70 text-sm tracking-[0.3em] uppercase">Powered by Robotics</p>
    </div>
  </div>
)

const CompetitionDisciplines = () => (
  <section id="disciplines" className="bg-arena-dark py-20 lg:py-24">
    <div className="container-arena">
      <p className="eyebrow mb-2">Sports</p>
      <h2 className="font-orbitron font-black text-white text-3xl lg:text-[40px] mb-10 uppercase tracking-wide">
        Competition Disciplines
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {disciplines.map((d) => <DisciplineCard key={d.name} {...d} />)}
        <CircuitPanel />
      </div>
    </div>
  </section>
)

export default CompetitionDisciplines
