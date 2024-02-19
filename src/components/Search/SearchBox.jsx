import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { Search } from './SearchBox.styled';
import { SearchIconWrapper } from './SearchBox.styled';
import { StyledInputBase } from './SearchBox.styled';


export const SearchBox = () => {
  return (
    <Box>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="I'm looking for..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </Box>
  )
}