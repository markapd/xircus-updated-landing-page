
import { Box } from '@chakra-ui/react'

//Next import

//Import Styele hehe
import { webBackgroundStyle } from '../styles/global'

//Components
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { NftControl } from '../components/NftControl'
import { Products } from '../components/Products'
import { EarnSection } from '../components/EarnSection'
import { Cards } from '../components/Cards'
import { DeploySection } from '../components/DeploySection'
import { EasyStepsSection } from '../components/EasyStepsSection'
import { MultipleSection } from '../components/MultipleSection'
import { CarouselSection } from '../components/CarouselSection'
import { IncomeSection } from '../components/IncomeSection'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <Box {...webBackgroundStyle}>
      <Header />
      <HeroSection />
      <NftControl />
      <Products />
      <EarnSection />
      <Cards />
      <DeploySection />
      <EasyStepsSection />
      <MultipleSection />
      <CarouselSection />
      <IncomeSection />
      <Footer />
    </Box>      
  )
}

// export async function getStaticProps({locale}) {
//   console.log(locale)
//   return {
//     props: {
//       messages: (await import(`../../messages/${locale}.json`)).default
//     }
//   };
// }