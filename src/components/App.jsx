import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { GlobalStyle, Theme } from '../styles';
import { Container } from './Container';

import HomePage from 'pages/HomePage';
import AdvertPage from 'pages/AdvertPage';
import ShopPage from 'pages/ShopPage';
import { CardList } from './Advert/CardList';

function App() {
  return (
    <Theme>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/advert" element={<AdvertPage />}>
              <Route path="active" element={<CardList />} />
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
