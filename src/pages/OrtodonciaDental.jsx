import "../css/Treatments.css";
import alineadores from "../assets/alineadores.png";
import { t } from "../utils/transllationFunction.js";
function OrtodonciaDental() {
  return (
    <>
      <header>
        <img src={alineadores} alt="alineadores" />
        <div className="intro-text-section">
          <span id="odoimplant-title">{t("serveis-dent")}</span>
          <span>{t("ortodòncia")}</span>
        </div>
      </header>
      <section className="ortodoncia-section">
        <div className="ortodoncia-text">
          <div className="title">
            {t("ortodoncia-que")} <span>{t("ortodoncia-preg")} </span>
          </div>
          <p>{t("ortodoncia-que-text")}</p>
        </div>
        <div className="ortodoncia-squares">
          <div class="p-8 space-y-3 border-2 border-teal-500 rounded-xl">
            <span class="inline-block text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize">
              {t("visita1")}
            </h1>

            <p class="text-gray-500 ">{t("visita1-text")}</p>
          </div>
          <div class="p-8 space-y-3 border-2 border-teal-500 rounded-xl">
            <span class="inline-block text-teal-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>

            <h1 class="text-xl font-semibold text-gray-700 capitalize ">
              {t("estudi")}
            </h1>

            <p class="text-gray-500 ">{t("estudi-text")}</p>
          </div>
        </div>
      </section>
      <section className="ortodoncia-section">
        <div className="ortodoncia-text">
          <div className="title">
            <span>{t("tipus")} </span>
            {t("tipus-orto")}
          </div>
          <p>{t("tipus-orto-text")}</p>
        </div>
        <div className="ortodoncia-text">
          <div className="title">
            <span>{t("alineadors")} </span>
          </div>
          <p>{t("alineadors-text")}</p>
        </div>
        <div className="ortodoncia-text">
          <div className="title">
            <span>{t("brackets")} </span>
            {t("brackets-auto")}
          </div>
          <p>{t("brackets-text")}</p>
        </div>
        <div className="ortodoncia-text">
          <div className="title">
            <span>{t("orto-infantil")}</span>
          </div>
          <p>{t("orto-infantil-text")}</p>
        </div>
      </section>
    </>
  );
}
export default OrtodonciaDental;
