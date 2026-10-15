export type DansranProduct = {
  name: string
  code: string
  price: string
  size: string
  slug: string
  images: string[]
}

const COLLECTION_URL = "https://www.dansran.mn/collections/jargaltaindelger"
const MAX_IMAGES = 4

export const productHref = (slug: string) => `${COLLECTION_URL}/products/${slug}`

const baseProducts: DansranProduct[] = [
  { name: "Хөлтэй таваг", code: "CEJ101", price: "98,000 ₮", size: "14 см диаметр · 12 см өндөр", slug: "cej101", images: ["https://www.dansran.mn/cdn/shop/files/DSC_2882_540x.jpg?v=1772690086"] },
  { name: "3-тай гэр таваг", code: "CEJ102", price: "158,000 ₮", size: "22 см диаметр · 10 см өндөр", slug: "cej102", images: ["https://www.dansran.mn/cdn/shop/files/137331a666647a0a065a20ffd061a5fc_540x.webp?v=1772524646"] },
  { name: "Платтер сэт", code: "CEJ106", price: "218,000 ₮", size: "Керамик platter set", slug: "cej106", images: ["https://www.dansran.mn/cdn/shop/files/DSC_2897_540x.jpg?v=1771297495"] },
  {
    name: "Зууван таваг", code: "CEJ104", price: "168,000 ₮", size: "Керамик oval plate", slug: "cej104",
    images: [
      "https://cdn.shopify.com/s/files/1/0520/7307/0754/files/DSC_28752.jpg?v=1771296912",
      "https://cdn.shopify.com/s/files/1/0520/7307/0754/files/ovelplatewithbox.jpg?v=1772689830",
      "https://cdn.shopify.com/s/files/1/0520/7307/0754/files/DSC_28814.jpg?v=1772689830",
      "https://cdn.shopify.com/s/files/1/0520/7307/0754/files/DSC_29081.jpg?v=1772689830",
    ],
  },
  {
    name: "Салфетка суурь", code: "CEJ107", price: "68,000 ₮", size: "14 × 4.8 × 8 см", slug: "cej107",
    images: [
      "https://cdn.shopify.com/s/files/1/0520/7307/0754/files/DSC_2907.jpg?v=1771298072",
      "https://cdn.shopify.com/s/files/1/0520/7307/0754/files/napkinholder.jpg?v=1772689990",
      "https://cdn.shopify.com/s/files/1/0520/7307/0754/files/Screenshot2026-02-16at15.12.00.jpg?v=1772689990",
    ],
  },
  { name: "Эргэдэг таваг", code: "CEJ103", price: "168,000 ₮", size: "26 см диаметр · 17 см өндөр", slug: "cej103", images: ["https://www.dansran.mn/cdn/shop/files/cakestand5_540x.jpg?v=1771297018"] },
  { name: "3-тай модон суурьтай сэт", code: "CEJ105", price: "98,000 ₮", size: "Керамик + хулс мод", slug: "cej105", images: ["https://www.dansran.mn/cdn/shop/files/DSC_2891_540x.jpg?v=1771297711"] },
]

type ShopifyProduct = { handle: string; images: { src: string }[] }

const sized = (src: string) => {
  const url = new URL(src.startsWith("//") ? `https:${src}` : src)
  if (url.hostname === "cdn.shopify.com") url.searchParams.set("width", "900")
  return url.toString()
}

export async function getDansranProducts(): Promise<DansranProduct[]> {
  let imagesBySlug = new Map<string, string[]>()

  try {
    const res = await fetch(`${COLLECTION_URL}/products.json?limit=50`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
    })
    if (res.ok) {
      const data = (await res.json()) as { products?: ShopifyProduct[] }
      imagesBySlug = new Map(
        (data.products ?? []).map((p) => [p.handle, p.images.map((img) => img.src)]),
      )
    }
  } catch {
    // Store unreachable: fall back to the bundled images below.
  }

  return baseProducts.map((product) => {
    const live = imagesBySlug.get(product.slug)
    const images = live && live.length > 0 ? live : product.images
    const gallery = images.slice(0, MAX_IMAGES).map(sized)
    if (product.slug === "cej101") {
      gallery.splice(0, 3, "/hultei-tavag.jpg", "/hultei-tavag-with-box.jpg")
    } else {
      gallery.splice(1, 1, `/${product.slug}-with-box.jpg`)
    }
    return { ...product, images: [...gallery, "/dansran-gift-bag.jpg"] }
  })
}
