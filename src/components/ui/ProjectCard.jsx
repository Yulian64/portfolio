import { useInView } from '../../hooks/useInView'

function ProjectCard({ project, index, openGallery }) {
const { ref, isInView } = useInView()

return (
    <div
        ref={ref}
        className={`group relative border border-border bg-surface/40 hover:border-[${project.color}]/50 transition-all duration-500 overflow-hidden ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        style={{
        transitionDelay: `${index * 150}ms`,
        }}
    >
      {/* Top accent line */}
    <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
    />

      {/* Glow bg on hover */}
    <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${project.color}08, transparent 60%)` }}
    />

    <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
        <div>
            <span
                className="font-display text-xs tracking-widest mb-2 block"
                style={{ color: `${project.color}80` }}
            >
            {project.category}
            </span>
            <h3
                className="font-display text-xl font-bold text-text group-hover:transition-colors duration-300"
                style={{ color: isInView ? undefined : undefined }}
            >
            {project.title}
            </h3>
        </div>
            <span className="text-3xl animate-float">{project.icon}</span>
        </div>

        {/* Description */}
        <p className="text-text/60 leading-relaxed mb-6 text-sm">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-8">
        {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-3 text-xs text-text/50">
            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: project.color }} />
            {h}
            </li>
        ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
                <span
                key={tag}
                className="font-display text-xs px-3 py-1 border tracking-wider"
                style={{ borderColor: `${project.color}30`, color: `${project.color}80` }}
            >
            {tag}
            </span>
            ))}
        </div>

        {/* Bottons */}
        <div className="relative mt-6 flex gap-4">
            {project.buttons.map((button) => {

            if (button.type === 'gallery') {
                return (
                    <button
                    key={button.label}
                    onClick={() => {
                    openGallery(project.images)
                    }}
                    className="inline-block p-1.5 border border-border rounded-sm text-center font-display text-xs tracking-wider cursor-pointer transition-transform hover:scale-105 duration-300"
                    style={{ color: `${project.color}80`, borderColor: `${project.color}30`, background: `${project.color}10` }}
                    >
                    {button.label}
                    </button>
                )
            }
            return (
            <a
            target='-blank' rel='noopener noreferrer'
            key={button.label}
            href={button.link}
            className="inline-block p-1.5 border border-border rounded-sm text-center font-display text-xs tracking-wider cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ color: `${project.color}80`, borderColor: `${project.color}30`, background: `${project.color}10` }}
            >
            {button.label}
            </a>
            )
        })}
        </div>
    </div>
</div>
)}

export default ProjectCard