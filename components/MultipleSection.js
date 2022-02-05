import { Box, Container, Heading, Text, Grid, Avatar, Stack, VStack, Center } from '@chakra-ui/react';

//import style
import { multipleGridStyle } from '../styles/global'


const listIcons = [
  {
    icon: '',
    label: 'BSC'
  },
  {
    icon: '',
    label: 'POLIGON'
  },
  {
    icon: '',
    label: 'FANTOM'
  },
  {
    icon: '',
    label: 'ETHERIUM'
  },
  {
    icon: '',
    label: 'MOONBEAM'
  },
  {
    icon: '',
    label: 'MOONDRIVER'
  },
  {
    icon: '',
    label: 'AVALANCHE'
  },
  {
    icon: '',
    label: 'CELO'
  },
  {
    icon: '',
    label: 'POA'
  },
  {
    icon: '',
    label: 'XDAI'
  },
  {
    icon: '',
    label: 'HECO'
  },
  {
    icon: '',
    label: 'ARBITRUM'
  },
  {
    icon: '',
    label: 'OPTIMISM'
  },
  {
    icon: '',
    label: 'FUSE'
  },
  {
    icon: '',
    label: 'AURORA'
  },
  {
    icon: '',
    label: 'SOLANA'
  },
  {
    icon: '',
    label: 'FLOW'
  },
  {
    icon: '',
    label: 'NEAR'
  }
]


const GridListItems = ({icon, label}) => (
  <VStack>
     <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
    <Text fontSize="sm">{label}</Text>
  </VStack>
)

export const MultipleSection = () => {
  return (
    <Box my="100px">
      <Container maxW="container.lg">
          <Heading textAlign="center" mb="20px"> Multiple Blockchain Support </Heading>
          <Text textAlign="center" mb="60px"> Xircus supports multi-chain deployment for multiple blockchain selection </Text>
        <Grid {...multipleGridStyle}>
          {
            listIcons.map(e => (
              <GridListItems {...e} />
            ))
          }
        </Grid>
      </Container>
    </Box>
  )
}

