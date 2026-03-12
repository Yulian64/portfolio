import { personal } from '../../data/portfolio'
import { useTypewriter } from '../../hooks/useTypewriter'

const roles = [
  'Desarrollador Frontend',
  'Desarrollador de Software',
  'Entusiasta de IoT',
  'Aprendiz Permanente',
]

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-blue/5 blur-3xl pointer-events-none" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.015]">
        <div className="w-full h-px bg-accent animate-scan" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:pt-30">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border rounded-none">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-display text-xs tracking-widest">
              {personal.education}
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
            <span className="block text-text/40 text-lg md:text-xl font-normal mb-3 tracking-widest">
              Hola, soy
            </span>
            <span className="text-gradient leading-tight ">
              {personal.shortName}
            </span>
          </h1>

          {/* Typewriter */}
          <div className="font-display text-xl md:text-2xl text-muted mb-8 h-8 flex items-center gap-0">
            <span className="text-text">&gt;&nbsp;</span>
            <span className="text-text/90">{typed}</span>
            <span className="ml-1 text-text animate-blink">|</span>
          </div>

          {/* Description */}
          <p className="font-body text-text/60 text-base md:text-lg leading-relaxed mb-12 max-w-xl">
            Apasionado por crear experiencias digitales que mezclan diseño limpio
            con código sólido. Desde plataformas web hasta robots controlados por WiFi.
          </p>

          {/* CTAs */}
          <div className="relative z-10 flex items-center gap-6">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-8 py-3 rounded-full 
                        bg-linear-to-r from-accent/70 to-[#4DA6FF]/50
                        text-background font-semibold cursor-pointer
                        shadow-xl shadow-cyan-500/30
                        transition-all duration-300
                        hover:scale-105 hover:shadow-cyan-400/50
                        active:scale-95"
            >
              Ver Proyectos
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex items-center gap-3 text-muted">
            <div className="w-px h-12 bg-linear-to-b from-transparent to-accent/50" />
            <span className="font-display text-xs tracking-widest">SCROLL</span>
          </div>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-85 md:right-16 font-display text-xs text-muted/50 tracking-widest rotate-90 origin-right hidden lg:block">
        {personal.location} · 2026
      </div>
    </section>
  )
}
