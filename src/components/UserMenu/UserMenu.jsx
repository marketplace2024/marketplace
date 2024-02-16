import { Link } from 'react-router-dom';

export const UserMenu = () => {
  return (
    <>
      <ul>
        <Link to={'/home'}>Home</Link>
        <Link to={'/shop'}>My shopping</Link>
        <Link to={'/advert'}>My Advertisements</Link>
      </ul>
    </>
  );
};
