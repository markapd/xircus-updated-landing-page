import { Box, Container, VStack, Heading, Text, Image, HStack, Grid, Avatar, Center} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import React from 'react';

//imports style
import { earnGridStyle, typoStyle, earnContainerStyle, earnBoxStyle, earnAvatarStyle } from '../styles/global'

const data = [
  {
    title: 'firstBoxHead',
    text: 'firstBoxText'
  },
  {
    title: 'secondBoxHead',
    text: 'secondtBoxText'
  },  
  {
    title: 'thirdBoxHead',
    text: 'thirdBoxText'
  },
  {
    title: 'fourthBoxHead',
    text: 'fourthBoxText'
  },
  {
    title: 'fifthBoxHead',
    text: 'fifthBoxText'
  },
  {
    title: 'sixthBoxHead',
    text: 'sixthBoxText'
  },
]

const UserCard = ({ title, text , earnsection}) => (
  <HStack>
    <Image src="http://placehold.it/100x100" {...earnAvatarStyle} />
    <Box>
      <Heading {...typoStyle.title.earn}>{earnsection(title)}</Heading>
      <Text  {...typoStyle.text.earn}>{earnsection(text)}</Text>
    </Box>
  </HStack>
)

export const EarnSection = ({ items = data }) => {
  const earnsection = useTranslations('EarnSection')
  return (
    <Box {...earnBoxStyle}>
      <Container {...earnContainerStyle}>
            <Heading {...typoStyle.subheadline.earn}> {earnsection('earnHeadLine')}</Heading>
            <Text {...typoStyle.subtext.earn}> {earnsection('earnSubHeadline')}</Text>
          <Grid {...earnGridStyle}>
            {
              items.map((user, userKey) => <UserCard key={`user-${userKey}`} earnsection={earnsection} {...user} />)
            }
          </Grid>
      </Container>
    </Box>
  )
}

