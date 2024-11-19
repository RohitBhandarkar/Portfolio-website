import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      primary: '#00ff9d',
      secondary: '#0a0a0a',
      accent: '#1a1a1a',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.primary',
          color: 'gray.900',
          _hover: {
            bg: 'brand.primary',
            opacity: 0.8,
          },
        },
      },
    },
  },
});

export default theme; 