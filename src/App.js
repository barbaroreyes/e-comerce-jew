
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/ProductsList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/productslist'>
           <Products/>
        </Route>
        <Route exact path='/product:id'>
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
    </div>
  );
}

export default App;
