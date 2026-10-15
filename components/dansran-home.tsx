"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import DansranNavbar from "@/components/dansran-navbar"

const plateImage = "/dansran-plate.png"

const collectionProducts = [
  { name: "Хөлтэй таваг", code: "CEJ101", price: "98,000 ₮", size: "14 см диаметр · 12 см өндөр", image: "https://www.dansran.mn/cdn/shop/files/DSC_2882_540x.jpg?v=1772690086", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej101" },
  { name: "3-тай гэр таваг", code: "CEJ102", price: "158,000 ₮", size: "22 см диаметр · 10 см өндөр", image: "https://www.dansran.mn/cdn/shop/files/137331a666647a0a065a20ffd061a5fc_540x.webp?v=1772524646", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej102" },
  { name: "Платтер сэт", code: "CEJ106", price: "218,000 ₮", size: "Керамик platter set", image: "https://www.dansran.mn/cdn/shop/files/DSC_2897_540x.jpg?v=1771297495", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej106" },
  { name: "Зууван таваг", code: "CEJ104", price: "168,000 ₮", size: "Керамик oval plate", image: "https://www.dansran.mn/cdn/shop/files/DSC_28752_540x.jpg?v=1771296912", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej104" },
  { name: "Салфетка суурь", code: "CEJ107", price: "68,000 ₮", size: "14 × 4.8 × 8 см", image: "https://www.dansran.mn/cdn/shop/files/DSC_2907_540x.jpg?v=1771298072", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej107" },
  { name: "Эргэдэг таваг", code: "CEJ103", price: "168,000 ₮", size: "26 см диаметр · 17 см өндөр", image: "https://www.dansran.mn/cdn/shop/files/cakestand5_540x.jpg?v=1771297018", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej103" },
  { name: "3-тай модон суурьтай сэт", code: "CEJ105", price: "98,000 ₮", size: "Керамик + хулс мод", image: "https://www.dansran.mn/cdn/shop/files/DSC_2891_540x.jpg?v=1771297711", href: "https://www.dansran.mn/collections/jargaltaindelger/products/cej105" },
]

type CharacterProps = {
  char: string
  index: number
  centerIndex: number
  progress: any
}

function AnimatedCharacter({ char, index, centerIndex, progress }: CharacterProps) {
  const distance = index - centerIndex
  const x = useTransform(progress, [0, 0.5], [distance * 2, 0])
  const rotateX = useTransform(progress, [0, 0.5], [0, 0])
  const scale = useTransform(progress, [0, 0.5], [0.98, 1])

  return (
    <motion.span className={char === " " ? "inline-block w-4" : "inline-block"} style={{ x, rotateX, scale }}>
      {char}
    </motion.span>
  )
}

export function DansranHome() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end end"] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 540])
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [0.92, 1, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.72, 1], [12, 0, 0, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.18, 0.55, 0.82, 1], [0, 1, 1, 0.16, 0])
  const title = "Жаргалтайн дэлгэр"
  const titleCharacters = title.split("")
  const titleCenter = Math.floor(titleCharacters.length / 2)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f4ef] text-[#0E6287] selection:bg-[#0E6287] selection:text-[#AAE7FF]">
      <section id="top" ref={heroRef} className="relative h-[125vh]">
        <div className="sticky top-0 flex h-screen min-h-[660px] flex-col items-center justify-center overflow-hidden px-5">
          <motion.img data-cursor src={plateImage} alt="Hand-painted ceramic oval plate with a central opening, horses, clouds and a mountain" style={{ rotate, scale, y }} className="relative z-10 w-[min(105vw,92vh)] max-w-none rounded-full object-contain mix-blend-multiply drop-shadow-[0_34px_38px_rgba(23,43,53,0.18)]" />
          <span aria-hidden="true" className="pointer-events-none absolute z-20 size-[19vh] max-sm:size-[11vh] rounded-full bg-[#f6f4ef]" />
          <motion.div style={{ opacity: titleOpacity }} className="pointer-events-none absolute z-20 flex flex-col items-center text-center"><h1 className="max-w-3xl text-[17vw] font-medium leading-[0.78] tracking-[-0.09em]" style={{ perspective: "500px" }}>{titleCharacters.map((char, index) => <AnimatedCharacter key={`${char}-${index}`} char={char} index={index} centerIndex={titleCenter} progress={scrollYProgress} />)}</h1></motion.div>
          <Link href="/" aria-label="Dansran home" className="absolute left-1/2 top-4 z-[5] -translate-x-1/2 md:hidden"><img src="/dansran-logo-blue.svg" alt="Dansran" className="h-7 w-auto" /></Link><div className="absolute inset-x-5 top-5 z-40 md:left-10 md:right-5 md:top-5"><DansranNavbar hideLogo /></div>
        </div>
      </section>

      <section id="collection" className="bg-[#AAE7FF] px-5 py-16 text-[#0E6287] md:px-10 md:py-20"><div className="mx-auto max-w-6xl"><div className="flex items-start justify-between gap-8"><div><p className="text-[10px] font-semibold uppercase tracking-[0.24em]">Жаргалтайн дэлгэр</p><p className="mt-7 max-w-3xl text-xl leading-[1.3] tracking-[-0.03em] md:text-3xl">Монголын дэлгэр цаг, элбэг дэлбэг амьдрал, халуун дулаан ахуй, хамтын жаргалыг дүрслэн бүтээсэн цуглуулга.</p></div><span className="hidden pt-1 text-[10px] uppercase tracking-[0.2em] text-[#0E6287]/60 md:block">Монгол утга агуулга</span></div><div className="mt-10 grid gap-6 border-t border-[#0E6287]/20 pt-8 md:grid-cols-2 md:gap-10"><a href="/collection" className="group border-t border-[#0E6287]/20 pt-5"><span className="text-[10px] text-[#0E6287]/60">01</span><div className="mt-8 flex items-center justify-between"><h3 className="text-2xl tracking-[-0.04em]">Бэлэн бүтээгдэхүүн</h3><img src="/dansran-mark-blue.png" alt="" className="size-5 object-contain transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><p className="mt-5 max-w-xs text-sm leading-relaxed text-[#0E6287]/65">Жаргалтайн дэлгэрийн бэлэн бүтээлүүдээс сонгоно.</p></a><a href="/custom" className="group border-t border-[#0E6287]/20 pt-5"><span className="text-[10px] text-[#0E6287]/60">02</span><div className="mt-8 flex items-center justify-between"><h3 className="text-2xl tracking-[-0.04em]">Тохируулан бүтээх</h3><img src="/dansran-mark-blue.png" alt="" className="size-5 object-contain transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><p className="mt-5 max-w-xs text-sm leading-relaxed text-[#0E6287]/65">Зураглал, өнгө, мэндчилгээ, савлагаагаар танай байгууллагад тохируулна.</p></a></div></div></section>

      <section id="custom" className="bg-[#f6f4ef] px-5 py-16 text-[#0E6287] md:px-10 md:py-20"><div className="mx-auto max-w-6xl"><p className="text-[10px] font-semibold uppercase tracking-[0.24em]">Хамтдаа бүтээе</p><div className="mt-7 flex flex-col justify-between gap-7 border-b border-[#0E6287]/20 pb-10 md:flex-row md:items-end"><h2 className="max-w-2xl text-4xl leading-[0.98] tracking-[-0.06em] md:text-6xl">Энэ жилийн бэлгээ<br />өвөөр чимье.</h2><a href="/contact" className="cssbuttons-io-button">Холбогдох<span className="icon" aria-hidden="true"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="m16.172 11-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" /></svg></span></a></div></div></section>
      </main>
  )
}

export default DansranHome
