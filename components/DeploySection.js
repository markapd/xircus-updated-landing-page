import { Box,Tabs,TabList,Tab,TabPanels,TabPanel, Container, Heading, Center, Image} from "@chakra-ui/react"
import { useTranslations } from "next-intl"

// Imports style
import { deployContainerStyle,deployTabs,deployTabButton,tabBoxStyle, deployImageStyle } from '../styles/global'



const tabList = [
  {
    id:0,
    tabs: 'deployFirstTab',
    img: 'https://uc98bb06d1a475f61e41afa3df74.previews.dropboxusercontent.com/p/thumb/ABY2Aqx3AWH2XJ9RwtnxpZjgFvYycckOuvKI6nmW5q6_BxBhtwk_VVsuZFMg0numk62y_h6h5YkXfvLSYA8GJAu97xKRaWHgyKMfl2PDOLba3NsqpGnvQ6aT_sF4HMM-36gfiMrTns7jY_nKWHc3olpG5-dwH0DK2kHuIt_9i9Stc9RwpPJlvWC_IJUsh_ucevHekjMyJPTzi4htMtWbuTPfrbv77X69-nYdd3Yk4XLqztOatlmbeDPavM59Q2jwg-sFWbgntA4OguapmdlLfjlr2D3igjZxaCkITDeA4J9oOU88jyGS6Wgh3EVAwXTw1GBO_hdQuu0wwB4LmSYEYyk-hta5-CJ0Z7VHO9dg8648yaavT_-ao_K2YJ4bGizLAY4/p.png'  
  },
  {
    id:1,
    tabs: 'deploySecondTab',
    img: 'xccx'
  },
  {
    id:2,
    tabs: 'deployThirdTab',
    img: 'Game Item Marketplaces'
  },
  {
    id:3,
    tabs: 'deployFourthTab',
    img: 'qwwqw'
  },
  {
    id:4,
    tabs: 'deployFithTab',
    img: 'vcvcv'
  },
  {
    id:5,
    tabs: 'deploySixthTab',
    img: 'cvcv'
  },
  {
    id:6,
    tabs: 'deploySeventhTab',
    img: 'rtrt'
  }
]

export const DeploySection = () => {
  const deployTranslation =  useTranslations('DeploySection')
  return (
    <Box>
      <Container {...deployContainerStyle}>
        <Center>
          <Heading> {deployTranslation('titleHead')} </Heading>
        </Center>
        <Tabs {...deployTabs} >
          <TabList i >
            {
              tabList.map((e,i) => (
                <Tab key={`first${i}`}  {...deployTabButton}>
                  <Box {...tabBoxStyle}>{deployTranslation(e.tabs)}</Box>
                </Tab>
              ))
            }
          </TabList>
          <TabPanels>
            {
              tabList.map((e,i)=> (
                <TabPanel key={`second-${i}`}>
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

