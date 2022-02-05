import { Box, Container, Heading, ListItem,List, Image, Text } from '@chakra-ui/react';


//import style
import { carouselListStyle,carouselContainerStyle,carouselCardStyle,carouselImageStyle, carouselStyle, typoStyle, carouselBoxStyle } from '../styles/global'

//import carousel
import Carousel from 'react-elastic-carousel'

const carouselItems = [
  {
    img:'https://ucce01d8e832e880935d37f593a5.previews.dropboxusercontent.com/p/thumb/ABYidcGJKKXmCLHH2lEatl7eNmWhpj3_4IwKoFgamF1tt1VMMQXi85YCQcUEkob_k_sWpH4hGh0p-DCfinKa4qKMavzFSfpBpi69rCI_jTUMapfGh2J0Zu1qltB1hj8K4ggG_dNX5txXle3SJHu4aFkuBjgluKMuO9fEjZyyJQ2xI51E-aTMv6Nh7mv6p_kC7ldjHnz4BvHYZJW7wYGKMHRFhz-QtI4oPs3sxe1REwIt9RenZfcf6SRtBDVRj4c9fJ7Y7pFfGy79JXKQmjkf_wCuYnIr22C97V3keJPG0mm2t6V517JSBVVOErsSoSV_27FwcrZ9m7KEOsFn_7-pIOFQcV5b_9vYRsLktSrsQlNB3NZRzCqO--DRE7BsARCgkdg/p.png',
    text:'Staking'
  },
  {
    img:'https://ucce19b3eabb2afe525429648e5e.previews.dropboxusercontent.com/p/thumb/ABbzN4f6fcmtBO_mB023TbCefaNpanEnRbQPeILTzk4GiEzDsV05-qS_Z5rUWdkP9ps8wRlvY0VEhc1TlV_O8Jx7M8BkVnKotbqMpdwUuc1gLGKhWKkNp78489IhW_bzcnqAEsuRl_T2W4Atr_iP3i_WePRsDD69s2VvzCq1GhiDy38tpbRR1s-BVZo1pbni79DkZEQ-BMX7_r2ICpKSSWjoYVyHcEibimozp0qEkVZ_NWA_iX3ZLNQinXBoU5vt1Hj8X5h_RK7gRAXp2Zwhx8Qutd7IbT0dDU8H3q9WeiBDrkWGP1jKe_Jp2xqlcNQRrqP4DLjdFM38L3vsSLR8zqY-cTlJwUOJgX5fA1zmW7QDgF5qKpX-QuY2I8QpuPdUl-Y/p.png',
    text:'Randomizer'
  },
  {
    img:'https://ucc167f186c43e46efe3f9584b6c.previews.dropboxusercontent.com/p/thumb/ABaGYezkVmkhESSB6-cYLD2WW75Z2Svim5M5mRL152Z-EqGxNfdO2AXfsGJGy6Q04WIeW6b9zvi_GDKYZJ8skc4hu6d6ImBo-odxzVKXIXVmx5KtQEmJ9IpjwtjVhv0uWx1s5jchknrtg5A2Zm0DbEfzkt2Ier5DoWw_TvKqi3W04duEiFjFTVbs2R5r3qlTHtqmc2eDVS0HxJ9UkEyvK_Sh-iJmXp3FWUR6jSE27iR2yQWysmRJPVFl-R765Jnyg4euptFE31Os2KeAFDm79p5fdgDyV-MWmz-PReomc0PGTGUpYCEHkCvRhfnuTbI9nR81wDQ9XW92bvSGXBzdCy_dp-M-Nbl1Az9amPciWHE5REtKP3Bvi0wgh9W6cJ3ssBg/p.png',
    text:'NFT Airdrop'
  },
  {
    img:'https://ucb223ae6764305a7b8487193a5c.previews.dropboxusercontent.com/p/thumb/ABbaOODX2bP1Ll6WUQM1yvXymuuwJeYsM6uxdkWdREuh6q3E7DPdhX2RMQsPPokI4QfZxIrgom4_E6cy5MF4-g0R_fT76gzG5p1uF0o8a2frgHuLpNEHa2jMAy0Fjp9tWTSTSJuFvB7hAAW8inQ8vdydjGGhjJm-6czuxY4owBB0MpSC5d7GdR3YzMv-AoQhp0rolGQlRDzc6EIyDGIR2WJxB1C6vz-mKcU_1fFhF2yB227ICdhu9pDgLAmAQCt0uNrtSsWwuCS8KhpalcD-Q5MV3zUynHSyhsMvI9Fn7iC2fQDvU1RRzrPa_7KG-IunAP0MkwraHH7NazOqIkvJ7irMEn7i0-gWRirrhOV0xxEyYorj9EGXm1iVsgBLhjSmjDI/p.png',
    text:'Token Auctions'
  }
]

const CarouselCard = ({img, text}) => (
  <ListItem>
    <Box {...carouselCardStyle}>
      <Container>
        <Image {...carouselImageStyle} src={img} />
        <Text>{text}</Text>
      </Container>
    </Box>
  </ListItem>
)

export const CarouselSection = () => {
  return (
    <Box {...carouselBoxStyle}>
      <Container {...carouselContainerStyle}>
        <Heading {...typoStyle.title.carousel} > Built-In and Add-On Features </Heading>
        <List {...carouselListStyle}> 
          <Carousel {...carouselStyle} >
            {
              carouselItems.map((e,i)=> (
                  <CarouselCard key={i} {...e} />
              ))
            }
          </Carousel>
        </List>
      </Container>
    </Box>
  )
}

