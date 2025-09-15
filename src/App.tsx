import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { bg } = useTheme();
  return (
    <>
      <div className={`min-h-screen ${bg} text-white`}>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <div className="container mx-auto">
          <div className="bgcricle">
            <div className="bgcricleimg"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
