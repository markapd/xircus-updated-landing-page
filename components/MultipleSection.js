import { Box, Container,Image, Heading, Text, Grid, Avatar, Stack, VStack, Center } from '@chakra-ui/react';

//import style
import { multipleGridStyle, typoStyle, multipleContainerStyle, multipleBoxStyle, multipleStackStyle,multipleNftLogoStyle } from '../styles/global'

const GridListItems = ({icon, label, multipleSection}) => (
  <VStack {...multipleStackStyle}>
     <Image {...multipleNftLogoStyle} src={icon} />
    <Text {...typoStyle.text.multiple}>{multipleSection(label)}</Text>
  </VStack>
)

export const MultipleSection = ({data, multipleSection}) => {  
  return (
    <Box {...multipleBoxStyle}>
      <Container {...multipleContainerStyle}>
          <Heading {...typoStyle.subheadline.multiple}> {multipleSection('multipleTitle')} </Heading>
          <Text {...typoStyle.text.multiple}> {multipleSection('multipleSubTitle')} </Text>
        <Grid {...multipleGridStyle}>
          { data.map((e,i) => <GridListItems key={i} multipleSection={multipleSection} {...e} /> )}
        </Grid>
      </Container>
    </Box>
  )
}

