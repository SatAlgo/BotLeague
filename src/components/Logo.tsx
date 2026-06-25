const Logo = ({ className = '' }: { className?: string }) => (
  <a href="#top" className={'flex items-center gap-2.5 select-none ' + className}>
    {/* Robot mascot mark */}
    <span className="relative inline-flex items-center justify-center w-9 h-9">
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <rect x="6" y="10" width="28" height="22" rx="6" fill="#E8243C" />
        <rect x="6" y="10" width="28" height="22" rx="6" stroke="#fff" strokeOpacity="0.15" />
        <circle cx="15" cy="21" r="3.5" fill="#111010" />
        <circle cx="25" cy="21" r="3.5" fill="#111010" />
        <circle cx="15.8" cy="20.2" r="1.1" fill="#2F6BFF" />
        <circle cx="25.8" cy="20.2" r="1.1" fill="#2F6BFF" />
        <rect x="16" y="27" width="8" height="2" rx="1" fill="#111010" />
        <path d="M20 4v5M20 4l-3 2M20 4l3 2" stroke="#E8243C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="3.5" r="2" fill="#F5C518" />
      </svg>
    </span>
    <span className="font-orbitron font-black text-lg tracking-tight leading-none">
      <span className="text-arena-red">BOT</span>
      <span className="text-white">LEAGUE</span>
    </span>
  </a>
)

export default Logo
