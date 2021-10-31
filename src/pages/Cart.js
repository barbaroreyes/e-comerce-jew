import React from 'react';
import styled from 'styled-components';
import Anouncement from '../Compo/Anouncement';
import Footer from '../Compo/Footer';
import NavBar from '../Compo/NavBar';
import {Remove,Add} from '@material-ui/icons';

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

display:flex;
justify-content:center;
align-items:center;
// width:100%;



`
const Info= styled.div`
flex:3;
display:flex;
justify-content:center;
flex-direction:column;
alig

`


const Product= styled.div`
width: 45%;
display:flex;

border-radius:20px 20px;
padding:20px;
`
const ProdutDetails = styled.div`
display:flex;
justify-content:space-between;
// border:5px solid white;
border-radius:20px 20px;
&:hover{
    background-color:rgb(63,56,50);
}
`
const Details= styled.div`
display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
padding:20px;
border-radius:20px 20px;
`
const Image= styled.img`
display:flex;
width: 300px;
border-radius:20px 20px;
object-fit:cover;
`
const ProdutName = styled.span`

width:100px;
padding:8px;
box-shadow:4px 4px;

width:100%;
color:#ffff;
font-weight:700;

`
const ProductId = styled.span`
box-shadow:4px 4px;
width:100px;
padding:10px;
width:100%;
color:#ffff;
font-weight:700;
`
const Price = styled.div`
display:flex;
flex-direction:column;
align-items:center;
// box-shadow:4px 4px;
width:100%;
color:#ffff;
padding:10px;
font-size:20px;
padding:9px;
margin:10px;
border:3px solid ;
font-weight:700;

`
const ProductAmountContainer = styled.div`
margin:10px;
font-weight:700;
&:hover{
    background-color: #fff;
    color:rgb(63,56,50);
    
}
`
const Amount = styled.span`
margin:15px;
&:hover{
    background-color: #fff;
    color:rgb(63,56,50);
    // text-decoration: line-through;
}

 `
 const AddContainer = styled.div`
 font-weight:700;
 font-size:40px;
 `
 const Hr = styled.hr`
  background-color:rgb(63,56,50);
  width:100%;
  border:0.5px solid rgb(63,56,50);
  
 `
 const Sumary = styled.div`
border:1px solid black;
flex:1;
display:flex;
justify=-conten:center;
flex-direction:column;
aling-items:center
`
 const SumaryTitle = styled.div`
 `
 const SumaryItem = styled.div`
`
const SumaryText = styled.div`
;`
const ItemPrice = styled.div`
;`
const Button = styled.button`

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
                              <ProductId>sdasdsdsds123</ProductId>
                           <Price>
                               <AddContainer>
                               <Add/> <Remove/>
                               </AddContainer>
                                   <Amount>
                                    cantidad  1
                                   </Amount>
                               <ProductAmountContainer>
                                   precio $2
                              </ProductAmountContainer>
                            </Price>
                             </Details>
                    </ProdutDetails>
                  </Product>
                  <Hr/>
                  <Product>
                      <ProdutDetails>
                      <Image src='https://ecomercec9b5366954ad45c183a02ba23f9f2d3c122320-dev.s3.amazonaws.com/public/Anillos2.jpeg'/>
                          <Details>
                              <ProdutName>Agollas</ProdutName> 
                              <ProductId>sdasdsdsds123</ProductId>
                           <Price>
                               <AddContainer>
                               <Add/> <Remove/>
                               </AddContainer>
                                   <Amount>
                                    cantidad  1
                                   </Amount>
                               <ProductAmountContainer>
                                   precio $2
                              </ProductAmountContainer>
                            </Price>
                             </Details>
                    </ProdutDetails>
                  </Product>
              </Info>
              <Sumary >
                  <h1>Sumary</h1>
              <SumaryTitle>sumary</SumaryTitle>
              <SumaryItem> 
               <SumaryText>subtotal</SumaryText>
              <ItemPrice>$80</ItemPrice></SumaryItem>
             <SumaryItem>
                 <SumaryText>Shipping </SumaryText>
                 <ItemPrice>-5.99</ItemPrice>
             </SumaryItem>
             <SumaryItem>
                 <SumaryText type='total'>Total </SumaryText>
                 <ItemPrice>-5.99</ItemPrice>
             </SumaryItem>
             <Button>
                 Check Now
             </Button>
              </Sumary>
         </Bottom>
         
     </Wrapper>
     <Footer/>
    </Container>
  );
}

export default Cart;
