import { Box, Container, Heading, Text, Grid, Avatar, Stack, VStack, Center } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

//import style
import { multipleGridStyle, typoStyle, multipleContainerStyle, multipleBoxStyle } from '../styles/global'


const listIcons = [
  {
    icon: '',
    label: 'firstAvatar'
  },
  {
    icon: '',
    label: 'secondAvatar'
  },
  {
    icon: '',
    label: 'thirdAvatar'
  },
  {
    icon: '',
    label: 'fourthAvatar'
  },
  {
    icon: '',
    label: 'fifthAvatar'
  },
  {
    icon: '',
    label: 'sixthAvatar'
  },
  {
    icon: '',
    label: 'seventhAvatar'
  },
  {
    icon: '',
    label: 'eightAvatar'
  },
  {
    icon: '',
    label: 'ninthAvatar'
  },
  {
    icon: '',
    label: 'tenthAvatar'
  },
  {
    icon: '',
    label: 'elevenAvatar'
  },
  {
    icon: '',
    label: 'twelveAvatar'
  },
  {
    icon: '',
    label: 'thirteenAvatar'
  },
  {
    icon: '',
    label: 'fourteenAvatar'
  },
  {
    icon: '',
    label: 'fifteenAvatar'
  },
  {
    icon: '',
    label: 'sixtheenAvatar'
  },
  {
    icon: '',
    label: 'seventeentAvatar'
  },  
  {
    icon: '',
    label: 'eighteenAvatar'
  }
]


const GridListItems = ({icon, label, multipleSection}) => (
  <VStack>
     <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
    <Text {...typoStyle.text.multiple}>{multipleSection(label)}</Text>
  </VStack>
)

export const MultipleSection = () => {  
  const multipleSection = useTranslations('MultipleSection')
  return (
    <Box {...multipleBoxStyle}>
      <Container {...multipleContainerStyle}>
          <Heading {...typoStyle.subheadline.multiple}> Multiple Blockchain Support </Heading>
          <Text {...typoStyle.text.multiple}> Xircus supports multi-chain deployment for multiple blockchain selection </Text>
        <Grid {...multipleGridStyle}>
          {
            listIcons.map((e,i) => (
              <GridListItems key={i} multipleSection={multipleSection} {...e} />
            ))
          }
        </Grid>
      </Container>
    </Box>
  )
}

