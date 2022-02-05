
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

  },
  subheadline:{
    hero: {
      textAlign:'center',
      fontSize: '50px'
    },
    earn: {
      textAlign:'center',
      fontSize: '30px'
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
      mt: '35px',
      fontSize:'18px'
    },
    income: {
      fontSize:'30px',
      py:4
    },
  },
  subtitle:{
    income: {
      fontSize:'14px'
    }
  },
  text:{
    footer:{
      fontSize:'xs',
      mr:'10px'
    },
    header: {
      fontSize: '12px'
    },
    hero: {
      fontSize:'15px',
      textAlign:'center'
    },
    nftControl:{
      fontSize:'12px',
    },
    earn:{
      fontSize:'12px',
    },
    card: {
      fontSize:'12px'
    },
    product:{
      fontSize: '12px'
    },
    income: {
      fontSize:'10px'
    },
    nft: {
      fontSize:'12px'
    }
  },
  subtext:{ 
    earn: {
    textAlign:'center',
    fontSize: '12px'
    },
    income: {
      fontSize:'12px'
    }
},
  label:{},
  sublabel:{}
}

export const webBackgroundStyle = {
color: 'white',
bgImage:'https://uc1c3172815f8f447e684b0c11d7.previews.dropboxusercontent.com/p/thumb/ABYEi92kHKXGV5WB0Xc2nniids5x7suHHh5JhDPLHlN2pkXPGK8pTzGHqdi_r0jyA1dikXakQ7k99uo5Rr1M_V5G7tn_OSiafspGCGFssb4q9Il-DZNaWSheLQp3c-UcRxBXC-r6XrlR0bawY4eS6J5A_iata_-etktdpa5uuIjOkodqLyR4dhub_g1g7s64X9hOl7cPSjZ9lIFje9IBOIa6dDLCjYzBJLwlPokI6GrGbeObBHDvBWrNyKTII1PUKZ0IyMPmZ5DDWruKd6JnJHOzRxJNLZuJHdYkvgomizwHARpXvo4gUB6cYalIcW484oVGR3TW5OwNMIq9SYY2zJckPPKmn1GpnijHM94K3wORTRwySPGhni2Q-z-AIko6gNI/p.png',
}

//-------------Header----------//

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

}

export const selectStyle = {
  w:"100px",
  rounded: 30,
  display: {base:'none', lg:'block'},
  placeholder:'Lang',
  _focus: {
    boxShadow:'none'
  }
}


//-------------Hero Section----------//
export const heroContainerStyle = {
  maxW:'container.lg'
}

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

export const heroButton = {
  flexDirection: {base: 'column', lg: 'row'},
}
export const heroTextStyle = {
  
}
export const heroLogoStyle = {
  boxSize:'50px',
  objectFit:'cover'
}

export const heroBoxStyle = {
  py:'60px',
  mt:'50px'
}

export const heroPlayButton = {
  rounded: '100%',
  h:'50px',
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

export const heroGradientButton = {
  color:'white',
  transition:'all 300ms ease',
  my:'10px',
  rounded:'full',
  borderRadius:'6px',
  size:'lg',
  bgGradient:'linear(to-l, #8a2387, #e94057, #f27121)',
  _focus: { 
    boxShadow:'none'
   },
  _hover:{ bg: '#111', bgGradient: 'linear(to-l, #8a2387, #e94057, #f27121)' }
}

export const asSeenImageContainerStyle = {
  maxW:'container.lg',
  mt:'100px'
}
export const asSeenImageStyle = {
  boxSize:'100px',
  h:'40px'
}

export const asSeenBoxImage= {
  w:{base:'auto',lg:'100%'},
  py:{ base:'20px',lg:'auto' },
}


//--------- NFT CONTROL COMPONENTS ----------//
export const nftControlBoxStyle = {
  //
}

export const nftControlContainerStyle = {
  maxW:'container.lg',
}
export const nftBoxStyle = {
  mt: '100px',
  w:'100%',
  display:'flex',
  pb:7,
  justifyContent:'center',
 
  parentBox: {
    bg: 'gray.800',
    w:'80%',
    rounded: 20,
    position:'relative',
    
  }
}
export const nftCardContainer = {
  mt:'200px',
  textAlign:'center',
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
  py: '10px',
  w:'100%',
  rounded: '20px',
  bg:'gray.800'
}
export const productCardImageStyle = {
  boxSize:'100px',
  objectFit:'cover'
}

export const productsGridStyle = {
  templateColumns:{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(4, 1fr)'},
  gap: 4,
}

//------Earn section-----//

export const earnGridStyle = {
  maxW: { base: 'auto', md: 800 },
  m:'50px auto',
  templateColumns:{base:'repeat(1, 1fr)', lg:'repeat(2, 1fr)'},
  gap: 6 
}

//-------cards section------//
export const cardBoxStyle = {
  my:'100px'
}
export const  cardGridStyle = {
  templateColumns:{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(4, 1fr)'},
  gap: 4,
}
export const cardImageStyle = {
  boxSize:'100px',
  objectFit:'cover'
}
export const cardStyle = {
  lineHeight: '25px',
  w:'100%',
  rounded: '20px',
  bgGradient:'linear(to-t, #8a2387, #e94057, #f27121)'
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
  borderBottom:'2px solid gray' 
}

export const tabBoxStyle = {
  w:'200px'
}
export const deployImageStyle = {
  w:'full'  
}


//------Easy Steps----//

export const easyStepsContainerStyle = {
  maxW:'container.lg'
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

export const multipleGridStyle = {
  templateColumns:{base:'repeat(4, 1fr)', md:'repeat(6, 1fr)',lg:'repeat(9, 1fr)'}
}

//-------carousel------//
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
  bg:'gray.800'
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

export const incomeBoxStyle= {
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

