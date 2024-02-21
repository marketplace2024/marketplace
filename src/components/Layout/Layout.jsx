import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { UserMenu } from '../UserMenu';
import { SearchBox } from '../Search/SearchBox';
import { Footer } from '../Footer/';
import { Container } from '../Container';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <SearchBox />
        <UserMenu />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};
