import { styled } from '@mui/material/styles';


export const AppBar = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  borderRadius: theme.shape.borderRadius,
}));
