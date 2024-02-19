import styled from "styled-components"

export const Search = styled.div`
  position: relative;
  marginLeft: 0;
  width: 556px;
  height: 37px;
  border: 1px solid ${({ theme }) => theme.palette.orange[50]}; 
  border-radius: 10px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.palette.orange[50]};
`
export const SearchIconWrapper = styled.div`
  padding: 7px;
  height: '100%';
  position: absolute;
  right: 0;
  color: ${({ theme }) => theme.palette.orange[900]};
`
export const StyledInputBase = styled.div`
  width: 100%;
`