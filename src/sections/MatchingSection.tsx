import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Key, Lock, Clock, MessageSquare } from 'lucide-react'
import { TagBadge } from '@/components/TagBadge'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: 'The Key Protocol',
    description: 'Submit your exclusive Key to potential partners. When mutual keys align, an encrypted match is created.',
    icon: <Key className="w-6 h-6" />,
  },
  {
    title: 'Match Alerts',
    description: 'Receive immediate encrypted SMS and Email notifications when a Mutual Match is established.',
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: '2-Week Window',
    description: 'You have 2 weeks to finalize your deal-flow discussion before the connection window expires.',
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: 'Encrypted Chat',
    description: 'End-to-end encrypted direct messaging for all matched connections.',
    icon: <Lock className="w-6 h-6" />,
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Accreditation',
    description: 'Select your role (Broker, Developer, Investor) and define your territory and deal flow.',
  },
  {
    step: '02',
    title: 'Key Submission',
    description: 'Browse elite profiles and submit Keys to those with potential synergy.',
  },
  {
    step: '03',
    title: 'Mutual Match',
    description: 'When both parties submit Keys, a match is created with immediate alerts.',
  },
  {
    step: '04',
    title: 'Deal Flow',
    description: 'Finalize your discussion within the 2-week window.',
  },
]

export default function MatchingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    gsap.from('.matching-content', {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    })

    gsap.from('.matching-card', {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    })

    const steps = sectionRef.current.querySelectorAll('.how-step')
    gsap.from(steps, {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current.querySelector('.how-steps'),
        start: 'top 80%',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="matching" className="relative w-full py-[120px] bg-Charcoal overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 100% 0%, rgba(212, 175, 55, 0.05) 0%, transparent 40%)`,
      }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.15em] mb-3">The Protocol</p>
          <div className="w-10 h-0.5 bg-amber-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How the Key Protocol Works</h2>
          <p className="text-lg text-white/60 max-w-[560px] mx-auto">Bypass the noise. Our exclusive key-based matching system connects you directly with high-caliber professionals.</p>
        </div>

        <div className="how-steps grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"> {howItWorks.map((step) => (
            <div key={step.step} className="how-step text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-500">{step.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/50">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="matching-content">
            <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.15em] mb-3">The Key Protocol</p>
            <div className="w-10 h-0.5 bg-amber-500 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Submit Your Key, Unlock Synergy</h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              When you see a potential partner, submit your exclusive Key. If they have submitted a Key to you, a Mutual Match is created — opening the door to high-stakes collaboration.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0 text-amber-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-white/50">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="matching-card">
            <div className="bg-Charcoal rounded-2xl p-8 border border-amber-500/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-2xl bg-amber-500 flex items-center justify-center">
                    <Key className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-amber-500 font-semibold">Active Keys</span>
                </div>
                <span className="text-2xl font-bold text-white">47</span>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Marcus Chen', company: 'Cushman & Wakefield', status: 'Sent You a Key' },
                  { name: 'Sofia Rodriguez', company: 'Blackstone', status: 'Waiting for Your Key' },
                  { name: 'James Thornton', company: 'Thornton Group', status: 'Mutual Match!' },
                ].map((profile, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-dark-elevated border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <span className="text-amber-500 text-xs font-semibold">{profile.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{profile.name}</p>
                        <p className="text-white/50 text-xs">{profile.company}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-medium ${profile.status === 'Mutual Match!' ? 'text-green-500' : 'text-amber-500'}`}>
                      {profile.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}