import React from 'react';
import styled from 'styled-components';
import { SearchOutlined,ShoppingCartOutlined,FavoriteBorderOutlined} from '@material-ui/icons'
import {mobilex,mobile,table,all} from '../Compo/Responsive'
const Info = styled.div `
display:flex;
justify-content: center;
align-items: center;
background-color: rgb(0,0,0,0.2);
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:3;
opacity:0;
transition: all 0.5s ease;
`
const Container = styled.div `
// flex:1;
display:flex;
justify-content: center;
align-items: center;
margin: 5px;
mim-width: 280px;
height:450px;
border:2px solid black;
padding:10px;
position:relative;
&:hover  ${Info}{
   opacity:1;
}
`
// const Circle = styled.div `
// width:350px;
// height:350px;
// background-color: rgb(0,0,0,0.1);
// border-radius: 50%;
// position:absolute;
// z-index:2

// `

const Image = styled.img `
width:10%;
height:100%;
z-index:1;
${mobilex(
    {width:'100%'}
)}
}
${all(
    {width:'100%'}
)}
}


`
const Icon = styled.div `
width:40px;
height:40px;
border-radius: 50%;
background-color: white;
display:flex;
justify-content: center;
align-items: center;
margin: 5px;
courser:pointer;
transition: all 0.5s ease;
&:hover{
    background-color: blue;
    transform:scale(2.1)
}
`

const Product = (props) => {
    console.log('item',props.categoria);
  return (<Container>
           {/* <Circle/> */}
           <Image src={props.image}/>
           <Info>
             {props.categoria}
               <Icon>
                   <ShoppingCartOutlined/>
               </Icon>
               <Icon>
                   <SearchOutlined/>
               </Icon>
               <Icon>
                   <FavoriteBorderOutlined/>
               </Icon>
           </Info>

          </Container>
    
  );
}

export default Product;
