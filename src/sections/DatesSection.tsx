import { useRef } from 'react'
import { useGSAP } from '@gsap/rect'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Video, Clock, Users } from 'lucide-react'
gsap. registerPlugin(ScrollTrigger)

export default function DatesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!sectionRef. current) return

    gsap.from('.dates-content', {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    })

    gsap.from('.dates-video', {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef. current,
        start: 'top 75%',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="dates" className="relative w-full py-[120px] bg-dar overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 0% 100%, rgba(16, 185, 129, 0.05) 0%, transparent 40%)`,
      }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="dates-content">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500 text-xs font-medium uppercase tracking-wider">Happy Hour Active</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text- white mb-6">The Virtual Ballroom</h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Join our time-gated Happy Hour video rotations. Get paired for 3-minute high-intensity calls with other Elite members.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg- white/5 border border- white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span className="text-white/50 text-xs uppercase tracking-wider">Rotation</span>
                </div>
                <p className="text-2xl font-bold text- white">3:00</p>
              </div>
              <div className="p-4 rounded-2xl bg- white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-amber-500" />
                  <span className="text-white/50 text-xs uppercase tracking-wider">Active</span>
                </div>
                <p className="text-2xl font-bold text-white">127</p>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded- full bg-amber-500 flex items-center justify-center shrink-0">
                  <span className="text-black text-xs font-bold">✓</span>
                </div>
                <span className="text-white text-sm">Executive HUD with real-time ROI and AUM display</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                  <span className="text-black text-xs font-bold">✓</span>
                </div>
                <span className="text-white text-sm">Submit Keys during or after video calls</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                  <span className="text-black text-xs font-bold">✓</span>
                </div>
                <span className="text-white text-sm">Permanent match on mutual key exchange</span>
              </li>
            </ul>
          </div>

          <div className="dates-video">
            <div className="bg-dark-elevated rounded-2xl border border-amber-500/20 overflow-hidden">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-900/20 to-emerald-900/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                    <Video className="w-10 h-10 text-amber-500" />
                  </div>
                  <p className="text-white text-lg font-semibold">Connected to: Marcus Chen</p>
                  <p className="text-white/50 text-sm">Cushman & Wakefield • NYC</p>
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="px-3 py-1 rounded-full bg-green-500 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-black text-xs font-medium">LIVE</span>
                  </div>
                  <span className="text-white text-3xl font-bold font-mono">2:47</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-4 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">AUM</p>
                    <p className="text-white text-xl font-bold">$2.4B</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">ROI</p>
                    <p className="text-green-500 text-xl font-bold">34%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Deals</p>
                    <p className="text-white text-xl font-bold">47</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex gap-3">
                  <button className="flex-1 py-3 rounded-xl bg-red-500/20 text-red-500 font-semibold text-sm hover:bg-red-500/30 transition-colors">Pass</button>
                  <button className="flex-1 py-3 rounded-xl bg-amber-500 text-black font-semibold text-sm hover:bg-amber-400 transition-colors">Submit Key</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}