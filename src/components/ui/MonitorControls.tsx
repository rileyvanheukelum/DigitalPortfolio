
import { useRef, useState } from 'react'

import buttonAsset from '../../assets/Button.svg'
import dialAsset from '../../assets/Dial.svg'
import horizontalSliderAsset from '../../assets/Horizontal Slider.svg'
import horizontalSliderHeadAsset from '../../assets/Horizontal Slider Head.svg'
import verticalSliderAsset from '../../assets/Vertical Slider.svg'
import verticalSliderHeadAsset from '../../assets/Vertical Slider Head.svg'
import longButtonAsset from '../../assets/Long Enter Button.svg'
import screwAsset from '../../assets/Small Screw.svg'
import rockerOff from '../../assets/Gray Rocker Switch Off.svg'
import rockerOn from '../../assets/Gray Rocker Switch On.svg'


interface ControlProps {
  className?: string
  label: string
}

export function MonitorButton({
  className = '',
  label,
}: ControlProps) {
  const [pressed, setPressed] = useState(false)

  return (
    <button
      type="button"
      aria-label={label}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      onBlur={() => setPressed(false)}
      className={`relative block cursor-pointer transition-transform ${
        pressed ? 'translate-y-[2px]' : ''
      } ${className}`}
    >
      <img
        src={buttonAsset}
        alt=""
        draggable={false}
        className="pointer-events-none block h-full w-full select-none"
      />
    </button>
  )
}

export function MonitorLongButton({
  className = '',
  label,
}: ControlProps) {
  const [pressed, setPressed] = useState(false)

  return (
    <button
      type="button"
      aria-label={label}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      onBlur={() => setPressed(false)}
      className={`relative block cursor-pointer transition-transform ${
        pressed ? 'translate-y-[2px]' : ''
      } ${className}`}
    >
      <img
        src={longButtonAsset}
        alt=""
        draggable={false}
        className="pointer-events-none block h-full w-full select-none"
      />
    </button>
  )
}

interface MonitorRockerProps {
  label: string
  className?: string
}

export function MonitorRocker({
  label,
  className = '',
}: MonitorRockerProps) {
  const [isOn, setIsOn] = useState(false)

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isOn}
      onClick={() => setIsOn((previous) => !previous)}
      className={`relative block overflow-hidden ${className}`}
    >
      <img
        src={isOn ? rockerOn : rockerOff}
        alt=""
        draggable={false}
        className="block h-full w-full object-contain"
      />
    </button>
  )
}

interface SliderProps extends ControlProps {
  orientation: 'horizontal' | 'vertical'
}

export function MonitorSlider({
  className = '',
  label,
  orientation,
}: SliderProps) {
  const [value, setValue] = useState(50)
  const trackRef = useRef<HTMLDivElement>(null)

  const isHorizontal = orientation === 'horizontal'

  const updateValue = (clientX: number, clientY: number) => {
    const track = trackRef.current

    if (!track) return

    const rect = track.getBoundingClientRect()

    const nextValue = isHorizontal
      ? ((clientX - rect.left) / rect.width) * 100
      : ((rect.bottom - clientY) / rect.height) * 100

    setValue(Math.max(0, Math.min(100, nextValue)))
  }

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    event.preventDefault()

    event.currentTarget.setPointerCapture(event.pointerId)

    updateValue(event.clientX, event.clientY)
  }

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return

    updateValue(event.clientX, event.clientY)
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    const increment = isHorizontal
      ? event.key === 'ArrowRight'
      : event.key === 'ArrowUp'

    const decrement = isHorizontal
      ? event.key === 'ArrowLeft'
      : event.key === 'ArrowDown'

    if (increment) {
      event.preventDefault()
      setValue((current) => Math.min(100, current + 5))
    }

    if (decrement) {
      event.preventDefault()
      setValue((current) => Math.max(0, current - 5))
    }

    if (event.key === 'Home') {
      setValue(0)
    }

    if (event.key === 'End') {
      setValue(100)
    }
  }

  return (
    <div
      ref={trackRef}
      role="slider"
      tabIndex={0}
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onKeyDown={handleKeyDown}
      className={`relative touch-none select-none cursor-pointer ${
        isHorizontal
          ? 'aspect-[251.16/263.53] w-full'
          : 'aspect-[144.68/291.26] h-full'
      } ${className}`}
    >
      {/* Slider track */}
      <img
        src={
          isHorizontal
            ? horizontalSliderAsset
            : verticalSliderAsset
        }
        alt=""
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      {/* Moving slider head */}
      <img
        src={
          isHorizontal
            ? horizontalSliderHeadAsset
            : verticalSliderHeadAsset
        }
        alt=""
        draggable={false}
        className="pointer-events-none absolute"
        style={
          isHorizontal
            ? {
                left: `${value}%`,
                top: '40%',
                height: '16%',
                width: 'auto',
                transform: 'translate(-50%, -50%)',
              }
            : {
                left: '20%',
                top: `${100 - value}%`,
                height: 'auto',
                width: '38%',
                transform: 'translate(-50%, -50%)',
              }
        }
      />
    </div>
  )
}

export function MonitorDial({
  className = '',
  label,
}: ControlProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative ${className}`}
    >
      <img
        src={dialAsset}
        alt=""
        draggable={false}
        className="pointer-events-none block h-full w-full select-none"
      />
    </div>
  )
}

export function MonitorScrew({
  className = '',
  label,
}: ControlProps) {
  return (
    <img
      src={screwAsset}
      alt={label}
      draggable={false}
      className={`pointer-events-none block h-full w-full select-none ${className}`}
    />
)}