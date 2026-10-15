"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { productHref, type DansranProduct } from "@/lib/dansran-products"

const arrowClass =
  "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#172b35]/75 text-[#f6f4ef] shadow-md backdrop-blur transition hover:bg-[#172b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5b04b]"

export function ProductGalleryCard({ product }: { product: DansranProduct }) {
  const [active, setActive] = useState(0)
  const { name, code, price, size, slug, images } = product
  const href = productHref(slug)
  const count = images.length

  const go = (step: number) => setActive((current) => (current + step + count) % count)

  return (
    <article className="group">
      <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${name} зургууд`}
      >
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          data-cursor
          className="relative block aspect-square overflow-hidden rounded-[1.5rem] bg-[#e7dfd2]"
        >
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`${name} — зураг ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              aria-hidden={index !== active}
              className={cn(
                "absolute inset-0 size-full object-cover transition-opacity duration-500",
                index === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
          <span className="sr-only">{`${name} бүтээгдэхүүний хуудас руу очих`}</span>
        </a>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Өмнөх зураг"
              className={cn(arrowClass, "left-3")}
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Дараагийн зураг"
              className={cn(arrowClass, "right-3")}
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#172b35]/60 px-2.5 py-1.5 backdrop-blur">
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`${index + 1}-р зураг`}
                  aria-current={index === active}
                  className={cn(
                    "h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5b04b]",
                    index === active ? "w-5 bg-[#f6f4ef]" : "w-1.5 bg-[#f6f4ef]/50 hover:bg-[#f6f4ef]/80",
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <a href={href} target="_blank" rel="noreferrer" className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.08em]">{name}</h2>
          <p className="mt-2 text-xs text-[#f6f4ef]/50">
            {code} · {size}
          </p>
        </div>
        <span className="shrink-0 text-sm text-[#e5b04b]">{price}</span>
      </a>
    </article>
  )
}
