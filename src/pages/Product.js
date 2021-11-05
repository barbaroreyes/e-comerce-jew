import styled from 'styled-components';
import {Remove,Add,Delete,Payment} from '@material-ui/icons';
import {useHistory} from 'react-router-dom' ;
import {mobilex,mobile,table,all} from '../Compo/Responsive'
const Container = styled.div`

`
const Image = styled.img`
display:flex
width:420px;
height:40vh;
border-radius: 10%;
object-fit:cover;

`
const ImageContainer = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;

${mobilex({flexDirection:'column',alignItems:"center"})}
`
const Wrapper = styled.div`
width:100%;
display:flex;
justify-content: flex-start;
flex-direction: row;




`
const InfoContainer = styled.div`

// justify-content: center;
// flex-direction: column;
// align-items: center;


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
// display:flex;
// justify-content: center;
// flex-direction: column;
// align-items: center;
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
margin:5px;
${mobilex({flexDirection:'column',alignItems:"center"})}
 `
 const AmmountContainer = styled.div`


 `
 const Button = styled.button`
padding:14px;
background:transparent;
color: rgb(189,132,64);

width:100%;
text-align:center;
cursor:pointer;
margin:20px;
font-weight:500
font-size:18px;

&:hover{
  background:black;
  color:#fff
}
 `
 const Amount = styled.span`
width:30px;
height:30px;
// border-radius:10px;
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

  
        <AddContainer>
         <AmmountContainer>
           <Remove/>
           <Amount>1</Amount>
           <Add/>
         </AmmountContainer>
         <Button onClick={() =>history.push('/checkout')}><Payment/></Button>
         <Button onClick={() =>history.push('/checkout')}><Delete/></Button>
         
        </AddContainer>
          </InfoContainer>
          </Wrapper>
    </Container>
  );
}

export default Product;
