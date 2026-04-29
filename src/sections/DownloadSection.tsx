import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '@/components/SectionHeader'
import { Download, Smartphone, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function DownloadSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.download-image', {
      x: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })
    .from('.download-text', {
      x: -60,
      opacity: 0,
      duration: 1,
    }, '-=0.8')
    .from('.download-buttons', {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5')
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="download" className="relative w-full py-[120px] bg-charcoal overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="download-text">
            <SectionHeader
              eyebrow="Get the App"
              headline="Download & Start Dating Properties"
              subheadline="Available on iOS and Android. Join thousands of happy home hunters today."
              theme="dark"
              centered={false}
            />

            <div className="download-buttons flex flex-col sm:flex-row gap-4 mt-8">
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-dark rounded-xl transition-all duration-200 hover:shadow-lg">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs text-gray-500">Download on the</p>
                  <p className="text-base font-semibold">App Store</p>
                </div>
              </button>

              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-dark rounded-xl transition-all duration-200 hover:shadow-lg">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-xs text-gray-500">Get it on</p>
                  <p className="text-base font-semibold">Google Play</p>
                </div>
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-sage flex items-center justify-center border-2 border-charcoal">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-white/70 mt-1">4.9 rating • 2,000+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right - App Mockup */}
          <div className="download-image flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/assets/cta-app-mockup.jpg"
                alt="App mockup"
                className="rounded-2xl shadow-2xl max-w-[300px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-sage text-white px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Free Download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
