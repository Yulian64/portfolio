import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useEffect } from 'react'

const variants = {
enter: (direction) => ({
    x: direction > 0 ? 600 : -600,
    opacity: 0
}),
center: {
    x: 0,
    opacity: 1
},
exit: (direction) => ({
x: direction > 0 ? -600 : 600,
    opacity: 0
})
}

export default function GalleryModal({
images,
currentIndex,
direction,
paginate,
close,
isOpen
}) {

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

if (!images.length) return null

return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">

    <button
        onClick={close}
        className="absolute top-6 right-6 text-white cursor-pointer hover:scale-115 transition-all duration-300"
    >
        <X size={28} />
    </button>

    <button
        onClick={() => paginate(-1)}
        className="absolute z-50 left-6 text-white bg-black/20 rounded-full cursor-pointer hover:scale-115 transition-all duration-300"
    >
        <ChevronLeft size={40} />
    </button>

    <AnimatePresence initial={false} custom={direction}><motion.img
        key={currentIndex}
        src={images[currentIndex]}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.8 }}
        className="max-w-[90%] max-h-[60%] rounded-lg shadow-xl absolute"
        />
    </AnimatePresence>

    <button
        onClick={() => paginate(1)}
        className="absolute right-6 text-white bg-black/20 rounded-full cursor-pointer hover:scale-115 transition-all duration-300"
    >
        <ChevronRight size={40} />
    </button>

    </div>
)
}