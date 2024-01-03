import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx"
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import  "./app.css"
import SingleProduct from "./components/ProductsComponents/SingleProduct/SingleProduct.jsx";
function App() {
  return (
    <div className="link">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:categoryId" element={<Products/>}/>
          <Route path="/products/details/:productId" element={<SingleProduct/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
