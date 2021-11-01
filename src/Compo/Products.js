import styled from 'styled-components'
import Product from '../Compo/Product'
import {mobilex,mobile,table,all} from './Responsive'

const Container = styled.div `
display:flex;
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
