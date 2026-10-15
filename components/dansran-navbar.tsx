"use client"

import { motion } from "framer-motion"
import Link from "next/link"

type DansranNavbarProps = {
  dark?: boolean
  hideCustom?: boolean
  current?: "collection" | "custom" | "contact" | "order-info"
  hideLogo?: boolean
}

export default function DansranNavbar({ dark = false, hideCustom = false, current, hideLogo = false }: DansranNavbarProps) {
  const textClass = dark ? "text-[#f6f4ef]" : "text-[#0E6287]"
  const logoClass = dark ? "brightness-0 invert" : ""

  return (
    <div className={hideLogo ? undefined : "sm:h-10"}>
    <nav aria-label="Main navigation" className={`mx-auto flex items-center gap-3 ${hideLogo ? "sm:justify-end" : "sm:absolute sm:left-10 sm:right-5 sm:top-5 sm:z-40"} ${textClass} max-sm:fixed max-sm:inset-x-3 max-sm:bottom-3 max-sm:z-50 max-sm:gap-2 max-sm:rounded-2xl max-sm:bg-[#f6f4ef]/95 max-sm:p-2 max-sm:shadow-[0_8px_30px_rgba(14,98,135,0.18)] ${dark ? "max-sm:bg-[#172b35]/95" : ""}`}>
      {!hideLogo && <Link href="/" aria-label="Dansran home" className="mr-auto flex items-center max-sm:fixed max-sm:left-1/2 max-sm:top-4 max-sm:z-50 max-sm:-translate-x-1/2">
        <img src="/dansran-logo-blue.svg" alt="Dansran" className={`h-7 w-auto ${logoClass}`} />
      </Link>}
      {current !== "collection" && <motion.a href="/collection" whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 360, damping: 18 }} className="rounded-full border border-[#0E6287] bg-[#0E6287] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#AAE7FF] max-sm:flex-1 max-sm:h-10 max-sm:justify-center max-sm:px-2 max-sm:py-0 max-sm:text-[8px]">Бэлэн коллекц</motion.a>}
      {current !== "custom" && !hideCustom && <motion.a href="/custom" whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 360, damping: 18 }} className="rounded-full border border-[#0E6287] bg-[#0E6287] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#AAE7FF] max-sm:flex-1 max-sm:h-10 max-sm:justify-center max-sm:px-2 max-sm:py-0 max-sm:text-[8px]">Custom</motion.a>}
      {current !== "order-info" && <motion.a href="/order-info" whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 360, damping: 18 }} className="inline-flex items-center justify-center rounded-full border border-[#0E6287] bg-[#0E6287] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#AAE7FF] max-sm:h-10 max-sm:flex-1 max-sm:px-2 max-sm:py-0 max-sm:text-[8px]">Захиалгын нөхцөл</motion.a>}
      {current !== "contact" && <motion.a href="/contact" whileHover={{ y: -4, scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 360, damping: 18 }} className="cssbuttons-io-button max-sm:w-auto max-sm:flex-1 max-sm:h-10 max-sm:justify-center max-sm:px-2 max-sm:py-0 max-sm:text-[8px]">Холбогдох<span className="icon" aria-hidden="true"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="m16.172 11-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" /></svg></span></motion.a>}
    </nav>
    </div>
  )
}
