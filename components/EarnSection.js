import { Box, Container, VStack, Heading, Text, Image, HStack, Grid, Avatar, Center} from '@chakra-ui/react';
import React from 'react';
//imports style
import { earnGridStyle, typoStyle, earnContainerStyle, earnBoxStyle, earnAvatarStyle } from '../styles/global'

const UserCard = ({ title, text , earnSection}) => (
  <HStack>
    <Image src="http://placehold.it/100x100" {...earnAvatarStyle} />
    <Box>
      <Heading {...typoStyle.title.earn}>{earnSection(title)}</Heading>
      <Text  {...typoStyle.text.earn}>{earnSection(text)}</Text>
    </Box>
  </HStack>
)

export const EarnSection = ({ data, earnSection }) => {
  return (
    <Box {...earnBoxStyle}>
      <Container {...earnContainerStyle}>
        <Heading {...typoStyle.subheadline.earn}> {earnSection('earnHeadLine')}</Heading>
        <Text {...typoStyle.subtext.earn}> {earnSection('earnSubHeadline')}</Text>
        <Grid {...earnGridStyle}>
          { data.map((user, userKey) => <UserCard key={`user-${userKey}`} earnSection={earnSection} {...user} />) }
        </Grid>
      </Container>
    </Box>
  )
}

