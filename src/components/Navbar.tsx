import { useState, useEffect } from 'react'
import Logo from './Logo'

const navLinks = [
  { label: 'Events', href: '#events' },
  { label: 'Programs', href: '#programs' },
  { label: 'Community', href: '#community' },
  { label: 'Ranks', href: '#ranks' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' +
        (scrolled
          ? 'bg-arena-darker/95 backdrop-blur-md border-b border-arena-border'
          : 'bg-gradient-to-b from-black/70 to-transparent')
      }
    >
      <div className="container-arena flex items-center justify-between h-[72px]">
        <Logo />

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={
                'font-rajdhani text-[15px] font-semibold tracking-wide transition-colors relative py-1 ' +
                (i === 0 ? 'text-white' : 'text-arena-text hover:text-white')
              }
            >
              {link.label}
              {i === 0 && <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-arena-red rounded-full" />}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button className="font-orbitron font-bold text-[11px] tracking-widest uppercase text-white border border-white/30 hover:border-white px-5 py-2 rounded-sm transition-colors">
            Login
          </button>
          <button className="btn-primary">Register Now</button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-arena-darker border-t border-arena-border px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-rajdhani text-arena-text hover:text-white text-base font-semibold tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 font-orbitron font-bold text-[11px] tracking-widest uppercase text-white border border-white/30 px-4 py-2.5 rounded-sm">
              Login
            </button>
            <button className="btn-primary flex-1">Register</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
