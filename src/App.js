
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/ProductsList';
import Product from './pages/Product';
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
        <Route exact path='/product'>
           <Product/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
