import { ThemeProvider } from 'styled-components';

// const example = styled.div`
//   color: ${({ theme }) => theme.colors.black};
// `;

const theme = {
  colors: {
    black: '#2B2D42',
    grey400: '#8688A9',
    grey900: '#2B2D42',
  },

  palette: {
    primary: {
      main: '#2B2D42',
      error: '#B00020'
    },
    grey: {
      900: '#2B2D42',
      800: '#3F415A',
      700: '#505370',
      600: '#626687',
      500: '#717498',
      400: '#8688A9',
      300: '#9B9DBC',
      200: '#B7B9D3',
      100: '#D1D5EB',
      50: '#EFECFF'
    },
    orange: {
      900: '#FF6F00',
      800: '#FF8F00',
      700: '#FFA000',
      600: '#FFB300',
      500: '#FFC106',
      400: '#FFCA28',
      300: '#FFD54F',
      200: '#FFE082',
      100: '#FFECB3',
      50: '#FFF8E1'
    },

  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 'Regular',
      fontSize: 36
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 'Regular',
      fontSize: 24
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 'SemiBold',
      fontSize: 22
    },
    h4: {
      fontFamily: 'Inter',
      fontWeight: 'Regular',
      fontSize: 22
    },
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: 'Regular',
      fontSize: 18
    },
    h6: {
      fontFamily: 'Inter',
      fontWeight: 'Regular',
      fontSize: 18
    },
    p1: {
      fontFamily: 'Inter',
      fontWeight: 'Regular',
      fontSize: 14
    },
    p2: { 
      fontFamily: 'Inter',
      fontWeight: 'Regular',
      fontSize: 12
    },
    p3: {
      fontFamily: 'Inter',
      fontWeight: 'Regular',
      fontSize: 10
    },
    small: {
      fontFamily: 'Montserrat',
      fontWeight: 'Regular',
      fontSize: 8
    },
    tags: {
      fontFamily: 'Inter',
      fontWeight: 'Regular',
      fontSize: 14,
      textTransform: 'uppercase'
    },
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
