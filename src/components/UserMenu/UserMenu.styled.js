import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.ul`
  display: flex;
  gap: 37px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};

  &.active {
    /* border-bottom: 1px solid gray; */
    /* color: ${({ theme }) => theme.colors.black}; */
    font-weight: 600;
  }
`;
