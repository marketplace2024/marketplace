import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { UserMenu } from '../UserMenu';

export const Layout = () => {
  return (
    <>
      <Header />
      <UserMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
