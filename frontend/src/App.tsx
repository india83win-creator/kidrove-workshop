import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkshopDetails from './components/WorkshopDetails'
import LearningOutcomes from './components/LearningOutcomes'
import FAQ from './components/FAQ'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1B1F3B]">
      <Navbar />
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm />
      <Footer />
    </div>
  )
}

export default App