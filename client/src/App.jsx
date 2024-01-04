import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx"
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import SingleProduct from "./components/ProductsComponents/SingleProduct/SingleProduct.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import  "./app.css"
function App() {
  return (
    <div className="link">
      <Router>
        <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:categoryId" element={<Products/>}/>
          <Route path="/products/details/:productId" element={<SingleProduct/>}/>
        </Routes>
        <Footer/>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
