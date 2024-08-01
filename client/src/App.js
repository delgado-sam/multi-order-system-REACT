import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import RestaurantsList from "./components/RestaurantList";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<RestaurantsList />} />{" "}
        {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
