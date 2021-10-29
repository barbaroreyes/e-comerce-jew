import React from 'react';
import styled from 'styled-components';
import Anouncement from '../Compo/Anouncement';
import Footer from '../Compo/Footer';
import NavBar from '../Compo/NavBar';


const Container = styled.div``

const Wrapper = styled.div`
padding:20px`

const Title = styled.h1`

font-weight:300;
text-align:center;
`;
const Top = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
`
const TopTexts = styled.div`
display:flex;

`
const TopTex = styled.span`

width:100px;
margin:70px;
padding:10px;
cursor:pointer;
&:hover{
    text-decoration:underline;
}
`
const TopButton = styled.div`
padding:14px;
background:transparent;
color: rgb(189,132,64);
border-radius:30px 30px;
width:30%;
cursor:pointer;
margin:20px;
font-weight:500
font-size:18px;
border:5px solid rgb(189,132,64);
text-align:center;
&:hover{
  background:black;
  color:#fff
}
`

const Bottom = styled.div``

const Cart = () => {
  return (
    <Container>
     <NavBar/>
     <Anouncement/>
     <Wrapper>
         <Title>Tus Products</Title>
         <Top>
             <TopButton>Continue Shopping</TopButton>
             <TopTexts>
             <TopTex>Your Bag</TopTex>
             <TopTex>Your wishlist</TopTex>
             </TopTexts>
             
             <TopButton type="filled">Checkout Now</TopButton>
         </Top>
         <Bottom></Bottom>
         
     </Wrapper>
     <Footer/>
    </Container>
  );
}

export default Cart;
