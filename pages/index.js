
import { Box } from '@chakra-ui/react'

//Next import

// Config Imports
import { productsConfig, nftConfig, earnConfig, cardsConfig, carouselConfig, deployConfig, easyConfig, footerConfig, heroConfig, multipleConfig } from '../config/myConfig'
//Import Style hehe
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
import { useTranslations } from 'next-intl'

export default function Home() {
  const header            = useTranslations('Header')
  const cards             = useTranslations('Cards')
  const carouselSection   = useTranslations('CarouselSection')
  const deployTranslation =  useTranslations('DeploySection')
  const earnSection       = useTranslations('EarnSection')
  const easyStepsSection  = useTranslations('EasyStepsSection')
  const footer            = useTranslations('Footer')
  const heroSection       = useTranslations('HeroSection')
  const incomeSection     = useTranslations('IncomeSection')
  const multipleSection   = useTranslations('MultipleSection')
  const nftControl        = useTranslations('NftControl')
  const products          = useTranslations('Products')

  return (
    <Box  {...webBackgroundStyle}>
      <Header  header={header}/>
      <HeroSection {...heroConfig} heroSection={heroSection} />
      <NftControl {...nftConfig} nftControl={nftControl} />
      <Products {...productsConfig} products={products} />
      <EarnSection {...earnConfig} earnSection={earnSection}/>
      <Cards {...cardsConfig} cards={cards}/>
      <DeploySection {...deployConfig} deployTranslation={deployTranslation} />
      <EasyStepsSection {...easyConfig} easyStepsSection={easyStepsSection} />
      <MultipleSection {...multipleConfig} multipleSection={multipleSection} />
      <CarouselSection {...carouselConfig} carouselSection={carouselSection} />
      <IncomeSection incomeSection={incomeSection} />
      <Footer {...footerConfig} footer={footer} />
    </Box>      
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      messages: (await import(`../i18n/${locale}.json`)).default
    }
  };
}