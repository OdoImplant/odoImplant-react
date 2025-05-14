import { t } from "../utils/transllationFunction.js";
import "../css/fisio.css";
import gal22 from "../assets/gal-22.png";
import maxilo1 from "../assets/maxilo-1.png";

function Fisio() {
  return (
    <>
      <header>
        <img src={gal22} alt="" />
        <div className="intro-text-section">
          <span id="odoimplant-title">{t("maxilo")}</span>
          <span>Què és?</span>
        </div>
      </header>
      <div className="fisio-top">
        <img src={maxilo1} alt="maxilo-fisio" />
        <p>{t("maxilo-header")}</p>
      </div>
    </>
  );
}
export default Fisio;
