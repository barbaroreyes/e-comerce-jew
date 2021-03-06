
import React from 'react';
import styled from 'styled-components';
import {mobile,table,all} from './Responsive';
import {useHistory }from 'react-router-dom'
const Container = styled.div`
display:flex;

flex:1;
margin: 4px;
heigth:100vh;
position:relative;


`
const Image = styled.img`
width:100%;
heigth:100%;
object-fit:cover;
${mobile(
  {heigth:'30vh',margin:"2px"}
)}
}

`
const Info = styled.div`
position:absolute;
width:100%;
justify-content:center;
flex-direction:column;
display:flex;
align-items:center;
margin-top:361px;
text-aling:center;
text-align:center;
`
const Title = styled.h1`
color:#fff;
font-size:50px;
`
const Button = styled.button`
padding:14px;
background:black;
color:rgb(189,132,64);
border-radius:30px 30px;
width:80%;
cursor:pointer;
`


const CategorieItem = ({item}) => {
 const history = useHistory()
  return (
    <Container>
        <Image src={item.image} 
        />
        <Info>
        <Title>{item.name}</Title>
        <Button onClick={()=> history.push('/productslist')}>Shop Now</Button>
        </Info>
    </Container>
  );
}

export default CategorieItem;
