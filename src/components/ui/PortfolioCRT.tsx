
import { useEffect, useRef, useState } from 'react'

import portfolioFrame from '../../assets/Portfolio Frame.svg'
import portfolioFrameBack from '../../assets/Portfolio Frame Back.svg'

interface PortfolioCRTProps {
  title: string
  description: string
  media: string
  preview?: string
  type: 'image' | 'video'
  alt?: string
  thumbnail?: string
  blurBackground?: boolean
  onOpen: () => void
}

const bootAnimationSrc =
  `${import.meta.env.BASE_URL}media/videos/${encodeURIComponent('CRT Boot Up.mp4')}`

function PortfolioCRT({
  title,
  description,
  media,
  preview,
  type,
  alt = '',
  thumbnail,
  blurBackground = false,
  onOpen,
}: PortfolioCRTProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isBooting, setIsBooting] = useState(false)
  const [hasBooted, setHasBooted] = useState(false)
  const [isRevealing, setIsRevealing] = useState(false)
  const revealStartedRef = useRef(false)

  const cardRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const backgroundVideoRef = useRef<HTMLVideoElement>(null)
  const bootVideoRef = useRef<HTMLVideoElement>(null)

  // Trigger the boot animation once when this CRT enters the viewport.
  useEffect(() => {
    const card = cardRef.current

    if (!card || hasBooted) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHasBooted(true)
      return
    }

    let timeoutId: number | undefined

    const startBoot = () => {
      // Random delay from 0 to 450 milliseconds.
      const delay = Math.random() * 450

      timeoutId = window.setTimeout(() => {
        setIsBooting(true)
      }, delay)
    }

    if (!('IntersectionObserver' in window)) {
      startBoot()
      return () => {
        if (timeoutId !== undefined) window.clearTimeout(timeoutId)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect()
          startBoot()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(card)

    return () => {
      observer.disconnect()
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [hasBooted])

  // Start playback once the animation overlay has mounted.
  useEffect(() => {
    if (!isBooting) return

    const animation = bootVideoRef.current

    if (!animation) {
      setIsBooting(false)
      setHasBooted(true)
      return
    }

    revealStartedRef.current = false
    setIsRevealing(false)

    animation.currentTime = 0

    void animation.play().catch((error) => {
      console.warn('Could not play CRT boot animation:', error)
      setIsBooting(false)
      setHasBooted(true)
    })

    return () => {
      animation.pause()
    }
  }, [isBooting])

  const finishBootAnimation = () => {
    revealStartedRef.current = true
    setIsRevealing(true)
    setIsBooting(false)
    setHasBooted(true)
  }

  const handleMouseEnter = () => {
    if (type !== 'video') return

    const video = videoRef.current
    const backgroundVideo = backgroundVideoRef.current

    if (video) {
      video.currentTime = 0
      void video.play().catch((error) => {
        console.error(`Could not play preview for "${title}"`, error)
      })
    }

    if (blurBackground && backgroundVideo) {
      backgroundVideo.currentTime = 0
      void backgroundVideo.play().catch(() => {
        // The foreground preview can still play if this fails.
      })
    }
  }

  const handleMouseLeave = () => {
    if (type !== 'video') return

    const video = videoRef.current
    const backgroundVideo = backgroundVideoRef.current

    if (video) {
      video.pause()
      video.currentTime = 0
    }

    if (backgroundVideo) {
      backgroundVideo.pause()
      backgroundVideo.currentTime = 0
    }

    setIsPlaying(false)
  }

  const handleBootTimeUpdate = () => {
    const animation = bootVideoRef.current

    if (!animation || revealStartedRef.current) return

    // Start revealing 200ms before the animation's end.
    if (
      Number.isFinite(animation.duration) &&
      animation.duration > 0 &&
      animation.currentTime >= animation.duration - 0.3
    ) {
      revealStartedRef.current = true
      setIsRevealing(true)
    }
  }

  return (
    <article ref={cardRef} className="group w-full min-w-0">
      <button
        type="button"
        onClick={onOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="
          relative block w-full
          aspect-[361.78/328.47]
          cursor-zoom-in text-left
          [container-type:inline-size]
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#302b27]
        "
        aria-label={`View ${title} project`}
      >
        {/* Back panel */}
        <img
          src={portfolioFrameBack}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-0
            block h-full w-full select-none
          "
          draggable="false"
        />

        {/* CRT screen opening */}
        <div
          className="absolute z-10 overflow-hidden"
          style={{
            left: '3.5%',
            top: '3.0%',
            width: '93%',
            height: '56.5%',
            scale: '1.04',
          }}
        >
          <div className="relative h-full w-full overflow-hidden bg-[#241b18]">

            {/* Optional blurred background */}
            {hasBooted && !isBooting && blurBackground && thumbnail && (
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0 z-0
                  overflow-hidden
                "
              >
                <img
                  src={thumbnail}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="
                    absolute inset-0 h-full w-full
                    scale-125 object-cover object-center
                    blur-sm opacity-90
                  "
                />
              </div>
            )}

            {/* Sharp project media */}
            {type === 'image' ? (
              <img
                src={media}
                alt={alt}
                loading="lazy"
                decoding="async"
                className={`
                  absolute inset-0 z-10
                  block h-full w-full object-contain
                  transition-opacity duration-500
                  ${(hasBooted && !isBooting) || isRevealing
                    ? 'opacity-100'
                    : 'opacity-0'}
                `}
              />
            ) : (
              <>
                <div className="
                  absolute inset-0 z-10
                  flex items-center justify-center
                ">
                  <video
                    ref={videoRef}
                    src={preview ?? media}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onPlaying={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setIsPlaying(false)}
                    className={`
                      block max-h-full max-w-full
                      aspect-auto object-contain
                      transition-opacity duration-500
                      ${((!hasBooted || isBooting) && !isRevealing) || isPlaying
                        ? 'opacity-0'
                        : 'opacity-100'}
                    `}
                  />

                  {/* Blurred video layer for selected projects */}
                  {blurBackground && (
                    <video
                      ref={backgroundVideoRef}
                      src={preview ?? media}
                      muted
                      loop
                      playsInline
                      preload="none"
                      aria-hidden="true"
                      className={`
                        pointer-events-none absolute inset-0 z-20
                        h-full w-full object-contain
                        transition-opacity duration-500
                        ${((!hasBooted || isBooting) && !isRevealing) || isPlaying
                          ? 'opacity-0'
                          : 'opacity-100'}
                      `}
                    />
                  )}
                </div>

                {/* Thumbnail remains visible until the preview plays */}
                {thumbnail && (
                  <img
                    src={thumbnail}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className={`
                      pointer-events-none absolute inset-0 z-20
                      h-full w-full object-contain
                      transition-opacity duration-500
                      ${((!hasBooted || isBooting) && !isRevealing) || isPlaying
                        ? 'opacity-0'
                        : 'opacity-100'}
                    `}
                  />
                )}
              </>
            )}

            {/* Scanlines */}
            <div
              className="pointer-events-none absolute inset-0 z-30"
              aria-hidden="true"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.10) 4px)',
              }}
            />

            {/* CRT boot-up animation */}
            {isBooting && (
              <video
                ref={bootVideoRef}
                src={bootAnimationSrc}
                muted
                playsInline
                preload="auto"
                onTimeUpdate={handleBootTimeUpdate}
                onEnded={finishBootAnimation}
                onError={finishBootAnimation}
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0 z-40
                  h-full w-full object-cover
                  mix-blend-screen
                "
              />
            )}
          </div>
        </div>

        {/* Lower panel: project title and description */}
        <div
          className="
            absolute z-10 flex flex-col overflow-hidden
          "
          style={{
            left: '10.5%',
            top: '67.5%',
            width: '79%',
            height: '25%',
          }}
        >
          <h3
            className="
              mb-[1.5cqw] shrink-0 truncate
              font-paroxysm
              text-[clamp(8px,3.5cqw,20px)]
              leading-tight tracking-wide
              text-[#dedcc4]
            "
          >
            {title}
          </h3>

          <p
            className="
              min-h-0 overflow-hidden
              font-rounded font-bold
              text-[clamp(7px,2.75cqw,15px)]
              leading-[1.2] text-[#dedcc4]
            "
          >
            {description}
          </p>
        </div>

        {/* Front frame */}
        <img
          src={portfolioFrame}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-30
            block h-full w-full select-none
          "
          draggable="false"
        />
      </button>
    </article>
  )
}

export default PortfolioCRT
