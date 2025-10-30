"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSearch } from "@app/context/SearchContext";
import Hero from '@/app/components/ui/Hero';
import { LuCalendar } from "react-icons/lu";
import TripCard from "./components/TripCard";
import { SearchData, Trip } from "@/utils/types";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const { searchData, setSearchData } = useSearch();
  const [searchResults, setSearchResults] = useState<Trip[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const origin = searchParams.get('origin');
      const destination = searchParams.get('destination');
      const date = searchParams.get('date');

      if (origin && destination && date) {
        setLoading(true);
        try {
          const newSearchData: SearchData = { origin, destination, date };
          setSearchData(newSearchData);

          // datos mock
          const mockResults: Trip[] = [
            { id: 1, seats: 4, price: 15000, time: "09:00", departureTime: "09:00", arrivalTime: "10:00" },
            { id: 2, seats: 2, price: 15000, time: "10:00", departureTime: "10:00", arrivalTime: "11:00" },
            { id: 3, seats: 8, price: 15000, time: "11:00", departureTime: "11:00", arrivalTime: "12:00" },
            { id: 4, seats: 10, price: 15000, time: "12:00", departureTime: "12:00", arrivalTime: "13:00" },
          ];

          setSearchResults(mockResults);

        } catch (error) {
          console.error("Error simulando la búsqueda:", error);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("Faltan parámetros en la URL");
      }
    };

    fetchSearchResults();
  }, [searchParams, setSearchData]);

  return (
    <main className="min-h-screen"> 
      <Hero height="min-h-[310px]" /> 

      <div className="max-w-7xl mx-auto px-8 py-4">
        {loading ? (
          <div className="text-center py-8">
            <p className="Noto text-lg">Cargando viajes...</p>
          </div>
        ) : (
          <div className="mt-6">
            {(searchData.origin || searchParams.get('origin')) && (
              <div className="mb-3">
                <div className="flex items-center justify-start">
                  <LuCalendar size={24} color="#ED7A1C" className="mr-2" />
                  <h2 className="Rubik text-2xl font-normal text-[#1E1E1E]">Selecciona el horario:</h2>
                </div>
              </div>
            )}

            {searchResults.length > 0 ? (
              <div>
                {searchResults.map((trip: Trip) => (
                  <TripCard 
                    key={trip.id} 
                    trip={trip} 
                    searchData={{
                      origin: searchData.origin || searchParams.get('origin') || '',
                      destination: searchData.destination || searchParams.get('destination') || '',
                      date: searchData.date || searchParams.get('date') || ''
                    }} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="Noto text-lg text-[#757575]">
                  {searchParams.get('origin') 
                    ? "No se encontraron viajes para tu búsqueda" 
                    : "Ingresa los datos requeridos"}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
