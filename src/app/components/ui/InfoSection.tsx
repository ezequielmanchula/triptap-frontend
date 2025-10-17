
import Image from "next/image";
import infoImage from "@/assets/images/info-section.png";
import { FaCheck } from 'react-icons/fa';


export default function InfoSection() {

    const infoLi = [
    { label: "Reserva rápido, sin largas esperas."},                  
    { label: "Elegí tu asiento ideal."},
    { label: "Toda la información del viaje al alcance de tu mano."},
    { label: "Estamos para ayudarte en cada paso."},
  ];

  return (
    <section className="px-5 py-12 my-8 max-w-6xl mx-auto gap-5">
      {/* Primera fila */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-25 my-5 p-6">
        {/* Texto */}
        <div className="md:w-1/2 p-4">
          <h2 className="Display-Large text-[#ED7A1C] mb-4">Hecho para que viajar sea simple</h2>
          <ul className="Headline-Small space-y-2 text-[#333333]">

            {infoLi.map(({label}, i) => (
              <li key={i} className="flex flex-row align-baseline gap-2"><FaCheck size={24}/> {label}</li>
            ))}
          </ul>
        </div>
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <Image
            src={infoImage}
            alt="Pasajeros en micro"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Segunda fila */}
      <div className="flex flex-col md:flex-row items-center gap-25 my-5 p-6">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <Image
            src={infoImage}
            alt="Personas usando app en micro"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Texto */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="Display-Large text-[#ED7A1C] mb-4">
            Simple. Seguro. Eficiente.
          </h2>
          <p className="Headline-Small text-[#333333]">
            Viajar con TRIPTAP es más que comprar un pasaje: es disfrutar de una experiencia clara y sin complicaciones, desde la búsqueda hasta el asiento.
          </p>
        </div>
      </div>
    </section>
  );
}
