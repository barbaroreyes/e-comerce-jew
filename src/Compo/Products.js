import styled from 'styled-components'
import Data from '../Compo/Data';
import Product from '../Compo/Product'
import {mobilex,mobile,table,all} from './Responsive'
const Container = styled.div `
padding: 20px;
display:flex;
flex-wrap: wrap;
justify-content:space-between;
${mobilex(
  {display: 'none'}
)}
}
`

const Products = () => {
  return (
    <Container>
      {Data.map((item,i)=>{
          return (
              <Product item={item} key={i}/>
          )
      })}
    </Container>
  );
}

export default Products;
