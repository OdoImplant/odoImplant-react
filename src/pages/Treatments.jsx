import "../css/Treatments.css";

function Treatments() {
  return (
    <>
      <header>
        <img src="src/assets/box-2.JPG" alt="box" />
        <div className="intro-text-section">
          <span id="odoimplant-title">Treatments</span>
        </div>
      </header>

      <p className="ortodoncia-text">
        A odoimplant tots els tractaments comencen amb un assessorament
        personalitzat i complet. A la primera visita els doctors avaluen i
        planifiquen el diagnòstic de cada pacient a mida. Som conscients que el
        més important a la salut bucal és una bona prevenció i adquisició
        d’hàbits bucodentals, és per això que tenim un equip amb especialitats
        per tractar i prevenir totes les àrees. Som una clínica dental amb tota
        mena d’especialitats i cobrim tots els tractaments al centre.
      </p>
      <section className="ortodoncia-section treatments-list">
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>Estètica </span> dental
          </div>
          <p>
            La estètica dental és l’especialitat encarregada de tractar els
            problemes relacionats amb la arminia bucal, tenint com a objectiu
            aconseguir el somriure ideal.
          </p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>Pròtesi </span> dental
          </div>
          <p>Especialitat encarregada de reemplaçar les absències dentals.</p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>Odonto</span>pediatria
          </div>
          <p>
            Especialitat encarregada de tractar la cura oral, preventiu i
            terapèutic dels més petits de la família.
          </p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>Endodòncia </span>
          </div>
          <p>
            L’endodòncia, o tractament de conducte, és el procediment que es
            realitza per eliminar, parcialment o totalment, la polpa (el nervi)
            de la dent; i emplenar el conducte de l’arrel amb l’objectiu
            principal de conservar la dent o el queixal natural. Les causes més
            freqüents per les quals es requereix una endodòncia són: càries i/o
            traumatismes, entre d’altres.
          </p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>Odontologia </span>general
          </div>
          <p>Especialitat encarregada de diagnosticar els problemes bucals.</p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>Radiologia</span>
          </div>
          <p>
            Les radiografies dentals són molt importants en el diagnòstic
            d’anomalies que afecten les dents i els ossos de suport que no podem
            detectar en una exploració clínica visual.
          </p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>Cirurgia</span> i implants
          </div>
          <p>
            La cirurgia d’implants dentals és un procediment que reemplaça les
            arrels de les dents amb pals metàl·lics similars a caragols i
            reemplaça les dents danyades o que manca amb dents artificials que
            es veuen i funcionen de manera molt similar als reals.
          </p>
        </div>
        <div className="ortodoncia-text treatments">
          <div className="title">
            <span>Periodòncia</span>
          </div>
          <p>
            La periodòncia és una branca de l’odontologia que s’especialitza en
            la prevenció, el diagnòstic i el tractament de la malaltia
            periodontal (malaltia de l’estructura que envolta la dent).
          </p>
        </div>
      </section>
    </>
  );
}
export default Treatments;
