import Image from "next/image";
import panel from "@/assets/images/panelImg.jpeg";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

export default function Panel() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-white min-h-[529px] overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={panel}
          alt="Personas viajando en micro"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Contenido */}
      <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] text-white">
        <h1 className="Display-Large mb-3">¿Listo para tu próximo viaje?</h1>
        <p className="Headline-Small mb-6">Reservá tu asiento ahora y viajá sin complicaciones.</p>
        <Link
          href={"/reservations"}
          className="Title-Small bg-[#ED7A1C] hover:bg-[#d96a13] text-white py-2 px-5 rounded-md transition-colors"> Reservar ahora 
        </Link>
      </div>
    </section>
  );
}
