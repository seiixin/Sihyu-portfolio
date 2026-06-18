import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WeCanDoForYou from './components/WeCanDoForYou'
import Team from './components/Team'
import OurServices from './components/OurServices'
import TechStack from './components/TechStack'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050f05] text-white font-[Inter,sans-serif]">

      {/* Global animated orbs — fixed behind all sections */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="orb-1 absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-lime-500/10 blur-[120px]" />
        <div className="orb-2 absolute bottom-0 -right-24 w-[420px] h-[420px] rounded-full bg-lime-400/8 blur-[100px]" />
        <div className="orb-3 absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-lime-300/6 blur-[90px]" />
        <div className="orb-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-lime-500/4 blur-[140px]" />
        <div className="orb-5 absolute top-10 right-10 w-[220px] h-[220px] rounded-full bg-lime-400/10 blur-[70px]" />
        <div className="orb-2 absolute top-2/3 left-10 w-[280px] h-[280px] rounded-full bg-lime-500/8 blur-[90px]" />
      </div>

      <Navbar />
      <Hero />
      <WeCanDoForYou />
      <Team />
      <OurServices />
      <TechStack />
      <News />
      <Contact />
      <Footer />
    </div>
  )
}
