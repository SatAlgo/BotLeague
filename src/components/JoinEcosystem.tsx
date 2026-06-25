import { useState } from 'react'

interface FormData { name: string; location: string; enroll: string }
const emptyForm: FormData = { name: '', location: '', enroll: '' }

const SignupCard = ({ title }: { title: string }) => {
  const [form, setForm] = useState<FormData>(emptyForm)
  const [done, setDone] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name.trim()) {
      setDone(true)
      setTimeout(() => { setDone(false); setForm(emptyForm) }, 2800)
    }
  }

  const field = (key: keyof FormData, placeholder: string) => (
    <input
      type="text"
      placeholder={placeholder}
      value={form[key]}
      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
      className="bg-arena-darker border border-arena-border text-white font-rajdhani text-sm px-4 py-3 rounded-sm placeholder-arena-muted focus:border-arena-red transition-colors"
    />
  )

  return (
    <div className="flex-1 bg-arena-card border border-arena-border rounded-lg p-6 flex flex-col gap-4">
      <h3 className="font-orbitron font-black text-white text-base tracking-widest uppercase">{title}</h3>
      {done ? (
        <div className="flex-1 flex items-center justify-center py-10">
          <div className="text-center">
            <div className="w-12 h-12 bg-arena-red/20 border border-arena-red rounded-full flex items-center justify-center mx-auto mb-3">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M5 12l5 5L19 7" stroke="#E8243C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-rajdhani text-arena-red font-bold text-sm uppercase tracking-wide">You&apos;re Signed Up!</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {field('name', 'Name')}
          {field('location', 'Location')}
          {field('enroll', 'Enroll')}
          <button
            type="submit"
            className="w-full bg-arena-red hover:bg-arena-red-dark text-white font-orbitron font-bold text-sm py-3 uppercase tracking-widest rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-arena-red/30 mt-1"
          >
            Sign Up
          </button>
        </form>
      )}
    </div>
  )
}

const JoinEcosystem = () => (
  <section id="community" className="bg-arena-dark py-20 lg:py-24">
    <div className="container-arena">
      <h2 className="font-orbitron font-black text-white text-3xl lg:text-[40px] mb-12 uppercase tracking-wide">
        Join the Ecosystem
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <SignupCard title="Become a Judge" />
        <SignupCard title="Volunteer" />
        <SignupCard title="Community Member" />
      </div>
    </div>
  </section>
)

export default JoinEcosystem
