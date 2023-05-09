import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Mainview from "./components/mainview/mainview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Mainview />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
