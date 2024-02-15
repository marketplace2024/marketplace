import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import Home from 'pages/Home';
import { GlobalStyle, Theme } from '../styles';
import { Container } from './Container';
import { Advertisements } from 'pages/Advertisements';

function App() {
  return (
    <Theme>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/advertisements" element={<Advertisements />}>
              <Route path="active" element={'active'} />
              <Route path="awaiting" element={'awaiting'} />
              <Route path="delivery" element={'delivery'} />
              <Route path="inactive" element={'inactive'} />
              <Route path="declined" element={'declined'} />
            </Route>
            {/* <Route path="*" element={} /> */}
          </Route>
        </Routes>
        <GlobalStyle />
      </Container>
    </Theme>
  );
}
export default App;
