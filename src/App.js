import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Links } from 'react-router-dom';
import Product from './product';
import Cart from './cart';

function App() {
  return (
    <Router>
      <div className="">
        <nav>
          <ul>
            <li><Link to="/">Productos</Link> </li>
            <li><Link to="/cart">Carrito</Link> </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
