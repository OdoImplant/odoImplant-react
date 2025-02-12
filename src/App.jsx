import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Testimonials from "./pages/Testimonials";
import OrtodonciaDental from "./pages/OrtodonciaDental";
import Treatments from "./pages/Treatments";
import Galeria from "./pages/Galeria";
import WhatsAppButton from "./components/WhatssButton";
import React, { useState, useEffect } from "react";
import { setLanguage, t } from "./utils/transllationFunction.js";
import "./css/app.css";

function App() {
  const [language, setLangState] = useState("en");

  useEffect(() => {
    setLangState(navigator.language.split("-")[0] || "en");
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setLangState(lang);
  };

  return (
    <>
      <NavBar />
      <WhatsAppButton />
      <div className="lang-btn-section">
        <button className="lang-btn" onClick={() => changeLanguage("cat")}>
          Cat
        </button>
        <button className="lang-btn" onClick={() => changeLanguage("es")}>
          Es
        </button>
        <button className="lang-btn" onClick={() => changeLanguage("en")}>
          En
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ortodoncia" element={<OrtodonciaDental />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/galery" element={<Galeria />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
