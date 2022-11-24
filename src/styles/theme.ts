import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  colors: {
    gray: {
      '100': '#F5F8FA',
      '200': '#DADADA',
      '400': '#999999',
      '600': '#47585B'
    },
    yellow: {
      '300': '#FFBA08'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.600'
      }
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  }
};

export const theme = extendTheme(customTheme);