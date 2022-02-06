import { Box, Container, Heading, VStack, Text, HStack, Image, Button } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

//syle imports 
import { parentBox,nftControlBoxStyle, nftControlContainerStyle, nftBoxStyle, nftCardContainer,nftCardImageStyle, nftControlBigButton, typoStyle } from '../styles/global'

const itemCardList = [
  {
    img: 'https://uc5e81d27a4191de192a3af9a7b6.previews.dropboxusercontent.com/p/thumb/ABbb6O3YT6m1iMbzHZSXx709Gf0Q3wpbczLHvuB39rjFDMnZOIr0lYysG4dd8gr6My8ApN4LO6SWDm1aP5WeWhB_ReLQg6evHKOhr26zhtJerXpyDt1HuUHXKINWQMywQ41X6SJbfrlhoF9hwMEQ2X2sOaVtYJ7Nc9g2Di6Z5OavWLW-NNg9cwtaTBRSZkia4IWWck2K_G6ksf-73uUaE59oGrnLBAYDKO400smTz0pz661yymFA2A11x0j15T9kcnbbxkU4hLnOAP0DAGoNMAQ_1AuQLDKCjb3V5spgGcW7oW2H0Hz61wYECd5IjPHPLeMBsPbgLiqfViJS3QCBRtbH0WBJMtu8P7pUBwrhN9ffmTE1SU-s2UmaQpitu9ZKIRQ/p.png',
    text:'cardOne'
  },
  {
    img: 'https://ucbf793ad38848698babfd2d2a9e.previews.dropboxusercontent.com/p/thumb/ABbyXwmnaoJrE6RMCDaiqZvNadt-ZxCX1yDl_MqtnnODIMGErRiRuXwAGk9gxyDpPprPvpv6WQhjxpzDwUKTCVorOd86d4k7Mm8gWMwY7_T1iFwS8pX8_ehjdn1l9nmreL9d4WW34x2BynRz-_3P0TyV2epRZ7yrT-ZWqybFLOsMFnYHzxLNdIvXC8zYdufupADmn4_kAvU-jpZA35uIDaIe4G70WeGeggCCsC4RLdChQp-ET3zSNb0EdZX53pFjz_qBQWU9KIIx0stYkLFHPyWe8Ay7WQFopnBgpqUtQ50n-VCaWeUM6AHyKXnxAIz2tlNOd7ijgvZGUDcn6QcpLcKKYt8u9eGV-masqnzuLehps2J-stR14y-MqI2Lik7Z5dY/p.png',
    text:'cardTwo'
  },
  {
    img: 'https://uc5eba239fad17fc5936c53c0949.previews.dropboxusercontent.com/p/thumb/ABakhbJjDNi0CfLBSms5ctLDJA8aU-fj8aDXxQJq5I8UVzQuSOBEYZxakLFRflZ1zcQAhiG6t2i9cLovl7xwWcKghcSwHh1Hj5a5ZcNYOX5pw-p-CU1d7G-3_wyJGMmbDGTUyMNwgJlvP3quvTEEvzM9E23aXr_IN7zqC8NpEwvT7w3aRgfGOOwcVbc2wo0TVtdfXyYx0iFk0_bu-x_BCq8DKf4OOKc8E4RzRHGaDSRjxOwZovYMwd_W3PxbQNs4nomEE66VtOMnFUNaKo6Ain4zxdO_ncJPmzuQb0Ptq9OKZG1gTCEI1LsBT7maU7nxjSnCL53RWiO3b-zapPVbErB-7ca3DHBgBm7lHa5q_NWf4DHXneiMgKjg1QDVWCEc78Y/p.png',
    text:'cardThree'
  },
  {
    img: 'https://uced55262a8c8d7c61f24a65e816.previews.dropboxusercontent.com/p/thumb/ABbpERoW1Sr-Abt0w5npnQhLpvwH8IThF8longUWdPDnPF44T4MqZ9azgdNk4E3B9Tco3h9__jTLbfNtDJKlUsLFQoo6248a-aBWp00fzfsO4-o5wVk3hTX2D7Yn5NwBVn8jwioXcpXwzuU5-4XjRbLwggFPfm80UFuPrk2UfzmR44OGOs3O_McB1EcfQR1MDgEm2a00zBq9xhGv9AVLeDe3Pfv-ziYiitBioGho8PMX4u_bENTH197vE_YqL3IBHQbZ5vwH0qNs8O2ZEugsUXI_Z898S-y3sLObdFbkBixMtNQZWE2gi2fDwZapZYhq3-bliI4boxsEd1BQc6UNzNmA03YTw_nvQMeWmZrHVftEHQZXvMoEX9RX0NWBBp_i71s/p.png',
    text:'cardFour'
  },
]
export const NftControl = () => {
  const nftControl = useTranslations('NftControl')
  return (
    <Box {...nftControlBoxStyle}>
      <Container {...nftControlContainerStyle}>
        <VStack>
          <Heading> {nftControl('headLine')}  </Heading>
          <Text> {nftControl('subHeadline')}  </Text>
        </VStack>
        <HStack {...nftCardContainer}>
          {
            itemCardList.map((e,i) => (
              <Box key={i} {...parentBox}>
                <Box {...nftBoxStyle}>
                  <Image {...nftCardImageStyle} src={e.img} />
                  <Text {...typoStyle.text.nftControl}>{ nftControl((e.text))} </Text>
                </Box>
              </Box>
            ))
          }
        </HStack>
        <Text {...typoStyle.text.nft} {...nftControlBigButton}> {nftControl('bigButton')}</Text>
      </Container>
    </Box>  
  )
}

