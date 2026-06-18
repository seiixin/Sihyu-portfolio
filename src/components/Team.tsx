import { useState, useRef } from 'react'
import team from '../data/team.json'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' })
  }

  return (
    <section id="about" className="py-24 bg-[#081208]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-3">Our People</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            MEET THE <span className="text-lime-400">TEAM</span>
          </h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">The passionate minds building tomorrow's solutions at Sihyu IT Solutions.</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 w-10 h-10 rounded-full bg-lime-500/20 border border-lime-500/40 text-lime-400 flex items-center justify-center hover:bg-lime-500/40 transition-colors"
            aria-label="Previous"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide px-2 snap-x snap-mandatory"
          >
            {(team as TeamMember[]).map((member, i) => (
              <div
                key={member.id}
                onClick={() => setActiveIndex(i)}
                className={`snap-center shrink-0 w-72 sm:w-80 rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 ${
                  activeIndex === i
                    ? 'border-lime-500 shadow-[0_0_20px_rgba(163,230,53,0.25)] scale-105'
                    : 'border-white/10 bg-white/5 hover:border-lime-500/40'
                }`}
              >
                <div className="relative overflow-hidden bg-[#0d1f0d]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-bold text-lg leading-tight">{member.name}</p>
                    <p className="text-lime-400 text-sm font-medium mt-1">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 w-10 h-10 rounded-full bg-lime-500/20 border border-lime-500/40 text-lime-400 flex items-center justify-center hover:bg-lime-500/40 transition-colors"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {(team as TeamMember[]).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-6 h-2 bg-lime-500' : 'w-2 h-2 bg-white/20 hover:bg-lime-500/50'
              }`}
              aria-label={`Go to team member ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
