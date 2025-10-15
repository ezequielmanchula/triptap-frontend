import Image from "next/image";
import panel from "@/assets/images/panel-home.jpg";

export default function Panel() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-white min-h-[70vh] md:min-h-[70vh] lg:min-h-[90vh] overflow-hidden">
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
        <h1 className="mb-3 text-xl md:text-3xl lg:text-4xl font-bold">¿Listo para tu próximo viaje?</h1>
        <p className="mb-6  md:text-lg lg:text-2xl font-normal">Reservá tu asiento ahora y viajá sin complicaciones.</p>
        <button className="bg-[#ED7A1C] hover:bg-[#d96a13] text-white font-medium py-2 px-5 rounded-md transition-colors">Reservar ahora →</button>
      </div>
    </section>
  );
}
