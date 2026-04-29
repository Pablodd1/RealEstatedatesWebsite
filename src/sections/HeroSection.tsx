import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Play, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!heroRef.current) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6 })
      .from('.hero-headline', { y: 40, opacity: 0, duration: 0.8 }, '-=0.3')
      .from('.hero-subheadline', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.hero-swipe', { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
      .from('.hero-stats', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.hero-cards', { scale: 1.1, opacity: 0, duration: 1.2 }, '-=0.8')
  }, { scope: heroRef })

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center bg-Charcoal overflow-hidden pt-[72px]">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-charcoal" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <Heart className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-amber-500">The Dating App for Real Estate</span>
            </div>

            <h1 className="hero-headline text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Swipe Right on
              <span className="text-amber-500 block">Your Dream</span>
              <span className="text-amber-500 block">Home</span>
            </h1>

            <p className="hero-subheadline text-lg text-white/70 max-w-[500px] mx-auto lg:mx-0 mb-8 leading-relaxed">
              The revolutionary way to find your perfect property match. Browse properties like you browse dates — swipe, match, and connect with your dream home.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm rounded-full transition-all duration-200 shadow-lg shadow-amber-500/20">
                Start Swiping
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-full transition-all duration-200">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            <div className="hero-swipe flex items-center gap-4 justify-center lg:justify-start mb-8">
              <div className="flex -space-x-3">
                {['S', 'M', 'R'].map((letter, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black font-semibold text-sm border-2 border-black">
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/60">Join <span className="text-amber-500 font-semibold">12,500+</span> happy matches</p>
            </div>

            <div className="hero-stats grid grid-cols-3 gap-6 max-w-[400px]">
              {[
                { value: '12,500+', label: 'Matches Made' },
                { value: '15,000+', label: 'Speed Dates' },
                { value: '4.9', label: 'App Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-amber-500">{stat.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-cards relative flex justify-center">
            <div className="relative w-[280px] md:w-[320px]">
              <div className="absolute -top-4 -left-4 w-full h-full bg-amber-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 to-amber-50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-24 h-24 text-amber-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex gap-2 mb-2">
                      {['3 bed', '2 bath', 'Pool'].map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/20 rounded-full text-white text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-dark">
                  <h3 className="text-lg font-semibold text-white">Modern Beach House</h3>
                  <p className="text-sm text-white/60">Bondi Beach, Sydney</p>
                  <p className="text-xl font-bold text-amber-500 mt-2">$1,850,000</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 flex gap-2">
                <button className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg">✕</button>
                <button className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg">♥</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
