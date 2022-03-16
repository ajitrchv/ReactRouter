import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/mini">Mini</Link>
        </li>
        <li>
          <Link to="/products/merc">Mercedes</Link>
        </li>
        <li>
          <Link to="/products/toyota">Toyota</Link>
        </li>
      </ul>
    </section>
  )
};

export default Products;
