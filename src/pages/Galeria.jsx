import { Carousel } from "@material-tailwind/react";
import "../css/galeria.css";

function Galeria() {
  return (
    <div className="galery-top">
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
    </div>
  );
}

export default Galeria;
