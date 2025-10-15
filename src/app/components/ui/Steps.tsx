
import { FaSearch, FaCheck } from "react-icons/fa"; 
import { MdEventSeat } from "react-icons/md";       

export default function Steps() {
  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center">
          <div className="bg-orange-100 text-orange-500 rounded-full p-3 mb-4">
            <FaSearch size={24} color="#ED7A1C" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Busca tu viaje</h3>
          <p className="text-gray-500 text-sm">
            Busca tu viaje. Elegí fecha, horario y destino.
          </p>
        </div>
        <div className="flex-1 bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center">
          <div className="bg-orange-100 text-orange-500 rounded-full p-3 mb-4">
            <MdEventSeat size={24} color="#ED7A1C" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Elegí tu asiento</h3>
          <p className="text-gray-500 text-sm">
            Seleccioná tu asiento. Visualizá las butacas disponibles y elegí tu lugar favorito.
          </p>
        </div>
        <div className="flex-1 bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center">
          <div className="bg-orange-100 text-orange-500 rounded-full p-3 mb-4">
             <FaCheck size={24} color="#ED7A1C" />
          </div>
          <h3 className="font-semibold text-lg mb-2">¡Confirma y Viaja!</h3>
          <p className="text-gray-500 text-sm">
            Confirmá tu reserva. Pagá online y recibí tu pasaje en segundos.
          </p>
        </div>
      </div>
    </section>
  );
}
