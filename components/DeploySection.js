import { Box,Tabs,TabList,Tab,TabPanels,TabPanel, Container, Heading, Center, Image} from "@chakra-ui/react"

// Imports style
import { deployContainerStyle,deployTabs,deployTabButton,tabBoxStyle, deployImageStyle } from '../styles/global'



const tabList = [
  {
    tabs: 'General Marketplaces',
    img: 'https://uc98bb06d1a475f61e41afa3df74.previews.dropboxusercontent.com/p/thumb/ABY2Aqx3AWH2XJ9RwtnxpZjgFvYycckOuvKI6nmW5q6_BxBhtwk_VVsuZFMg0numk62y_h6h5YkXfvLSYA8GJAu97xKRaWHgyKMfl2PDOLba3NsqpGnvQ6aT_sF4HMM-36gfiMrTns7jY_nKWHc3olpG5-dwH0DK2kHuIt_9i9Stc9RwpPJlvWC_IJUsh_ucevHekjMyJPTzi4htMtWbuTPfrbv77X69-nYdd3Yk4XLqztOatlmbeDPavM59Q2jwg-sFWbgntA4OguapmdlLfjlr2D3igjZxaCkITDeA4J9oOU88jyGS6Wgh3EVAwXTw1GBO_hdQuu0wwB4LmSYEYyk-hta5-CJ0Z7VHO9dg8648yaavT_-ao_K2YJ4bGizLAY4/p.png'  
  },
  {
    tabs: 'Music Marketplaces',
    img: 'xccx'
  },
  {
    tabs: 'Short Video Marketplaces',
    img: 'Game Item Marketplaces'
  },
  {
    tabs: 'Adult Marketplaces',
    img: 'qwwqw'
  },
  {
    tabs: 'Fan Marketplaces',
    img: 'vcvcv'
  },
  {
    tabs: 'Subscription Marketplaces',
    img: 'cvcv'
  },
  {
    tabs: '10k Avatar Marketplaces',
    img: 'rtrt'
  }
]

export const DeploySection = () => {
  return (
    <Box>
      <Container {...deployContainerStyle}>
        <Center>
          <Heading> What Can You Deploy </Heading>
        </Center>
        <Tabs {...deployTabs} >
          <TabList i >
            {
              tabList.map(e => (
                <Tab {...deployTabButton}>
                  <Box {...tabBoxStyle}>{e.tabs}</Box>
                </Tab>
              ))
            }
          </TabList>
          <TabPanels>
            {
              tabList.map(e => (
                <TabPanel>
                  <Image {...deployImageStyle} src={e.img} />
                </TabPanel>
              ))
            }
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  )
}

