import { HeroSection } from '@/components/home/HeroSection'
import { CredibilityBand } from '@/components/home/CredibilityBand'
import { SolutionsSection } from '@/components/home/SolutionsSection'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { ValuesSection } from '@/components/home/ValuesSection'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityBand />
      <SolutionsSection />
      <FeaturedProducts />
      <ValuesSection />
      <CTASection />
    </>
  )
}
