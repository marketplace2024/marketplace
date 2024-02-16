import { ThemeProvider } from 'styled-components';

// const example = styled.div`
//   color: ${({ theme }) => theme.colors.black};
// `;

const theme = {
  colors: {
    black: '#121417',
    grey400: '#8688A9',
    white: '#fff',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
