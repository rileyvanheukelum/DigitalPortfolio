import { NavLink } from 'react-router-dom'

import headerBanner from '../../assets/Header Banner.svg'
import personalLogo from '../../assets/PersonalLogo_001.svg'

import redOn from '../../assets/Red Rocker Switch On.svg'
import redOff from '../../assets/Red Rocker Switch Off.svg'

import yellowOn from '../../assets/Yellow Rocker Switch On.svg'
import yellowOff from '../../assets/Yellow Rocker Switch Off.svg'

import blueOn from '../../assets/Blue Rocker Switch On.svg'
import blueOff from '../../assets/Blue Rocker Switch Off.svg'

import greenOn from '../../assets/Green Rocker Switch On.svg'
import greenOff from '../../assets/Green Rocker Switch Off.svg'

import grayOn from '../../assets/Gray Rocker Switch On.svg'
import grayOff from '../../assets/Gray Rocker Switch Off.svg'

import RockerSwitch from '../ui/RockerSwitch'

const navigation = [
  {
    label: 'REEL',
    path: '/',
    onImage: redOn,
    offImage: redOff,
    indicatorColor: '#e74718',
  },
  {
    label: 'PORTFOLIO',
    path: '/portfolio',
    onImage: yellowOn,
    offImage: yellowOff,
    indicatorColor: '#f4b51c',
  },
    {
    label: 'WEB DEV',
    path: '/webdev',
    onImage: blueOn,
    offImage: blueOff,
    indicatorColor: '#3285c5',
  },
  {
    label: 'ABOUT',
    path: '/about',
    onImage: greenOn,
    offImage: greenOff,
    indicatorColor: '#238c7e',
  },
  {
    label: 'CONTACT',
    path: '/contact',
    onImage: grayOn,
    offImage: grayOff,
    indicatorColor: '#bac4c4',
  },
]

function Header() {
  return (
    <header
      className="
        relative
        z-50
        min-h-[160px]
        w-full
        overflow-hidden
        bg-[#302b27]

        min-[450px]:min-h-[180px]
        min-[655px]:min-h-[180px]
        min-[800px]:min-h-[180px]
        min-[1920px]:aspect-[1920.06/180.64]
      "
    >
      {/* Header banner artwork */}
      <img
        src={headerBanner}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="
          absolute
          inset-0
          block
          h-full
          w-full
          select-none
          object-cover"
      />

      {/* Responsive design canvas */}
      <div
        className="
          absolute
          inset-0
          w-full
          [container-type:inline-size]
        "
      >
        {/* Personal logo and name */}
        <NavLink
          to="/"
          end
          aria-label="Riley Van Heukelum - Home"
          className="
            absolute
            left-[5%]
            top-[12%]
            z-10
            flex
            items-center
            gap-[clamp(8px,2cqw,18px)]

            max-[654px]:top-[10%]

            min-[655px]:top-1/2
            min-[655px]:-translate-y-1/2

            min-[800px]:left-[3.5%]
            min-[800px]:top-auto
            min-[800px]:bottom-[30%]
            min-[800px]:translate-y-0
          "
        >
          <img
            src={personalLogo}
            alt=""
            aria-hidden="true"
            draggable="false"
            className="
              block
              h-auto
              w-[clamp(34px,12cqw,160px)]
              shrink-0
              object-contain
              min-[2000px]:w-[clamp(34px,13cqw,220px)]
            "
          />

          <div className="flex flex-col">
            <span
              className="
                whitespace-nowrap
                font-paroxysm
                text-[clamp(20px,5.5cqw,42px)]
                leading-[0.9]
                tracking-[-0.04em]
                text-[#dedcc4]

                min-[1000px]:text-[clamp(20px,2.5cqw,48px)]
              "
            >
              Riley
            </span>

            <span
              className="
                whitespace-nowrap
                font-paroxysm
                text-[clamp(20px,5.5cqw,42px)]
                leading-[0.9]
                tracking-[-0.04em]
                text-[#dedcc4]

                min-[1000px]:text-[clamp(20px,2.5cqw,48px)]
              "
            >
              Van Heukelum
            </span>
          </div>
        </NavLink>

        {/* Navigation enclosure */}
        <div
          className="
            absolute
            bottom-[7%]
            left-[5%]
            right-[5%]
            z-20

            rounded-[clamp(5px,1.5cqw,11px)]
            border
            border-[#d8d5bd]
            bg-[#dedcc4]
            px-[clamp(8px,2.5cqw,30px)]
            py-[clamp(7px,1.5cqw,15px)]
            shadow-[0_2px_5px_rgba(0,0,0,0.35)]

            min-[655px]:bottom-auto
            min-[655px]:left-auto
            min-[655px]:right-[5%]
            min-[655px]:top-1/2
            min-[655px]:-translate-y-1/2
            min-[655px]:w-auto

            min-[1000px]:right-[3.5%]
            min-[1000px]:top-[55%]
            min-[1000px]:rounded-[clamp(5px,0.57cqw,11px)]
            min-[1000px]:px-[clamp(10px,1.56cqw,30px)]
            min-[1000px]:py-[clamp(6px,0.78cqw,15px)]
          "
        >
          <nav
            className="
              flex
              items-end
              justify-center
              gap-[clamp(5px,1.5cqw,12px)]

              min-[655px]:justify-start
              min-[655px]:gap-[clamp(5px,0.8cqw,10px)]

              min-[1000px]:gap-[clamp(4px,0.22cqw,10px)]
            "
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <RockerSwitch
                key={item.path}
                label={item.label}
                path={item.path}
                onImage={item.onImage}
                offImage={item.offImage}
                indicatorColor={item.indicatorColor}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header