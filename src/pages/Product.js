import styled from 'styled-components';
import NavBar from '../Compo/NavBar'
import Anouncement from '../Compo/Anouncement';
import Footer from '../Compo/Footer';
import NewLetter from '../Compo/NewLetter';
import {Remove,Add} from '@material-ui/icons';

const Container = styled.div`

`
const Image = styled.img`
width:50%;
height:90vh;
border-radius: 10%;
object-fit:cover;
`
const ImageContainer = styled.div`
flex:1;
`
const Wrapper = styled.div`
width:75%;
padding:50px;
display:flex;
justify-content: center;
`
const InfoContainer = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
width:20%;
font-size:40px;


`
const Title = styled.h1`
font-weight: 300;
`
const Des = styled.p`

`
const FilterContainer= styled.div`
display:flex;
 
 `

// const Filter = styled.div`
// margin:20px;
//  `
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`
const Select = styled.select`
 padding:10px;
 margin-right:20px;
 `
 const Option = styled.option`
margin:20px;

 `
 const AddContainer = styled.div`
 width: 50%;
 display:flex;
align-items:center;
justify-content:space-between;
margin:20px;
 `
 const AmmountContainer = styled.div`


 `
 const Button = styled.button`
padding:14px;
background:transparent;
color: rgb(189,132,64);
border-radius:30px 30px;
width:80%;
cursor:pointer;
margin:20px;
font-weight:500
font-size:18px;
border:5px solid rgb(189,132,64);
&:hover{
  background:black;
  color:#fff
}
 `
 const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;

 `
const Product = () => {
  return (
    <Container>
      <NavBar/>
      <Anouncement/>
      <Wrapper>
          <ImageContainer>
          <Image src='https://ecomercec9b5366954ad45c183a02ba23f9f2d3c122320-dev.s3.amazonaws.com/public/Anillos.jpeg'/>
          </ImageContainer>
          <InfoContainer>
              <Title>Title</Title>
              <Des> Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Dolores eum accusamus quam ab, commodi eaque? Voluptatem in cupiditate cum nesciunt aspernatur,
           </Des>
           <span>$50</span>

           <FilterContainer><FilterText>Filter Products</FilterText>
        <Select>
            <Option disabled selected>Categoria</Option>
            <Option>Perlas</Option>
            <Option> Animales</Option>
            <Option>Corazon</Option>
            <Option>Redes</Option>
            <Option>Otros</Option>
          </Select>
        </FilterContainer>
        <AddContainer>
         <AmmountContainer>
           <Remove/>
           <Amount>1</Amount>
           <Add/>
         </AmmountContainer>
         <Button>Add to cart</Button>
        </AddContainer>
          </InfoContainer>
          </Wrapper>
      
      <NewLetter/>
      <Footer/>
    </Container>
  );
}

export default Product;