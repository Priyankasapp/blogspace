import CategoriesGrid from "@/components/shop/Categories"
import CuratedSelections from "@/components/shop/CuratedSelections"
import FeaturesAndStats from "@/components/shop/FeaturesAndStats"
import Newsletter from "@/components/shop/Newsletter"
import ShopHero from "@/components/shop/ShopHero"

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