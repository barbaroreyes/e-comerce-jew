import styled from 'styled-components'
import Product from '../Compo/Product'
import {mobilex,mobile,table,all} from './Responsive'
const Container = styled.div `
padding: 20px;
display:flex;
flex-wrap: wrap;
justify-content:space-between;
${mobilex(
  { flexDirection: 'column'}
)}
}
`

const Products = (props) => {
  
  return (
    <Container>
      {props.data.map((item,i)=>{
        
          return (
              <Product {...item} key={i}/>
          )
      })}
    </Container>
  );
}

export default Products;
