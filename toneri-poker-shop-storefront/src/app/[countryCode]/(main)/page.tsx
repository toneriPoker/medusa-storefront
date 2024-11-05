import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import TrumpAnimation from "@modules/animation/TrumpAnimation"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import AboutSection from "@modules/layout/components/AboutSection"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <div className="fixed z-0 bg-[#353f37] text-white w-screen">
        <AboutSection />
      </div>
      <div style={{height: '100svh'}}>
      </div>
      <div className="z-0 relative">
        <TrumpAnimation />
        <div className="z-20 bg-[#fbfbfb]">
          <div className="mb-36 h-screen">
          </div>
        </div>
      </div>
        <div className="py-12">
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
    </>
  )
}
