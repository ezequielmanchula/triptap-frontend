"use client";

import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { TripCardProps } from "@/utils/types"
import { useAuth } from "@app/context/AuthContext";

const TripCard: React.FC<TripCardProps> = ({ trip, searchData }) => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

   const handleSelectTrip = () => {
    if (!isLoggedIn) {
      // Guarda el viaje pendiente y redirige al login
      localStorage.setItem(
        "pendingTrip",
        JSON.stringify({
          ...trip,
          origin: searchData.origin,
          destination: searchData.destination,
          date: searchData.date,
        })
      );
      router.push("/login");
    } else {
      // Si ya está logueado, guarda directamente el viaje seleccionado
      localStorage.setItem(
        "selectedTrip",
        JSON.stringify({
          ...trip,
          origin: searchData.origin,
          destination: searchData.destination,
          date: searchData.date,
        })
      );
      router.push("/reservations/checkout");
    }
  };

  return (
    <div className="flex justify-between items-center p-4 mb-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex-grow">
        <span className="Noto text-sm font-normal mr-2 px-2.5 py-1 rounded-xl bg-[#ED7A1C1A] text-[#ED7A1C]">
          +{trip.seats} lugares disponibles
        </span>

        <div className="mt-1">
          <span className="Rubik font-normal text-xl text-[#1E1E1E]">{searchData.origin}</span> 
          <span className="mx-2 text-[#1E1E1E]">→</span> 
          <span className="Rubik font-normal text-xl text-[#1E1E1E]">{searchData.destination}</span>
        </div>
        <div className="Rubik text-xl font-light text-[#757575]">
          Salida: {trip.departureTime } | Llegada: {trip.arrivalTime}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="Rubik text-2xl font-medium text-[#ED7A1C]">${trip.price}</span>
        <div className="w-full md:w-auto">
        <button
          type="button"
          onClick={handleSelectTrip}
          className="btn flex items-center justify-center gap-2 px-6 py-3 transition w-full md:w-auto">
          Comprar pasaje
          <FaArrowRight />
        </button>
      </div>       
      </div>
    </div>
  );
};

export default TripCard;
