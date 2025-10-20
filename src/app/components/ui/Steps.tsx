import { FaSearch, FaCheck } from "react-icons/fa"; 
import { MdEventSeat } from "react-icons/md";  

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

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

const StepCard = ({ icon, title, description }: Step) => (
  <div className="flex flex-col max-w-[357px] min-h-[213px] p-8 px-5 bg-white rounded-xl items-start opacity-100 shadow-2xl">
    <div className="bg-orange-100 text-orange-500 rounded-full p-3 mb-4 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="Headline-Medium text-[#171717] mb-2">{title}</h3>
    <p className="Title-Small text-[#757575]">{description}</p>
  </div>
);

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
