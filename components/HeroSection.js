import { Box, Container, Image, VStack, Heading, Text, Button, HStack } from '@chakra-ui/react'
import { GiPlayButton } from "react-icons/gi";

// imports style
import { heroBoxStyle, heroLogoStyle, heroTextStyle  , typoStyle, heroPlayButton,
   heroGradientButton, asSeenImageContainerStyle, asSeenImageStyle, asSeenBoxImage,heroButton,heroAsSeenStyle,heroContainerStyle } from '../styles/global'



const brandLogo = [
  'https://uc62d9e9f51b297fe70cd62e2f16.previews.dropboxusercontent.com/p/thumb/ABbSLzpvnvefbFZnHMRu3QTeuGNoy8kU2oVF-uPXRVNgyavtlpKD1odgbhVL-VIjBDhwsuggwuOOPAUql20ZA9HBZZ3SKPLXpPmYUpj0sIogxWeK-R3ak5gYAM9WGB3zmYTpHG5p37rqqEV0Hxd8YMaZWSOvcaGEZaockYIgj8FH0DeYQ9WvPxIOoAErTm5AwT74tnETDjUQS-kD1rSSBiaktWKuaexirsnoa0gWLGBfWnJsLRNQ45ujigjZH7QXXxxcccjuCN0KUzSUKPW0vWLbOfVet8Kh2APRBNRnVHW0rUWdbxH7Z4rxegdEE2Dhj6h_OgiKTzuf8oaFjY8VKED9gwVEOZz8HiCUB1lU6O48clhuXfem_yvEAFrWTH9WPBA/p.png',
  'https://ucb4217f7ae59be737da591e9bf4.previews.dropboxusercontent.com/p/thumb/ABaS7SBXRDu5_yrV-YIRZ92aNM19Pd8D9pVu9tJog7nGMermav72A35FqqYEKhpx2wiuyBIW6Nu-t-irewXU9nB6zOtNDJpqP0pp3s131ECaS1QwZDpkun8Uokr8jbqp1EUrjj3ECZx3DPSCeWkZajMtLK-q96q0JbZsK7dEVhkFnJHyMJ6XBMy8wkoqpKKnp9D8199I55hSl6ZOQkubGO5rUXa54yICn3X1EPsD42kEZFpdabYFz7UB74jpTNnZPRGW7411evqkWjawrPK2QpDxkS4JLIxYNHpaCP2ewcBVgqkRZYCkUkhxmOI5zgjAlqcjmxB7_7GCAJtijyWVnEAPDA8KQm0k3Cht3gKlBZJijwhFgbGZMccrclLFPuYqKCI/p.png',
  'https://ucdd6a8875ff85219e5aeebbd950.previews.dropboxusercontent.com/p/thumb/ABZTggQauV-XSXcrebtjreYBiuUqwhOTcPpFurcvHdJhmVWs2WzDfAhNjAnJKBamYbTPbIh5tt3F641eyieK5capiXVctZSx86e9vUEMuB7nbXdS_MYHcK3_XXhzP5Xi7TR3IMBW5RMYO6J9_HU7Cm-rMulrJZ5oJRUFCYSWj67jo1x7n_ukZFQxWOKlCg5EZVVfWI9Sp7W-chkGU3ylqby_IOBpVl1EsRq2_85ZVw8o3dC_-Dmqt3mfQ2aSqNGwf6JtMyqNVFhnnAChJ7uWCtMjU-6BjeFx81YlxGEXoeS_NTM9iBI5WbBCuPdmL8FopMggm2h6Dpd11YG3sOzK49g9sPUzVbONmW8326jZ9v1Y9n2UD86ZKQ_PhrCTJ3OnBWY/p.png',
  'https://www.destinationanalysts.com/wp-content/uploads/2018/05/benzinga-logo.png',
  'https://upload.wikimedia.org/wikipedia/en/d/d6/Digital-Journal-Logo.png'
]
export const HeroSection = () => {
  return (
    <Box {...heroBoxStyle}>
      <Container {...heroContainerStyle}>
        <VStack spacing={30}>
          <Image {...heroLogoStyle} src="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" />
          <Heading {...typoStyle.subheadline.hero}> XIRCUS </Heading>
          <Heading {...typoStyle.subheadline.hero}> Start your NFT business today! </Heading>
          <Text {...typoStyle.text.hero}> Deploy your customizable NFT marketplace in minutes<br />bundled with awesome features </Text>
          <Button {...heroPlayButton}><GiPlayButton /></Button>
          <HStack {...heroButton}>
            <Button {...typoStyle.text.hero} {...heroGradientButton}> Doploy Marketplace </Button>
            <Button {...typoStyle.text.hero} {...heroGradientButton}> Get XircusPunks for<br/> Early Access </Button>
          </HStack>
        </VStack>
      </Container>
      <Container {...asSeenImageContainerStyle}>
        <HStack {...heroAsSeenStyle}>
            <Box {...asSeenBoxImage}> As Seen On</Box>
            {
              brandLogo.map(e => (
              <Box {...asSeenBoxImage}>
                <Image {...asSeenImageStyle} src={e} />
              </Box>
              ))
            }
            
           
           
        </HStack>
        </Container>
    </Box>
  )
}

