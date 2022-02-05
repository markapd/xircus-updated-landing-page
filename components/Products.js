import { Box, Container, Heading, Grid, Image, Text } from "@chakra-ui/react"
import { useTranslations } from "next-intl"


//Style imports
import { productCardStyle, productCardImageStyle,productsGridStyle, typoStyle,productBoxStyle } from '../styles/global'


const ProductCard = ({title,img,text,products}) => (
  <Box {...productCardStyle}>
    <Container>
      <Image {...productCardImageStyle} src={img} />
      <Heading {...typoStyle.title.product}>{products(title)}</Heading>
      <Text {...typoStyle.text.product}>{products(text)} </Text>
    </Container>
  </Box>
)
export const Products = () => {
  const products = useTranslations('Products')

  const cardItemList = [
    {
      img: 'https://ucb78a58dc63d0af3393115300a1.previews.dropboxusercontent.com/p/thumb/ABYaEoDyjG0TppOjjq6KOgtTQOcIqdViaVysFJykK3zKTMaKgmHCCsVGHLoeptGjYwqX6JsPOt8qAaMuVvD-Pu1GaKXoAkhCB8sL-sDF6-fERhCnSKuLydDyKW66EwyEKruhN9U6UlZfrDeGzeZSu6KscesN3EvVlQ83NTZoPVk9BmC51tAIKyVkFJknaX-sz7YU3yDmmr-1HXvj1rEJ3X1cn8_EDOp44smqqNhU2BEEp3aC_wbDk8R6GKBKHDIMT-qK3ihyUAyfvi_AcFwcCKSSdDLsPIkabL3PXrRJ1Glm0jKfoAWeX8lT_5yj_xlTf1sYQ33yyTaFz2RW71G9PcuTr0L1Fx6FaljPtS5xYBGNQmP7HbY_1vwFrKaMImMvrPo/p.png',
      title: 'firstCardHead',
      text: 'firstCardText'
    },
    {
      img: 'https://ucd0745268930d186bcd0be16ccd.previews.dropboxusercontent.com/p/thumb/ABYIFLWF3Apu_PcJ4b0gTMbhIgZceKhMsUysiUOvc_6_5T6OS3yXXiiFH-mSZLwqCHAOxrcgu9CSxSu23E8Ug_CG8IfAaYJkEd4JeoepJfEpQfNoV2C2FnlWCQrW31x_FcVpEenTSfm2DiYIymdO-jI8bJjzPveJ6h_RZEzB0gI_Zt_V_USrGh6LSCncqrCpwXDGiPX5NjqamoLZYRqoWlx-CrEMRAGsXOXuur2qBerNwqCi7Z5e3tGm6834BgO8g-fC1bAOtY3kCmiS0rIYlnAtYhFbbDx-PINc412cbRJ3lGSorqgOn-T2juNmw19PV_2eO2jXdfMzOsPorClw_puRUlrAZkHtE1I42tbHYxBf8WVpcfrJ4tDNehNRIMCwIi0/p.png',
      title: 'secondCardHead',
      text: 'secondtCardText'
    },
    {
      img: 'https://uca477365059290695c1f299b052.previews.dropboxusercontent.com/p/thumb/ABZox9VAQmsNv8DiQszi7yadbK9_HYYWSLOudoohFqCVLrpdab_xKRJ6PagluMkqwlQYG6kzbnBEet97vKt2CYWH7x3BkvTRS50arjau58GxTMkWMBAwTd7XMuH6cUHts3k6NuVVVQGh9b64sGzAe-7pBof4lSqT8XxzzKw4T5d8N2ReJYOq--uVovQ7Z9rfGwDsn2nCiH58B90jhrZ_-VbcOtFJQ4Ttz3ArTNR_P2wRonDDyAM73F0Ck5Hc-pF-uB9RQWWIdTFqI_Yw8JAPLu-hOMf-dbYcMoN7nDmErcl9BwfhOM1MzdhD0Zfi3KQkh3eXNj4r5Z0SAlvxd2hE7xq1enP1oG7m9-JZL5CIUSNdxoctH3e3ZuU0dp3Z2W4cOjo/p.png',
      title: 'thirdCardHead',
      text: 'thirdCardText'
    },
    {
      img: 'https://uc49ee58b61cf3ed3102765df962.previews.dropboxusercontent.com/p/thumb/ABZgq6MUlnlP-FvkILLvuVtfMFulAdhkira0JreoY0VItdQWVzVIuctTuQacfotyhVtgzm3krZRpIWeooBybnW-BVLXo-KDaCutSstrFRSWxtvuR29ybFymRfMTqRKiGHHidYgshcgJY2unTqvsCbUEmuNV2odJvP7xkbshEw7MMeO2bKkTwqra5-BY_2C5Vvh8yowl8XnKC_nDRz4ZJWa1J1_Ca_-WjqYErABit2Mwfm-qBrli8iY0bSeE2tBgVgj8TRpTLnPGQ48MeS6ixbI80RRkuefMEhEYmbatAZuU0yKUYJoXw0OqzXJwfo9ridUR525ymS4hbQGApyoQePPorWcvw9XRNK1CMOWpPXECAhHf9E7K0XSrhvAt__8E02uU/p.png',
      title: 'fourthCardHead',
      text: 'fourthCardText'
    },
    {
      img: 'https://uc08d190a4fe27e8d2bfdd607aa2.previews.dropboxusercontent.com/p/thumb/ABa7mWE6Im9qCEu0nld9Fwj8PvQTAaWp6TKDyvMyEJKKjoJB2iFDVAkS3edD3OYWYUL58pYD_f7cWVbOjh0KTP6pgBGVCHxHcBXzFnusxMduh5-jvFDXybhC6zErhvcqVwqKlaOxwH22VIb3kXh1cIRPto60-5m7X8dC-tYnYCbew6EhU8tM7LWuF2KOB_gjQcQD7KntGv41Y3te2NSXZxQCVWMOPqVhWB6lIG5r2phQQAoNX0XuCwR8SA9O2qt-r9YVE5j7tDW4e5bXbHdR-d5MxtsYQtU0wcWKnaO59Oxvykh2EMYMIP79xM6iiVl247PkJyw9LjvPHpZLjWdCSLbbXzoU5F3poZLn3Hoz2zcTn16c8uPkcfddhNs2YH206Uo/p.png',
      title: 'fifthCardHead',
      text: 'fifthCardText'
    },
    {
      img: 'https://uc38932d64b653a691bcbafeac34.previews.dropboxusercontent.com/p/thumb/ABYSoA0wJRypBQDbrL1BPKZDg01KayDCjr_-NxwAM9Hm89dlKYzia7LZ72_8ZompRvt4iJCfwNdjwnPAcMFe4Oynp3WmTbmXyU2w5I86FQHvIJ0A7QQnUJbElcRwGeSQigk18oojbNkJUOdhJF2mNQW56uCatss9QH_zaoTY7F3jf14pr_UmSTwybHnyQbGBzuySrTg9-eRrQKoR-HSfmzsEQJ6C9A4u0eShqGc4mKC-SQ2stb67VUVEN_IMp9CWdS-sXc9VuYpqocsQpwOSFZREICgRyeax55821T9MgofProvl_P5-6bt2EpQ8aKX6-5MJF_VNqG_xUsw674H1CgcmdeK-rrsMVO4RScv9LD7FXWcAUeoHRzhngBMcPTghGd8/p.png',
      title: 'TsixthCardHead',
      text: 'sixthCardText'
    },
    {
      img: 'https://ucd0abd0bd8160c61fe10efe9e41.previews.dropboxusercontent.com/p/thumb/ABZlZS9yowFZkUWcrWdQ3Rgrq--wyAeVjXL8XY_9uYQ9BvonXV-RPlRZplFsNXRi8wfv8Odxu9W90cQ3eEGDfjIMPmg98q-mpz_LpLaPcYZ0980EEX8PSh1qCIiTEQvrjvnNYVyUJ1sG3Tzi-o_-29tAD3KZsSrmkK1CmyFbqV-hcSzliQSl1gUgBXnM6OHFWfoCUhdyoYVoRxRm93hYH6tzdix9_VWDlAFrNC8aQAp1MDl0BM2EqEMa76R_q1kUgRzZzSzMcS0_AKN1F183sQ7iO3c0O-rkNfEcYeYgm_m6VJoUkjiwNdsNT6snKO6ulY14cKBdTTqen1_tMFFajjXvKJPpVzqBpxsv7AdyaAMmkNO4JwxAwLiN3w4xDu8lSg4/p.png',
      title: 'seventhCardHead',
      text: 'seventhCardText'
    },
    {
      img: 'https://ucf3de64f12cb88e4c4773995747.previews.dropboxusercontent.com/p/thumb/ABbFc00HWPb5WYHhrAjuLwpgojpmN_Ee6IhUhkNQSEATCOGSBxUgPtqCEbbR4x44B5Ne5DrrWbCrGFy72_Lo_MdMfbw9SSRw-PEOrkRf93Vb3evdhpMZFN62Na3f2ShFK_i6g9n6V2iNIhrEcSfMVo5Zp67YAYQfzpID6DoaalIcNNImvNi_nUwCxx12fSzg840cyiWcYFYKw_eikLqpHj8rI6RWpaNN4hnoFoy4sBrnxk5LlskN3OGYynSpYslKApYFJ43SAwsBXL6PekY_JyBhIZerRrrvbUeAIRMQgjdQxlyXSeQ0msSPXHtoIFYv-qhK99YDulnfMOBCf_j-YCSM0eBanyRil2auDwzb5cqF_KQ1yhpIt4CFYvL7O1IuhNA/p.png',
      title: 'eightCardHead',
      text: 'eightCardText'
    },
    {
      img: 'https://uc8077bc46356f1196322e2ddd98.previews.dropboxusercontent.com/p/thumb/ABZlpM_ZENsKLk1WEQ7eROqevwYP2anRvQou1VgDPt--mdugyGnt3xI6TBLQPDmQl5Bze9itfBv36T65_ROXmoARwU3hQSMEGonzvoPx3elwOrvsBvusT6bki3X_K2lfYgMjX_HNO_CjrZrPICXn386tNBFynapcvW621hga0lcDZZ3IrMRE2j4yMwqJGVTe2faWndGBX_nsO7C1KR8SW5VxdHYqwVfhE7tx8LndMIRVLX_7788a971p6Zv1QXO6cvvqcqiPZCMNY_FWwmyrn2Nrgh6hQzva_SgZ0cCKXezM2pH6W64nXmnnSSDqVqpDngDzVQFONlwaZyBx2cfTfyxw0AC4Fhp_Tt3JT9QZytJjblRHMpjLoJuYTr06DdDwdnk/p.png',
      title: 'ninthCardHead',
      text: 'ninthCardText'
    },
    {
      img: 'https://uc8077bc46356f1196322e2ddd98.previews.dropboxusercontent.com/p/thumb/ABZlpM_ZENsKLk1WEQ7eROqevwYP2anRvQou1VgDPt--mdugyGnt3xI6TBLQPDmQl5Bze9itfBv36T65_ROXmoARwU3hQSMEGonzvoPx3elwOrvsBvusT6bki3X_K2lfYgMjX_HNO_CjrZrPICXn386tNBFynapcvW621hga0lcDZZ3IrMRE2j4yMwqJGVTe2faWndGBX_nsO7C1KR8SW5VxdHYqwVfhE7tx8LndMIRVLX_7788a971p6Zv1QXO6cvvqcqiPZCMNY_FWwmyrn2Nrgh6hQzva_SgZ0cCKXezM2pH6W64nXmnnSSDqVqpDngDzVQFONlwaZyBx2cfTfyxw0AC4Fhp_Tt3JT9QZytJjblRHMpjLoJuYTr06DdDwdnk/p.png',
      title: 'tenthCardHead',
      text: 'tenthCardText'
    },
    {
      img: 'https://uc5ac5f81959854bdc697617b5cf.previews.dropboxusercontent.com/p/thumb/ABZ-PVjSwXefMd0BdbD9PJ1qH5gpNk9dFRK4hLHs4ibIqy-lorZtJ7CviFy9CrgFEcLc-ml-uJGzD5QtvTZ6vJxqN35gZgOdb74njSBy8kj3j49KCU0zbO-n0c5uQz4sHyoYExeS3FttGhW0NzzSY1Z3uSZfl1inDxWKiwCoQjns__tRTLpx_StOrNpjnTlg1QwJQxdpwagSFh7_AOFQ4mujnYK002nMXy0AkLmatXAjTs5dHT5lBE8t0VT8H99QmS6sqcSBwUgTY850yGhcbP_ciGIX1CHI9w7wQilrWrgXNNyKQ1BkWsd7OICfJESEvaGyXtEDiVK5WTUiA5JiiezmesRjsCLXV70U7_nubj1Pj1QsPy2sqEc-pWvi9rigHWY/p.png',
      title: 'elevenCardHead',
      text: 'elevenCardText'
    },
    {
      img: 'https://uc1ae0eb435b8cada72cc82c8a48.previews.dropboxusercontent.com/p/thumb/ABbEW7ACqNOpVSSUAaNB1yhfQq1dsW2mtwQgJh9W6WGVbT0fJ901BIK20Vg2cNcS-hgC3hdMPoeyWBUUbPIC-226qXkLhs_i7_-eif_kfvswLi34b5PAo3ikPfDZo55MMA2NmddmMEK3TxiODdn33ytp0ZxgDR_jDkkrX0-N2mDlwLiA0_VW4I4wU09qaAbhN8J-00FQuQA_JAeEWtL-bHMMqSAgQkKVgMM33CN5Dy9hq_i-W1CxSf7IeUe_tjOqG4IK4_SwCNI-by85sSIGUGVt50zSn1NGjYoSfes1EiI3Uv-XlsBnqnYJM3fH3-2m1h4rgqucQzuqS2sMb0fl1sGYZRTJOszd9gKYSp_Y9dO4Da-e1qhIyasC-2XokJ4GtSc/p.png',
      title: 'twelveCardHead',
      text: 'twelveCardText'
    }
  ]

  return (
    <Box>
      <Container {...productBoxStyle}>
        <Heading {...typoStyle.headline.product}>{ products('productHeadline') }</Heading>
        <Grid {...productsGridStyle} >
          {
            cardItemList.map((e,i) => (
                <ProductCard key={i} products={products} {...e} />
            ))
          }
        </Grid>
      </Container>
    </Box>
  )
}

