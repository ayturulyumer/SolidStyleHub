import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import  "./app.css"
function App() {
  return (
    <div className="link">
      <Router>
        <Navbar />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
