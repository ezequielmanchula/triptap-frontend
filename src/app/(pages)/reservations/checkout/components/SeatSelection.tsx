import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

interface SeatGridProps {
  seats: string[][];
  selectedSeats: string[];
  toggleSeat: (seat: string) => void;
}

export default function SeatSelection() {
  const seats: string[][] = [
    ['01', '02'],
    ['03', '04'],
    ['05', '06'],
    ['07', '08'],
    ['09', '10'],
    ['11', '12'],
    ['13', '14'],
    ['15', '16'],
    ['17', '18'],
    ['19', '20'],
  ];

  const [passenger, setPassenger] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const increment = () => setPassenger((prev) => (prev < 20 ? prev + 1 : prev));
  const decrement = () => setPassenger((prev) => (prev > 1 ? prev - 1 : prev));

  const toggleSeat = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const SeatGrid: React.FC<SeatGridProps> = ({ seats, selectedSeats, toggleSeat }) => (
    <div className="grid grid-cols-4 gap-3 sm:gap-4">
      {seats.flat().map((seat) => {
        const isSelected = selectedSeats.includes(seat);
        return (
          <div
            key={seat}
            onClick={() => toggleSeat(seat)}
            className={`text-center border border-[#ED7A1C] w-14 h-12 rounded-xl shadow-sm flex items-center justify-center font-medium cursor-pointer transition-colors text-sm sm:text-base ${
              isSelected
                ? 'bg-[#ED7A1C] text-white'
                : 'text-[#ED7A1C] hover:bg-gray-100'
            }`}
          >
            {seat}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="rounded-xl shadow-md p-6 sm:p-8 bg-white">
      <h2 className="Headline-Small font-medium text-[#171717] mb-2">Seleccioná tu lugar</h2>
      <p className="Title-Small text-[#171717] mb-6">Tocá sobre los asientos disponibles para seleccionarlos.</p>

      <div className="mb-6">
        <h3 className="Title-Small font-medium text-[#171717] mb-3">¿Cuántos pasajeros viajan?</h3>
        <div className="flex items-center justify-between border border-gray-300 rounded-lg w-36 px-4 py-2">
          <button onClick={decrement} className="cursor-pointer">
            <FaMinus size={12} color="#1E1E1E" />
          </button>
          <span className="text-gray-800">{passenger}</span>
          <button onClick={increment} className="cursor-pointer">
            <FaPlus size={12} color="#1E1E1E" />
          </button>
        </div>
      </div>

      <SeatGrid seats={seats} selectedSeats={selectedSeats} toggleSeat={toggleSeat} />
    </div>
  );
}
