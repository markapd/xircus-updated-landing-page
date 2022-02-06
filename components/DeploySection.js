import { Box,Tabs,TabList,Tab,TabPanels,TabPanel, Container, Heading, Center, Image} from "@chakra-ui/react"
import { useTranslations } from "next-intl"

// Imports style
import { deployContainerStyle,deployTabs,deployTabButton,tabBoxStyle, deployImageStyle, typoStyle } from '../styles/global'

const tabList = [
  {
    id:0,
    tabs: 'deployFirstTab',
    img: 'https://uc3c4d2d3f033955552eeca63d7b.previews.dropboxusercontent.com/p/thumb/ABbPf3VytGnyq0SEV5vuWmksIBW-RTBCITTdCX8XuqOEJYkxiKoIbWFTaTQa8mfRomzeqHTYkL4PBgO2_eNz1cSZI-iil0j8ijKssKXyTkDHGha34GNew5czZLLiTZVAdgSOMlyX5UzIG8Nt1M5GZLmtWzc_CWg9mVsK2b1X1dePSJ1aRqcxdvZ-K6ofAgtQ2xQIECDXnDTNwuCY6Spq76XqlAeN1y6qoP0y23POqqAHRURPsKfp38l_qJekqSVSxffBeGsrwWz9zL7XKSu7nu6FkucgUBJFWyk-MKc-HnhEHtDNoYN9zd3vGO7u14LHH4IVwjajXr1YeuXxUq9nhQmHoZxd64ZwDkCknStWvUriE-tEIpUy0CKD9iiUBYW4J3w/p.png'  
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
          <Heading {...typoStyle.headline.deploy}> {deployTranslation('titleHead')} </Heading>
        </Center>
        <Tabs {...deployTabs} >
          <TabList i >
            { tabList.map((e,i) => <Tab key={`first${i}`}  {...deployTabButton}> <Box {...tabBoxStyle}>{deployTranslation(e.tabs)}</Box> </Tab> ) }
          </TabList>
          <TabPanels>
            { tabList.map((e,i)=>  <TabPanel key={`second-${i}`}> <Image {...deployImageStyle} src={e.img} /></TabPanel>) }
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  )
}

