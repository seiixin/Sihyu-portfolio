export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050f05]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(163,230,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pt-28 pb-16">

        {/* Logo visual — smaller on mobile, shown above text */}
        <div className="flex-shrink-0 flex items-center justify-center lg:order-2 lg:flex-1 lg:justify-end">
          <div className="relative">
            <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full bg-lime-500/10 border border-lime-500/20 flex items-center justify-center">
              <img
                src="/Asset/Logo.png"
                alt="Sihyu IT Solutions"
                className="w-28 sm:w-40 lg:w-56 object-contain drop-shadow-[0_0_30px_rgba(163,230,53,0.4)]"
              />
            </div>
            {/* Orbit ring */}
            <div className="absolute inset-[-16px] sm:inset-[-20px] rounded-full border border-lime-500/10 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 text-center lg:text-left lg:order-1">
          <p className="inline-block text-lime-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 border border-lime-500/30 px-3 py-1 rounded-full bg-lime-500/10">
            Innovative IT Solutions
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 sm:mb-6">
            We Build Systems<br />
            <span className="text-lime-400">That Drive Growth</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-7 sm:mb-8 leading-relaxed">
            Custom software development tailored to your business needs.
            From POS to GIS — we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#services"
              className="px-7 py-3 bg-lime-500 text-black font-bold rounded-lg hover:bg-lime-400 transition-colors duration-200 text-center text-sm sm:text-base"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-lime-500/50 text-lime-400 font-semibold rounded-lg hover:bg-lime-500/10 hover:border-lime-400 transition-colors duration-200 text-center text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-lime-500/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
