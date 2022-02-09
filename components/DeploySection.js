import { Box,Tabs,TabList,Tab,TabPanels,TabPanel, Container, Heading, Center, Image} from "@chakra-ui/react"

// Imports style
import { deployContainerStyle,deployTabs,deployTabButton,tabBoxStyle, deployImageStyle, typoStyle } from '../styles/global'

export const DeploySection = ({data, deployTranslation}) => (
  <Box>
    <Container {...deployContainerStyle}>
      <Heading {...typoStyle.headline.deploy}> {deployTranslation('titleHead')} </Heading>
      <Tabs {...deployTabs} >
        <TabList mt="39px">
          { data.map((e,i) => <Tab key={`first${i}`}  {...deployTabButton}> <Box {...tabBoxStyle}>{deployTranslation(e.tabs)}</Box> </Tab> ) }
        </TabList>
        <TabPanels>
          { data.map((e,i)=>  <TabPanel key={`second-${i}`}> <Image {...deployImageStyle} src={e.img} /></TabPanel>) }
        </TabPanels>
      </Tabs>
    </Container>
  </Box>
  )

