import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import {mobile,table,all} from './Responsive'
const Container =  styled.div`
height: 100px;
${mobile(
    {backgroundColor: 'red',justifyContent: 'space-between',height: '75px'}
)}
}
${table(
    {backgroundColor: 'black'}
)}
}
${all(
    {backgroundColor: 'grey'}
)}
}
`

const  Wrapper =  styled.div`
 padding: 10px 20px ;
 
 
 display:flex;
 justify-content: space-between;
 align-items:center;
`
const Left =  styled.div`
display:flex;
align-items:center
flex:1;
`
const Lang = styled.span`
font-size: 12px;
display:flex;
align-items:center;
${mobile(
    {display: 'none'}
)}
}
`

const Rigth =  styled.div`
// display:flex;
// justify-content: flex-end;
// padding:5px;
flex:1;
${mobile(
    {justifyContent: 'center'}
)}
}

`
const Center =  styled.div`
flex:1;
text-align:center
`
const SearchContainer = styled.div`
border:0.1px solid lightgray;
display:flex;
align-items:center;
margin-left: 25px;
padding:1px;
`
const Input = styled.input`
border: none;
${mobile(
    {width: '50px'}
)}
}
`
const Logo = styled.h2`
font-weith :bold;
font-size: 34px;
${mobile(
    {fontSize: '20px'}
)}
`
const MenuItem =  styled.div`
font-size: 14px;
cursor:pointer;
margin-left: 20px;
${mobile(
    {fontSize: '10px',marginLeft:'8px'}
)}
}
`

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
         <Left>
             <Lang>Lang</Lang>
             <SearchContainer>
                 <Input placeholder='search'/>
                 <Search style={{color:'grey', fontSize:'16px'}}/>
             </SearchContainer>
         </Left>
         <Center><Logo>La Mango Jewelry</Logo></Center>
         <Rigth>
             <MenuItem><Link to='/register'>Sign In or Login</Link></MenuItem>
             {/* <MenuItem>Sign in</MenuItem> */}
             <MenuItem>
             <Badge badgeContent={1} color="primary">
                 <ShoppingCartOutlined/>
             </Badge>
             </MenuItem>


         </Rigth>
        
        </Wrapper>
      
    </Container>
  );
}

export default NavBar;
