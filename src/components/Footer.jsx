import "../css/footer.css";
function Footer() {
  return (
    <footer className="bg-white">
      <div className="container flex flex-col items-center p-6 mx-auto sm:space-y-0 sm:flex-row justify-between">
        <a href="/">
          <img
            className="w-auto h-7"
            src="src/assets/odoimplant-02-1.png"
            alt="odoimplant-logo"
          />
        </a>
        <div className="right-section">
          <a id="insta" href="https://www.instagram.com/odoimplant/">
            <img
              className="icon-insta"
              src="src/assets/vecteezy-instagram.png"
              alt="vecteezy-instagram"
            />
            <p>https://www.instagram.com/odoimplant/</p>
          </a>
          <div id="call">
            <img
              className="icon-gray"
              src="src/assets/call-gray.png"
              alt="call-gray"
            />
            <p>93 498 78 90</p>
          </div>
          <div id="mail">
            <img
              className="icon-gray"
              src="src/assets/mail-gray.png"
              alt="mail-gray"
            />
            <p>odo@odoimplant.com</p>
          </div>
          <div id="location">
            <img
              className="icon-gray"
              src="src/assets/location-gray.png"
              alt="location-gray"
            />
            <p>C/ Huelva 138 (local posterior) 08020 Barcelona</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
