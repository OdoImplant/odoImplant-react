import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  const [selected, setSelected] = useState("/");

  const selectTab = (tab) => {
    setSelected(tab);
  };

  return (
    <nav>
      <nav id="nav-container" className="bg-white shadow dark:bg-white-800">
        <div>
          <img
            className="logo-nav"
            src="src/assets/odoimplant-02-1.png"
            alt=""
          />
        </div>
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-600">
          <Link
            to="/"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/"
                ? "text-teal-800 border-b-2 border-teal-500 dark:text-teal-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-500 hover:border-teal-500"
            }`}
            onClick={() => selectTab("/")}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/about"
                ? "text-gray-800 border-b-2 border-teal-500 dark:text-gray-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-500 hover:border-teal-500"
            }`}
            onClick={() => selectTab("/about")}
          >
            About us
          </Link>

          <Link
            to="/ortodoncia"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/ortodoncia"
                ? "text-gray-800 border-b-2 border-teal-500 dark:text-gray-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-500 hover:border-teal-500"
            }`}
            onClick={() => selectTab("/ortodoncia")}
          >
            Ortodoncia
          </Link>

          <Link
            to="/treatments"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/treatments"
                ? "text-gray-800 border-b-2 border-teal-500 dark:text-gray-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-500 hover:border-teal-500"
            }`}
            onClick={() => selectTab("/treatments")}
          >
            Treatments
          </Link>

          <Link
            to="/testimonials"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/testimonials"
                ? "text-gray-800 border-b-2 border-teal-500 dark:text-gray-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-500 hover:border-teal-500"
            }`}
            onClick={() => selectTab("/testimonials")}
          >
            Testimonials
          </Link>

          <Link
            to="/contact"
            className={`mx-1.5 sm:mx-6 transition-colors duration-300 transform ${
              selected === "/contact"
                ? "text-gray-800 border-b-2 border-teal-500 dark:text-gray-500"
                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-500 hover:border-teal-500"
            }`}
            onClick={() => selectTab("/contact")}
          >
            Contact
          </Link>
        </div>
      </nav>
    </nav>
  );
}

export default NavBar;
