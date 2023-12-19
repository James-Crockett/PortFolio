import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Taxiwala from "./Pages/Taxiwala";
import JerseyKulture from "./Pages/JerseyKulture";
import Quindl from "./Pages/Quindl";
import Marden from "./Pages/Marden";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/taxiwala" Component={Taxiwala} />
        <Route path="/jersey-kulture" Component={JerseyKulture} />
        <Route path="/quindl" Component={Quindl} />
        <Route path="/marden-basketball" Component={Marden} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
}

export default App;
