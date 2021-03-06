import styled from 'styled-components'
import Product from '../Compo/Product'
import {mobilex,mobile,table,all} from './Responsive'

const Container = styled.div `
display:flex;
justify-content:center;
flex-wrap: wrap;
margin:20px;
${mobilex(
  { flexDirection: 'column'}
)}
}
${all(
  { flexDirection: 'row'}
)}
}

`


const Products = (props) => {
  console.log('props',props.addToCart)
  return (
    <Container>
      {props.data.map((item,i)=>{
        return (
              <Product {...item} key={i}
              addToCart = {props.addToCart}
              />
          )
      })}
    </Container>
  );
}

export default Products;
