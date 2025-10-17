import Image from "next/image";
import heroImg from "@/assets/images/hero-home.jpeg";
import SearchForm from "../common/SearchForm";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center mx-4 min-h-[600px] md:min-h-[785px] max-w-[1993px]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-none md:rounded-2xl">
        <Image
          src={heroImg}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-32">
        <h1 className="Display-Large mb-4 leading-tight text-white">
          Viaja rápido, viaja seguro
        </h1>
        <p className="Headline-Small leading-relaxed text-white max-w-[823px]">
          Busca tu trayecto, selecciona tu asiento y completa la reserva desde tu
          celular o computadora, con toda la información clara y precisa.
        </p>
      </div>

      {/* Formulario */}
      <div className="w-full left-1/2 flex justify-center mx-4 mt-10">
        <SearchForm />
      </div>
    </section>
  );
}
