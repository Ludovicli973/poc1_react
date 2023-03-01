import "./App.css";
import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
