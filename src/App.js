import React,{useState,useEffect} from 'react';

import './App.css';
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components';
import Home from './pages/Home';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Data from './Compo/Data'
import Amplify, {API,graphqlOperation} from 'aws-amplify'
import {listPrendas} from './graphql/queries'
import confi from './aws-exports';
import {categorie} from './Compo/CategoriesData'
import ProductsList from './pages/ProductsList';

Amplify.configure(confi)


const Container = styled.div`
text-align:center;
font-family: 'Dancing Script';
font-weight: 700;

`


function App() {

const  [jollas,setJollas]= useState([]);

useEffect(()=>{
  fetchJollas()
},[])
const [cart , setCart] = useState([]);


const  addToCart = name => 
setCart([...cart,name])

const handledelete = (pos) => {
  setCart(cart
  .filter((name, index) => 
  index !== pos)) 
}

const fetchJollas = async ()=> {
  try {
    const jollasData = await API.graphql(graphqlOperation(listPrendas))
    const listJollas = jollasData.data.listPrendass.items;
    setJollas(listJollas)
    console.log('list', listJollas)
  } catch (error) {
    
  }
}

  return (
    <Container >
      <Switch>
        <Route exact path='/'>
          <Home data={categorie}/>
        </Route>
        <Route exact path='/productslist'>
           <ProductsList data={jollas} addToCart={ addToCart}/>
        </Route>
        <Route exact path='/product'>
           <Product/>
        </Route>
        <Route exact path='/register'>
           <Register/>
        </Route>
        <Route exact path='/checkout'>
          not yet
        </Route>
        <Route exact path='/login'>
           <Login/>
        </Route>
        <Route exact path='/cart'>
           <Cart 
           cart={cart}
           handledelete ={handledelete }
           />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
