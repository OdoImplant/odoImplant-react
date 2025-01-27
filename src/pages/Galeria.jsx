import { Carousel } from "@material-tailwind/react";
import "../css/galeria.css";
import lupas from "../assets/lupas.png";
import alineadores from "../assets/alineadores.png";
import doctora from "../assets/foto-doctora.png";

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
      </Carousel>
    </div>
  );
}

export default Galeria;
