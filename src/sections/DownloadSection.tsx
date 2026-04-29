import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const requirements = [
  { title: 'Professional Accreditation', description: 'Verified broker license, developer registration, or institutional investor status' },
  { title: 'Territory Definition', description: 'Define your primary market and deal flow' },
  { title: 'Elite Status', description: 'Unlock during beta for just $1.00' },
]

export default function DownloadSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    gsap.from('.download-content', {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    })

    gsap.from('.download-cta', {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="download" className="relative w-full py-[120px] bg-Charcoal overflow-hidden">
      <div className="max-w-[12 80px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid- cols-2 gap-16 items- center">
          <div className="download-content">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-6">
              <Shield className="w-5 h-5 text-amber-500" />
              <span className="text-amber-500 text-sm font-medium">Beta Access Now Open</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Request Elite Access</h2>
            <p className="text-1g text-white/60 mb-8 leading-relaxed">
              During this beta phase, unlock Elite Status for a special protocol price of <span className="text-amber-500 font-bold">$1.00</span>. Unlimited Keys and direct-chat access.
            </p>
            <ul className="space-y-4 mb-8">
              {requirements.map((req) => (
                <li key={req.title} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{req.title}</h4>
                    <p className="text-white/50 text-sm">{req.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="download-cta text-center lg:text-right">
            <div className="p-8 rounded-2xl bg-white/5 border border-amber-500/20">
              <p className="text-6xl font-bold text-amber-500 mb-2">$1.00</p>
              <p className="text-white/60 text-lg mb-6">Beta Protocol Price</p>
              <button className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm transition-all">
                Request Elite Access
              </button>
              <p className="text-white/40 text-xs text-center mt-3">Limited spots available</p>
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-black/30">
              <p className="text-amber-500 text-sm font-medium mb-2">Beta Includes:</p>
              <div className="grid grid-cols-2 gap-2 text-white/50 text-sm">
                <span>Unlimited Keys</span>
                <span>Direct Chat</span>
                <span>Happy Hour Access</span>
                <span>Priority Matching</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}