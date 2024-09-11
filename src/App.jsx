import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PlantDetails from "./components/PlantDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plant/:name" element={<PlantDetails />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;
