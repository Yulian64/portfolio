import { personal } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xs text-muted tracking-widest">
          © {new Date().getFullYear()} {personal.shortName}
        </span>
        <span className="font-display text-xs text-muted tracking-widest">
          Hecho con React + Vite + Tailwind
        </span>
        <div className="flex items-center gap-1 font-display text-xs text-muted tracking-widest">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
          <span>Disponible para proyectos</span>
        </div>
      </div>
    </footer>
  )
}
