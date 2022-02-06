import { useState } from "react"
import { Box, Container, Heading, HStack, ListItem, UnorderedList, Text,Slider, SliderMark,SliderTrack,SliderFilledTrack,SliderThumb, Divider, Spacer } from "@chakra-ui/react"

import {incomeBoxStyle, typoStyle,incomeListStyle, incomeStackStyle, incomeContainerStyle, incomeStackBoxStyle,incomeStackBoxStyled} from '../styles/global'
import { useTranslations } from "next-intl"

const listText = [
  'firstList',
  'secondList',
  'thirdList',
  'fourthList',
  'fifthList'
]

const marketPrice = [
  {
    market:'firstMarket',
    price:'450,000 USDC'
  },
  {
    market:'secondMarket',
    price:'4100,000 USDC'
  },
  {
    market:'thirdMarket',
    price:'200,000 USDC'
  },
  {
    market:'fourthMarket',
    price:'250,000 USDC'
  },
]

export const IncomeSection = () => {
  const incomeSection = useTranslations('IncomeSection')
  const [sliderValue, setSliderValue] = useState(50)
  return (
    <Box {...incomeBoxStyle}>
      <Container {...incomeContainerStyle}>
        <HStack {...incomeStackStyle}>
          <Box {...incomeStackBoxStyle}>
            <Heading {...typoStyle.title.income}> {incomeSection('incomeTitle')} </Heading>
            <UnorderedList {...incomeListStyle}>
              { listText.map((e,i) => <ListItem key={i} {...typoStyle.subtext.income}>{incomeSection(e)}</ListItem>)} 
            </UnorderedList>
          </Box>
          <Spacer />
          <Box {...incomeStackBoxStyled} p="20px">
            <Box>
              <Heading {...typoStyle.subtitle.income}> {incomeSection('incomeTitle')} </Heading>
              <Text {...typoStyle.text.income}> {incomeSection('incomeSubText')}  </Text>
            </Box>
            <Divider />
            <Box>
              <Heading {...typoStyle.subtitle.income}> {incomeSection('subHeading')} </Heading>
              <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
            <HStack >
              {
                marketPrice.map((e,i) => <Box key={i}> <Text {...typoStyle.subtext.income}> {incomeSection(e.market)} </Text> <Heading {...typoStyle.subheadline.income} > {e.price} </Heading> </Box> )
              }
            </HStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}

