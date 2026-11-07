import { useEffect, useRef, useState } from 'react'
import DemoReelMonitor from '../components/ui/DemoReelMonitor'

function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [showLightbox, setShowLightbox] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [introLoaded, setIntroLoaded] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  const demoReel = `${import.meta.env.BASE_URL}media/videos/reel/DemoReel_2026_v1.mp4`

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    video.play().catch(() => {
      // Autoplay may be blocked by the browser.
      // The user can still start the video by clicking.
    })

    const timer = window.setTimeout(() => {
      setIntroLoaded(true)
    }, 100)

    return () => window.clearTimeout(timer)
  }, [])

  const handleScreenClick = () => {
    if (showIntro) {
      setShowIntro(false)
      return
    }

    setShowLightbox(true)
  }

  const handleCloseLightbox = () => {
    setShowLightbox(false)
  }

  return (
    <main className="flex flex-col bg-[#dedcc4]">

      {/* ==========================================================
          DEMO REEL MONITOR

          Desktop uses the landscape frame.
          Tablet/mobile uses the purpose-built portrait frame.

          The video, intro overlay, and playing indicator are shared
          between both layouts.
          ========================================================== */}
      <DemoReelMonitor
        videoRef={videoRef}
        demoReel={demoReel}
        showIntro={showIntro}
        introLoaded={introLoaded}
        isPlaying={isPlaying}
        onScreenClick={handleScreenClick}
      />

      {/* ============================================================
          DEMO REEL LIGHTBOX
          ============================================================ */}
      {showLightbox && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#171512]/95
            p-4
            sm:p-6
          "
          onClick={handleCloseLightbox}
        >
          <div
            className="
              relative
              flex
              max-h-[95vh]
              max-w-[95vw]
              items-center
              justify-center
            "
            onClick={(event) => event.stopPropagation()}
          >
            <video
              src={demoReel}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="
                max-h-[90vh]
                max-w-[92vw]
                object-contain
              "
            />

            {/* Close button */}
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="
                absolute
                -right-3
                -top-3
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#dedcc4]
                bg-[#302b27]
                font-rounded
                text-lg
                text-[#dedcc4]
                transition-transform
                hover:scale-105
              "
              aria-label="Close demo reel"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home