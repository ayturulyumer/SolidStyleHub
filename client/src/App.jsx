import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx"
import  "./app.css"
function App() {
  return (
    <div className="link">
      <Router>
        <Navbar />
        <Footer/>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
