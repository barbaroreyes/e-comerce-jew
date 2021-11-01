import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import {mobilex,mobile,table,all} from './Responsive'

const Container =  styled.div`
height: 100px;
${mobilex(
    {backgroundColor: 'grey',height:"70px",padding:'10px'}
)}
}
${mobile(
    {backgroundColor: 'red'}
)}
}
${table(
    {backgroundColor: 'black'}
)}
}
${all(
    {backgroundColor: 'blue'}
)}
}
`

const  Wrapper =  styled.div`
 padding: 10px 20px ;
 display:flex;
 justify-content: space-between;
 align-items:center;
 ${mobilex(
    {justifyContent: 'space-between'}
)}
}
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
${mobilex(
    {display: 'none'}
)}
}
`

const Rigth =  styled.div`
display:flex;
justify-content:center;
flex-direction:column;
aling-items :center;

flex:1;
${mobile(
    {justifyContent: 'flex-end'}
)}
}

`
const Center =  styled.div`
flex:1;

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
    {width: '40px'}
)}
}
`
const Logo = styled.h2`
font-weith :bold;
font-size: 34px;
${mobilex(
    {fontSize: '16px'}
)}
`
const MenuItem =  styled.div`
font-size: 14px;
cursor:pointer;
margin-left: 20px;
color:white;
text-decoration:none;
${mobilex(
    {fontSize: '13px',margin:'10px'}
)}
}
`

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
        <Center><Logo>La Mango Jewelry</Logo></Center>
         <Left>
         
             <Lang>Lang</Lang>
             <SearchContainer>
                 <Input placeholder='search'/>
                 <Search style={{color:'grey', fontSize:'16px'}}/>
             </SearchContainer>
         </Left>
         
         <Rigth>
             <MenuItem><Link  to='/register' style={{textDecoration:'none',color:'white',fontSize:'16px'}}
             >Login</Link></MenuItem>
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
