import "../css/Treatments.css";
import box from "../assets/box-2.png";
import { t } from "../utils/transllationFunction.js";

function Treatments() {
  return (
    <>
      <header>
        <img src={box} alt="box" />
        <div className="intro-text-section">
          <span id="odoimplant-title">{t("tractaments")}</span>
        </div>
      </header>

      <p className="ortodoncia-text">{t("tractaments-text")}</p>
      <section className="ortodoncia-section treatments-list">
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>{t("estetica")} </span>
          </div>
          <p>{t("estetica-text")}</p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>{t("protesi")} </span>
          </div>
          <p>{t("protesi-text")}</p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>{t("odontopediatra")}</span>
          </div>
          <p>{t("odontopediatra-text")}</p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>{t("endodoncia")} </span>
          </div>
          <p>{t("endodoncia-text")}</p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>{t("odonto-gen")} </span>
          </div>
          <p>{t("odonto-gen-text")}</p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>{t("radiologia")}</span>
          </div>
          <p>{t("radiologia-text")}</p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>{t("cirurgia")}</span>
          </div>
          <p>{t("cirurgia-text")}</p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>{t("periodoncia")}</span>
          </div>
          <p>{t("periodoncia-text")}</p>
        </div>
      </section>
    </>
  );
}
export default Treatments;
