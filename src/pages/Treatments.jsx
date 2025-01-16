import "../css/Treatments.css";

function Treatments() {
  return (
    <>
      <header>
        <img src="src/assets/alineadores.JPG" alt="alineadores" />
        <div className="intro-text-section">
          <span id="odoimplant-title">Servicios Dentales</span>
          <span>Ortodoncia</span>
        </div>
      </header>
      <section className="ortodoncia-section">
        <div className="ortodoncia-text">
          <div className="title">
            Què és la <span>Ortodòncia? </span>
          </div>
          <p>
            És una especialitat del camp de l’odontologia que s’encarrega de
            diagnosticar, prevenir i corregir les irregularitats dentals i
            facials. Així doncs, el ortodontista és un odontòleg que a més de
            tenir la carrera d’odontologia disposa d’uns estudis avançats en
            aquest camp. Aquests coneixements permeten poder corregir la posició
            de les dents i guiar el desenvolupament dels maxil·lars.
          </p>
        </div>
        <div className="ortodoncia-squares">
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
              1a VISITA ORTODÒNCIA
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              És una visita on el nostre ortodontista, li realitzarà de manera
              gratuïta un examen clínic, un diagnòstic de la seva maloclusió i
              el pressupost del seu tractament.
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
              ESTUDI D’ORTODÒNCIA
            </h1>

            <p class="text-gray-500 dark:text-gray-300">
              Abans de començar amb el tractament d’ortodòncia, realitzarem un
              estudi fotogràfic i radiogràfic a més d’un escàner intraoral, que
              ens permetrà realitzar un diagnòstic amb major precisió. Una
              vegada fet l’estudi i avaluat les teves necessitats,
              l’especialista li recomanarà quin tipus d’ortodòncia és més
              efectiva en el seu cas.
            </p>
          </div>
        </div>
      </section>
      <section className="ortodoncia-section">
        <div className="ortodoncia-text">
          <div className="title">
            <span>Tipus </span>d'Ortodòncia
          </div>
          <p>
            Les tècniques d’ortodòncia han anat evolucionant al llarg dels anys,
            però, potser, el canvi recent més significatiu és l’aparició de
            l’ortodòncia amb alineadors, aquests ens permeten tractaments més
            curts, més còmodes i estètics.
          </p>
        </div>
        <div className="ortodoncia-text">
          <div className="title">
            <span>Alineadors </span>
          </div>
          <p>
            Les fèrules o alineadors transparents són un sistema alternatiu als
            brackets, que consisteixen a anar millorant progressivament la
            posició de les dents a mesura que anem canviant d’alineador. Aquests
            moviments estan prèviament planificats digitalment per la Dra.
            Ibern. Aquests alineadors transparents estan fabricats a mesura per
            a cada pacient, amb un material que fa que siguin molt estètics –
            gairebé invisibles– i molt còmodes. A més de ser molt còmodes i
            transparents, es treuen per a menjar i raspallar-se, per la qual
            cosa no alteren l’estil de vida i ens permeten tenir una correcta
            higiene dental durant el tractament d’ortodòncia. En odoimplant som
            pioners en el barri en ortodòncia amb alineadors.
          </p>
        </div>
        <div className="ortodoncia-text">
          <div className="title">
            <span>Brackets </span>auto lligables
          </div>
          <p>
            Aquest tipus de brackets són l’evolució dels brackets metàl·lics
            convencionals, aquesta nova tecnologia ens permet escurçar el temps
            de tractament respecte als brackets tradicionals. El principal
            avantatge és que no porten gomes per a subjectar l’arc, porten una
            tapa que ens permet que sempre estiguin activats i que puguem
            minimitzar el nombre de visites.
          </p>
        </div>
        <div className="ortodoncia-text">
          <div className="title">
            Ortodòncia <span>Infantil</span>
          </div>
          <p>
            És fonamental l’ortodòncia preventiva en edats primerenques, ja que
            una vegada ha acabat el creixement no es poden corregir les
            alteracions dels ossos de la mandíbula i el maxil·lar. La prevenció
            ens permet realitzar una valoració del creixement coordinat dels
            ossos maxil·lars, l’avaluació de les funcions orals (deglució,
            respiració, parla), si el recanvi dentari està sent el correcte,
            etc. Es recomana fer la primera visita amb el ortodontista als 6
            anys.
          </p>
        </div>
      </section>
    </>
  );
}
export default Treatments;
