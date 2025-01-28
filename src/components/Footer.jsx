import "../css/footer.css";
import logo from "../assets/odoimplant-02-1.png";
import insta from "../assets/vecteezy-instagram.png";
import callLogo from "../assets/call-gray.png";
import mailLogo from "../assets/mail-gray.png";
import location from "../assets/location-gray.png";
function Footer() {
  return (
    <footer className="bg-white">
      <div className="container flex flex-col items-center p-6 mx-auto sm:space-y-0 sm:flex-row justify-between">
        <a href="/">
          <img className="w-auto h-7" src={logo} alt="odoimplant-logo" />
        </a>
        <div className="right-section">
          <a id="insta" href="https://www.instagram.com/odoimplant/">
            <img className="icon-insta" src={insta} alt="vecteezy-instagram" />
            <p>https://www.instagram.com/odoimplant/</p>
          </a>
          <div id="call">
            <img className="icon-gray" src={callLogo} alt="call-gray" />
            <p>93 498 78 90</p>
          </div>
          <div id="mail">
            <img className="icon-gray" src={mailLogo} alt="mail-gray" />
            <p>odo@odoimplant.com</p>
          </div>
          <div id="location">
            <img className="icon-gray" src={location} alt="location-gray" />
            <p>C/ Huelva 138 (local posterior) 08020 Barcelona</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
