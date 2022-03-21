import { ChakraProvider } from '@chakra-ui/react';
import { colors } from '../stiches.config';
import '../styles/satoshi.css';
import theme from '../theme';



const themeExtended = {
  brand: {
    ...colors,
  }
}


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  chakra: {
    theme
  },
  darkMode: {
    dark: {
      ...colors,
      // appBg: 'black'
    },
    light: {
      ...colors,
      // appBg: 'white'
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


const withChakra = (StoryFn) => {

  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  )
}
export const decorators = [
  withChakra
]