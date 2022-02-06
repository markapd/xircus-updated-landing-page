import { useRef } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Container, HStack, Select, Heading,  Spacer, ListItem, List, Image,   useDisclosure,  Drawer, DrawerOverlay, DrawerContent,
        DrawerCloseButton,DrawerHeader,DrawerBody,Input ,DrawerFooter
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useTranslations } from 'next-intl';

//imports style
import { navListStyle, navItemStyle, selectStyle, logoStyle, headerBoxStyle , typoStyle, headerDrawerStyle, headerContainerStyle }     from '../styles/global'

const navItem = [
  {
    path: '#',
    label: 'FEATURES',
  },
  {
    path: '#',
    label: 'GET-STARTED',
  },
  {
    path: '#',
    label: 'HOW-TO-EARN',
  },
]
const language = [
  {
    path: '/',
    label: 'ENGLISH'
  },
  {
    path: '/fr',
    label: 'FRENCE'
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
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}finalFocusRef={btnRef} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color='black' />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <List  >
              { navItem.map((e,i) => <ListItem key={i} {...typoStyle.text.header} {...navItemStyle}>{e.label}</ListItem> )}
            </List>
            <Select {...typoStyle.text.header}>
              { language.map((e,i)=>  <option key={i} value={e.path}>{e.label}</option> ) }
            </Select>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export const Header = () => {
const header = useTranslations('Header');
const router = useRouter()

  return (
    <Box {...headerBoxStyle}>
      <Container {...headerContainerStyle}>
        <HStack>
          <Heading><Image {...logoStyle} src="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" /></Heading>
          <Heading {...typoStyle.headline.logo}>{header('titleLogo')}</Heading>
          <Spacer />
          <DrawerExample />
            <List {...navListStyle} >
              {  navItem.map((e,i) => <ListItem key={i} {...typoStyle.text.header} {...navItemStyle}>{header(e.label)}</ListItem>) }
            </List>
          <Select  {...typoStyle.text.header} {...selectStyle} onChange={(e) => router.push(e.target.value)}>
            { language.map((e,i) => <option key={i} value={e.path}>{header(e.label)}</option> ) }
        </Select> 
        </HStack>
      </Container>
    </Box>
  )
}

