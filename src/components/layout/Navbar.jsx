import { useEffect, useState } from 'react'
import { navLinks } from '../../data/portfolio'


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (!menuOpen) {
        setScrolled(window.scrollY > 40)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  useEffect(() => {
  const handleScroll = () => {
    const scrollPos = window.scrollY + 120

    navLinks.forEach(link => {
      const section = document.querySelector(link.href)

      if (!section) return

      const offsetTop = section.offsetTop
      const offsetBottom = offsetTop + section.offsetHeight

      if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
        setActive(link.href)
      }
    })
  }

  window.addEventListener('scroll', handleScroll)

  handleScroll()

  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
          scrolled ? 'py-3 backdrop-blur-xl border-b border-border' : 'py-5'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('#hero')}
            className="font-display text-lg tracking-widest hover:glow transition-all"
          >
            ET<span className="text-text/30">_</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`font-display text-xs tracking-widest cursor-pointer relative group transition-colors duration-600 ${active === link.href ? 'text-accent' : 'hover:text-accent'}`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full secondary-color scale-x-0 origin-center transition-transform duration-300 ${active === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="mailto:yuliantovar2002@gmail.com"
            className="hidden md:block font-display text-xs tracking-widest px-4 py-2 border hover:border-[#4AD6FF] hover:text-[#4AD6FF] hover:scale-105 transition-all duration-300"
          >
            Contáctame
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-accent flex flex-col gap-1.5 p-1 cursor-pointer"
            aria-label="Menu"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div className={`
          fixed inset-0 md:hidden z-20
          transition-all duration-500
          ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
          `}
      >
        {/* Background blur + fade */}
        <div className={`
            absolute inset-0 primary-color/90 backdrop-blur-3xl            transition-opacity duration-500
              ${menuOpen ? 'opacity-100' : 'opacity-0'}
            `}
        />

        {/* Content */}
        <div
          className={`
            relative h-full flex flex-col items-center justify-center gap-10
            transform transition-all duration-500 ease-out            ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}
        >
          {navLinks.map((link, index) => (
          <button
            key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
              transitionDelay: `${index * 80}ms`,
              }}
              className={`
                text-lg font-display tracking-widest
                transition-all duration-300
                hover:text-accent hover:translate-x-3
                ${active === link.href ? 'text-accent' : ''}
              `}
          >
          {link.label}
          </button>
          ))}
        </div>
      </div>
    </>
  )
}
