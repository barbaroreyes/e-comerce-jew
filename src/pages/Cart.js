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

const Bottom = styled.div`
border:1px solid black ;
display:flex;
justify-content:space-between;

`
const Info= styled.div`
flex:3;
display:flex;
justify-content:space-between;
border:2px solid black;
`
const Sumary = styled.div`
flex:1;`

const Product= styled.div`
display:flex;
`
const ProdutDetails = styled.div`
display:flex;
justify-content:space-between;
padding:10px;
border:1px solid 
`
const Details= styled.div`
display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
padding:20px;

`
const Image= styled.img`
width:300px;
`
const ProdutName = styled.div`
border:1px solid ;
width:100px;
padding:10px;
`
const ProductId = styled.div`
border:1px solid ;
width:100px;
padding:10px;
`
const Price = styled.div`
border:1px solid ;
width:100px;
padding:10px;
`

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
         <Bottom>
              <Info>
                  <Product>
                      <ProdutDetails>
                      <Image src='https://ecomercec9b5366954ad45c183a02ba23f9f2d3c122320-dev.s3.amazonaws.com/public/joyeria+fotos/Argollas1.jpeg'/>
                          <Details>
                              <ProdutName>Agollas</ProdutName> 
                              <ProductId>ProductId</ProductId>
                           <Price>Price</Price>
                             </Details>

                      </ProdutDetails>
                  </Product>
              </Info>
              <Sumary>sumary</Sumary>
         </Bottom>
         
     </Wrapper>
     <Footer/>
    </Container>
  );
}

export default Cart;
