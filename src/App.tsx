import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import HeroSection from './sections/HeroSection'
import MatchingSection from './sections/MatchingSection'
import DatesSection from './sections/DatesSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FeaturesSection from './sections/FeaturesSection'
import DownloadSection from './sections/DownloadSection'
function App() {
  return (
    <div className="min-h-screen bg-white">
      <ParticleBackground />
      <Navigation />
      <main>
        <HeroSection />
        <MatchingSection />
        <DatesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}
export default App
