import type { Metadata } from "next"
import Link from "next/link"
import DansranNavbar from "@/components/dansran-navbar"
import DansranBreadcrumb from "@/components/ui/breadcrumb"
import OrderInfoMotion from "@/components/order-info-motion"

export const metadata: Metadata = {
  title: "Захиалгын мэдээлэл — Dansran",
  description: "DANSRAN урлангийн тусгай захиалга, тохируулгын боломж, үйлдвэрлэлийн хугацаа, төлбөр болон хүргэлтийн нөхцөл.",
}

const options = [
  { title: "Сийлбэр, бичээс", text: "Компанийн лого, арга хэмжээний бэлгэдэл, хүлээн авагчийн нэр, албан тушаал, огноо болон тусгай бичээсийг оруулах боломжтой. Кирилл, латин, уламжлалт монгол бичгээр бэлтгэнэ." },
  { title: "Тусгай өнгө, шийдэл", text: "Их хэмжээний захиалгад танай арга хэмжээ, ой тэмдэглэлт үйл явдалд зориулсан хязгаарлагдмал тооны тусгай өнгө, шийдэлтэй хувилбар бэлтгэх боломжтой." },
  { title: "Бүтээлийн гэрчилгээ", text: "Бүтээл бүрт гарын үсэг, дугаартай HAND MADE IN MONGOLIA гэрчилгээг тусгай цаасан дээр хэвлэж, монгол болон англи хэлээр хавсаргана. Нэмэлт хэлээр бэлтгэх боломжтой." },
  { title: "Байгальд ээлтэй савлагаа", text: "Тусгай захиалгын бүтээлийг дахин боловсруулсан бор цаасан, энгийн минимал савлагаатайгаар бэлтгэнэ." },
]

const terms = [
  ["Хүргэлт", "Улаанбаатар хот дотор"],
  ["Даатгал", "Тээвэрлэлтийн бүрэн даатгал; эвдрэлийн нөхөн төлбөрийг баталгаажуулна"],
  ["Нууцлал", "Гэрээний дагуу мэдээллийн хатуу нууцлал"],
]

const highlights = [
  { label: "Захиалгын доод хэмжээ", value: "50", unit: "ширхэг", detail: "Бүтээл тус бүрээс" },
  { label: "Бэлэн бүтээлийн хугацаа", value: "5", unit: "ажлын хоног", detail: "Захиалга баталгаажсанаас хойш" },
  { label: "Тусгай захиалгын хугацаа", value: "2–4", unit: "долоо хоног", detail: "Захиалга баталгаажсанаас хойш" },
  { label: "Урьдчилгаа төлбөр", value: "50%", unit: "", detail: "Захиалга баталгаажихад; үлдэгдлийг хүргэлтийн өмнө" },
]

