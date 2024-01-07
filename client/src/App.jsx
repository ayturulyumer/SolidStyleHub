import  "./app.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx"
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import SingleProduct from "./components/ProductsComponents/SingleProduct/SingleProduct.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
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
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <Footer/>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
