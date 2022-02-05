import { useState } from "react"
import { Box, Container, Heading, HStack, ListItem, UnorderedList, Text,Slider, SliderMark,SliderTrack,SliderFilledTrack,SliderThumb, Divider, Spacer } from "@chakra-ui/react"

import {incomeBoxStyle, typoStyle,incomeListStyle} from '../styles/global'

const listText = [
  'Get started for free',
  'No hidden costs',
  '$1 mint only',
  'Owner configuring transaction fees starting at 2%',
  'Not taking rotalty fees'
]

const marketPrice = [
  {
    market:'Marketplace owner',
    price:'450,000 USDC'
  },
  {
    market:'Data provider',
    price:'4100,000 USDC'
  },
  {
    market:'Ambassador',
    price:'200,000 USDC'
  },
  {
    market:'Xircus',
    price:'250,000 USDC'
  },
]

export const IncomeSection = () => {
  const [sliderValue, setSliderValue] = useState(50)
  return (
    <Box my="70px">
      <Container maxW="container.lg">
        <HStack {...incomeBoxStyle}>
          <Box pb='40px'>
            <Heading {...typoStyle.title.income}> Income Calculator </Heading>
            <UnorderedList {...incomeListStyle}>
              {
                listText.map(e => (
                  <ListItem {...typoStyle.subtext.income}>{e}</ListItem>
                ))
              } 
            </UnorderedList>
          </Box>
          <Spacer />
          <Box rounded={20} p="20px" bg="gray.900">
            <Box py="20px">
              <Heading {...typoStyle.subtitle.income}> Income calculator </Heading>
              <Text {...typoStyle.text.income}> Example using 1,000,000 NFT items minted, paid with USDC </Text>
            </Box>
            <Divider />
            <Box>
              <Heading py="20px" {...typoStyle.subtitle.income}> What's your marketplace mint fee </Heading>
              <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
            <HStack >
            {
                marketPrice.map(e => (
                  <Box>
                    <Text fontSize="9px"> {e.market} </Text>
                    <Heading size='sm' color="orange.500" fontWeight="bold"> {e.price} </Heading>
                  </Box>
                ))
              }
            </HStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}

