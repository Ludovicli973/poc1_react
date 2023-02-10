import "./App.css";
// impor
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div class="w-full h-screen border-2 bg-orange-400 box-border">
        <Routes>
          <Route />
          <Route />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
