import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation";
import CreateAccount from "./pages/CreateAccount";
import Profile from "./pages/Profile";
import SoilLibrary from "./pages/SoilLibrary";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedSoils, setSelectedSoils] = useState([]);

  const authenticateUser = () => {
    setIsAuthenticated(true);
  };
  return (
    <Router>
      <Navigation isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Index setSelectedSoils={setSelectedSoils} />} />
        <Route path="/create-account" element={<CreateAccount authenticate={authenticateUser} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/soil-library" element={<SoilLibrary selectedSoils={selectedSoils} />} />
      </Routes>
    </Router>
  );
}

export default App;
