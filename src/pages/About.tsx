import leftSidebar from '../assets/About Me Left Sidebar.svg'
import rightSidebar from '../assets/About Me Right Sidebar.svg'

import AboutSelfPortrait from '../components/ui/AboutSelfPortrait'
import AboutProfile from '../components/ui/AboutProfile'
import AboutCRT from '../components/ui/AboutCRT'

function About() {
  return (
    <main className="bg-[#dedcc4]">
      <section className="w-full">
        {/* MOBILE / TABLET LAYOUT */}
        <div className="grid w-full grid-cols-1 gap-4 min-[1200px]:hidden">
          <div className="min-w-0">
            <div className="grid grid-cols-1 gap-4 p-3 sm:p-4">
              <AboutCRT />
              <AboutSelfPortrait />
              <AboutProfile />
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="relative hidden w-full min-[1200px]:block">
          {/* CENTER CONTENT — determines the section's natural height */}
          <div
            className="
              relative
              z-10
              mx-0
              grid
              min-w-0
              grid-cols-[424.6fr_896.47fr]
              items-start
              gap-[1.5%]
              self-start
              bg-[#dedcc4]
              p-[1.2%]
              min-[1500px]:ml-[12.1%]
              min-[1500px]:mr-[12.1%]
            "
          >
            {/* PORTRAIT + PROFILE */}
            <div className="grid min-w-0 grid-cols-1 content-start gap-[3%]">
              <AboutSelfPortrait />
              <AboutProfile />
            </div>

            {/* CRT */}
            <div className="min-w-0">
              <AboutCRT />
            </div>
          </div>

          {/* LEFT SIDEBAR — does not affect section height */}
          <div className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full min-[1500px]:block">
            <img
              src={leftSidebar}
              alt=""
              aria-hidden="true"
              draggable="false"
              className="block h-full w-auto max-w-none select-none"
            />
          </div>

          {/* RIGHT SIDEBAR — does not affect section height */}
          <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-full min-[1500px]:block">
            <img
              src={rightSidebar}
              alt=""
              aria-hidden="true"
              draggable="false"
              className="block h-full w-auto max-w-none select-none"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default About