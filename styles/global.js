
// Typography 
export const typoStyle = {
  headline:{
    logo: {
      fontSize: '30px',
      color: 'orange.500'
    },
    product: {
      fontSize: '30px',
      my:'20px'
    },
    easy: {
      textAlign: 'center',
      my:30
    },
    deploy:{
      textAlign:'center'
    },
    nft: {
      textAlign:'center'
    }
  },
  subheadline:{
    hero: {
      textAlign:'center',
      fontSize: '50px'
    },
    earn: {
      textAlign:'center',
      fontSize: '30px'
    },
    income: {
      fontSize:{base:14,lg:15},
      color:'orange.500',
      fontWeight:''
    },
    multiple: {
      textAlign:'center',
      mb:'20px'
    },
    nft: {
      textAlign:'center',
      fontSize: '12px',
      mt:'14px'
    }
  },  
  title:{
    carousel:{
      fontSize: '30px',
      textAlign:"center",
      my:'50px'
    },
    product: {
      fontSize: '20px',
      my:'20px'
    },
    earn: {
      fontSize:'20px'
    },
    card: {
      mt: '40px',
      fontSize:'18px'
    },
    income: {
      fontSize:'30px',
      py:4
    },
  },
  subtitle:{
    income: {
      fontSize:'15px',
      py:'20px'
    }
  },
  text:{
    footer:{
      fontSize:'xs',
      mr:'10px'
    },
    header: {
      fontSize: '12px',
      fontWeight:'bold'
    },
    hero: {
      fontSize:'15px',
      textAlign:'center'
    },
    nftControl:{
      fontSize:'14px',
    },
    earn:{
      fontSize:'12px',
    },
    card: {
      fontSize:'14px'
    },
    product:{
      fontSize: '14px'
    },
    income: {
      fontSize:'13px'
    },
    nft: {
      fontSize:'12px'
    },
    multiple: {
      textAlign:'center',
      mb:'60px',
      fontSize:'12px'
    }
  },
  subtext:{ 
    earn: {
    textAlign:'center',
    fontSize: '12px'
    },
    income: {
      fontSize:'13px'
    }
},
  label:{},
  sublabel:{}
}

export const webBackgroundStyle = {
color: 'white',
bgSize:'cover',
bgImage: 'https://uc6d9934e063e5a9801ab4a2cd92.previews.dropboxusercontent.com/p/thumb/ABbVkj2MMK77-qujFbizKXi-qH7tty-gfFtXunekY0wvnDaxKf_PJRCTs59TKpfhjYixP-PJr2yfqTl5YnsdAyYQDbBUF_USyHlJ-j8i-U_AcwiadVZqT6QPrsrMm4ZoPnyYza9IcWBuAQm8_BPbXxbYF8MXrwAamn7NKg6li1vNwJ7CngcsJQz8lG4K3z6823a0gFOgAmqYkToC3rJgqcrdHaON20LSfbUaMViLvuRiWJvCRWCWmOqWHEGNBxA2oxb4zcHUCvlFTBd8Lhgq5ez5KC2E4EukLyhQXN9wEchurQPrYoTDijQyAfIaaGUhW1VJ06wfkQKujIos5fk6JxtVlY051JI25Sx4U7ILJwDoPjLWDE--EFZcfuTBxkeiMIw/p.png'
}

//-------------Header----------//

export const headerDrawerStyle = {
  display:{base:'block', lg:'none'},
  bg:'transparent',
  _hover: {
    bg:'none'
  },
  _focus: {
    bg:'none',
    boxShadow: 'none'
  },
}
export const headerDrawerContentStyle = {
  bg:'transparent',
  color:'white',
  backdropFilter:'blur(15px)'
}
export const headerContainerStyle = {
  maxW: 'container.xl'
}
export const headerBoxStyle = {
  position:'sticky',
  w:"full",
  zIndex: 10,
  top: 0
}
export const logoStyle = {
  boxSize:'50px',
  objectFit:'cover'
}
export const navListStyle = {
   display:{ base:'none', lg:'flex' }
}
export const navItemStyle = {
  px:'20px',
  cursor:'pointer',
  py:'8px',
  my:4,
  _hover: {
    transition:' 300ms ease',
    bg:'#EDF2F7',
    rounded:17,
    color:'black'
  }
}
export const selectStyle = {
  w:"100px",
  rounded: 30,
  display: {base:'none', lg:'block'},
  _focus: {
    boxShadow:'none'
  }
}

