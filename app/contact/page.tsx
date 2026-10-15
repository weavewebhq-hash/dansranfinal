import CustomRequestForm from "@/components/custom-request-form"
import DansranNavbar from "@/components/dansran-navbar"
import DansranBreadcrumb from "@/components/ui/breadcrumb"
import { TextBlurIn } from "@/components/ui/text-blur-in"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-5 py-6 text-[#0E6287] md:px-10 md:py-8">
      <header className="mx-auto max-w-6xl"><DansranNavbar hideCustom current="contact" /><div className="mt-5"><DansranBreadcrumb current="Холбогдох" /></div></header>

      <section className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl items-center py-20">
        <div className="w-full">
          <div className="mt-8 grid gap-12 border-t border-[#0E6287]/20 pt-8 md:grid-cols-[1fr_1.1fr] md:gap-20">
            <h1 className="max-w-xl text-6xl leading-[0.9] tracking-[-0.07em] md:text-8xl">Утга агуулгатай<br /><em className="font-sans italic font-normal">бэлэг бүтээе.</em></h1>
            <div className="max-w-md">
              <TextBlurIn className="mb-10 text-lg leading-relaxed text-[#0E6287]/70">Захиалгат бүтээл, хамтын ажиллагааны талаар бидэнтэй холбогдоно уу.</TextBlurIn>
              <dl className="border-t border-[#0E6287]/20 text-base">
                <div className="flex justify-between gap-6 border-b border-[#0E6287]/20 py-5"><dt className="text-[#0E6287]/60">Албан тушаал</dt><dd>Маркетинг менежер</dd></div>
                <div className="flex justify-between gap-6 border-b border-[#0E6287]/20 py-5"><dt className="text-[#0E6287]/60">Утас</dt><dd><a href="tel:80792969" className="transition-opacity hover:opacity-60">80792969</a></dd></div>
                <div className="flex justify-between gap-6 border-b border-[#0E6287]/20 py-5"><dt className="text-[#0E6287]/60">Цахим шуудан</dt><dd><a href="mailto:info@dansran.mn" className="transition-opacity hover:opacity-60">info@dansran.mn</a></dd></div>
                <div className="flex justify-between gap-6 border-b border-[#0E6287]/20 py-5"><dt className="text-[#0E6287]/60">Вэб</dt><dd><a href="https://www.dansran.mn" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-60">www.dansran.mn</a></dd></div>
                <div className="flex justify-between gap-6 py-5"><dt className="text-[#0E6287]/60">Инстаграм</dt><dd><a href="https://instagram.com/dansran_mongolia" target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-60">@dansran_mongolia</a></dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section id="request" className="-mx-5 bg-[#dceff4] px-5 py-10 md:-mx-10 md:px-10 md:py-12">
        <div className="mx-auto grid max-w-6xl items-start gap-6 md:grid-cols-[1fr_2fr] md:gap-8">
          <div>
            <h2 className="text-4xl tracking-[-0.05em] md:text-5xl">Хүсэлт илгээх</h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#0E6287]/70">
              Хүссэн бүтээгдэхүүн, тоо ширхэг, хугацаагаа бичээд илгээгээрэй. Бид тантай эргэн холбогдоно.
            </p>
          </div>
          <CustomRequestForm />
        </div>
      </section>

    </main>
  )
}

export const metadata = {
  title: "Холбогдох — Dansran",
  description: "Dansran-тай холбогдох мэдээлэл.",
}
