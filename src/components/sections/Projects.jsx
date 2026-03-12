import { useState } from "react"
import { projects } from '../../data/portfolio'
import GalleryModal from "../ui/GalleryModal"
import ProjectCard from "../ui/ProjectCard"


export default function Projects() {

  const [images, setImages] = useState([])
  const [[currentIndex, direction], setPage] = useState([0,0])

  const isGalleryopen = images.length > 0

  const openGallery = (imgs) => {
    setImages(imgs)
    setPage([0,0])
  }

  const closeGallery = () => {
    setImages([])
  }

  const paginate = (newDirection) => {
    setPage([
      (currentIndex + newDirection + images.length) % images.length,
      newDirection
    ])
  }

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-display text-accent text-sm tracking-widest">02.</span>
          <h2 className="font-display text-2xl md:text-3xl tracking-tight text-text">
            Proyectos
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} openGallery={openGallery} />
          ))}
        </div>

        <GalleryModal
        images={images}
        currentIndex={currentIndex}
        direction={direction}
        paginate={paginate}
        close={closeGallery}
        isOpen={isGalleryopen}
        />

        {/* Note */}
        <p className="mt-8 text-center font-display text-xs text-muted tracking-widest">
          Proyectos desarrollados durante las prácticas profesionales · Tecnoparque SENA
        </p>
      </div>
    </section>
  )
}
