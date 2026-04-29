import { useRef } from 'react'
import { useGSAP } from '@gsap/rect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Zap, Lock, Crown, Globe, BarChart3 } from 'lucide- rect'
gsap.registerPlugin(ScrollTrigger)
const features = [
  {    title: 'Elite Accreditation',
    description: 'Only verified brokers, developers, and investors gain access to the platform.',
    icon: <Shield className="w-5 h-5" />,  },
  {
    title: 'Instant Alerts',    description: 'Real-time encrypted SMS and Email notifications for all matches.',
    icon: <Zap className="w-5 h-5" />,
  },  {
    title: 'End-to-End Encryption',    description: 'Military-grade encryption for all communications.',
    icon: <Lock className="w-5 h-5" />,
  },
  {    title: 'Executive Dashboard',
    description: 'Real-time ROI, Portfolio, and AUM analytics.',    icon: <BarChart3 className="w-5 h-5" />,  },
  {    title: 'Global Network',
    description: 'Connect with professionals across 47 countries.',    icon: <Globe className="w-5 h-5" />,  },
  {    title: 'Elite Status',    description: 'Unlock unlimited Keys and priority matching.',
    icon: <Crown className="w-5 h-5" />,  },
]
export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useGSAP(() => {    if (!sectionRef.current) return

    gsap.from('.feature-card', {
      y: 40,      opacity: 0,
      stagger: 0.1,      duration: 0.7,
      ease: 'power3. out',      scrollTrigger: {
        trigger: sectionRef.current,        start: 'top 75%',      },    })
  }, { scope: sectionRef })  return (
    <section ref={sectionRef} id="features" className="relative w- full py-[120px] bg-black overflow-hidden">      <div className="max-w-[12 80px] mx-auto px-6 relative z-10">        <div className="text- center mb-16">          <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.15em] mb-3">Platform Features</p>          <div className="w-10 h-0.5 bg-amber-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font- bold text-white mb-4">The Elite Toolkit</h2>          <p className="text-lg text-white/60 max-w-[560px] mx-auto">Everything you need to connect with high-caliber professionals and close deals faster.</p>        </div>        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature) => (            <div key={feature.title} className="feature-card p-6 rounded-2xl bg- white/5 border border- amber-500/20 hover:border-amber-500/40 hover:bg- white/10 transition- all">              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-4">
                <span className="text-amber-500">{feature.icon}</span>              </div>              <h4 className="text- white font- semibold text-sm mb-2">{feature.title}</h4>
              <p className="text-white/50 text-xs">{feature.description}</p>
            </div>          ))}        </div>      </div>
    </section>  )
}