export default function OrderInfoPage() {
  return (
    <OrderInfoMotion>
    <main className="min-h-screen bg-[#f6f4ef] text-[#0E6287]">
      <header className="mx-auto max-w-6xl px-5 pt-6 md:px-10 md:pt-8">
        <DansranNavbar current="order-info" />
        <div className="mt-5"><DansranBreadcrumb current="Захиалгын мэдээлэл" /></div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-12 pt-16 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-end md:gap-12 md:px-10 md:pb-16 md:pt-24">
        <div data-reveal>
        <h1 className="max-w-4xl text-5xl leading-[1.05] tracking-[-0.05em] md:text-7xl">Захиалгын<br /><em className="font-normal">мэдээлэл.</em></h1>
        </div>
        <div data-reveal data-reveal-delay="100" className="border-l-2 border-[#0E6287]/25 pl-6">
        <p className="max-w-2xl text-base leading-relaxed text-[#0E6287]/75 md:text-lg">Шавараас савлагаа хүртэл бүх процессыг УБ дахь урландаа гүйцэтгэж байна</p>
        <Link href="/contact#request" className="mt-6 inline-block text-sm underline underline-offset-4 transition-opacity hover:opacity-70">Тусгай захиалга өгөх →</Link>
        </div>
      </section>

      <section className="bg-[#dceff4] px-5 py-12 md:px-10 md:py-16" aria-labelledby="options-heading">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-start gap-5"><span className="pt-1 text-sm font-semibold text-[#0E6287]/50">01 /</span><h2 id="options-heading" className="text-3xl tracking-[-0.04em] md:text-4xl">Байгууллагын тусгай захиалга</h2></div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
            {options.map((option, index) => (
              <article key={option.title} data-reveal data-reveal-delay={(index % 2) * 90} data-hover-card className="rounded-2xl border border-[#0E6287]/10 bg-[#f6f4ef] p-6 md:p-8">
                <div className="flex items-start justify-between gap-4"><h3 className="text-2xl tracking-[-0.03em]">{option.title}</h3><span aria-hidden="true" className="text-3xl font-light leading-none text-[#0E6287]/25">{index + 1}</span></div>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[#0E6287]/80">{option.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-3 border-t border-[#0E6287]/20 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-8"><p className="text-sm font-semibold">Гар урлалын хугацаа</p><p className="text-sm italic leading-7 text-[#0E6287]/80">Гараар хэлбэржүүлэх, хатаах, шатаах, будах, өнгөлөх зэрэг олон үе шаттай тул тусгай захиалгаа аль болох эрт баталгаажуулахыг зөвлөж байна.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16" aria-labelledby="terms-heading">
        <div className="flex items-start gap-5"><span className="pt-1 text-sm font-semibold text-[#0E6287]/50">02 /</span><h2 id="terms-heading" className="text-3xl tracking-[-0.04em] md:text-4xl">Захиалгын нөхцөл</h2></div>
        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} data-reveal data-reveal-delay={highlights.indexOf(item) * 70} data-hover-card className="rounded-2xl bg-[#0E6287] p-6 text-[#f6f4ef]">
              <dt className="min-h-10 text-xs font-semibold leading-5 text-[#f6f4ef]/80">{item.label}</dt>
              <dd className="mt-5"><span className="block text-5xl font-medium tracking-[-0.06em]">{item.value}</span>{item.unit && <span className="mt-2 block text-sm text-[#AAE7FF]">{item.unit}</span>}<span className="mt-5 block border-t border-white/20 pt-4 text-xs leading-6 text-[#f6f4ef]/80">{item.detail}</span></dd>
            </div>
          ))}
        </dl>
        <dl className="mt-8 border-t border-[#0E6287]/20">
          {terms.map(([label, value]) => (
            <div key={label} data-reveal className="grid gap-2 border-b border-[#0E6287]/20 py-5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8">
              <dt className="text-sm font-semibold">{label}</dt>
              <dd className="text-right text-sm leading-relaxed text-[#0E6287]/75">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm leading-relaxed text-[#0E6287]/65">Тухайн бүтээлийн доод хэмжээ, хугацаа болон бусад нөхцөлийг захиалгын үнийн саналд тодруулан баталгаажуулна.</p>
      </section>

      <section className="bg-[#dceff4] px-5 py-12 md:px-10 md:py-16">
        <div data-reveal className="mx-auto grid max-w-6xl items-start gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-12">
          <div>
            <p className="mb-4 text-sm font-semibold text-[#0E6287]/50">03 /</p>
            <h2 className="text-3xl tracking-[-0.04em] md:text-4xl">Тоо хэмжээний<br /><em className="font-normal">хөнгөлөлт.</em></h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#0E6287]/75">Захиалгын тоо хэмжээнээс хамаарч шаталсан хөнгөлөлт үзүүлэх боломжтой</p>
          </div>
          <Link href="/contact#request" className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#0E6287] px-7 py-4 text-sm font-semibold text-white transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0E6287]">Үнийн санал авах <span aria-hidden="true" className="transition-transform duration-300 motion-safe:group-hover:translate-x-1">→</span></Link>
        </div>
      </section>
    </main>
    </OrderInfoMotion>
  )
}
