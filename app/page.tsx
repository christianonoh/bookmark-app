import ExtensionSection from '@/components/extention'
import FAQs from '@/components/faq'
import FeaturesSection from '@/components/features'
import HomeCover from '@/components/home-cover'

export default function Home() {
  return (
    <main>
      <HomeCover />
      <FeaturesSection />
      <ExtensionSection />
      <FAQs />
    </main>
  )
}
