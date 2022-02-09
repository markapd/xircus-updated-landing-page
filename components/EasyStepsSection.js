import React from 'react';
import { Box, Center,Heading,Tabs, TabList,Tab,TabPanels,TabPanel, Container,Image } from '@chakra-ui/react'

//imports style
import { easyStepsContainerStyle,easyStepsTabStyle,easyTabStyle,boxTabsStyle, easyImageStyle, easyBoxStyle, typoStyle } from '../styles/global'

export const EasyStepsSection = ({data, easyStepsSection}) => (
    <Box {...easyBoxStyle}>
      <Container {...easyStepsContainerStyle}>
        <Center>
          <Heading {...typoStyle.headline.easy}>{easyStepsSection('easyHeading')}</Heading>
        </Center>
       <Tabs>
        <TabList>
          { data.map((e,i) => <Tab key={`second-${i}`} {...easyStepsTabStyle} > <Box {...boxTabsStyle}> {easyStepsSection(e.tabs)} </Box></Tab>) }
        </TabList>
        <TabPanels >
          { data.map((e,i) => <TabPanel key={`first-${i}`} {...easyTabStyle}><Image {...easyImageStyle} src={e.img} /> </TabPanel> )}
        </TabPanels>
      </Tabs>
      </Container>
    </Box>
  )

