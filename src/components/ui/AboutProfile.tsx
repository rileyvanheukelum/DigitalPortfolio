import profileFrame from '../../assets/About Me Profile.svg'

function AboutProfile() {
  return (
    <div className="relative w-full min-w-0 container-type:inline-size">
      {/* Profile information */}
      <div
        className="
          absolute
          inset-[14%]
          z-20
          flex
          flex-col
          justify-center
          font-rounded
          text-[clamp(9px,3.0cqw,35px)]
          font-bold
          uppercase
          leading-[2.0]
          text-[#dedcc4]
          -translate-y-0.75

          min-[1200px]:text-[clamp(7px,1cqw,18px)]
          min-[1500px]:text-[clamp(7px,0.75cqw,18px)]
        "
      >
        <div
          className="
            font-paroxysm
            text-[clamp(13px,4.0cqw,40px)]
            translate-y-1
            -translate-x-2.25

            min-[1200px]:text-[clamp(7px,1cqw,22px)]
            min-[1500px]:text-[clamp(7px,1cqw,22px)]
          "
        >
          Profile:
        </div>

        <div>Name: Riley Van Heukelum</div>
        <div>Incept Date: 09/06/2005</div>
        <div>Stationed: Rochester, NY</div>
        <div>Role: Motion and Web Designer</div>
      </div>

      {/* Physical profile panel */}
      <img
        src={profileFrame}
        alt=""
        aria-hidden="true"
        className="relative z-10 block h-auto w-full select-none"
        draggable="false"
      />
    </div>
  )
}

export default AboutProfile