import { Avatar, Box, Container, HStack, ListItem, List, Text, Spacer } from '@chakra-ui/react';
import React from 'react';

//import icons
import { FaTelegramPlane, FaFacebook , FaTwitter, FaYoutube, FaGithub, FaInstagram} from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

//import styles 
import { footerBoxStyle, typoStyle,footerStackStyle, footerNavStyle,footerContainerStyle } from '../styles/global'

export const Footer = ({data, footer}) => (
    <Box {...footerBoxStyle}>
      <Container {...footerContainerStyle}>
        <HStack {...footerStackStyle}>
        <Text {...typoStyle.text.footer}> {footer('footerRights')} </Text>
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
            { data.map((e,i)=> <ListItem key={i} {...typoStyle.text.footer}>{footer(e.label)}</ListItem> )}
          </List>
        </HStack>
      </Container>
    </Box>
  )

