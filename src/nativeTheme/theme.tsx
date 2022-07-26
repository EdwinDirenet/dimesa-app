import {extendTheme} from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      900: '#1D2C59'
    },
    secondary: {
      900: '#F57200',
    },
  },
  components: {
    Text: {
      baseStyle: {
        color: 'white'
      }
    },
    Input: {
      baseStyle: {
        _focus: {
          borderColor: 'white'
        }
      }
    }
  },
  config: {
    initialColorMode: 'light'
  }
});
