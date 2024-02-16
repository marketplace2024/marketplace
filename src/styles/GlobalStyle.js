import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import Inter from '../assets/fonts/Inter.ttf';
import Montserrat from '../assets/fonts/Montserrat.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Inter';
    src: url(${Inter});
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat});
  }


body {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #121417;
  height: 100%;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0;
}
a {
  text-decoration: none;
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
button {
  cursor: pointer;
}

`;

export default GlobalStyle;
