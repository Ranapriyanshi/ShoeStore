import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListingPage from "./pages/ListingPage";
import ComparePage from "./pages/ComparePage";
import Navbar from "./componenets/Navbar/Navbar";
import Intro from "./componenets/Intro";

function App() {
  return (
    <Router>
      <Navbar />
      <Intro />
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
    </Router>
  );
}

export default App;
