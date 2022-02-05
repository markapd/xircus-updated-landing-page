import { Avatar, Box, Container, HStack, ListItem, List, Text, Spacer } from '@chakra-ui/react';
import React from 'react';

//import icons
import { FaTelegramPlane, FaFacebook , FaTwitter, FaYoutube, FaGithub, FaInstagram} from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

//import styles 
import { footerBoxStyle, typoStyle,footerStackStyle, footerNavStyle } from '../styles/global'

const footerNav = [
  {
    path:'#',
    label: 'Blog'
  },
  {
    path:'#',
    label: 'Resources'
  },
  {
    path:'#',
    label: 'Terms and Condition'
  },
  {
    path:'#',
    label: 'Privacy'
  },
  {
    path:'#',
    label: 'Contact Us'
  },
]
export const Footer = () => {
  return (
    <Box {...footerBoxStyle}>
      <Container maxW="container.lg">
        <HStack {...footerStackStyle}>
        <Text {...typoStyle.text.footer}> All Rights Reserved 2021 | Xircus Pte. Ltd </Text>
        <Spacer />
          <HStack>
              <FaTelegramPlane />
              <FaFacebook />
              <FaTwitter />
              <FaYoutube />
              <FaGithub />
              <FaInstagram />  
              <AiFillLinkedin />  
          </HStack>
          <Spacer />
          <List {...footerNavStyle}>
            {
              footerNav.map(e => (
                <ListItem {...typoStyle.text.footer}>{e.label}</ListItem>
              ))
            }
          </List>
        </HStack>
      </Container>
    </Box>
  )
}

