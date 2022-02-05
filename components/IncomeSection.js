import { useState } from "react"
import { Box, Container, Heading, HStack, ListItem, UnorderedList, Text,Slider, SliderMark,SliderTrack,SliderFilledTrack,SliderThumb, Divider, Spacer } from "@chakra-ui/react"

import {incomeBoxStyle, typoStyle,incomeListStyle, incomeStackStyle, incomeContainerStyle, incomeStackBoxStyle,incomeStackBoxStyled} from '../styles/global'

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
    <Box {...incomeBoxStyle}>
      <Container {...incomeContainerStyle}>
        <HStack {...incomeStackStyle}>
          <Box {...incomeStackBoxStyle}>
            <Heading {...typoStyle.title.income}> Income Calculator </Heading>
            <UnorderedList {...incomeListStyle}>
              {
                listText.map((e,i) => (
                  <ListItem key={i} {...typoStyle.subtext.income}>{e}</ListItem>
                ))
              } 
            </UnorderedList>
          </Box>
          <Spacer />
          <Box {...incomeStackBoxStyled} p="20px">
            <Box>
              <Heading {...typoStyle.subtitle.income}> Income calculator </Heading>
              <Text {...typoStyle.text.income}> Example using 1,000,000 NFT items minted, paid with USDC </Text>
            </Box>
            <Divider />
            <Box>
              <Heading {...typoStyle.subtitle.income}> What's your marketplace mint fee </Heading>
              <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
            <HStack >
            {
                marketPrice.map((e,i) => (
                  <Box key={i}>
                    <Text {...typoStyle.subtext.income}> {e.market} </Text>
                    <Heading {...typoStyle.subheadline.income} > {e.price} </Heading>
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

