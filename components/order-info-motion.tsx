"use client"

import { useEffect, useRef } from "react"

export default function OrderInfoMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (preference.matches || !root.current) return

    const animations: Animation[] = []
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const element = entry.target as HTMLElement
        const delay = Number(element.dataset.revealDelay || 0)
        animations.push(element.animate(
          [{ opacity: 0.45, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 650, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
        ))
        observer.unobserve(element)
      }
    }, { threshold: 0.12 })

    root.current.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element))
    const stopMotion = () => {
      if (preference.matches) {
        observer.disconnect()
        animations.forEach((animation) => animation.cancel())
      }
    }
    preference.addEventListener("change", stopMotion)
    return () => {
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
      preference.removeEventListener("change", stopMotion)
    }
  }, [])

  return <div ref={root} className="order-info-motion">{children}</div>
}
