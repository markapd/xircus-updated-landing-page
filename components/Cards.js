import { Box, Grid, Container, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { cardGridStyle, cardImageStyle, cardStyle,cardContainerStyle,cardBoxStyle, typoStyle} from '../styles/global'

const gridCardsItems = [
  {
    img:'https://uca20e375245960d327ee0eb8226.previews.dropboxusercontent.com/p/thumb/ABYsYhBgKPG4dvUBWkkQRiHJV9CCqzsxQMOXEvdY8EbcNdBBjkok4gMkfErmyYVogcDZkFQc8hB3t1N8xmu2UNhd3S6p6c1CbALANBEapcVhvY84TqAV8U3B2VWFFBOIbbsA0pRRYJbTU2vMnx1nGbm1DYragcZxfOfZYXnQ4CE947wZkbXAgLBaqj-AztXk-lbY9hW-f-BoWdx-JZB6scK1JtpmE0DpbgC0Xb2dtN4YJObwl3EAts7dNcmDi-FfjXhVTLXSCtff31cxJRsyjXk4-ihP6XewGjhz9dKHjh8bB3tWKNaVxfKy3RybjqyLymcunKIZ9z-uiIvFeNkIg_fF6mUSLDQzN74bQG1nDqHqcRd_q5coawg5KQRojqzxQHU/p.png',
    title:'NFTs',
    text:'Fully customizable NFT collection for single or multiple edition with built-in sale, royalty and split features '
  },
  {
    img:'https://ucb5f6a9afbf1da0685d11865a74.previews.dropboxusercontent.com/p/thumb/ABbR5uwSBR8LQC5qVzhAcZOnHmDc6xsdHp1O6HINU2GwTU8yoUDIg8lupsWGJAPwmCYNaREUeIj8QwIi7uaX643TfrLDWCcNkI7F6a_8VCXKCn6wJ4vQ7lkKnNvb80-KccKVp9gDvvmMHJRYN08AIZEhiOZYrTEM2EvvMWiL9v8L-h_E5hIFORizHRW6N8qwdaJ5jZjTawZAMQx9ZZB2pDjdrKtbNtKgrBd3DhVJiMsG22-7HAzyw4n07ZsszMmD0hTnhmCIQHOE7QTNtjh2K3gPNKVEFEW83CgFyp4ruJ5helbBolsdqtjvbzOB3QCcMNB9PAUTHywEBHyd5zm7V5fPgFUi8yYcgP1vElujUTUKNKuSw3HbdltNGddxZo-lCg0/p.png',
    title:'Marketplaces',
    text:'Deploy your personal or community marketplace with a click of a button with built in stats'
  },
  {
    img:'https://ucdf8eb5481937fa2d7bfc407c3b.previews.dropboxusercontent.com/p/thumb/ABaj4cfGMDmRX07fY4IREJ9mh5AFSIFQ6abp45GXJGViHCgbsRoL28B3HTPycJ0CSrRjtnmWqTlQ5R6jYGqREtiW92ls-JmrWX-8V5l0JFJzTtLISa0HvOhzNX08o-uIh24_w_bya39TD-8UlyoB0zUTB9ELnvye-ZFev7y4CbKaiW2dPyCkVOc6ld1wEaUeXnB9y6d3pylqLN0Oz7_AWQbqhQxMPjigDl_rkRkvHR4klO0Ih_U5uSCTdKEFEkQGhVMLbPXFuo0BZOM0W3mExhz1wFFVQ-m2Za2iqyyouxJdWJ775gH_fQGEab2P5Knwv1lIQ3WsD-JrX25xbzVGGj74YwMD8Zvy6fUn2KUyaaIHD6mk6FD17pjfJmrdAZW26bM/p.png',
    title:'Tokens',
    text:'Pay using your favorite crypto curencccy configured with your exchange of choice '
  },
  {
    img:'https://ucfe83a95ab94793849c0b8af5ba.previews.dropboxusercontent.com/p/thumb/ABY33GDk2lbYgocALjSxQiGgDwEcirA-dTRiatNdTBFuI94ReyMNuIrb1sLioDoKvpKrbI9loDi0kKc4gxEKAgSqOC_hzH5miJ9z4yeKW6SKKUhV_M6WZAKAautoFRaGtqErtzeke7pMSSKVyy7gaJBXcA-s5R4wr0YpgQlIHHhJZqAZITNV6hH2I-22LGMMuwB0YYgXcZaMNDpxQ7_DNhs5lZFlvlNTn5MIdZJsoKvMs1bzw0nigbSGeiCZw9m_K4NgDScu5MzijLtZw2V71iDwmU8Eg01j0AxbhRPK6hl-x3uX46F531YoXIHwEfvq3byHWj5wwdHcuyyWuwHGOxGsH8utEjJ2iIjougSHFTA-hCoZT1nojm49OiE4xwkcPf8/p.png',
    title:'Packs',
    text:'Loot Boxes for NFT items at a discounted price '
  },
  {
    img:'https://uceab104d4d412bbaa669d2410a5.previews.dropboxusercontent.com/p/thumb/ABZMx9qbBjH--ny56PgMEP3PM0elrLIhlkZrxI_uhSRL2WKM0w9BptsFg1icOmN2pDk97I_z6z8EzG7Z8C7SdXHF-Mxq-LUo22LS0bwVKlq6s4KItVnHZ_eIf2gyMvlYLj_aRw8v4NsxAss6ZuNnS2ipSpZDnxIbwCSjlsq-oDCh69zjCn_Ir4lOQjrEhXwnongJjhbsX6o_a6JwPewQUZ1pIE1inoFWpqRv1micNT0uPnyM7OJYjqVh5qpk2ODlD8HH4y2SDRpsUEjuqZ2_iGaXUqGjd1YB_CKDVhPlPwRfNvsJ3bn6l3gdAW65hPBHj_BbilAPYP4Jc0rqkuRUjAPQekOzDbRy6EsGR602mDCLRTP-bQn1KO7MSnFC9FZ0aus/p.png',
    title:'Staking',
    text:'Deploy staking contracts that your marketpalce users can use'
  },
  {
    img:'https://uc59d6fe66f7672a6ec903d8f0cc.previews.dropboxusercontent.com/p/thumb/ABZUvBTUFhqaby1_0pJRMtJ5m09b7veGzScGPhEoUz_4X48dGdg--liaz4gF9ZYEQEjeWzPiNfDGJiZIfvsv2oAFo9-TzBFNECUufg7bYQMkQ6trwyV9-YnQRqYKElSEC4oO4GemitDynGVLHICAd5lxs5XYZ2ayncdr5imMct0SLUSLi7kbMVCmDO6MHtYJ-sqQ4f6givSoN7IEQ_qzzbj0dHLWREqPMIirf6u3ZUG-cTPSZKG6f9UHsttjeeiLqEoZzmgkTT0kLWmVcIdCrSi8oK-Cmp14X_GVpqW3-UvEEech1aI4739HQc3yzuzP5zxnaCpRw94l3plbqYidDeaU4LwbIwcCNoYSUuVFwwPnq3ouz748jWVF_IoePkTF6KQ/p.png',
    title:'Drops',
    text:'cheduled drops for your users to easily claims NFTs and tokens '
  },
  {
    img:'https://uc0eb0002077154de58367c9d07b.previews.dropboxusercontent.com/p/thumb/ABbVyJePcizEXtlSXe8ud2KOAYjPnA_0OJ6jlEAdTUQiNQ_9OniXQul2647XcJex1t__q1h2ZUnHsJRITcLN_8HEzuoG51rH5NLN_lL_dRsVMqYqhcquGzR3vTLDArIyib01PKkKR-m33vgK6VJwON9g3zJE_ZW25J7AbRW9T4cex4ZVJkbPPjo8-TfOq1PkvcitAQagAYwMLE8R6Qpk7Kh_NpYghPVKesD1osrYGoVvxkNbKcn2me75X5FekWNk537c2IfyWv4Fiew28WNsEVyJTYPGoQ5vVjZB8b-LId2FII9Vh_jm0FhIIIZ7X-ho0uJLcmaGikONszsHN4t0Q6Cynu02dwzJW1PpVnleEXQ23Asd0ly9COZQ3fW5Ggzs4Y4/p.png',
    title:'Skins',
    text:'Freemium skins to override the look of your of your website anytime'
  },
  {
    img:'https://uc807a33afdfe9d5336a3facb63e.previews.dropboxusercontent.com/p/thumb/ABZ28YjzOu4Md3BmX0W3gUA7FSUFvloyzd-kW3uD0PfzgDJPA8AQytHHP_HA7YbdHBQU1VwEhVvrRma-43PJKhCzqf7bJvrPQW0ybxc_tMb68vBbIT7CeoEQDwOlyTV40npUmCRFoFHZGpbfRiie7CigDeZmKQK3SMCMxpGABk0A2Sy7i4QykUNz8HcabcInFOb9-wf5TacxFBU75-wr0MZZxcK1m7m9z42p-VBj7-auS3T773kW17CTt8faDZ3q9ss55C5pAyIaC9fgCb_FZJ1cAYPUVgTgkgQhbn1C29LEJy0-K14pOOmUX1MTb2mQdsMDj72mHMDSR7SLaiD5jPX-TYK1sgvvZxo-Q_Xi1eW7n737r0tTbANVKIhj7YiQdA4/p.png',
    title:'Custom Domain',
    text:'Use xircus custom domains or your own domains for personalized branding'
  }
]

const GridCard = ({img, title, text}) => (
    <Box {...cardStyle}>
      <Container {...cardContainerStyle.child}>
        <Image {...cardImageStyle} src={img}/>
        <Heading {...typoStyle.title.card}>{title}</Heading>
        <Text {...typoStyle.text.card}>{text}</Text>
      </Container>
    </Box>
)

export const Cards = () => {
  return (
    <Box {...cardBoxStyle}>
      <Container {...cardContainerStyle}>
        <Grid  {...cardGridStyle}>
          {
            gridCardsItems.map((e,i)=> <GridCard key={i} {...e} />)
          }
        </Grid>
      </Container>
    </Box>
  )
}

