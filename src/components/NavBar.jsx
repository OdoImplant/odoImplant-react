import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  const [selected, setSelected] = useState("/");

  const selectTab = (tab) => {
    setSelected(tab);
  };

  return (
    <nav>
      <nav id="nav-container" className="bg-white shadow">
        <div>
          <img
            className="logo-nav"
            src="src/assets/odoimplant-02-1.png"
            alt=""
          />
        </div>
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
          <NavLink
            to="/"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/"
                ? "text-teal-800 border-b-2 border-teal-500 "
                : "border-b-2 border-transparent hover:text-gray-800"
            }`}
            onClick={() => selectTab("/")}
          >
            Inici
          </NavLink>

          <NavLink
            to="/about"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/about"
                ? "text-gray-800 border-b-2 border-teal-500 "
                : "border-b-2 border-transparent hover:text-gray-800 "
            }`}
            onClick={() => selectTab("/about")}
          >
            Sobre OdoImplant
          </NavLink>

          <NavLink
            to="/ortodoncia"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/ortodoncia"
                ? "text-gray-800 border-b-2 border-teal-500"
                : "border-b-2 border-transparent hover:text-gray-800"
            }`}
            onClick={() => selectTab("/ortodoncia")}
          >
            Ortodòncia
          </NavLink>

          <NavLink
            to="/treatments"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/treatments"
                ? "text-gray-800 border-b-2 border-teal-500"
                : "border-b-2 border-transparent hover:text-gray-800"
            }`}
            onClick={() => selectTab("/treatments")}
          >
            Tractaments
          </NavLink>

          <NavLink
            to="/testimonials"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/testimonials"
                ? "text-gray-800 border-b-2 border-teal-500"
                : "border-b-2 border-transparent hover:text-gray-800"
            }`}
            onClick={() => selectTab("/testimonials")}
          >
            Testimonis
          </NavLink>

          <NavLink
            to="/galery"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/galery"
                ? "text-gray-800 border-b-2 border-teal-500"
                : "border-b-2 border-transparent hover:text-gray-800"
            }`}
            onClick={() => selectTab("/galery")}
          >
            Galeria
          </NavLink>

          <NavLink
            to="/contact"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/contact"
                ? "text-gray-800 border-b-2 border-teal-500"
                : "border-b-2 border-transparent hover:text-gray-800"
            }`}
            onClick={() => selectTab("/contact")}
          >
            Contacte
          </NavLink>
          <a
            href="https://cloud-s22.mnprogram.net/24.2.3.0/#/cita-online/BC425646-15DD-4B4A-8D8B-3A3FDA5170F7"
            target="blank"
          >
            <button>Demana cita</button>
          </a>
        </div>
      </nav>
    </nav>
  );
}

export default NavBar;
