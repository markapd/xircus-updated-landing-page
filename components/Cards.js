import { Box, Grid, Container, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
// Import Style
import { cardGridStyle, cardImageStyle, cardStyle,cardContainerStyle,cardBoxStyle, typoStyle} from '../styles/global'

const GridCard = ({img, title, text, cards}) => (
  <Box {...cardStyle}>
    <Image {...cardImageStyle} src={img}/>
    <Heading {...typoStyle.title.card}>{cards(title)}</Heading>
    <Text {...typoStyle.text.card}>{cards(text)}</Text>
  </Box>
)

export const Cards = ({data, cards}) => (
    <Box {...cardBoxStyle}>
      <Container {...cardContainerStyle}>
        <Grid  {...cardGridStyle}>
          { data.map((e,i)=> <GridCard key={i} cards={cards} {...e} />) }
        </Grid>
      </Container>
    </Box>
  )

