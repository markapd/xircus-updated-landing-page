import { Box, Container, Image, VStack, Heading, Text, Button, HStack } from '@chakra-ui/react'
import { GiPlayButton } from "react-icons/gi";

// imports style
import { heroBoxStyle, heroLogoStyle, heroTextStyle  , typoStyle, heroPlayButton, heroGradientButton1,heroGradientButton2, asSeenImageContainerStyle, asSeenImageStyle, asSeenBoxImage,heroButton,heroAsSeenStyle,heroContainerStyle } from '../styles/global'

export const HeroSection = ({data, heroSection}) => {
  return (
    <Box {...heroBoxStyle}>
      <Container {...heroContainerStyle}>
        <VStack spacing={30}>
          <Image {...heroLogoStyle} src="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" />
          <Heading {...typoStyle.subheadline.hero}> {heroSection('heroHeadline')} </Heading>
          <Heading {...typoStyle.subheadline.hero}> {heroSection('heroHeadline2')} </Heading>
          <Text {...typoStyle.text.hero}> {heroSection('heroSubHeadline')} </Text>
          <Button {...heroPlayButton}>
            <GiPlayButton />
          </Button>
          <HStack {...heroButton}>
            <Text  {...typoStyle.text.hero} {...heroGradientButton1} > {heroSection('firstButton')} </Text>
            <Text {...typoStyle.text.hero} {...heroGradientButton2} > {heroSection('secondButton')}</Text>
          </HStack>
        </VStack>
      </Container>
      <Container {...asSeenImageContainerStyle}>
        <HStack {...heroAsSeenStyle}>
            <Box {...asSeenBoxImage}>{heroSection('asSeen')} </Box>
            { data.map((e,i) => <Box key={i} {...asSeenBoxImage}> <Image {...asSeenImageStyle} src={e} /></Box> )}  
        </HStack>
      </Container>
    </Box>
  )
}

