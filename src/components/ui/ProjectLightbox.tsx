
import { useEffect, useState } from 'react'

type ProjectMedia = {
  media: string
  type: 'image' | 'video'
  alt: string
  thumbnail?: string
}

interface Project {
  title: string
  description: string
  media: string
  type: 'image' | 'video'
  alt: string
  thumbnail?: string
  additionalMedia?: ProjectMedia[]
}

interface ProjectLightboxProps {
  project: Project
  projects: Project[]
  onClose: () => void
  onNavigate: (project: Project) => void
}

function ProjectLightbox({
  project,
  projects,
  onClose,
  onNavigate,
}: ProjectLightboxProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  // Keep the primary media first in the collection.
  const mediaItems: ProjectMedia[] = [
    {
      media: project.media,
      type: project.type,
      alt: project.alt,
      thumbnail: project.thumbnail,
    },
    ...(project.additionalMedia ?? []),
  ]

  const currentMedia = mediaItems[currentMediaIndex]

  const currentIndex = projects.findIndex(
    (item) => item.title === project.title
  )

  const previousProject =
    projects[(currentIndex - 1 + projects.length) % projects.length]

  const nextProject =
    projects[(currentIndex + 1) % projects.length]

  // Start at the cover image whenever the visitor opens another project.
  useEffect(() => {
    setCurrentMediaIndex(0)
  }, [project.title])

  const handlePrevious = () => {
    onNavigate(previousProject)
  }

  const handleNext = () => {
    onNavigate(nextProject)
  }

  const handlePreviousMedia = () => {
    setCurrentMediaIndex(
      (index) => (index - 1 + mediaItems.length) % mediaItems.length
    )
  }

  const handleNextMedia = () => {
    setCurrentMediaIndex(
      (index) => (index + 1) % mediaItems.length
    )
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        onNavigate(previousProject)
      }

      if (event.key === 'ArrowRight') {
        onNavigate(nextProject)
      }

      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [previousProject, nextProject, onNavigate, onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#171512]/90 p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Previous project */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          handlePrevious()
        }}
        className="absolute left-2 top-1/2 z-[110] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#dedcc4] bg-[#302b27] font-rounded text-xl text-[#dedcc4] transition-transform hover:scale-105 sm:left-6 sm:h-12 sm:w-12 sm:text-2xl"
        aria-label={`Previous project: ${previousProject.title}`}
      >
        ←
      </button>

      {/* Project content */}
      <div
        className="relative flex max-h-[90dvh] w-full max-w-[1000px] flex-col items-center overflow-y-auto overscroll-contain py-10"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Project title */}
        <h2 className="mb-4 max-w-[75vw] text-center font-rounded text-lg font-bold text-[#dedcc4] sm:text-xl">
          {project.title}
        </h2>

        {/* Main media */}
        <div className="flex min-h-0 w-full items-center justify-center">
          {currentMedia.type === 'image' ? (
            <img
              key={currentMedia.media}
              src={currentMedia.media}
              alt={currentMedia.alt}
              className={`max-w-full object-contain ${
                mediaItems.length > 1
                  ? 'max-h-[45vh] sm:max-h-[55vh]'
                  : 'max-h-[55vh] sm:max-h-[65vh]'
              }`}
            />
          ) : (
            <video
              key={currentMedia.media}
              src={currentMedia.media}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className={`max-w-full ${
                mediaItems.length > 1
                  ? 'max-h-[42vh] sm:max-h-[48vh]'
                  : 'max-h-[55vh] sm:max-h-[65vh]'
              }`}
            />
          )}
        </div>
        
        {/* Media navigation: only shown for multi-item projects */}
        {mediaItems.length > 1 && (
          <div className="mt-4 flex w-full max-w-[700px] flex-col items-center gap-3">
            {/* <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={handlePreviousMedia}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8c8174] bg-[#302b27] text-lg text-[#dedcc4] transition-colors hover:bg-[#51483f]"
                aria-label="Previous image in project"
              >
                ←
              </button>

              <p
                className="min-w-[90px] text-center font-mono text-xs text-[#bdb5a3]"
                aria-live="polite"
              >
                IMAGE {String(currentMediaIndex + 1).padStart(2, '0')}
                {' / '}
                {String(mediaItems.length).padStart(2, '0')}
              </p>

              <button
                type="button"
                onClick={handleNextMedia}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8c8174] bg-[#302b27] text-lg text-[#dedcc4] transition-colors hover:bg-[#51483f]"
                aria-label="Next image in project"
              >
                →
              </button>
            </div> */}

            {/* Clickable media thumbnails */}
            <div
              className="flex max-w-full flex-wrap justify-center gap-2"
              aria-label="Choose project image"
            >
              <button
                type="button"
                onClick={handlePreviousMedia}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8c8174] bg-[#302b27] text-lg text-[#dedcc4] transition-colors hover:bg-[#51483f]"
                aria-label="Previous image in project"
              >
                ←
              </button>

              {mediaItems.map((item, index) => (
                <button
                  key={item.media}
                  type="button"
                  onClick={() => setCurrentMediaIndex(index)}
                  aria-label={`View image ${index + 1}: ${item.alt}`}
                  aria-pressed={currentMediaIndex === index}
                  className={`h-12 w-12 overflow-hidden border-2 transition-opacity sm:h-20 sm:w-20 ${
                    currentMediaIndex === index
                      ? 'border-[#dedcc4] opacity-100'
                      : 'border-[#756a5d] opacity-60 hover:opacity-100'
                  }`}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.thumbnail ?? item.media}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center bg-[#302b27] font-mono text-xs text-[#dedcc4]">
                      VIDEO
                    </span>
                  )}
                </button>
              ))}

              <button
                type="button"
                onClick={handleNextMedia}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8c8174] bg-[#302b27] text-lg text-[#dedcc4] transition-colors hover:bg-[#51483f]"
                aria-label="Next image in project"
              >
                →
              </button>
            </div>
          </div>
        )}

        {/* Project description */}
        <p className="mt-4 max-w-2xl px-4 text-center font-rounded text-sm leading-6 text-[#bdb5a3]">
          {project.description}
        </p>

        {/* Project counter */}
        <p className="mt-3 font-rounded text-xs text-[#8c8174]">
          PROJECT {currentIndex + 1} / {projects.length}
        </p>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#dedcc4] bg-[#302b27] font-rounded text-sm text-[#dedcc4] transition-transform hover:scale-105 sm:right-0 sm:top-0"
          aria-label="Close expanded project"
        >
          ×
        </button>
      </div>

      {/* Next project */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          handleNext()
        }}
        className="absolute right-2 top-1/2 z-[110] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#dedcc4] bg-[#302b27] font-rounded text-xl text-[#dedcc4] transition-transform hover:scale-105 sm:right-6 sm:h-12 sm:w-12 sm:text-2xl"
        aria-label={`Next project: ${nextProject.title}`}
      >
        →
      </button>
    </div>
  )
}

export default ProjectLightbox