import "../css/about.css";
import equipo from "../assets/equipo.JPG";
import ibern from "../assets/draIbern.JPG";
import drGarcia from "../assets/dr-garcia.JPG";
import valdueza from "../assets/valdueza.JPG";
import hernandez from "../assets/bea.JPG";
import didac from "../assets/didac.JPG";
import manuel from "../assets/manuel.JPG";
import draGarcia from "../assets/dragarcia.JPG";
import soledad from "../assets/soledad.JPG";

function About() {
  return (
    <>
      <header>
        <img src={equipo} alt="equipo" />
        <div className="intro-text-section">
          <span id="odoimplant-title">OdoImplant</span>
          <span>Qui sóm?</span>
        </div>
      </header>
      <section className="clinica-section">
        <div className="clinica-text">
          <div className="title">
            La <span>Clínica </span>
          </div>
          <p>
            La clínica dental Odoimplant és una de les clíniques familiars més
            antigues del barri de Sant Martí, a Barcelona. Obrim les portes als
            noranta i des de llavors, hem atès més de 30.000 pacients d’aquesta
            ciutat. Hem visitat molts nens que ara tornen a confiar en nosaltres
            per tractar els seus fills, i esperem que en un futur ens portin els
            seus néts.
          </p>
        </div>
      </section>
      <section className="equipo-section">
        <div className="equipo-text">
          <div className="title">
            L'<span>Equip </span>
          </div>
          <p>
            A la nostra clínica, la Doctora Cristina Ibern i el seu equip són
            especialistes amb bona reputació al món de l’odontologia, una
            rigorosa formació acadèmica i molts anys d’experiència en implants
            dentals, ortodòncia, periodòncia, endodòncia, estètica dental, etc.
            Visiteu-nos i ho comprovareu! A Odo Implant, entenem que cada
            somriure és únic, i és per això que el nostre equip es compromet a
            oferir solucions personalitzades per a les necessitats específiques
            de cada pacient. Els nostres especialistes han estat seleccionats
            amb cura segons la seva experiència i habilitats en diverses àrees
            de l’odontologia, assegurant que puguem proporcionar una atenció
            integral i efectiva. El nostre equip d’experts compta amb una sòlida
            formació acadèmica i una àmplia experiència en les seves respectives
            disciplines. Això ens permet estar a l’avantguarda dels avenços en
            odontologia i utilitzar les tècniques més innovadores per oferir
            resultats excepcionals. La nostra clínica està equipada amb
            tecnologia de darrera generació per garantir tractaments precisos i
            còmodes. A Odo Implant, ens esforcem per crear un ambient càlid i
            acollidor per als nostres pacients. Valorem la comunicació oberta i
            transparent, i treballem junts als nostres pacients per comprendre
            els seus objectius i expectatives. Ja sigui que estiguis interessat
            a millorar l’estètica del teu somriure o necessitis solucions més
            específiques, el nostre equip està compromès amb el teu benestar i
            satisfacció.
          </p>
        </div>
        <div class="container px-6 py-8 mx-auto">
          <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-55 mx-auto rounded-lg"
                src={ibern}
                alt="Dra-Ibern"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">
                  Dra Cristina Ibern
                </h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  Ortodoncista i Directora mèdica
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-55 mx-auto rounded-lg"
                src={drGarcia}
                alt="Dr-Garcia-Linares"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">
                  Dr Jordi Garcia Linares
                </h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  Metge Maxil·lofacial
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-55 mx-auto rounded-lg"
                src={valdueza}
                alt="Dra-Valdueza"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">
                  Dra Cristina Valdueza
                </h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  Generalista, especialitzada en endodòncia
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-55 mx-auto rounded-lg"
                src={hernandez}
                alt="Dra-hernandez"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500">
                  Dra Bea Hernández
                </h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  Generalista especialitzada en estètica i prostodòncia
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container px-6 py-8 mx-auto">
          <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-30 mx-auto rounded-lg"
                src={didac}
                alt="Didac"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">Dídac</h3>
                <span class="mt-1 font-medium text-gray-600 ">Higienista</span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-55 mx-auto rounded-lg"
                src={manuel}
                alt="Manuel"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">Manuel</h3>
                <span class="mt-1 font-medium text-gray-600">
                  Higienista i protètic dental
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-55 mx-auto rounded-lg"
                src={draGarcia}
                alt="Dra-Garcia"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">
                  Claudia Garcia Fernandez
                </h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  Generalista i periodòncia
                </span>
              </div>
            </div>

            <div class="w-full max-w-xs text-center">
              <img
                class="object-cover object-center w-full h-55 mx-auto rounded-lg"
                src={soledad}
                alt="Soledad"
              />

              <div class="mt-2">
                <h3 class="text-lg font-medium text-teal-500 ">Soledad</h3>
                <span class="mt-1 font-medium text-gray-600 ">
                  Recepcionista
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
