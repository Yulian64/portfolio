import { useInView } from '../../hooks/useInView'

const facts = [
  { label: 'Formación', value: 'ADSO · SENA' },
  { label: 'Enfoque', value: 'Frontend & IoT' },
  { label: 'Ubicación', value: 'Soacha, Cundinamarca, Colombia' },
  { label: 'Status', value: 'Disponible ✓' },
]

export default function About() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="py-28 px-6 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-accent text-sm tracking-widest">01.</span>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight text-text">
            Sobre mí
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <div
            className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-text/70 leading-relaxed mb-5 text-base">
              Soy <span className="text-accent font-medium">Evis Yulian Tovar Peluffo</span>, 
              tecnólogo en Análisis y Desarrollo de Software del SENA. Durante mis prácticas, 
              desarrollé soluciones reales que combinan tecnología web con impacto práctico.
            </p>
            <p className="text-text/70 leading-relaxed mb-5 text-base">
              Me apasiona construir desde interfaces web fluidas hasta sistemas embebidos con
              microcontroladores. También he explorado <span className="text-blue">Python básico</span> como 
              puerta hacia el backend y la automatización.
            </p>
            <p className="text-text/70 leading-relaxed text-base">
              Creo que el mejor código es aquel que resuelve problemas reales de forma elegante.
              Siempre estoy aprendiendo algo nuevo.
            </p>

            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-3 mt-10">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="border border-border p-4 bg-surface/50 hover:border-accent/40 transition-colors duration-300 group"
                >
                  <p className="font-display text-xs text-muted tracking-widest mb-1 group-hover:text-accent/60 transition-colors">
                    {f.label}
                  </p>
                  <p className="font-display text-sm text-text font-bold">{f.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div
            className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative">
              {/* Terminal card */}
              <div className="card-glass rounded-none p-6 font-display text-sm">
                {/* Terminal top bar */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-3 text-muted text-xs tracking-widest">evis@portfolio ~ %</span>
                </div>

                {/* Code lines */}
                <div className="space-y-2 text-xs leading-relaxed">
                  <p><span className="text-blue">const</span> <span className="text-accent">dev</span> <span className="text-text/50">=</span> {'{'}</p>
                  <p className="pl-6"><span className="text-text/60">nombre:</span> <span className="text-text/90">'Evis Tovar'</span><span className="text-text/40">,</span></p>
                  <p className="pl-6"><span className="text-text/60">skills:</span> <span className="text-text/50">[</span></p>
                  <p className="pl-10"><span className="text-text/80">'React'</span><span className="text-text/40">, </span><span className="text-text/80">'Vite'</span><span className="text-text/40">,</span></p>
                  <p className="pl-10"><span className="text-text/80">'Tailwind'</span><span className="text-text/40">, </span><span className="text-text/80">'ESP32'</span><span className="text-text/40">,</span></p>
                  <p className="pl-10"><span className="text-text/80">'Python'</span><span className="text-text/40">, </span><span className="text-text/80">'IoT'</span></p>
                  <p className="pl-6"><span className="text-text/50">]</span><span className="text-text/40">,</span></p>
                  <p className="pl-6"><span className="text-text/60">disponible:</span> <span className="text-accent">true</span><span className="text-text/40">,</span></p>
                  <p className="pl-6"><span className="text-text/60">ubicacion:</span> <span className="text-text/90">'Colombia 🇨🇴'</span></p>
                  <p>{'}'}</p>
                  <p className="mt-3 text-accent">
                    <span className="text-muted">// </span>Listo para el siguiente desafío<span className="animate-blink">_</span>
                  </p>
                </div>
              </div>

              {/* Decorative corner lines */}
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-accent/40" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-blue/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
