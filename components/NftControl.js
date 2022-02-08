import { Box, Container,Stack, Heading, VStack, Text, HStack, Image, Button } from '@chakra-ui/react'

//syle imports 
import { nftCardWraperStyle,parentBox,nftControlBoxStyle, nftControlContainerStyle, nftBoxStyle, nftCardStack  ,nftCardImageStyle, nftControlBigButton, typoStyle } from '../styles/global'

const TokenCard = ({text,img, nftControl}) => (
  <Box {...parentBox}>
    <Container>
    <Box {...nftBoxStyle}>
      <Image {...nftCardImageStyle} src={img} />
      <Text {...typoStyle.text.nftControl}>{ nftControl((text))} </Text>
    </Box>
    </Container>
  </Box>
)
export const NftControl = ({data ,nftControl}) => {
  return (
    <Box {...nftControlBoxStyle}>
      <Container {...nftControlContainerStyle}>
          <Heading {...typoStyle.headline.nft}> {nftControl('headLine')}  </Heading>
          <Text {...typoStyle.subheadline.nft}>    {nftControl('subHeadline')}  </Text>
          <HStack alignItems='center' {...nftCardStack}>
            { data.map((e,i) => <Stack {...nftCardWraperStyle} key={i}><TokenCard nftControl={nftControl} {...e} /> </Stack>) }
          </HStack>
        <Text {...typoStyle.text.nft} {...nftControlBigButton}> {nftControl('bigButton')}</Text>
      </Container>
    </Box>  
  )
}

