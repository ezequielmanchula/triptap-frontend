
import Image from "next/image";
import heroImg from "@/assets/images/hero-home.jpeg";

export default function Hero() {
  return (
     <section className="relative flex flex-col justify-center items-center text-center text-white min-h-60 lg:min-h-screen overflow-hidden px-6 py-20 sm:items-start sm:justify-end sm:text-left sm:px-10 md:px-16">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImg}
          alt="Hero background"
          fill
          className="object-cover object-center rounded-2xl"
          priority
        />
        {/* Capa para mejorar el contraste */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
      </div>

      {/* Contenido */}
      <div className="relative flex flex-col items-center">
        <div className="max-w-md sm:max-w-lg md:max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 leading-tight md:text-3xl lg:text-4xl">
            Viaja rápido, viaja seguro
          </h1>
          <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl font-normal">
            Busca tu trayecto, selecciona tu asiento y completa la reserva desde tu
            celular o computadora, con toda la información clara y precisa.
          </p>
        </div>
      </div>
    </section>
  );
}