//-------------Hero Section----------//

export const heroContainerStyle = {
  maxW:'container.lg'
}
export const heroButton = {
  flexDirection: {base: 'column', lg: 'row'},
}
export const heroTextStyle = {}
export const heroLogoStyle = {
  boxSize:'70px',
  objectFit:'cover'
}
export const heroBoxStyle = {
  py:'20px',
  mt:'10px'
}
export const heroPlayButton = {
  rounded: '50%',
  h:'60px',
  w:'60px',
  color: 'black',
  _hover: {
    color:'red  '
  },
  fontSize: '30px',
  _focus:{
    boxShadow:'none'
  }
}
export const heroAsSeenStyle = {
  flexDirection: { base:'column', lg:'row'},
  }
export const heroGradientButton1 = {
  as:'button',
  p:'15px',
  w:'190px',
  transition:'all 300ms ease',
  my:'10px',
  rounded:'full',
  size:'lg',
  bgGradient:'linear(to-l, #8a2387, #e94057, #f27121)',
  _hover:{ color:'black' }
}
export const heroGradientButton2 = {
  as:'button',
  p:'10px',
  lineHeight:4,
  w:'190px',
  transition:'all 300ms ease',
  my:'10px',
  rounded:'full',
  size:'lg',
  bgGradient:'linear(to-l, #8a2387, #e94057, #f27121)',
  _hover:{ color:'black' }
}
export const asSeenImageContainerStyle = {
  maxW:'container.lg',
  mt:'90px'
}
export const asSeenImageStyle = {
  boxSize:'100px',
  h:'40px'
}
export const asSeenBoxImage= {
  w:{base:'auto',lg:'100%'},
  fontWeight:'bold',
  py:{ base:'20px',lg:'auto' },
}

//--------- NFT CONTROL COMPONENTS ----------//  

export const nftCardWraperStyle = {
  w:'100%',
  alignItems:'center'
}
export const nftControlBoxStyle = {
  mt:'100px'
}
export const nftControlContainerStyle = {
  maxW:'container.lg',
}
export const nftBoxStyle = {
  mt: '100px',
  display:'flex',
  pb:7,
  justifyContent:'center',
}
export const parentBox = {
  bgGradient: 'linear(to-t, gray.900, #1A202C, #652B19)',
  w:'100%',
  my:'20px',
  rounded: 20,
  position:'relative',
}
export const nftCardStack = {
  mt:'120px',
  spacing:{base:'auto',lg:30},
  textAlign:'center',
  alignItems:'center',
  flexDirection:{base:'column', md:'row', lg:'row'}
}
export const nftCardImageStyle = {
  boxSize:'100px',
  position: 'absolute',
  top: -10
}
export const nftControlBigButton = {
  m:'80px auto',
  maxW:'600px',
  border:'3px solid #DD6B20',
  rounded:100,
  p:4,
  textAlign:'center',
  cursor:'pointer'
}

//-----Procducts-----///

