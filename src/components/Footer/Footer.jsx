import { styled } from 'styled-components'
import {  Container } from '@mui/material';

const Box = styled.div`
    background-color: ${({ theme }) => theme.palette.grey[500]};
    width: 100%;
    
`

const Link = styled.div`
    display: "block";
    font-size: 14px;
    padding: 2px 0;
`
const Wrap = styled.div`
    margin-top: 20px;
    height: 50px;
    background-color: ${({ theme }) => theme.palette.grey[800]};
    text-align: center;
    width: 100%;
`
const Text = styled.div`
    font-size: 14px;
    font-family: Inter;
    color: white;
    padding-top: 15px;
    `
const Grid = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 40px 237px;
    width: 100%;
`
const Typography = styled.div`
    color: ${({ theme }) => theme.palette.orange[500]};
    font-size: 18px;
    font-family: Montserrat;
    font-weight: Regular;
    padding-left: 237px;
    padding-top: 25px;
`
const Input = styled.input`
    padding: 10px 15px;
    background-color: ${({ theme }) => theme.palette.orange[50]};
    ::placeholder {
        color: ${({ theme }) => theme.palette.grey[700]};
       
    }
    border-radius: 10px;
    border: none;
    width: 250px;
    margin-right: 20px;
`
const SubmitButton = styled.div`
    margin: 16px 0;
    width: 150px;
    background-color: ${({ theme }) => theme.palette.orange[50]};
    color: ${({ theme }) => theme.palette.grey[400]};
    border-radius: 10px;
    text-align: center;
    padding: 10px 15px;
    transition: all 150ms ease;
    cursor: pointer;
    box-shadow: 0 2px 1px 0;
    border: 1px solid ${({ theme }) => theme.palette.orange[50]};
    &:hover {
        background-color: ${({ theme }) => theme.palette.orange[100]};
      }
    
    &.active {
        background-color: ${({ theme }) => theme.palette.orange[100]};
        box-shadow: none;
        transform: scale(0.99);
      }
`

const FormControl = styled.form`
    display: flex;
    align-items: center;
    padding-left: 205px;
    flex-direction: row;
    `

const Footer = () => {

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    alert(`character=${formData.get('character')}`);
  };

    return (
      <Box>
        <Container maxWidth={false}>
        <Typography>
            Join to us and catch your coupons and discounts!
        </Typography>
        <FormControl onSubmit={handleSubmit} style={{ marginLeft: '20px' }}>
            <Input placeholder='Name' />
            <Input placeholder='E-mail' width={250} />
            <SubmitButton type="submit">
                Subscribe
            </SubmitButton>
        </FormControl>
                
        <Grid>
            <Link href="#" color="inherit" display="block">About Curio</Link>
            <Link href="#" color="inherit" display="block">Catalogue</Link>
            <Link href="#" color="inherit" display="block">Browse by category</Link>
            <Link href="#" color="inherit" display="block">Delivery</Link>
            <Link href="#" color="inherit" display="block">Help</Link>
            <Link href="#" color="inherit" display="block">Safety Rules</Link>
            <Link href="#" color="inherit" display="block">News</Link>
            <Link href="#" color="inherit" display="block">Returns and replacements</Link>  
        </Grid>
      </Container>
      <Wrap>
            <Text color="white" align="center" sx={{ pt: 4 }}>
            © 2024 Curio. All rights reserved.
            </Text>
        </Wrap> 

    </Box>
    )
}

export default Footer;
