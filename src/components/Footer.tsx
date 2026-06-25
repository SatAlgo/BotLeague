import Logo from './Logo'

const col1 = ['The Arena', 'Episodes', 'National Rankings', 'Programs', 'Rulebooks']
const col2 = ['Join the Team', 'Sponsorships', 'Help Center', 'Contact Us', 'Legal']

const socials: { label: string; icon: JSX.Element }[] = [
  {
    label: 'YouTube',
    icon: <path d="M23 7.5a3 3 0 00-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 001 7.5 31 31 0 00.6 12 31 31 0 001 16.5a3 3 0 002.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 002.1-2.1A31 31 0 0023.4 12 31 31 0 0023 7.5ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" fill="currentColor" />,
  },
  {
    label: 'Instagram',
    icon: <g><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></g>,
  },
  {
    label: 'Facebook',
    icon: <path d="M14 9V7.5c0-.8.5-1 .9-1H17V3.2L14.2 3C11.2 3 10 4.9 10 7.3V9H7.5v3H10v9h4v-9h2.6l.4-3H14Z" fill="currentColor" />,
  },
  {
    label: 'Twitter',
    icon: <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 001.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 00-6.9 2.7c0 .3 0 .6.1.9A11.4 11.4 0 013.1 4.6a4 4 0 001.2 5.4c-.6 0-1.2-.2-1.8-.5a4 4 0 003.2 4 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8 8 0 012 18.1a11.3 11.3 0 006.1 1.8c7.3 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2.1Z" fill="currentColor" />,
  },
]

const FooterCol = ({ items }: { items: string[] }) => (
  <ul className="flex flex-col gap-3">
    {items.map((l) => (
      <li key={l}>
        <a href="#" className="font-rajdhani text-arena-muted hover:text-white text-[15px] transition-colors">{l}</a>
      </li>
    ))}
  </ul>
)

const Footer = () => (
  <footer className="bg-arena-darker border-t border-arena-border pt-14 pb-10">
    <div className="container-arena">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between">
        <div className="max-w-sm">
          <Logo className="mb-5" />
          <p className="font-rajdhani text-arena-muted text-[15px] leading-relaxed">
            India&apos;s national robotics competition platform. Build, compete, and rank on the official leaderboard.
          </p>
        </div>

        <div>
          <h3 className="font-orbitron font-bold text-white text-xs tracking-[0.2em] uppercase mb-5">Quick Links</h3>
          <div className="flex gap-12">
            <FooterCol items={col1} />
            <FooterCol items={col2} />
          </div>
        </div>

        <div>
          <h3 className="font-orbitron font-bold text-white text-xs tracking-[0.2em] uppercase mb-5">Social Media</h3>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-arena-border flex items-center justify-center text-arena-muted hover:text-white hover:border-arena-red hover:bg-arena-red/10 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-arena-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-rajdhani text-arena-muted text-sm">© 2025 BotLeague Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Legal'].map((l) => (
            <a key={l} href="#" className="font-rajdhani text-arena-muted hover:text-white text-sm transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
