import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import Home from 'pages/Home';
import { GlobalStyle, Theme } from '../styles';
import { Container } from './Container';

function App() {
  return (
    <Theme>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            {/* <Route path="*" element={} /> */}
          </Route>
        </Routes>
        <GlobalStyle />
      </Container>
    </Theme>
  );
}
export default App;
