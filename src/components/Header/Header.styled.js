
import { styled } from '@mui/material/styles';


export const AppBar = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.grey[600],
  width: '100%',
  borderRadius: theme.shape.borderRadius,
}));