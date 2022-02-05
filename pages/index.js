import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'

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
