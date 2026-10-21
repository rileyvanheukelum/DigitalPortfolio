import selfPortraitFrame from '../assets/About Me Self Portrait.svg'
import selfPortraitFrameMobile from '../assets/About Me Self Portrait Mobile.svg'
import selfPortraitPhoto from '../assets/Riley Van Heukelum (Reduced).jpg'

function AboutSelfPortrait() {
  return (
    <div className="relative w-full">
      {/* Portrait photograph */}
      <div
        className="
          absolute
          left-[8%]
          right-[12%]
          top-[5%]
          bottom-[0%]
          z-0
          overflow-hidden

          min-[1200px]:left-[7%]
          min-[1200px]:right-[13%]
          min-[1200px]:top-[15%]
          min-[1200px]:bottom-[12%]
          min-[1200px]:scale-110
        "
      >
        <img
          src={selfPortraitPhoto}
          alt="Riley Van Heukelum"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* MOBILE PHYSICAL FRAME */}
      <img
        src={selfPortraitFrameMobile}
        alt=""
        aria-hidden="true"
        className="
          relative
          z-10
          block
          h-auto
          w-full
          select-none
          min-[1200px]:hidden
        "
        draggable="false"
      />

      {/* DESKTOP PHYSICAL FRAME */}
      <img
        src={selfPortraitFrame}
        alt=""
        aria-hidden="true"
        className="
          relative
          z-10
          hidden
          h-auto
          w-full
          select-none
          min-[1200px]:block
        "
        draggable="false"
      />
    </div>
  )
}

export default AboutSelfPortrait