import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../assets/odoimplant-02-1.png";
import hamburger from "../assets/hamburger.png";
import closeIcon from "../assets/close.png";
import { t } from "../utils/transllationFunction.js";

function NavBar() {
  const [selected, setSelected] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  const selectTab = (tab) => {
    setSelected(tab);
    setMenuOpen(false);
  };

  return (
    <nav>
      <div id="nav-container" className="bg-white shadow">
        <div>
          <a href="https://www.odoimplant.com">
            <img className="logo-nav" src={logo} alt="OdoImplant Logo" />
          </a>
        </div>

        <div className="desktop-menu">
          <NavLink
            to="/"
            id="inici-link"
            className={selected === "/" ? "active" : ""}
            onClick={() => selectTab("/")}
          >
            {t("inici")}
          </NavLink>
          <NavLink
            to="/about"
            id="about-link"
            className={selected === "/about" ? "active" : ""}
            onClick={() => selectTab("/about")}
          >
            {t("sobre-OdoImplant")}
          </NavLink>
          <NavLink
            to="/ortodoncia"
            id="orto-link"
            className={selected === "/ortodoncia" ? "active" : ""}
            onClick={() => selectTab("/ortodoncia")}
          >
            {t("ortodòncia")}
          </NavLink>
          <NavLink
            to="/treatments"
            id="treat-link"
            className={selected === "/treatments" ? "active" : ""}
            onClick={() => selectTab("/treatments")}
          >
            {t("tractaments")}
          </NavLink>
          <NavLink
            to="/testimonials"
            id="testim-link"
            className={selected === "/testimonials" ? "active" : ""}
            onClick={() => selectTab("/testimonials")}
          >
            {t("testimonis")}
          </NavLink>
          <NavLink
            to="/galery"
            id="galery-link"
            className={selected === "/galery" ? "active" : ""}
            onClick={() => selectTab("/galery")}
          >
            {t("galeria")}
          </NavLink>
          <NavLink
            to="/contact"
            id="contact-link"
            className={selected === "/contact" ? "active" : ""}
            onClick={() => selectTab("/contact")}
          >
            {t("contacte")}
          </NavLink>
        </div>

        <div id="right-nav">
          <a
            href="https://cloud-s22.mnprogram.net/24.2.3.0/#/cita-online/BC425646-15DD-4B4A-8D8B-3A3FDA5170F7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="contact-button">{t("demana-cita")}</button>
          </a>
          <img
            className="hamburger-menu"
            src={menuOpen ? closeIcon : hamburger}
            alt="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => selectTab("/")}>
          {t("inici")}
        </NavLink>
        <NavLink to="/about" onClick={() => selectTab("/about")}>
          {t("sobre-OdoImplant")}
        </NavLink>
        <NavLink to="/ortodoncia" onClick={() => selectTab("/ortodoncia")}>
          {t("ortodòncia")}
        </NavLink>
        <NavLink to="/treatments" onClick={() => selectTab("/treatments")}>
          {t("tractaments")}
        </NavLink>
        <NavLink to="/testimonials" onClick={() => selectTab("/testimonials")}>
          {t("testimonis")}
        </NavLink>
        <NavLink to="/galery" onClick={() => selectTab("/galery")}>
          {t("galeria")}
        </NavLink>
        <NavLink to="/contact" onClick={() => selectTab("/contact")}>
          {t("contacte")}
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
