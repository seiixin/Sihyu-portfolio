import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'TechStack', href: '#techstack' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#news' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'techstack', 'services', 'news', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <img
              src="/Asset/Logo With Name.png"
              alt="Sihyu IT Solutions"
              className="h-12 object-contain"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => {
              const id = href.replace('#', '')
              return (
                <li key={label}>
                  <a
                    href={href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      active === id
                        ? 'text-lime-400'
                        : 'text-gray-300 hover:text-lime-400'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
            <li>
              <a
                href="#contact"
                className="ml-2 px-5 py-2 rounded-md text-sm font-semibold bg-lime-500 text-black hover:bg-lime-400 transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black/95 backdrop-blur-md ${
          menuOpen ? 'max-h-96 border-t border-lime-500/20' : 'max-h-0'
        }`}
      >
        <ul className="px-4 py-4 flex flex-col gap-1">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-lime-400 hover:bg-lime-500/10 rounded-md transition-colors text-sm font-medium"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 px-4 py-3 bg-lime-500 text-black rounded-md text-sm font-semibold text-center hover:bg-lime-400 transition-colors"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
