import { skills } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'

const categoryColors = {
  frontend: '#00FFB2',
  backend: '#4DA6FF',
  hardware: '#FF6B6B',
  tools: '#FFB347',
}

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  hardware: 'Hardware / IoT',
  tools: 'Herramientas',
}

function SkillBar({ skill, delay }) {
  const { ref, isInView } = useInView()
  const color = categoryColors[skill.category]

  return (
    <div
      ref={ref}
      className="group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
          <span className="font-display text-sm text-text tracking-wider">{skill.name}</span>
        </div>
        <span className="font-display text-xs" style={{ color: `${color}80` }}>
          {skill.level}%
        </span>
      </div>
      <div className="h-px bg-border relative overflow-hidden">
        <div
          className="h-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${color}60, ${color})`,
            transitionDelay: `${delay}ms`,
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, isInView } = useInView()

  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {})

  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* Subtle bg decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-accent text-sm tracking-widest">03.</span>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight text-text">
            Skills
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="font-display text-xs tracking-widest px-2 py-1 border text-xs"
                  style={{
                    color: categoryColors[category],
                    borderColor: `${categoryColors[category]}30`,
                    background: `${categoryColors[category]}08`,
                  }}
                >
                  {categoryLabels[category]}
                </span>
              </div>
              <div className="space-y-5">
                {items.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} delay={i * 100} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Python note */}
        <div className="mt-16 border border-border/50 bg-surface/30 p-6 flex items-start gap-4">
          <span className="text-2xl">🐍</span>
          <div>
            <p className="font-display text-sm text-text tracking-wider mb-1">Python Básico</p>
            <p className="text-text/50 text-sm">
              Fundamentos de programación con Python: estructuras de datos, funciones,
              manejo de archivos y lógica algorítmica. Base sólida para seguir creciendo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
