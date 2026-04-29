import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Key, Shield, Sparkles, Lock, Crown } from 'lucide-react'
import { TagBadge } from '@/components/TagBadge'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '2,847', label: 'Elite Members' },
  { value: '$4.2B', label: 'Combined AUM' },
  { value: '1,203', label: 'Keys Exchanged' },
  { value: '$890M', label: 'Deals Closed' },
]

const profiles = [
  {
    name: 'Marcus Chen',
    role: 'Senior Broker',
    company: 'Cushman & Wakefield',
    location: 'New York, NY',
    aum: '$2.4B',
    deals: '47',
    roi: '34%',
    tags: ['Commercial', 'Mixed-Use', 'Luxury'],
  },
  {
    name: 'Sofia Rodriguez',
    role: 'Investment Director',
    company: 'Blackstone Real Estate',
    location: 'London, UK',
    aum: '$8.7B',
    deals: '89',
    roi: '28%',
    tags: ['Institutional', 'REITs', 'Global'],
  },
  {
    name: 'James Thornton',
    role: 'Developer',
    company: 'Thornton Development Group',
    location: 'Miami, FL',
    aum: '$1.2B',
    deals: '23',
    roi: '41%',
    tags: ['Residential', 'Hospitality', 'Ground-Up'],
  },
]

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const [activeProfile, setActiveProfile] = useState(0)

  useGSAP(() => {
    if (!heroRef.current) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-elite-badge', { y: 20, opacity: 0, duration: 0.6 })
      .from('.hero-headline', { y: 40, opacity: 0, duration: 0.8 }, '-=0.3')
      .from('.hero-subheadline', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.hero-card', { scale: 0.9, opacity: 0, rotation: -5, duration: 1 }, '-=0.4')
      .from('.hero-stats', { y: 30, opacity: 0, duration: 0.8 }, '-=0.3')
  }, { scope: heroRef })

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-gradient-180deg from-dark via-dark to-charcoal" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 40%),
                          radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 30%)`,
      }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="hero-elite-badge inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-6">
              <Crown className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-amber-500">By Invitation Only</span>
            </div>

            <h1 className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The Elite Protocol for
              <span className="text-amber-500 block">Global Real Estate</span>
              <span className="text-white/90 block">Interaction</span>
            </h1>

            <p className="hero-subheadline text-lg text-white/60 max-w-[520px] mx-auto lg:mx-0 mb-8 leading-relaxed">
              Skip the noise. Connect directly with brokers, developers, and institutional investors through our exclusive key-based matching system. High-stakes networking, elevated.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm rounded-full transition-all duration-200 shadow-xl shadow-amber-500/20">
                Request Access
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-sm rounded-full transition-all duration-200">
                <Lock className="w-4 h-4" />
                Enter as Guest
              </button>
            </div>

            <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[480px]">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left p-3 rounded-xl bg-white/5">
                  <p className="text-xl md:text-2xl font-bold text-amber-500">{stat.value}</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card relative flex justify-center">
            <div className="relative w-[300px] md:w-[340px]">
              <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl blur-2xl" />
              <div className="relative bg-dark-elevated border border-amber-500/20 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-amber-900/30 to-amber-500/10" />
                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <span className="text-amber-500 font-bold">{profiles[activeProfile].name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{profiles[activeProfile].name}</p>
                        <p className="text-white/50 text-xs">{profiles[activeProfile].company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-green-500 text-xs font-medium">Active</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-2xl font-bold text-amber-500">{profiles[activeProfile].aum}</p>
                    <p className="text-white/50 text-xs uppercase tracking-wider">Assets Under Management</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white/5">
                      <p className="text-lg font-bold text-white">{profiles[activeProfile].deals}</p>
                      <p className="text-[10px] text-white/50 uppercase">Deals Closed</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5">
                      <p className="text-lg font-bold text-green-500">{profiles[activeProfile].roi}</p>
                      <p className="text-[10px] text-white/50 uppercase">Avg ROI</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {profiles[activeProfile].tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs">{tag}</span>
                    ))}
                  </div>

                  <p className="text-sm text-white/50 mb-6">{profiles[activeProfile].location}</p>

                  <div className="flex gap-3">
                    <button className="flex-1 py-3 rounded-xl bg-red-500/20 text-red-500 font-semibold text-sm hover:bg-red-500/30 transition-colors">
                      Pass
                    </button>
                    <button className="flex-1 py-3 rounded-xl bg-amber-500 text-black font-semibold text-sm hover:bg-amber-400 transition-colors flex items-center justify-center gap-2">
                      <Key className="w-4 h-4" />
                      Submit Key
                    </button>
                  </div>
                </div>

                <div className="flex justify-center gap-2 p-4 border-t border-white/10 bg-black/30">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      onClick={() => setActiveProfile(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === activeProfile ? 'bg-amber-500 w-6' : 'bg-white/20 hover:bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 flex gap-2">
                <button className="w-12 h-12 rounded-full bg-dark border border-amber-500/30 text-amber-500 flex items-center justify-center shadow-lg hover:bg-amber-500/10 transition-colors">
                  ✕
                </button>
                <button className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-lg">
                  <Key className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}