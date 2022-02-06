import { Box, Container,Image, Heading, Text, Grid, Avatar, Stack, VStack, Center } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

//import style
import { multipleGridStyle, typoStyle, multipleContainerStyle, multipleBoxStyle, multipleStackStyle,multipleNftLogoStyle } from '../styles/global'


const listIcons = [
  {
    icon: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=018',
    label: 'firstAvatar'
  },
  {
    icon: 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=018',
    label: 'secondAvatar'
  },
  {
    icon: 'https://cryptologos.cc/logos/fantom-ftm-logo.png?v=018',
    label: 'thirdAvatar'
  },
  {
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=018',
    label: 'fourthAvatar'
  },
  {
    icon: 'https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=018',
    label: 'fifthAvatar'
  },
  {
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6836.png',
    label: 'sixthAvatar'
  },
  {
    icon: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
    label: 'seventhAvatar'
  },
  {
    icon: 'https://cryptologos.cc/logos/celo-celo-logo.png?v=018',
    label: 'eightAvatar'
  },
  {
    icon: 'https://assets.coingecko.com/coins/images/3157/large/poa-network.png?1548331565',
    label: 'ninthAvatar'
  },
  {
    icon: 'https://cryptologos.cc/logos/xdai-stake-logo.png?v=018',
    label: 'tenthAvatar'
  },
  {
    icon: 'https://seeklogo.com/images/H/heco-logo-B2DCC2EA11-seeklogo.com.png',
    label: 'elevenAvatar'
  },
  {
    icon: 'https://styles.redditmedia.com/t5_23mvy8/styles/communityIcon_q3dnpi85rtu71.png',
    label: 'twelveAvatar'
  },
  {
    icon: 'https://assets.website-files.com/5f973c970bea5548ad4287ef/61a7eb59d69e3f7e399a852a_optimistic.png',
    label: 'thirteenAvatar'
  },
  {
    icon: 'https://dappimg.com/media/image/dapp/f090b4626acd4a789fede031edb21db0.blob',
    label: 'fourteenAvatar'
  },
  {
    icon: 'https://cryptologos.cc/logos/aurora-aoa-logo.png?v=018',
    label: 'fifteenAvatar'
  },
  {
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=018',
    label: 'sixtheenAvatar'
  },
  {
    icon: 'https://cryptologos.cc/logos/flow-flow-logo.png?v=018',
    label: 'seventeentAvatar'
  },  
  {
    icon: 'https://www.pngall.com/wp-content/uploads/10/NEAR-Protocol-Crypto-Logo.png',
    label: 'eighteenAvatar'
  }
]

const GridListItems = ({icon, label, multipleSection}) => (
  <VStack {...multipleStackStyle}>
     <Image {...multipleNftLogoStyle} src={icon} />
    <Text {...typoStyle.text.multiple}>{multipleSection(label)}</Text>
  </VStack>
)

export const MultipleSection = () => {  
  const multipleSection = useTranslations('MultipleSection')
  return (
    <Box {...multipleBoxStyle}>
      <Container {...multipleContainerStyle}>
          <Heading {...typoStyle.subheadline.multiple}> {multipleSection('multipleTitle')} </Heading>
          <Text {...typoStyle.text.multiple}> {multipleSection('multipleSubTitle')} </Text>
        <Grid {...multipleGridStyle}>
          { listIcons.map((e,i) => <GridListItems key={i} multipleSection={multipleSection} {...e} /> )}
        </Grid>
      </Container>
    </Box>
  )
}

