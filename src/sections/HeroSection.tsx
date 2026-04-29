import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Play } from 'lucide-react'

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
      .from('.hero-image', { scale: 1.1, opacity: 0, duration: 1.2 }, '-=0.8')
      .from('.hero-particles', { opacity: 0, duration: 0.8 }, '-=0.5')
  }, { scope: heroRef })

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center bg-dark overflow-hidden pt-[72px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-charcoal" />

      {/* Gold particles */}
      <div className="hero-particles absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-gold">New: Video Speed Dates</span>
            </div>

            <h1 className="hero-headline text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6">
              Swipe Right on
              <span className="font-script text-gold italic"> Your Dream</span>
              <br />
              <span className="font-script text-gold italic">Home</span>
            </h1>

            <p className="hero-subheadline text-lg text-white/70 max-w-[500px] mx-auto lg:mx-0 mb-8 leading-relaxed">
              The dating app approach to real estate. Browse, match, and date properties with interactive play dates and video speed dates.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-dark font-semibold text-sm rounded-full transition-all duration-200 hover:shadow-glow">
                Start Swiping Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-full transition-all duration-200">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            <div className="hero-subheadline mt-12 flex items-center gap-8 justify-center lg:justify-start">
              <div>
                <p className="text-2xl font-bold text-white">12,500+</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">Happy Matches</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">4.9</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">App Rating</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">15,000+</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">Speed Dates</p>
              </div>
            </div>
          </div>

          {/* Right - Hero images */}
          <div className="hero-image relative">
            <div className="relative grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className={`rounded-xl overflow-hidden ${num === 5 ? 'col-span-2 aspect-[16/9]' : 'aspect-[3/4]'}`}
                >
                  <img
                    src={`/assets/hero-prop-${num}.jpg`}
                    alt={`Property ${num}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
