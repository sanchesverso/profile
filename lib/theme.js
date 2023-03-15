import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('whiteZin', 'bokaraGrey')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: 'brilliantLicorice',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('mustardBrown', 'sovietGold')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  sovietGold: '#FFD900',
  mustardBrown: '#A67D03',
  whiteZin: '#F8F0E3',
  verifiedBlack: '#202023',
  bokaraGrey: '#2a2725',
  brilliantLicorice: '#525252',
  whiteAlfa: '#ffffff40',
  verifiedBlackAlfa: '#20202380'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
