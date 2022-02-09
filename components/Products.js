import { Box, Container, Heading, Grid, Image, Text } from "@chakra-ui/react"
import { useTranslations } from "next-intl"

//Style imports
import { productCardStyle, productCardImageStyle,productsGridStyle, typoStyle,productBoxStyle } from '../styles/global'

const ProductCard = ({title,img,text,products}) => (
  <Box {...productCardStyle}>
    <Image {...productCardImageStyle} src={img} />
    <Heading {...typoStyle.title.product}>{products(title)}</Heading>
    <Text {...typoStyle.text.product}>{products(text)} </Text>
  </Box>
)
export const Products = ({data, products}) => (
    <Box>
      <Container {...productBoxStyle}>
        <Heading {...typoStyle.headline.product}>{ products('productHeadline') }</Heading>
        <Grid {...productsGridStyle} >
          { data.map((e,i) => <ProductCard key={i} products={products} {...e} /> )}
        </Grid>
      </Container>
    </Box>
  )


