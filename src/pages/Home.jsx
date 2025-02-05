import React from "react";
import { Carousel } from "@material-tailwind/react";
import "../css/home.css";
import lupas from "../assets/lupas.png";
import alineadores from "../assets/alineadores.png";
import doctora from "../assets/foto-doctora.png";
import doctora3 from "../assets/foto-doctora-3.png";
import aparatologia from "../assets/aparatologia.png";
import diente from "../assets/diente.png";
import urgencias from "../assets/urgencias.png";
import herramientas from "../assets/herramientas.png";
import pasillo from "../assets/pasillo.png";
import { t } from "../utils/transllationFunction.js";

function CarouselDefault() {
  return (
    <Carousel className="rounded-l">
      <img src={lupas} alt="doctora 1" className="h-full w-full object-cover" />
      <img
        src={alineadores}
        alt="alineadores"
        className="h-full w-full object-cover"
      />
      <img
        src={doctora}
        alt="doctora 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

function Home() {
  return (
    <>
      <section className="home-top">
        <div id="carroussel-container">
          <CarouselDefault />
        </div>
        <div className="intro-text-section">
          <span id="odoimplant-title">Odoimplant</span>
          <span>{t("odo-sub")}</span>
          <span id="subtitle">{t("odo-text")}</span>
        </div>
      </section>
      <section className="experience-section">
        <div className="experience-text">
          <div id="boxes-container">
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize">
                {t("avalats")}
              </h1>

              <p class="text-gray-500">{t("avalats-text")}</p>
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
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize ">
                {t("Equip humà")}
              </h1>

              <p class="text-gray-500 ">{t("huma-text")}</p>
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
                {t("empatia")}
              </h1>

              <p class="text-gray-500 ">{t("empatia-text")}</p>
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
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize ">
                {t("referent")}
              </h1>

              <p class="text-gray-500 ">{t("referent-text")}</p>
            </div>
          </div>
        </div>
        <img src={doctora3} alt="doctora3" />
      </section>
      <section className="aparatologia-section">
        <img src={aparatologia} alt="escáner 3d" />
        <div id="aparatología-text">
          <div className="title">
            <span>{t("aparatologia")} </span>
            {t("generacio")}
          </div>
          <p>{t("aparatologia-text")}</p>
        </div>
      </section>
      <section className="urgencias-section">
        <div id="urgencias-text">
          <div className="title">
            <span>{t("urgencies")} </span>
            {t("dentals")}
          </div>
          <p>{t("urgencies-text")}</p>
        </div>
        <div className="urgencias-sintomas">
          <ul>
            <li>
              <img className="urg-icon" src={diente} alt="diente" />
              <p>
                <span>{t("sangrat")}</span> {t("continu")}
              </p>
            </li>
            <li>
              <img className="urg-icon" src={urgencias} alt="urgencias" />
              <p>
                <span>{t("dolor")}</span> {t("sever")}
              </p>
            </li>
            <li>
              <img className="urg-icon" src={herramientas} alt="tools" />
              <p>
                <span>{t("perdua")} </span> {t("traumatisme")}
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="financiacion-tiempo-section">
        <div className="financiacion-tiempo">
          <section className="financiacion-section">
            <div id="financiacion-text">
              <div className="title">
                <span>{t("financiacio")} </span>
              </div>
              <p>{t("financiacio-text")}</p>
            </div>
          </section>
          <section className="tiempo-section">
            <div id="tiempo-text">
              <div className="title">
                <span>{t("temps")}</span>
              </div>
              <p>{t("temps-text")}</p>
            </div>
          </section>
        </div>
        <img className="pasillo-img" src={pasillo} alt="pasillo" />
      </section>
    </>
  );
}

export default Home;
