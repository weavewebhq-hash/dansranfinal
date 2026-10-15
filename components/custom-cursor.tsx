"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const target = { x: -100, y: -100 }
    const current = { x: -100, y: -100 }
    let active = false
    let scale = 0
    let frame = 0

    const render = () => {
      const ease = reduceMotion ? 1 : 0.2
      current.x += (target.x - current.x) * ease
      current.y += (target.y - current.y) * ease
      scale += ((active ? 1 : 0) - scale) * (reduceMotion ? 1 : 0.18)
      dot.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(${scale})`
      frame = requestAnimationFrame(render)
    }

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        active = false
        return
      }
      target.x = event.clientX
      target.y = event.clientY
      const element = event.target instanceof Element ? event.target : null
      active = Boolean(element?.closest("[data-cursor]"))
      if (current.x === -100) {
        current.x = target.x
        current.y = target.y
      }
    }

    const handleLeave = () => {
      active = false
    }

    window.addEventListener("pointermove", handleMove, { passive: true })
    document.documentElement.addEventListener("pointerleave", handleLeave)
    frame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", handleMove)
      document.documentElement.removeEventListener("pointerleave", handleLeave)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] size-16 rounded-full bg-white mix-blend-exclusion will-change-transform"
      style={{ transform: "translate3d(-100px, -100px, 0) scale(0)" }}
    />
  )
}
