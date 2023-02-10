import "./App.css";
// impor
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Pages/Details";
import Home from "./Pages/Home";

//COMPONENTS
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div class="w-full h-screen border-2 bg-orange-400 box-border">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
