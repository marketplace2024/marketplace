import { Button } from '@mui/material';
import { Nav, NavLinkStyled } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <>
      <Nav>
        <Button>
          <NavLinkStyled to={'/home'}>Home</NavLinkStyled>
        </Button>
        <Button>
          <NavLinkStyled to={'/shop'}>My shopping</NavLinkStyled>
        </Button>
        <Button>
          <NavLinkStyled to={'/advert'}>My Advertisements</NavLinkStyled>
        </Button>
      </Nav>
    </>
  );
};
