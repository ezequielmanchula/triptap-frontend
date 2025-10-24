import Image from "next/image";

import { Panel as PanelType }  from "@/utils/types";
import LinkButton from "./LinkButton";
import { FaArrowRight } from "react-icons/fa";

const Panel = ({ image, title, description }: PanelType) => (
    <section className="relative flex flex-col items-center justify-center text-center text-white min-h-[529px] overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Contenido */}
      <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] text-white">
        <h1 className="Rubik font-bold text-3xl md:text-3xl lg:text-5xl mb-3">{title}</h1>
        <p className="Rubik font-normal text-base md:text-2xl lg:text-2xl mb-6">{description}</p>
        <LinkButton
          href="/reservations"
          label="Ver horarios"
          icon={<FaArrowRight />}
        />
      </div>
    </section>
);

export default Panel;