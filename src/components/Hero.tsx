const Hero = () => {
  return (
    <section id="top" className="relative min-h-[640px] lg:min-h-[760px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-arena.jpg"
          alt="Robotics arena"
          className="w-full h-full object-cover"
        />
        {/* Cinematic dark + red wash so text is readable and on-brand */}
        <div className="absolute inset-0 bg-gradient-to-r from-arena-darker via-arena-darker/85 to-arena-darker/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-transparent to-arena-darker/60" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      </div>

      <div className="container-arena relative z-10 pt-28 pb-16 w-full">
        {/* Live banner */}
        <div className="inline-flex items-center gap-3 bg-black/50 border border-arena-border backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 mb-7">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-arena-red animate-pulse-dot" />
            <span className="font-orbitron text-[10px] font-bold tracking-widest text-arena-red uppercase">Live</span>
          </span>
          <span className="font-rajdhani text-[13px] text-arena-text">
            Episode 14 · Bengaluru Regionals
          </span>
          <a href="#events" className="font-rajdhani text-[13px] font-bold text-white hover:text-arena-red transition-colors flex items-center gap-1">
            Watch Live
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M3 2l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>

        <h1 className="font-orbitron font-black text-white leading-[0.95] tracking-tight max-w-3xl">
          <span className="block text-4xl sm:text-5xl lg:text-[64px]">INDIA&apos;S ULTIMATE</span>
          <span className="block text-4xl sm:text-5xl lg:text-[64px]">ROBOTICS <span className="text-arena-red">ARENA</span></span>
        </h1>

        <p className="font-rajdhani text-arena-text text-lg lg:text-xl mt-5 mb-8 max-w-xl font-medium">
          Build. Compete. Rank. The National Ecosystem for Robotics Arena.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="btn-primary px-9 py-3.5 text-sm">Create Account</button>
          <a href="#events" className="btn-outline px-9 py-3.5 text-sm">Explore Events</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
