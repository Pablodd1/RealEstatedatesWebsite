import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeader from '@/components/SectionHeader'
import FeatureCard from '@/components/FeatureCard'
import { Heart, Search, Calendar, Video, Bell, Shield } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: <Heart className="w-full h-full" strokeWidth={1.5} />,
    iconColor: 'text-coral',
    title: 'Smart Matching',
    description: 'AI learns your preferences as you swipe. The more you use it, the better the matches.',
    tags: ['AI-Powered', 'Learning Algorithm', 'Personalized'],
    variant: 'default' as const,
  },
  {
    icon: <Search className="w-full h-full" strokeWidth={1.5} />,
    iconColor: 'text-sage',
    title: 'Advanced Filters',
    description: 'Filter by price, location, bedrooms, lifestyle factors, and more.',
    tags: ['Location', 'Price Range', 'Lifestyle'],
    variant: 'default' as const,
  },
  {
    icon: <Calendar className="w-full h-full" strokeWidth={1.5} />,
    iconColor: 'text-gold',
    title: 'Play Dates',
    description: 'Book open home visits with one tap. Calendar sync included.',
    tags: ['One-Tap RSVP', 'Calendar Sync', 'Reminders'],
    variant: 'default' as const,
  },
  {
    icon: <Video className="w-full h-full" strokeWidth={1.5} />,
    iconColor: 'text-blue-500',
    title: 'Video Speed Dates',
    description: '5-minute video tours with agents. Perfect for busy schedules.',
    tags: ['5-Min Calls', 'Live Walkthrough', 'No Pressure'],
    variant: 'default' as const,
  },
  {
    icon: <Bell className="w-full h-full" strokeWidth={1.5} />,
    iconColor: 'text-purple-500',
    title: 'Instant Alerts',
    description: 'Get notified when new properties match your criteria.',
    tags: ['Real-Time', 'Custom Alerts', 'Never Miss Out'],
    variant: 'default' as const,
  },
  {
    icon: <Shield className="w-full h-full" strokeWidth={1.5} />,
    iconColor: 'text-emerald-500',
    title: 'Verified Listings',
    description: 'All properties are verified. No scams, no fake listings.',
    tags: ['Verified Agents', 'Safe & Secure', 'Trustworthy'],
    variant: 'default' as const,
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll('.feature-card')
    gsap.from(cards, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="features" className="relative w-full py-[120px] bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          eyebrow="Features"
          headline="Everything You Need to Find Your Match"
          subheadline="Powerful tools designed to make your property search effortless and enjoyable."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
