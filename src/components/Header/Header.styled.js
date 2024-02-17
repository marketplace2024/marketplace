 import styled from 'styled-components';

export const AppBar = styled.div`
  background-Color: ${({ theme }) => theme.colors.grey400};
  padding-left: 5rem;
  padding-right: 5rem;
`;

// import { styled } from '@mui/material/styles';


// export const AppBar = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.grey[600],
//   width: '100%',
//   borderRadius: theme.shape.borderRadius,
// }));