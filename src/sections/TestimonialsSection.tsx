import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react' 
gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {    quote: "Real Estate Dates transformed how I do business. Within 3 months, I closed $47M in deals through connections made on the platform.", 
    name: 'Alexander Whitmore',
    role: 'Senior Broker',
    company: 'JLL',    aum: '$890M'  },
  {
    quote: "The Key Protocol is genius. Instead of cold calls and emails, I now have warm introductions to decision-makers who want to connect.",
    name: 'Priya Sharma',
    role: 'Investment Director',
    company: 'Brookfield',
    aum: '$12.4B'
  },
  {    quote: "Happy Hour is my favorite feature. 3-minute rotations, real-time data — I've made more valuable connections in one session than in a year of conferences.",
    name: 'David Chen',    role: 'Developer',
    company: 'Related Group',
    aum: '$4.1B'
  },
]

export default function TestimonialsSection() {  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    gsap.from('.testimonial-card', {      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,      ease: 'power3.out',
      scrollTrigger: {        trigger: sectionRef.current. querySelector('.testimonial-grid'),
        start: 'top 80%',      },
    })

    gsap.from('.test-stats', {      y: 30,
      opacity: 0,
      duration: 0.8,      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current. querySelector('.test-stats'),
        start: 'top 85%',      },
    })
  }, { scope: sectionRef })  return (    <section ref={sectionRef} className="relative w-full py-[120px] bg-dar overflow-hidden">
      <div className="max- w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-amber-500 text- xs font- medium uppercase tracking-[0.15em] mb-3">Success Stories</p>          <div className="w-10 h-0.5 bg-amber-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font- bold text- white mb-4">Elite Connections</h2>
          <p className="text- lg text- white/60 max- w-[560px] mx-auto">Hear from the professionals who have closed deals through Real Estate Dates.</p>
        </div>

        <div className="testimonial-grid grid grid- cols-1 md:grid- cols-3 gap-8 mb-16">          {testimonials.map((testimonial, i) => (            <div key={i} className="testimonial-card p-8 rounded-2xl bg-white/5 border border-amber-500/20">              <Quote className="w-8 h-8 text-amber-500/30 mb-4" />              <p className="text-lg text-white/90 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>              <div className="p-4 rounded-xl bg-black/30 mb-4">                <p className="text-2xl font-bold text-amber-500">{testimonial.aum}</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">Their AUM</p>
              </div>
              <div className="flex items- center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">                  <span className="text-amber-500 font-semibold">{testimonial.name. split(' ').map(n => n[0]).join('')}</span>                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>                  <p className="text-white/50 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>              </div>            </div>          ))}        </div>

        <div className="test-stats grid grid- cols-2 md:grid- cols-4 gap-8 p-8 rounded-2xl bg- white/5">
          {[
            { value: '$890M+', label: 'Deals Closed' },            { value: '12.4%', label: 'Avg ROI' },
            { value: '2,847', label: 'Elite Members' },            { value: '94%', label: 'Match Rate' },          ].map((stat) => (            <div key={stat.label} className="text-center">              <p className="text-3xl md:text-4xl font-bold text-amber-500">{stat.value}</p>
              <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
            </div>          ))}
        </div>      </div>    </section>
  )
}