import { Github, Linkedin } from 'lucide-react'
import { useState } from 'react'
import { personal } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

export default function Contact() {
  const { ref, isInView } = useInView()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    {
      label: 'GitHub',
      href: personal.github,
      icon: <Github size={20}/>,
    },
    {
      label: 'LinkedIn',
      href: personal.linkedin,
      icon: <Linkedin size={20}/>,
    },
  ]

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-accent text-sm tracking-widest">04.</span>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight text-text">
            Contacto
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div
          ref={ref}
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-display text-3xl md:text-5xl font-bold text-text mb-6 leading-tight">
            ¿Tienes un{' '}
            <span className="text-gradient">proyecto</span>{' '}
            en mente?
          </h3>

          <p className="text-text/50 mb-10 leading-relaxed">
            Estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes.
            No dudes en escribirme.
          </p>

          {/* Email copy button */}
          <button
            onClick={copyEmail}
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-accent/40 hover:border-accent bg-accent/5 hover:bg-accent/10 transition-all duration-300 mb-8 animate-glow-pulse font-display text-sm tracking-widest text-accent"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {copied ? '¡Copiado! ✓' : personal.email}
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-display text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Click para copiar
            </span>
          </button>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 font-display text-sm tracking-widest group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
