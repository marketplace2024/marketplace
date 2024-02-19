import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { UserMenu } from '../UserMenu';
import { SearchBox } from '../Search/SearchBox';


export const Layout = () => {
  return (
    <>
      <Header />
      <SearchBox />
      <UserMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
