import DansranNavbar from "@/components/dansran-navbar"
import Link from "next/link"
import DansranBreadcrumb from "@/components/ui/breadcrumb"
import { TextBlurIn } from "@/components/ui/text-blur-in"

const occasions = [
  { title: "Шинэ жилийн бэлэг", description: "Түнш, харилцагч, хамт олонд" },
  { title: "Удирдлага / VIP бэлэг", description: "Удирдах түвшин, ТУЗ, хүндэт зочинд" },
  { title: "Түншийн бэлэг", description: "Хамтын ажиллагаа, онцгой харилцаанд" },
  { title: "Ойн баяр / Тусгай төсөл", description: "Ойн баяр, арга хэмжээ, нээлт болон онцгой захиалгад" },
]

const madeProducts: { name: string; image: string; href: string }[] = [
  { name: "Эрлэг Номун Хааны Баг", image: "/custom/erleg-nomun-khan-mask.webp", href: "https://www.dansran.mn/collections/ceramics/products/erleg-nomun-khan3" },
  { name: '"Арслан" хүжний суурь', image: "/custom/arslan-incense-holder.webp", href: "https://www.dansran.mn/collections/ceramics/products/ceramic-incense-burner102" },
  { name: '"Монгол гутал" үзэг балны сав', image: "/custom/mongol-boot-pen-holder.jpg", href: "https://www.dansran.mn/collections/ceramics/products/ceramic-pen-holder1" },
  { name: "Талын Домбо", image: "/custom/talyn-dombo.webp", href: "https://www.dansran.mn/collections/ceramics/products/ceramic-pitcher2" },
  { name: "Талхан таваг", image: "/custom/talkhan-tavag.webp", href: "https://www.dansran.mn/collections/ceramics/products/ceramic-bread-bowl4" },
]

export default function CustomPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#0E6287]">
      <header className="mx-auto max-w-6xl px-5 pt-6 md:px-10 md:pt-8">
        <DansranNavbar hideCustom current="custom" />
        <div className="mt-5">
          <DansranBreadcrumb current="Custom" />
        </div>
      </header>

      <section className="px-5 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl text-5xl leading-[0.92] tracking-[-0.06em] md:text-7xl">Захиалгат бүтээгдэхүүн</h1>
          <TextBlurIn className="mt-6 max-w-xl text-base leading-relaxed text-[#0E6287]/70 md:text-lg" staggerDelay={0.02}>
            Танай байгууллагын хэрэгцээ, зориулалтад тохируулан тусгай бүтээгдэхүүн бүтээнэ.
          </TextBlurIn>
          <Link href="/order-info" className="mt-6 inline-block rounded-full border border-[#0E6287]/40 px-6 py-3 text-sm transition-colors hover:bg-[#dceff4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0E6287]">Захиалгын нөхцөл харах →</Link>
          <ul className="mt-12 grid border-t border-[#0E6287]/20 md:grid-cols-2 md:gap-x-10">
            {occasions.map((occasion) => (
              <li key={occasion.title} className="flex items-center justify-between gap-6 border-b border-[#0E6287]/20 py-6">
                <div>
                  <h2 className="text-2xl tracking-[-0.04em]">{occasion.title}</h2>
                  <p className="mt-2 text-sm text-[#0E6287]/65">{occasion.description}</p>
                </div>
                <img src="/dansran-mark-blue.png" alt="" className="size-5 shrink-0 object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f6f4ef_0%,#dceff4_100%)] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="border-b border-[#0E6287]/20 pb-5 text-4xl tracking-[-0.05em] md:text-5xl">Бидний бүтээсэн</h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {madeProducts.map((product) => (
              <li key={product.name}>
                <a href={product.href} target="_blank" rel="noopener noreferrer" className="group block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6287] focus-visible:ring-offset-4">
                <div data-cursor className="aspect-square overflow-hidden rounded-sm bg-white ring-1 ring-[#0E6287]/10">
                  <img src={product.image} alt={product.name} loading="lazy" decoding="async" className="size-full object-contain" />
                </div>
                <p className="mt-4 text-sm group-hover:underline">{product.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  )
}
