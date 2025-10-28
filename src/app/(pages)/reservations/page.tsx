'use client'; 

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSearch } from "@app/context/SearchContext";
import axios from "axios";
import Hero from '@/app/components/ui/Hero';
import { LuCalendar } from "react-icons/lu";
import LinkButton from '@/app/components/common/LinkButton';
import { FaArrowRight } from 'react-icons/fa';
import { SearchData, Trip, TripCardProps } from "@/utils/types";




const TripCard: React.FC<TripCardProps> = ({ trip, searchData }) => (
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
        Salida: {trip.departureTime || trip.time} | Llegada: {trip.arrivalTime || "10:00"}
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <span className="Rubik text-2xl font-medium text-[#ED7A1C]">${trip.price}</span>
      <LinkButton
        href="./login"
        label="Comprar pasaje"
        icon={<FaArrowRight />}
      />
    </div>
  </div>
);

export default function BookingPage() {
  const searchParams = useSearchParams();
  const { searchData, setSearchData } = useSearch();
  const [searchResults, setSearchResults] = useState<Trip[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Ejecutar búsqueda automáticamente al cargar la página
  useEffect(() => {
    const fetchSearchResults = async () => {
      // Solo buscar si hay parámetros en la URL
      const origin = searchParams.get('origin');
      const destination = searchParams.get('destination');
      const date = searchParams.get('date');

      if (origin && destination && date) {
        setLoading(true);
        try {
          // Actualizar el contexto con los datos de la URL
          const newSearchData: SearchData = { 
            origin, 
            destination, 
            date 
          };
          setSearchData(newSearchData);
          
          const response = await axios.get<Trip[]>('/api', {
            params: { origin, destination, date }
          });
          setSearchResults(response.data);
        } catch (error) {
          console.error("Error en búsqueda:", error);
          // Datos mock temporales tipados
          const mockResults: Trip[] = [
            { 
              id: 1, 
              seats: 4, 
              price: 1500, 
              time: "09:00",
              departureTime: "09:00",
              arrivalTime: "10:00"
            },
            { 
              id: 2, 
              seats: 2, 
              price: 1500, 
              time: "11:30",
              departureTime: "11:30", 
              arrivalTime: "12:30"
            },
          ];
          setSearchResults(mockResults);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSearchResults();
  }, [searchParams, setSearchData]);

  return (
    <main className="min-h-screen"> 
      <Hero height="min-h-[310px]" />
      
      <div className="max-w-7xl mx-auto px-8 py-4">
        
        {/* Resultados de búsqueda */}
        {loading ? (
          <div className="text-center py-8">
            <p className="Noto text-lg">Cargando viajes...</p>
          </div>
        ) : (
          <div className="mt-8">
            {/* Mostrar información de la búsqueda */}
            {searchData.origin && (
              <div className="mb-6">
                <h2 className="Rubik text-2xl font-medium text-[#1E1E1E] mb-4">Selecciona el horario: </h2>
                <div className="flex items-center text-[#757575]">
                  <LuCalendar className="mr-2" />
                  <span className="Noto text-sm">{searchData.date}</span>
                </div>
              </div>
            )}
            
            {/* Lista de viajes */}
            {searchResults.length > 0 ? (
              <div>
                {searchResults.map((trip: Trip) => (
                  <TripCard 
                    key={trip.id} 
                    trip={trip} 
                    searchData={searchData} 
                  />
                ))}
              </div>
            ) : (
              !loading && (
                <div className="text-center py-8">
                  <p className="Noto text-lg text-[#757575]">No se encontraron viajes para tu búsqueda</p>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </main>
  );
}