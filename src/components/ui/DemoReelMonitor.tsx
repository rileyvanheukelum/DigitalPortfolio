import type { RefObject } from 'react'

import {
  MonitorButton,
  MonitorRocker,
  MonitorSlider,
  MonitorDial,
} from './MonitorControls'

interface DemoReelMonitorProps {
  videoRef: RefObject<HTMLVideoElement | null>
  demoReel: string
  showIntro: boolean
  introLoaded: boolean
  isPlaying: boolean
  onScreenClick: () => void
}

function DemoReelMonitor({
  videoRef,
  demoReel,
  showIntro,
  introLoaded,
  isPlaying,
  onScreenClick,
}: DemoReelMonitorProps) {
  return (
    <section
      className="
        flex
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#dedcc4]
        px-3
        py-1
        sm:px-5
        sm:py-2
        lg:px-6
        lg:py-4
      "
    >
      {/* ============================================================
          DESKTOP MONITOR
          ============================================================ */}

      <div
        className="
          relative
          hidden
          w-[min(97vw,calc((100svh-280px)*2.24))]
          shrink-0
          lg:block
        "
        style={{ aspectRatio: '937.44 / 434.26' }}
      >
        {/* ==========================================================
            OUTER FRAME
            ========================================================== */}

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-[clamp(10px,1.5cqw,15px)]
            bg-[#51483f]
          "
        >
          {/* ========================================================
              INNER FRAME TRIM
              ======================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-[1.1%]
              z-40
              rounded-[clamp(8px,1.2cqw,12px)]
            "
          />

          {/* ========================================================
              LEFT CONTROL PANEL
              ======================================================== */}

          <div
            className="
              absolute
              left-[2.2%]
              top-[6%]
              z-20
              flex
              h-[89%]
              w-[10%]
              flex-col
              items-center
              justify-between
            "
          >
            {/* UPPER DIAL */}

            <MonitorDial
              label="Upper monitor dial"
              className="aspect-square w-[90%] shrink-0"
            />

            {/* LOWER DIAL */}

            <MonitorDial
              label="Lower monitor dial"
              className="aspect-square w-[90%] shrink-0"
            />

            {/* ROCKER SWITCHES */}

            <div
              className="
                grid
                w-full
                grid-cols-2
                gap-x-[8%]
                gap-y-[8%]
              "
            >
              <MonitorRocker
                label="Upper left rocker"
                className="aspect-auto w-auto"
              />

              <MonitorRocker
                label="Upper right rocker"
                className="aspect-auto w-auto"
              />

              <MonitorRocker
                label="Lower left rocker"
                className="aspect-auto w-auto"
              />

              <MonitorRocker
                label="Lower right rocker"
                className="aspect-auto w-auto"
              />
            </div>
          </div>

          {/* ========================================================
              RIGHT CONTROL PANEL
              ======================================================== */}

          <div
            className="
              absolute
              right-[2.2%]
              top-[6%]
              z-20
              flex
              h-[89%]
              w-[10%]
              flex-col
              items-center
              justify-between
            "
          >
            {/* VERTICAL SLIDER */}

            <div
              className="
                flex
                h-[60%]
                w-full
                shrink-0
                items-center
                justify-center
              "
            >
              <MonitorSlider
                label="Vertical monitor slider"
                orientation="vertical"
                className="h-full w-full max-w-full"
              />
            </div>

            {/* RIGHT PANEL BUTTONS */}

            <div
              className="
                grid
                w-full
                grid-cols-2
                gap-x-[1%]
                gap-y-[0%]
              "
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <MonitorButton
                  key={index}
                  label={`Right panel button ${index + 1}`}
                  className="aspect-square w-full"
                />
              ))}
            </div>
          </div>

          {/* ========================================================
              MAIN SCREEN
              ======================================================== */}

          <div
            className="
              absolute
              left-[13.2%]
              top-[5.25%]
              z-10
              flex
              aspect-video
              w-[73.8%]
              items-center
              justify-center
              overflow-hidden
              rounded-[clamp(15px,2.0cqw,25px)]
              border-[5px]
              border-[#332d27]
              bg-[#241b18]
              [container-type:inline-size]
            "
          >
            {/* VIDEO */}

            <video
              ref={videoRef}
              src={demoReel}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              onClick={onScreenClick}
              className="
                absolute
                inset-0
                block
                h-full
                w-full
                cursor-pointer
                object-cover
              "
              aria-label="Riley Van Heukelum demo reel"
            />

            {/* INTRO OVERLAY */}

            <button
              type="button"
              onClick={onScreenClick}
              aria-label="Enter demo reel"
              className={`
                absolute
                inset-0
                z-20
                flex
                cursor-pointer
                flex-col
                items-center
                justify-center
                bg-[#171512]/55
                px-4
                text-center
                transition-opacity
                duration-700
                ${
                  showIntro
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
                }
              `}
            >
              {/* NAME */}

              <span
                className={`
                  font-paroxysm
                  text-[clamp(28px,5cqw,82px)]
                  leading-[0.9]
                  tracking-[-0.04em]
                  text-[#dedcc4]
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)]
                  transition-all
                  duration-1000
                  ease-out
                  ${
                    introLoaded
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  }
                `}
              >
                Riley Van Heukelum
              </span>

              {/* SUBTITLE */}

              <span
                className={`
                  mt-[clamp(6px,1cqw,16px)]
                  font-rounded
                  text-[clamp(11px,1.7cqw,28px)]
                  font-bold
                  tracking-[0.08em]
                  text-[#dedcc4]
                  drop-shadow-[0_2px_3px_rgba(0,0,0,0.75)]
                  transition-all
                  duration-1000
                  delay-150
                  ease-out
                  ${
                    introLoaded
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  }
                `}
              >
                Motion and Web Designer
              </span>
            </button>

            {/* PLAYING INDICATOR */}

            {!isPlaying && !showIntro && (
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  flex
                  items-center
                  justify-center
                "
              />
            )}
          </div>
        </div>
      </div>

      {/* ============================================================
          MOBILE MONITOR
          ============================================================ */}

      <div
        className="
          relative
          block
          w-[min(96vw,calc((100svh-120px)*0.5774))]
          shrink-0
          lg:hidden
        "
        style={{ aspectRatio: '434.26 / 752.07' }}
      >
        {/* ==========================================================
            OUTER FRAME
            ========================================================== */}

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-[clamp(12px,3cqw,18px)]
            bg-[#51483f]
          "
        >
          {/* ========================================================
              INNER FRAME TRIM
              ======================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-[1.2%]
              z-40
              rounded-[clamp(8px,2cqw,12px)]
            "
          />

          {/* ========================================================
              TOP CONTROL PANEL
              ======================================================== */}

          <div
            className="
              absolute
              left-[5.5%]
              top-[3.5%]
              z-20
              flex
              h-[10.5%]
              w-[89%]
              items-center
              justify-between
            "
          >
            {/* UPPER ROCKER SWITCHES */}

            <div
              className="
                flex
                h-full
                w-[50%]
                items-center
                justify-between
                gap-y-[8%]
              "
            >
              <MonitorRocker
                label="Mobile lower rocker 1"
                className="aspect-[1/2] w-[22%]"
              />

              <MonitorRocker
                label="Mobile lower rocker 2"
                className="aspect-[1/2] w-[22%]"
              />

              <MonitorRocker
                label="Mobile lower rocker 2"
                className="aspect-[1/2] w-[22%]"
              />

              <MonitorRocker
                label="Mobile lower rocker 2"
                className="aspect-[1/2] w-[22%]"
              />
            </div>


            {/* TOP DIALS */}

            <div
              className="
                flex
                h-full
                w-[49%]
                items-center
                justify-between
              "
            >
              <MonitorDial
                label="Mobile upper dial 1"
                className="aspect-square w-[50%] shrink-0"
              />

              <MonitorDial
                label="Mobile upper dial 2"
                className="aspect-square w-[50%] shrink-0"
              />
            </div>
          </div>

          {/* ========================================================
              MOBILE SCREEN
              ======================================================== */}

          <div
            className="
              absolute
              left-[5.5%]
              top-[16.4%]
              z-10
              flex
              h-[67.4%]
              w-[89%]
              items-center
              justify-center
              overflow-hidden
              rounded-[clamp(8px,2cqw,12px)]
              border-[3px]
              border-[#332d27]
              bg-[#241b18]
            "
          >
            {/* VIDEO */}

            <video
              ref={videoRef}
              src={demoReel}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              onClick={onScreenClick}
              className="
                absolute
                left-0
                top-1/2
                block
                aspect-video
                w-full
                -translate-y-1/2
                cursor-pointer
                object-cover
              "
              aria-label="Riley Van Heukelum demo reel"
            />

            {/* INTRO OVERLAY */}

            <button
              type="button"
              onClick={onScreenClick}
              aria-label="Enter demo reel"
              className={`
                absolute
                left-0
                top-1/2
                z-20
                flex
                aspect-video
                w-full
                -translate-y-1/2
                cursor-pointer
                flex-col
                items-center
                justify-center
                bg-[#171512]/55
                px-3
                text-center
                transition-opacity
                duration-700
                ${
                  showIntro
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
                }
              `}
            >
              {/* NAME */}

              <span
                className={`
                  font-paroxysm
                  text-[clamp(18px,5cqw,42px)]
                  leading-[0.9]
                  tracking-[-0.04em]
                  text-[#dedcc4]
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)]
                  transition-all
                  duration-1000
                  ${
                    introLoaded
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  }
                `}
              >
                Riley Van Heukelum
              </span>

              {/* SUBTITLE */}

              <span
                className={`
                  mt-[clamp(4px,1cqw,8px)]
                  font-rounded
                  text-[clamp(9px,1.7cqw,16px)]
                  font-bold
                  tracking-[0.08em]
                  text-[#dedcc4]
                  drop-shadow-[0_2px_3px_rgba(0,0,0,0.75)]
                  transition-all
                  duration-1000
                  delay-150
                  ${
                    introLoaded
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-6 opacity-0'
                  }
                `}
              >
                Motion and Web Designer
              </span>
            </button>
          </div>

          {/* ========================================================
              BOTTOM CONTROL PANEL
              ======================================================== */}

          <div
            className="
              absolute
              bottom-[3.5%]
              left-[5.5%]
              z-20
              flex
              h-[10.5%]
              w-[89%]
              items-center
              justify-between
            "
          >
            {/* BOTTOM BUTTONS */}

            <div
              className="
                grid
                w-[35%]
                grid-cols-3
                gap-x-[1%]
                gap-y-[0%]
              "
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <MonitorButton
                  key={index}
                  label={`Right panel button ${index + 1}`}
                  className="aspect-square w-full"
                />
              ))}
            </div>
            
            {/* HORIZONTAL SLIDER */}

            <div
              className="
                flex
                h-full
                w-[62%]
                items-center
                justify-center
              "
            >
              <MonitorSlider
                label="Mobile horizontal slider"
                orientation="horizontal"
                className="w-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoReelMonitor