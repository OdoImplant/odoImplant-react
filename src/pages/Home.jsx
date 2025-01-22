import React from "react";
import { Carousel } from "@material-tailwind/react";
import "../css/home.css";

function CarouselDefault() {
  return (
    <Carousel className="rounded-l">
      <img
        src="src/assets/lupas.png"
        alt="doctora 1"
        className="h-full w-full object-cover"
      />
      <img
        src="src/assets/alineadores.JPG"
        alt="alineadores"
        className="h-full w-full object-cover"
      />
      <img
        src="src/assets/foto-doctora.JPG"
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
          <span>Creando nuevas sonrisas perfectas todos los días</span>
          <span id="subtitle">
            Promociona, restaura y mantiene tu salud bucodental
          </span>
        </div>
      </section>
      <section className="experience-section">
        <div className="experience-text">
          <div id="boxes-container">
            <div class="p-8 space-y-3 border-2 border-teal-500 rounded-xl">
              <span class="inline-block text-teal-500 dark:text-blue-400">
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

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Avalados por 30 años de experiencia
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                Porque nos preocupa tu salud, ¡nos importas tú!
              </p>
            </div>
            <div class="p-8 space-y-3 border-2 border-teal-500 rounded-xl">
              <span class="inline-block text-teal-500 dark:text-blue-400">
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

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Equipo humano
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                Nuestra clínica dental se distingue por el equipo humano que lo
                integra. Tenemos el objetivo de que tu visita al dentista sea
                una experiencia agradable con unas instalaciones modernas y
                cálidas.
              </p>
            </div>
            <div class="p-8 space-y-3 border-2 border-teal-500 rounded-xl">
              <span class="inline-block text-teal-500 dark:text-blue-400">
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

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Empatía, Respeto y Calidad
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                Nuestros principales valores son la empatía, el respeto y la
                calidad en la atención, ofreciendo un trato personalizado a los
                pacientes y con el máximo compromiso.
              </p>
            </div>
            <div class="p-8 space-y-3 border-2 border-teal-500 rounded-xl">
              <span class="inline-block text-teal-500 dark:text-blue-400">
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

              <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Ser referente
              </h1>

              <p class="text-gray-500 dark:text-gray-300">
                En ODO Implant dentistas, auxiliares y todos los demás miembros
                del equipo compartimos el propósito de ser un referente en
                Barcelona, ​​garantizando siempre un alto grado de implicación
                profesional y emocional con los pacientes.
              </p>
            </div>
          </div>
        </div>
        <img src="src/assets/foto-doctora-3.JPG" alt="doctora3" />
      </section>
      <section className="aparatologia-section">
        <img src="src/assets/aparatologia.JPG" alt="escáner 3d" />
        <div id="aparatología-text">
          <div className="title">
            <span>Aparatología </span>de última generación
          </div>
          <p>
            Disponemos de un escáner 3D intraoral que escanea la cavidad oral y
            transfiere los datos digitalizados al ordenador. De esta forma
            evitamos los moldes de impresión desagradables. Nos permite también
            planificar en 3D el tratamiento más adecuado para cada paciente de
            forma multidisciplinar Además de disponer Ortopantomografía,
            telerradiografía y radiografías intraorales digitales que además de
            obtener unas imágenes mucho más precisas, reduce la cantidad de
            radiación que debe recibir el paciente.
          </p>
        </div>
      </section>
      <section className="urgencias-section">
        <div id="urgencias-text">
          <div className="title">
            <span>Urgencias </span>dentales
          </div>
          <p>
            Atendemos a todo tipo de urgencias. En caso de que necesite un
            dentista de urgencias en Sant Martí, puede llamarnos de 8-21 y le
            buscaremos una cita con el dentista que tengamos en la clínica de
            urgencias, él será quien evalúe la situación y decida qué hacer.
          </p>
        </div>
        <div className="urgencias-sintomas">
          <ul>
            <li>
              <img
                className="urg-icon"
                src="src/assets/diente.png"
                alt="diente"
              />
              <p>
                <span>Sangrado</span> continuo de la boca
              </p>
            </li>
            <li>
              <img
                className="urg-icon"
                src="src/assets/urgencias.png"
                alt="urgencias"
              />
              <p>
                <span>Dolor</span> severo dental
              </p>
            </li>
            <li>
              <img
                className="urg-icon"
                src="src/assets/herramientas.png"
                alt="tools"
              />
              <p>
                <span>Daño o pérdida </span> de un diente por traumatismo
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
                <span>Financiación </span>
              </div>
              <p>
                Somos conscientes de que los tratamientos dentales pueden tener
                un coste elevado, es por eso que nos adaptamos al paciente al
                máximo. Contamos con distintos planes de pagos y ofrecemos
                financiación hasta veinticuatro meses sin intereses.
              </p>
            </div>
          </section>
          <section className="tiempo-section">
            <div id="tiempo-text">
              <div className="title">
                <span>Falta</span> de tiempo
              </div>
              <p>
                ¿Tienes problemas con los horarios o no tienes tiempo para
                visitarte? No te preocupes, en Odo Implant ofrecemos la
                posibilidad de agrupar varios tratamientos en una sola sesión o
                en el mínimo posible para que no tengas que venir tantas veces.
              </p>
            </div>
          </section>
        </div>
        <img
          className="pasillo-img"
          src="src/assets/pasillo.JPG"
          alt="pasillo"
        />
      </section>
    </>
  );
}

export default Home;
