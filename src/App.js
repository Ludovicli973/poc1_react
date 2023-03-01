import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";

//COMPONENTS
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div class="w-full h-auto box-border">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
