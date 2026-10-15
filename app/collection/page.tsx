import DansranNavbar from "@/components/dansran-navbar"
import { ProductGalleryCard } from "@/components/product-gallery-card"
import DansranBreadcrumb from "@/components/ui/breadcrumb"
import { TextBlurIn } from "@/components/ui/text-blur-in"
import { getDansranProducts } from "@/lib/dansran-products"

export const revalidate = 3600

export default async function CollectionPage() {
  const products = await getDansranProducts()

  return <main className="min-h-screen bg-[#172b35] px-5 py-6 text-[#f6f4ef] md:px-10 md:py-8">
    <header className="mx-auto max-w-6xl"><DansranNavbar dark current="collection" /><div className="mt-5"><DansranBreadcrumb current="Бэлэн коллекц" dark /></div></header>
    <section className="mx-auto max-w-6xl pb-24 pt-28 md:pt-40"><h1 className="max-w-4xl text-6xl font-medium leading-[0.86] tracking-[-0.07em] md:text-9xl">Жаргалтайн<br /><em className="font-sans italic font-normal text-[#dce8d9]">дэлгэр.</em></h1><TextBlurIn className="mt-10 max-w-md text-base leading-relaxed text-[#f6f4ef]/65">Seven hand-painted ceramic accessories, ready for considered tables, hospitality spaces and meaningful gifts.</TextBlurIn><div className="mt-24 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductGalleryCard key={product.code} product={product} />)}</div></section>
  </main>
}
