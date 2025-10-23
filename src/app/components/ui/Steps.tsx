import { FaSearch, FaCheck } from "react-icons/fa"; 
import { MdEventSeat } from "react-icons/md";
import { Step }  from "@/utils/types";
import { StepCard } from "../common/StepCard";


const steps: Step[] = [
  {
    icon: <FaSearch size={24} color="#ED7A1C" />,
    title: "Busca tu viaje",
    description: "Busca tu viaje. Elegí fecha, horario y destino."
  },
  {
    icon: <MdEventSeat size={24} color="#ED7A1C" />,
    title: "Elegí tu asiento",
    description: "Seleccioná tu asiento. Visualizá las butacas disponibles y elegí tu lugar favorito."
  },
  {
    icon: <FaCheck size={24} color="#ED7A1C" />,
    title: "¡Confirma y Viaja!",
    description: "Confirmá tu reserva. Pagá online y recibí tu pasaje en segundos."
  },
];

export default function Steps() {
  return (
    <section className="mx-auto my-auto max-w-[1120px] min-h-[1024px] lg:min-h-[400px] flex justify-center items-center">
      <div className="flex flex-wrap justify-center md:justify-center gap-4 p-2 lg:justify-between">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}
