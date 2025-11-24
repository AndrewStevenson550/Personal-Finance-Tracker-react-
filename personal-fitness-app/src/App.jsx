import "./styles/Hero.css";
import FitnessDisplay from "./Pages/FitnessDisplay";
import Hero from "./components/Hero";
import "./styles/app.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        {/* 👈 Fitness Display route */}
        <Route path="/fitness-display" element={<FitnessDisplay />} />
        
        {/* 👈 Default route: Everything defaults to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
