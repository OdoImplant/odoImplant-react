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
          <span>Creant nous somriures perfectes tots els dies</span>
          <span id="subtitle">
            Promociona, restaura i manté la teva salut bucodental
          </span>
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
                Avalats per 30 anys d'experiència
              </h1>

              <p class="text-gray-500">
                Perquè ens preocupa la teva salut, ens importes tú!
              </p>
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
                Equip humà
              </h1>

              <p class="text-gray-500 ">
                La nostra clínica dental es distingeix per l'equip humà que
                l'integra. Tenim l'bjectiu que la teva visita al dentista sigui
                una experiència agradable amb unes instal.lacions modernes i
                càlides.
              </p>
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
                Empatia, Respecte i Qualitat
              </h1>

              <p class="text-gray-500 ">
                Els nostres principals valors són l'empatia, el respecte i la
                qualitat en l'atenció, oferint un tracte personalitzat als
                pacients i amb el màxim compromís.
              </p>
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
                Ser referent
              </h1>

              <p class="text-gray-500 ">
                A Odoimplant dentistes, auxiliars i tots els altres membres de
                l'equip compartim el propòsit de ser un referent a Barcelona,
                ​​garantitzant sempre un alt grau d'implicació professional i
                emocional amb els pacients.
              </p>
            </div>
          </div>
        </div>
        <img src={doctora3} alt="doctora3" />
      </section>
      <section className="aparatologia-section">
        <img src={aparatologia} alt="escáner 3d" />
        <div id="aparatología-text">
          <div className="title">
            <span>Aparatologia </span>d'última generació
          </div>
          <p>
            Disposem d'un escaner 3D intraoral que escaneja la cavitat oral i
            transfereix les dades digitalitzades a l'ordinador. D'aquesta manera
            evitem els motlles d'impressió desagradables. Ens permet també
            planificar en 3D el tractament més edient per a cada pacient de
            forma multidisciplinar. A més de disposar d'Ortopantomografia,
            telerradiografia y radiografies intraorals digitals que a més
            d'obtenir unes imatges molt més precises, redueix la quantitat de
            radiació que ha de rebre el pacient.
          </p>
        </div>
      </section>
      <section className="urgencias-section">
        <div id="urgencias-text">
          <div className="title">
            <span>Urgències </span>dentals
          </div>
          <p>
            Atenem tot tipus d'urgències. En cas que necesiti un dentista
            d'urgència a Sant Martí, pot trucar de 8-21 i li buscarem una cita
            amb el dentista que tinguem a la clínica d'urgència, ell o ella serà
            qui avaluï la situació i decideixi què fer.
          </p>
        </div>
        <div className="urgencias-sintomas">
          <ul>
            <li>
              <img className="urg-icon" src={diente} alt="diente" />
              <p>
                <span>Sangrat</span> continu de la boca
              </p>
            </li>
            <li>
              <img className="urg-icon" src={urgencias} alt="urgencias" />
              <p>
                <span>Dolor</span> sever dental
              </p>
            </li>
            <li>
              <img className="urg-icon" src={herramientas} alt="tools" />
              <p>
                <span>Dolor o pèrdua </span> d'una dent per traumatisme
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
                <span>Financiació </span>
              </div>
              <p>
                Sóm conscients que els tractaments dentals poden tenir un cost
                elevat, és per això que ens adaptem al pacient al màxim. Comptem
                amb diferents plans de pagaments i oferim financiació fins a
                vint-i-quatre mesos sense interessos.
              </p>
            </div>
          </section>
          <section className="tiempo-section">
            <div id="tiempo-text">
              <div className="title">
                <span>Falta</span> de temps
              </div>
              <p>
                Tens problemes amb els horaris o no tens temps per a visitar-te?
                No et preocupis, a Odoimplant oferim la possibilitad d'agrupar
                diferents tractaments en una sola sessió o en el mínim possible
                per a que no hagis de venir tants cops.
              </p>
            </div>
          </section>
        </div>
        <img className="pasillo-img" src={pasillo} alt="pasillo" />
      </section>
    </>
  );
}

export default Home;
