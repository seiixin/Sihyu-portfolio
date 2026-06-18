import { useState } from 'react'
import services from '../data/services.json'

interface Service {
  id: number
  title: string
  description: string
  image: string
  link: string
  buttonText: string
}

export default function WeCanDoForYou() {
  const [selected, setSelected] = useState<Service>(services[0])

  return (
    <section id="services" className="py-24 bg-[#050f05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-black text-lime-400 mb-3">WE CAN DO FOR YOU</h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Service list */}
          <div className="lg:w-72 flex flex-col gap-2 shrink-0">
            {(services as Service[]).map((svc) => (
              <button
                key={svc.id}
                onClick={() => setSelected(svc)}
                className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 font-medium text-sm ${
                  selected.id === svc.id
                    ? 'border-lime-500 bg-lime-500/10 text-lime-400'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-lime-500/50 hover:text-lime-300 hover:bg-white/8'
                }`}
              >
                <span className="flex items-center gap-3">
                  {selected.id === svc.id && (
                    <span className="w-2 h-2 rounded-full bg-lime-400 shrink-0" />
                  )}
                  {svc.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Detail panel */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm">
            <div className="flex flex-col md:flex-row h-full">
              {/* Image */}
              <div className="md:w-3/5 relative overflow-hidden min-h-72 md:min-h-[420px]">
                <img
                  key={selected.id}
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050f05]/60 hidden md:block" />
              </div>

              {/* Content */}
              <div className="md:w-2/5 p-8 flex flex-col justify-center">
                <p className="text-lime-400 text-xs font-semibold tracking-widest uppercase mb-2">Featured Project</p>
                <h3 className="text-2xl font-black text-white mb-4">{selected.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 text-sm">{selected.description}</p>
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-lime-500 text-black font-bold rounded-lg hover:bg-lime-400 transition-colors duration-200 self-start text-sm"
                >
                  {selected.buttonText}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-8 flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {(services as Service[]).map((svc) => (
            <button
              key={svc.id}
              onClick={() => setSelected(svc)}
              className={`shrink-0 relative rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                selected.id === svc.id
                  ? 'border-lime-500 shadow-[0_0_12px_rgba(163,230,53,0.4)]'
                  : 'border-white/10 opacity-60 hover:opacity-100 hover:border-lime-500/50'
              }`}
            >
              <img
                src={svc.image}
                alt={svc.title}
                className="w-36 h-24 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] font-medium px-2 py-1 truncate">
                {svc.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
