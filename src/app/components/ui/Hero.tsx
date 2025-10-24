import Image from "next/image";
import SearchForm from "../common/SearchForm";
import heroHome from "@/assets/images/hero-home.webp";


interface HeroSectionProps {
  height?: string; // "min-h-[310px]" o "min-h-[880px]"
}

export default function Hero({ height = "min-h-[880px]" }: HeroSectionProps) {
  return (
    <section className={`relative ${height} z-1 flex flex-col justify-end mb-50 rounded-2xl mx-4`}>
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <Image
          src={heroHome}
          alt="Fondo hero"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative max-w-[70.25rem] sm:mt-4 min-h-[550px] text-center md:text-left lg:text:left xl:text-left lg:min-h-[300px] xl:min-h-[300px] mx-auto w-full p-8 z-10 text-white">
        <h1 className="Rubik font-bold text-5xl xl:text-6xl/16 mb-4">Viaja rápido, viaja seguro</h1>
        <p className="Noto font-base text-lg/8 md:text-xl xl:text-2xl max-w-3xl">Busca tu trayecto, selecciona tu asiento y completa la reserva desde tu celular o computadora, con toda la información clara y precisa.</p>
      </div>

      <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 w-full max-w-[70.25rem] z-50">
        <SearchForm />
      </div>
    </section>
  );
}
