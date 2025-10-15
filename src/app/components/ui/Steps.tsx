
import { FaSearch, FaCheck } from "react-icons/fa"; 
import { MdEventSeat } from "react-icons/md";       

export default function Steps() {
  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-white shadow-2xl rounded-xl p-6 flex flex-col items-center lg:items-start">
          <div className="bg-orange-100 text-orange-500 rounded-full p-3 mb-4">
            <FaSearch size={24} color="#ED7A1C" />
          </div>
          <h3 className="text-2xl text-[#171717]font-medium mb-2">Busca tu viaje</h3>
          <p className="text-[#757575] text-base">
            Busca tu viaje. Elegí fecha, horario y destino.
          </p>
        </div>
        <div className="flex-1 bg-white shadow-2xl rounded-xl p-6 flex flex-col items-center lg:items-start">
          <div className="bg-orange-100 text-orange-500 rounded-full p-3 mb-4">
            <MdEventSeat size={24} color="#ED7A1C" />
          </div>
          <h3 className="text-2xl text-[#171717] font-medium mb-2">Elegí tu asiento</h3>
          <p className="text-[#757575] text-base">
            Seleccioná tu asiento. Visualizá las butacas disponibles y elegí tu lugar favorito.
          </p>
        </div>
        <div className="flex-1 bg-white shadow-2xl rounded-xl p-6 flex flex-col items-center lg:items-start">
          <div className="bg-orange-100 text-orange-500 rounded-full p-3 mb-4">
             <FaCheck size={24} color="#ED7A1C" />
          </div>
          <h3 className="text-2xl text-[#171717] font-medium mb-2">¡Confirma y Viaja!</h3>
          <p className="text-[#757575] text-base">
            Confirmá tu reserva. Pagá online y recibí tu pasaje en segundos.
          </p>
        </div>
      </div>
    </section>
  );
}
