import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Anouncement from '../Compo/Anouncement';
import Footer from '../Compo/Footer';
import NavBar from '../Compo/NavBar';
import {Remove,Add} from '@material-ui/icons';
import {mobilex,table,all} from '../Compo/Responsive';
import Product from '../pages/Product';
import {useHistory} from 'react-router-dom'
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
${mobilex({
    flexDirection:'column',
    textAlign:'center',
})}
`
const TopTexts = styled.div`


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
${mobilex({flexDirection:'column',alignItems:"center"})}


`
const Info= styled.div`
flex:3;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

`


// const Product= styled.div`
// width: 45%;
// display:flex;

// border-radius:20px 20px;
// padding:20px;
// `
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
border:0.6px solid black;
flex:1;
border-radius:10px;
heigth:50vh;
padding:20px;
`
 const SumaryTitle = styled.div`
 font-weight:200;
 `
 const SumaryItem = styled.div`
 display:flex;
 justify-content:space-between;
 font-weight: ${props => props.type === 'total' && '500'};
 font-size: ${props => props.type === 'total' && '24px'};
`
const SumaryText = styled.span`
;`
const ItemPrice = styled.span`
;`
const Button = styled.button`
width:40%;
border:1px solid;
border:radius:10px 7px; 
background-color:black;
color:white;
font-weight:400;
padding: 5px;
`
const Cart = (props) => {
    const history= useHistory()
  return (
    <Container>
     <NavBar/>
     <Anouncement/>
     <Wrapper>
         <Title>Tus Products</Title>
         <Top>
             <TopButton><Link style={{color:'black',textDecoration:'none'}} to ='/productslist'>Continue Shopping</Link></TopButton>
             <TopTexts>
             <TopTex>Your Bag</TopTex>
             <TopTex>Your wishlist</TopTex>
             </TopTexts>
             
             <TopButton type="filled" onClick={() =>history.push('/checkout')}>Pay>Checkout Now</TopButton>
         </Top>
         <Bottom>
             {props.cart.map((item , i)=>{
                 return (<div>
                           <Product key={i} {...item} {...props.handledelete}/>

                          </div>)
             })}
              {/* <Info>
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
             <SumaryItem type='total'>
                 <SumaryText >Total </SumaryText>
                 <ItemPrice>-5.99</ItemPrice>
             </SumaryItem>
             <Button>
                 Check Now
             </Button>
              </Sumary> */}
         </Bottom>
         
     </Wrapper>
     <Footer/>
    </Container>
  );
}

export default Cart;
