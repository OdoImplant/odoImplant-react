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

function App() {
  return (
    <>
      <NavBar />
      <WhatsAppButton />
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
