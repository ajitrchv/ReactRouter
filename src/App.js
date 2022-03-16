import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./pages/products.js";
import Welcome from "./pages/welcome.js";
import MainHeader from './components/MainHeader.js';
import ProductDetail from "./pages/ProductDetail.js";

function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'></Redirect>
          </Route>
        <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/products" exact>
        <Products></Products>
      </Route>
      <Route path="/products/:productId">
        <ProductDetail/>
      </Route>
        </Switch>
      
      </main>
    </div>
  )
};

export default App;
