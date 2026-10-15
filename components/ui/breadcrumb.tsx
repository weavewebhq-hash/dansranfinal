"use client"

import Link from "next/link"

type DansranBreadcrumbProps = {
  current: string
  dark?: boolean
}

export default function DansranBreadcrumb({ current, dark = false }: DansranBreadcrumbProps) {
  const muted = dark ? "text-[#f6f4ef]/60" : "text-[#475569]"
  const divider = dark ? "text-[#f6f4ef]/35" : "text-[#CBD5E1]"

  return (
    <nav aria-label="Breadcrumb" className={`flex min-w-0 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] ${muted} max-sm:pt-12`}>
      <Link href="/" aria-label="Home" className="shrink-0 transition-opacity hover:opacity-60">
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 7.609c.352 0 .69.122.96.343l.111.1 6.25 6.25v.001a1.5 1.5 0 0 1 .445 1.071v7.5a.89.89 0 0 1-.891.891H9.125a.89.89 0 0 1-.89-.89v-7.5l.006-.149a1.5 1.5 0 0 1 .337-.813l.1-.11 6.25-6.25c.285-.285.67-.444 1.072-.444Zm5.984 7.876L16 9.5l-5.984 5.985v6.499h11.968z" fill="currentColor" />
        </svg>
      </Link>
      <span className={divider} aria-hidden="true">/</span>
      <span className="truncate" aria-current="page">{current}</span>
    </nav>
  )
}
