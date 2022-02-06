import React from 'react';
import { Box, Center,Heading,Tabs, TabList,Tab,TabPanels,TabPanel, Container,Image } from '@chakra-ui/react'

//imports style
import { easyStepsContainerStyle,easyStepsTabStyle,easyTabStyle,boxTabsStyle, easyImageStyle, easyBoxStyle, typoStyle } from '../styles/global'
import { useTranslations } from 'next-intl';

const tabItem = [
  {
    tabs: 'easyFirstTab',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxCiaGefaSbHuWihbK04_aD4c6CETLqL4Wg&usqp=CAU'
  },
  {
    tabs: 'easySecondTab',
    img: 'https://static.vecteezy.com/system/resources/previews/004/727/152/original/illustration-of-a-non-fungible-token-nft-background-for-infographics-digital-technology-concept-crypto-art-futuristic-neon-wallpaper-with-typography-vector.jpg'
  },
  {
    tabs: 'easyThirdTab',
    img: 'https://c8.alamy.com/comp/2F5B995/nft-non-fungible-token-crypto-art-vector-illustration-for-banner-abstract-digital-background-of-nft-cryptoart-and-gaming-using-blockchain-technology-2F5B995.jpg'
  },
]

export const EasyStepsSection = () => {
  const easyStepsSection = useTranslations('EasyStepsSection')
  return (
    <Box {...easyBoxStyle}>
      <Container {...easyStepsContainerStyle}>
        <Center>
          <Heading {...typoStyle.headline.easy}>{easyStepsSection('easyHeading')}</Heading>
        </Center>
       <Tabs>
        <TabList>
          { tabItem.map((e,i) => <Tab key={`second-${i}`} {...easyStepsTabStyle} > <Box {...boxTabsStyle}> {easyStepsSection(e.tabs)} </Box></Tab>) }
        </TabList>
        <TabPanels >
          { tabItem.map((e,i) => <TabPanel key={`first-${i}`} {...easyTabStyle}><Image {...easyImageStyle} src={e.img} /> </TabPanel> )}
        </TabPanels>
      </Tabs>
      </Container>
    </Box>
  )
}

