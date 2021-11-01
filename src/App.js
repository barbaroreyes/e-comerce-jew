import './App.css';
import {Switch, Route} from 'react-router-dom'
import styled from 'styled-components';
import Home from './pages/Home';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Data from './Compo/Data'
import {categorie} from './Compo/CategoriesData'
import ProductsList from './pages/ProductsList';


const Container = styled.div`
text-align:center;
font-family: 'Dancing Script';
font-weight: 700;

`

function App() {
  return (
    <Container >
      <Switch>
        <Route exact path='/'>
          <Home data={categorie}/>
        </Route>
        <Route exact path='/productslist'>
           <ProductsList data={Data} />
        </Route>
        <Route exact path='/product'>
           <Product/>
        </Route>
        <Route exact path='/register'>
           <Register/>
        </Route>
        <Route exact path='/login'>
           <Login/>
        </Route>
        <Route exact path='/cart'>
           <Cart/>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
