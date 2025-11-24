import "./styles/Hero.css";
import FitnessDisplay from "./Pages/FitnessDisplay";

import "./styles/app.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    
    <>
      <NavBar />
      <Routes>
        {/* 👈 Home route */}
        <Route path="/" element={<Home />} />
        {/* 👈 Fitness Display route */}
        <Route path="/fitness-display" element={<FitnessDisplay />} />
        {/* 👈 About route */}
        <Route path="/about" element={<About />} />
        {/* fallback route */}
        <Route path="*" element={<Home />} />
        
      </Routes>
    </>
  );
}

export default App;
