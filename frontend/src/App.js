import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<AddSchool />} />
        <Route path="/add-school" element={<AddSchool />} />
        <Route path="/schools" element={<ShowSchools />} />
      </Routes>
    </Router>
  );
}

export default App;
