import CategoriesGrid from "@/app/(website)/components/shop/Categories"
import CuratedSelections from "@/app/(website)/components/shop/CuratedSelections"
import FeaturesAndStats from "@/app/(website)/components/shop/FeaturesAndStats"
import Newsletter from "@/app/(website)/components/shop/Newsletter"
import ShopHero from "@/app/(website)/components/shop/ShopHero"

const page = () => {
  return (
    <main className="min-h-screen bg-white">
      <ShopHero/>
      <CategoriesGrid/>
      <CuratedSelections/>
      <FeaturesAndStats/>
      <Newsletter/>
    </main>
  )
}

export default page