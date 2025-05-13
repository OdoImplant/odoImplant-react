import { Carousel } from "@material-tailwind/react";
import "../css/galeria.css";
import lupas from "../assets/lupas.png";
import alineadores from "../assets/alineadores.png";
import doctora from "../assets/foto-doctora.png";
import gal1 from "../assets/gal-1.png";
import gal2 from "../assets/gal-2.png";
import gal3 from "../assets/gal-3.png";
import gal4 from "../assets/gal-4.png";
import gal5 from "../assets/gal-5.png";
import gal6 from "../assets/gal-6.png";
import gal7 from "../assets/gal-7.png";
import gal8 from "../assets/gal-8.png";
import gal9 from "../assets/gal-9.png";
import gal10 from "../assets/gal-10.png";
import gal11 from "../assets/gal-11.png";
import gal12 from "../assets/gal-12.png";
import gal13 from "../assets/gal-13.png";
import gal14 from "../assets/gal-14.png";
import gal15 from "../assets/gal-15.png";
import gal16 from "../assets/gal-16.png";
import gal17 from "../assets/gal-17.png";
import gal18 from "../assets/gal-18.png";
import gal19 from "../assets/gal-19.png";
import gal20 from "../assets/gal-20.png";
import gal21 from "../assets/gal-21.png";
import gal22 from "../assets/gal-22.png";
import gal23 from "../assets/gal-23.png";
import gal24 from "../assets/gal-24.png";
import gal25 from "../assets/gal-25.png";
import gal26 from "../assets/gal-26.png";

function Galeria() {
  return (
    <div className="galery-top">
      <Carousel className="rounded-l">
        <img
          src={lupas}
          alt="doctora 1"
          className="h-full w-full object-cover"
        />
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
        <img src={gal1} alt="" className="h-full w-full object-cover" />
        <img src={gal2} alt="" className="h-full w-full object-cover" />
        <img src={gal3} alt="" className="h-full w-full object-cover" />
        <img src={gal4} alt="" className="h-full w-full object-cover" />
        <img src={gal5} alt="" className="h-full w-full object-cover" />
        <img src={gal6} alt="" className="h-full w-full object-cover" />
        <img src={gal7} alt="" className="h-full w-full object-cover" />
        <img src={gal8} alt="" className="h-full w-full object-cover" />
        <img src={gal9} alt="" className="h-full w-full object-cover" />
        <img src={gal10} alt="" className="h-full w-full object-cover" />
        <img src={gal11} alt="" className="h-full w-full object-cover" />
        <img src={gal12} alt="" className="h-full w-full object-cover" />
        <img src={gal13} alt="" className="h-full w-full object-cover" />
        <img src={gal14} alt="" className="h-full w-full object-cover" />
        <img src={gal15} alt="" className="h-full w-full object-cover" />
        <img src={gal16} alt="" className="h-full w-full object-cover" />
        <img src={gal17} alt="" className="h-full w-full object-cover" />
        <img src={gal18} alt="" className="h-full w-full object-cover" />
        <img src={gal19} alt="" className="h-full w-full object-cover" />
        <img src={gal20} alt="" className="h-full w-full object-cover" />
        <img src={gal21} alt="" className="h-full w-full object-cover" />
        <img src={gal22} alt="" className="h-full w-full object-cover" />
        <img src={gal23} alt="" className="h-full w-full object-cover" />
        <img src={gal24} alt="" className="h-full w-full object-cover" />
        <img src={gal25} alt="" className="h-full w-full object-cover" />
        <img src={gal26} alt="" className="h-full w-full object-cover" />
      </Carousel>
    </div>
  );
}

export default Galeria;
