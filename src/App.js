import { Route } from "react-router-dom";
import Products from "./pages/products.js";
import Welcome from "./pages/welcome.js";
import MainHeader from './components/MainHeader.js';

function App() {
  return (
    <div>
      <MainHeader/>
      <main>
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/products">
        <Products></Products>
      </Route>
      </main>
    </div>
  );
}

export default App;
