import { Search } from './SearchBox.styled';
import { SearchIconWrapper } from './SearchBox.styled';
import { StyledInputBase } from './SearchBox.styled';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';


export const SearchBox = () => {
  return (
    <Box>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </Box>
  )
}

