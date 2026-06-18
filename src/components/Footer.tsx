const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'TechStack', href: '#techstack' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-lime-500/15 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        <img
          src="/Asset/Logo With Name.png"
          alt="Sihyu IT Solutions"
          className="h-10 object-contain opacity-90"
        />
        <p className="text-gray-500 text-sm">Building tomorrow's solutions today.</p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-gray-500 hover:text-lime-400 text-sm transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="w-full h-px bg-white/5" />

        <p className="text-gray-600 text-xs text-center">
          &copy; {new Date().getFullYear()} Sihyu IT Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
