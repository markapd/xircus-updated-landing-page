import { useRef } from 'react'
 
import { Box, Button, Container, HStack, Select, Heading,  Spacer, ListItem, List, Image,   useDisclosure,  Drawer, DrawerOverlay, DrawerContent,
        DrawerCloseButton,DrawerHeader,DrawerBody,Input ,DrawerFooter
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
//imports style
import { navListStyle, navItemStyle, selectStyle, logoStyle, headerBoxStyle , typoStyle, headerDrawerStyle, headerContainerStyle }     from '../styles/global'


const navItem = [
  {
    path: '#',
    label: 'FEATURES',
  },
  {
    path: '#',
    label: 'GET STARTED',
  },
  {
    path: '#',
    label: 'HOW TO EARN',
  },

]

const language = [
  {
    country: 'America',
    label: 'English'
  },
  {
    country: 'Japan',
    label: 'Nihongo'
  },
  {
    country: 'France',
    label: 'Frence'
  },
  {
    country: 'Spain',
    label: 'Spanish'
  },
]

const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Button {...headerDrawerStyle}  ref={btnRef} onClick={onOpen}>
          <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color='black' />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
          <List  >
              { 
                navItem.map(e => (
                  <ListItem {...typoStyle.text.header} {...navItemStyle}>{e.label}</ListItem>
                ))
              }
            </List>
            <Select {...typoStyle.text.header} >
            {
              language.map(e => (
                <option value='option1'>{e.label}</option>
              ))
            }
            </Select>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export const Header = () => {
  return (
    <Box {...headerBoxStyle}>
      <Container {...headerContainerStyle}>
        <HStack>
          <Heading><Image {...logoStyle} src="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" /></Heading>
          <Heading {...typoStyle.headline.logo}>Xircus</Heading>
          <Spacer />
          <DrawerExample />
            <List {...navListStyle} >
              { 
                navItem.map(e => (
                  <ListItem {...typoStyle.text.header} {...navItemStyle}>{e.label}</ListItem>
                ))
              }
            </List>
          <Select  {...typoStyle.text.header} {...selectStyle}>
            {
              language.map(e => (
                <option value={e.country}>{e.label}</option>
              ))
            }
        </Select>
        </HStack>
      </Container>
    </Box>
  )
}

