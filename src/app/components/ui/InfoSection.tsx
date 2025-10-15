
import Image from "next/image";
import infoImage from "@/assets/images/info-section.png";


export default function InfoSection() {
  return (
    <section className="px-4 py-12 max-w-6xl mx-auto gap-4">
      {/* Primera fila */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-12">
        {/* Texto */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-orange-500  md:text-5xl font-semibold mb-4">
            Hecho para que viajar sea simple
          </h2>
          <ul className="space-y-2 text-gray-700 md:text-2xl">
            <li>✅ Reserva rápido, sin largas esperas.</li>
            <li>✅ Elegí tu asiento ideal.</li>
            <li>✅ Toda la información del viaje al alcance de tu mano.</li>
            <li>✅ Estamos para ayudarte en cada paso.</li>
          </ul>
        </div>
        {/* Imagen */}
        <div className="md:w-1/2">
          <Image
            src={infoImage}
            alt="Pasajeros en micro"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Segunda fila */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Imagen */}
        <div className="md:w-1/2">
          <Image
            src={infoImage}
            alt="Personas usando app en micro"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Texto */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-orange-500 md:text-5xl font-semibold mb-4">
            Simple. Seguro. Eficiente.
          </h2>
          <p className="text-gray-700 text-sm md:text-2xl">
            Viajar con TRIPTAP es más que comprar un pasaje: es disfrutar de una experiencia clara y sin complicaciones, desde la búsqueda hasta el asiento.
          </p>
        </div>
      </div>
    </section>
  );
}
