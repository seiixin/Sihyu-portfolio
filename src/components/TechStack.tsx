import techstack from '../data/techstack.json'

interface Tech {
  id: number
  name: string
  icon: string
  category: string
  isMore?: boolean
}

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 bg-[#081208]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            TECHNOLOGIES WE <span className="text-lime-400">WORK WITH</span>
          </h2>
          <div className="w-32 h-1 bg-lime-500 mt-3 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4">
          {(techstack as Tech[]).map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-lime-500/50 hover:bg-lime-500/5 transition-all duration-300 group cursor-default"
            >
              {tech.isMore ? (
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-lime-400" />
                  <span className="w-2 h-2 rounded-full bg-lime-400" />
                  <span className="w-2 h-2 rounded-full bg-lime-400" />
                </div>
              ) : (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const img = e.currentTarget
                    img.style.display = 'none'
                  }}
                />
              )}
              <span className="text-gray-300 text-xs sm:text-sm font-medium text-center group-hover:text-lime-400 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
