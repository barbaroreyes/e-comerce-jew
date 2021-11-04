import styled from 'styled-components';
import {Remove,Add} from '@material-ui/icons';
import {useHistory} from 'react-router-dom' ;
const Container = styled.div`

`
const Image = styled.img`
width:420px;
height:40vh;
border-radius: 10%;
object-fit:cover;
`
const ImageContainer = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
margin:70px;
`
const Wrapper = styled.div`
width:100%;
// padding:50px;
display:flex;
justify-content: center;
flex-direction: row;
align-items: center;
`
const InfoContainer = styled.div`
// display:flex;
// justify-content: center;
// flex-direction: column;
// align-items: center;
// width:20%;
// font-size:40px;


`
const Title = styled.h1`
font-weight: 300;
`
const Des = styled.p`

`
const FilterContainer= styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
 `
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
const Product = (props) => {
  console.log('props en simgle')
  const history = useHistory()
  return (
    <Container>
      <Wrapper>
          <ImageContainer>
          <Image src={props.image}/>
          <Title>{props.name}</Title>
              <Des>{props.description}</Des>
           <span>{props.price}</span>
          </ImageContainer>
          
          <InfoContainer>

            

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
         <Button onClick={() =>history.push('/checkout')}>Pay</Button>
         
        </AddContainer>
          </InfoContainer>
          </Wrapper>
    </Container>
  );
}

export default Product;
