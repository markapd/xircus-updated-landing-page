import React from 'react';
import { Box, Tabs, TabList,Tab,TabPanels,TabPanel, Container,Image } from '@chakra-ui/react'

//imports style
import { easyStepsContainerStyle,easyStepsTabStyle,easyTabStyle,boxTabsStyle } from '../styles/global'


const tabItem = [
  {
    tabs: 'Deploy a Marketplace',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxCiaGefaSbHuWihbK04_aD4c6CETLqL4Wg&usqp=CAU'
  },
  {
    tabs: 'Deploy a Collection',
    img: 'https://static.vecteezy.com/system/resources/previews/004/727/152/original/illustration-of-a-non-fungible-token-nft-background-for-infographics-digital-technology-concept-crypto-art-futuristic-neon-wallpaper-with-typography-vector.jpg'
  },
  {
    tabs: 'Deploy a Min on NFT',
    img: 'https://c8.alamy.com/comp/2F5B995/nft-non-fungible-token-crypto-art-vector-illustration-for-banner-abstract-digital-background-of-nft-cryptoart-and-gaming-using-blockchain-technology-2F5B995.jpg'
  },
]

export const EasyStepsSection = () => {
  return (
    <Box>
      <Container {...easyStepsContainerStyle}>
       <Tabs>
        <TabList>
          {
            tabItem.map(e => (
              <Tab {...easyStepsTabStyle} >
                <Box {...boxTabsStyle}>
                  {e.tabs}
                </Box>
              </Tab>
            ))
          }
        </TabList>
        <TabPanels >
        {
          tabItem.map(e => (
            <TabPanel m="auto 0px">
              <Image w="full" src={e.img} />
            </TabPanel>
          ))
        }
        </TabPanels>
      </Tabs>
      </Container>
    </Box>
  )
}

