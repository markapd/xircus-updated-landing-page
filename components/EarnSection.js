import { Box, Container, VStack, Heading, Text, Image, HStack, Grid, Avatar, Center} from '@chakra-ui/react';
import React from 'react';

//imports style
import { earnGridStyle, typoStyle } from '../styles/global'

const data = [
  {
    title: 'As DAO',
    text: 'Get early access on products, VIP lounge newslatters early oppurtunities, Discounts and membership rewards'
  },
  {
    title: 'As Creator',
    text: 'Mint your NFTs as 1$ for the listing storage fee and 2.5% transaction fee for every purchase '
  },  
  {
    title: 'As Collector',
    text: 'Collect from different marketpalce and manages collectibles via Xircus Mobile and Xircus TV apps'
  },
  {
    title: 'As Marketplace Owner',
    text: 'Deploy your NFT marketpalce, costunize your fees and themes, create staking oppurtunities for your customers'
  },
  {
    title: 'As Provider',
    text: 'Earn from deploying APIs to cached data for marketplaces'
  },
  {
    title: 'As Ambassador',
    text: 'Earn from helping creators mint their creation their creation'
  },
]

const UserCard = ({ title, text }) => (
  <HStack mx="auto">
    <Image src="http://placehold.it/100x100" rounded="5px" w={50} h={50} />
    <Box>
      <Heading {...typoStyle.title.earn}>{title}</Heading>
      <Text  {...typoStyle.text.earn}>{text}</Text>
    </Box>
  </HStack>
)



export const EarnSection = ({ items = data }) => {
  return (
    <Box mt="80px">
      <Container maxW="container.lg">
            <Heading {...typoStyle.subheadline.earn}> How To Earn? </Heading>
            <Text {...typoStyle.subtext.earn}> Unleash the power of decentralized NFT marketplace </Text>
          <Grid {...earnGridStyle}>
            {
              items.map((user, userKey) => <UserCard key={`user-${userKey}`} {...user} />)
            }
          </Grid>
      </Container>
    </Box>
  )
}