export const productCardStyle = {
  p: '35px',
  w:'100%',
  rounded: '20px',
  boxShadow:'0px -1px 1px 0px #4A5568',
  bg:'#110d0d'
}
export const productCardImageStyle = {
  boxSize:'90px',
  objectFit:'cover'
  
}
export const productsGridStyle = {
  templateColumns:{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(4, 1fr)'},
  gap: 4,
}
export const productBoxStyle = {
  maxW:'container.lg'
}

//------Earn section-----//

export const earnAvatarStyle = {
  rounded:'5px',
  w:50,
  h:50
}

export const earnGridStyle = {
  maxW: { base: 'auto', md: 800 },
  m:'50px auto',
  templateColumns:{base:'repeat(1, 1fr)', lg:'repeat(2, 1fr)'},
  gap: 6 
}
export const earnContainerStyle = {
  maxW:'container.lg'
}
export const earnBoxStyle = {
  mt:'80px'
}

//-------cards section------//

export const cardBoxStyle = {
  my:'100px',
}
export const  cardGridStyle = {
  templateColumns:{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(4, 1fr)'},
  gap: 4,
}
export const cardImageStyle = {
  boxSize:'80px',
  objectFit:'cover'
}
export const cardStyle = {
  lineHeight: '20px',
  p:'25px',
  w:'100%',
  rounded: '20px',
  bgGradient:'linear(to-br, #319795, #E53E3E, #6B46C1)'
}

export const cardContainerStyle = {
  maxW: 'container.lg',
  child: {
    mt:'20px',
  }
}

//-------Deploy section------//

export const deployContainerStyle = {
  maxW:'container.lg'
}

export const deployTabs = {
  display:'flex',
  flexDirection:{base:'column', lg:'row'},
  variant:'unstyled',
  my:'80px',
  orientation:'vertical'
}
export const deployTabButton = {
  _focus: {
    boxShadow:'none',
  },
  _hover: {
    bg: 'red.500'
  },
  py:'20px',
  borderBottom:'1px solid gray', 
  borderTop:'1px solid gray' 
}
export const tabBoxStyle = {
  w:'200px'
}
export const deployImageStyle = {
  w:'full'  
}

//------Easy Steps----//
export const easyBoxStyle = {
  py:'80px',
  bgGradient:'linear(to-br, #FC8181,#4FD1C5,#9F7AEA,)',
  style:{
    clipPath: 'polygon(0 0, 100% 7%, 100% 100%, 0 95%)'
  }
}
export const easyStepsContainerStyle = {
  maxW:'container.lg'
}
export const easyImageStyle = {
  w:'full' 
}
export const easyStepsTabStyle = {
  w:'100%',
  _focus: {
    boxShadow: 'none'
  }
}
export const boxTabsStyle = {
  py:'20px',
  _focus:{
    borderBottom:'1px solid white'
  }
}
export const easyTabStyle = {
  m:'auto 0px'
}

//------Multiple-----//
export const multipleContainerStyle = {
  maxW:'container.lg'
}
export const multipleBoxStyle = {
  my:'100px'
}
export const multipleStackStyle = {
  my:'30px'
}
export const multipleNftLogoStyle = {
  boxSize:'30px'
}
export const multipleGridStyle = {
  templateColumns:{base:'repeat(4, 1fr)', md:'repeat(6, 1fr)',lg:'repeat(9, 1fr)'}
}

//-------carousel------//
export const carouselListStyle = {
  display:'flex'
}
export const carouselBoxStyle = {
  my:'150px'
}
export const carouselContainerStyle = {
  maxW: 'container.lg'
}
export const carouselCardStyle = {
  w:'100%',
  p:'60px 30px',
  rounded: '20px',
  bg:'#110d0d'
}
export const carouselImageStyle = {
  boxSize:'100px',
  objectFit:'cover'
}
export const carouselStyle = {
  pagination: false,
  breakPoints: 
    [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 4 },
    ] 
}

//----income-----//

export const incomeContainerStyle = {
  maxW:'container.lg'
}
export const incomeStackBoxStyle = {
  pb:'40px'
}
export const incomeStackBoxStyled = {
  rounded:20,
  p:'20px"',
  bg:'gray.900'
}
export const incomeBoxStyle= {
}
export const incomeStackStyle= {
  flexDirection:{ base:'column', lg:'row' },
}
export const incomeListStyle = {
  lineHeight:7
}

//-----footer---//

export const footerStackStyle ={
  flexDirection:{ base:'column', lg:'row' }
}
export const footerBoxStyle ={
  py:'30px',
  mt:'60px'
}
export const footerNavStyle = {
  display:'flex',
  textAlign:{base:'center', lg:'auto'},
  flexDirection:{base:'column', lg:'row'}
}
export const footerContainerStyle = {
  maxW:'container.lg'
}

