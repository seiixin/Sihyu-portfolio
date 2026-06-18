const offerings = [
  {
    icon: '💻',
    title: 'Custom Software Development',
    description: 'Tailored solutions built from the ground up to match your unique business requirements and workflows.',
  },
  {
    icon: '☁️',
    title: 'Cloud Adoption & Security',
    description: 'Migrate to the cloud with confidence. We ensure scalability, uptime, and enterprise-grade security.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, accessible interfaces that delight users and drive engagement across web and mobile.',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that perform seamlessly.',
  },
]

const processSteps = [
  { num: '01', label: 'ANALYSIS', sub: 'System Analysis, Requirements Evaluation' },
  { num: '02', label: 'DESIGN', sub: 'Architecture & Responsible Design' },
  { num: '03', label: 'DEV', sub: 'Solutions-Oriented Development' },
  { num: '04', label: 'TEST', sub: 'QA & Hyperscaling Tests' },
  { num: '05', label: 'DEPLOY', sub: 'Release & Monitoring' },
  { num: '06', label: 'MAINTAIN', sub: 'Ongoing Support & Optimization' },
]

const whyItems = [
  { icon: '🎓', title: 'Expertise', desc: 'Rigorous experience in software engineering and deployment across multiple industries.' },
  { icon: '💡', title: 'Innovation', desc: 'Continuously leveraging the latest industry-leading technologies.' },
  { icon: '📈', title: 'Scalability', desc: 'Building apps with inherent flexibility to grow with your business.' },
  { icon: '🛡️', title: 'Security', desc: 'Results-driven security based on trusted and proven protection measures.' },
]

export default function OurServices() {
  return (
    <section id="what-we-offer" className="py-24 bg-[#050f05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* OUR SERVICES */}
        <div className="text-center mb-14">
          <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-black text-lime-400 mb-3">OUR SERVICES</h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-lime-500/50 hover:bg-lime-500/5 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-lime-400 transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* OUR PROCESS */}
        <div className="text-center mb-14">
          <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-3">How We Work</p>
          <h2 className="text-3xl sm:text-4xl font-black text-lime-400 mb-3">OUR PROCESS</h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-24">
          {processSteps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center text-center group">
              <div className="relative w-full flex items-center justify-center mb-3">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-1/2 w-full h-px bg-lime-500/20" />
                )}
                <div className="relative z-10 w-14 h-14 rounded-full bg-lime-500/20 border border-lime-500/40 flex items-center justify-center text-lime-400 font-black text-sm group-hover:bg-lime-500/40 transition-colors">
                  {step.num}
                </div>
              </div>
              <p className="text-white font-bold text-xs tracking-wider mb-1">{step.label}</p>
              <p className="text-gray-500 text-[11px] leading-tight">{step.sub}</p>
            </div>
          ))}
        </div>

        {/* WHY SIHYU */}
        <div className="text-center mb-14">
          <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Edge</p>
          <h2 className="text-3xl sm:text-4xl font-black text-lime-400 mb-3">WHY SIHYU?</h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyItems.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center hover:border-lime-500/50 hover:bg-lime-500/5 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-lime-400 transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
