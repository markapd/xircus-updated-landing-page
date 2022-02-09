import { Box, Container, Heading, ListItem,List, Image, Text } from '@chakra-ui/react';


//import style
import { carouselListStyle,carouselContainerStyle,carouselCardStyle,carouselImageStyle, carouselStyle, typoStyle, carouselBoxStyle } from '../styles/global'
//import carousel
import Carousel from 'react-elastic-carousel'

const CarouselCard = ({img, text, carouselSection}) => (
  <ListItem>
    <Box {...carouselCardStyle}>
      <Container>
        <Image {...carouselImageStyle} src={img} />
        <Text>{carouselSection(text)}</Text>
      </Container>
    </Box>
  </ListItem>
)

export const CarouselSection = ({data, carouselSection}) => (
    <Box {...carouselBoxStyle}>
      <Container {...carouselContainerStyle}>
        <Heading {...typoStyle.title.carousel} > {carouselSection('carouselTitle')} </Heading>
        <List {...carouselListStyle}> 
          <Carousel {...carouselStyle} >
            { data.map((e,i)=> <CarouselCard key={i} carouselSection={carouselSection} {...e} />)  }
          </Carousel>
        </List>
      </Container>
    </Box>
  )

