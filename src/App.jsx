import React from "react";

import { useState } from "react";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import SignIn from "./Pages/SsignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Categories from "./Pages/Categories/Categories";
import Hero from "./Components/HeroSection/Hero";
const App = () => {
  const [area, setArea] = useState("Indian");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Router>
        <NavBar
          area={area}
          setArea={setArea}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
