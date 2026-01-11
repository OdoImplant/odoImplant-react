import "../css/about.css";
import equipo from "../assets/equipo.png";
import ibern from "../assets/draIbern.png";
import drGarcia from "../assets/dr-garcia.png";
import valdueza from "../assets/valdueza.png";
import hernandez from "../assets/bea.png";
import didac from "../assets/didac.png";
import manuel from "../assets/manuel.png";
import draGarcia from "../assets/dragarcia.png";
import soledad from "../assets/soledad.png";
import { t } from "../utils/transllationFunction.js";
import dana from "../assets/DanaHuttunen.png";
import crisRod from "../assets/CrisRodriguez.png";

function About() {
  return (
    <>
      <header>
        <img src={equipo} alt="equipo" />
        <div className="intro-text-section">
          <span id="odoimplant-title">OdoImplant</span>
          <span>{t("who")}</span>
        </div>
      </header>
      <section className="clinica-section">
        <div className="clinica-text">
          <div className="title">
            <span>{t("clinic")} </span>
          </div>
          <p>{t("clinic-text")}</p>
        </div>
      </section>
      <section className="equipo-section">
        <div className="equipo-text">
          <div className="title">
            <span>{t("team")}</span>
          </div>
          <p>{t("team-text")}</p>
        </div>
        <div class="container px-6 py-8 mx-auto">
          <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-96 mx-auto rounded-lg"
                src={ibern}
                alt="Dra-Ibern"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">{t("cris")}</h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  {t("cris-title")}
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-96 mx-auto rounded-lg"
                src={drGarcia}
                alt="Dr-Garcia-Linares"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">{t("jordi")}</h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  {t("jordi-title")}
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-96 mx-auto rounded-lg"
                src={valdueza}
                alt="Dra-Valdueza"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">{t("crisV")}</h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  {t("crisV-title")}
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-96 mx-auto rounded-lg"
                src={hernandez}
                alt="Dra-hernandez"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500">{t("bea")}</h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  {t("bea-title")}
                </span>
              </div>
            </div>
            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-96 mx-auto rounded-lg"
                src={didac}
                alt="Didac"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">{t("didac")}</h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  {t("didac-title")}
                </span>
              </div>
            </div>
            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-96 mx-auto rounded-lg"
                src={manuel}
                alt="Manuel"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">
                  {t("manuel")}
                </h3>
                <span class="mt-1 font-medium text-gray-600">
                  {t("manuel-title")}
                </span>
              </div>
            </div>
            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-96 mx-auto rounded-lg"
                src={draGarcia}
                alt="Dra-Garcia"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">
                  {t("claudia")}
                </h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  {t("claudia-title")}
                </span>
              </div>
            </div>
            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-96 mx-auto rounded-lg"
                src={dana}
                alt="Dana"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">{t("dana")}</h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  {t("dana-title")}
                </span>
              </div>
            </div>
            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-96 mx-auto rounded-lg"
                src={soledad}
                alt="Soledad"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">
                  {t("soledad")}
                </h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  {t("sole-title")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
