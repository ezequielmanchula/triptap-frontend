import React, { useState } from 'react';

interface SeatGridProps {
  seats: string[][];
  selectedSeats: string[];
  toggleSeat: (seat: string) => void;
}

export default function SeatSelection() {
  const seatLeft: string[][] = [
    ['01', '02'],    
    ['05', '06'],    
    ['09', '10'],        
    ['13', '14'],   
    ['17', '18'],         
  ];

  const seatRight: string[][] = [
    ['03', '04'],
    ['07', '08'],
    ['11', '12'],
    ['15', '16'],
    ['19', '20'] 
  ];

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeat = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };
  console.log('Asientos seleccionados:', selectedSeats);

  const SeatGrid: React.FC<SeatGridProps> = ({ seats, selectedSeats, toggleSeat }) => (
    <div className="flex flex-col justify-between gap-4">
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-12"> 
          {row.map((seat) => {
            const isSelected = selectedSeats.includes(seat);
            return (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`text-center border border-[#ED7A1C] w-14 h-12 rounded-[8.64px] shadow-sm flex items-center justify-center font-normal cursor-pointer transition-colors Rubik text-sm sm:text-base ${
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
      ))}
    </div>
  );

  return (
    <div className="p-6 sm:p-8 mt-8 bg-white max-w-xl border-b border-[#DBDBDB]">
      <h2 className="Rubik font-medium text-xl text-[#171717] mb-2">Seleccioná tu lugar</h2>
      <p className="Noto font-normal text-sm text-[#171717] mb-6">Tocá sobre los asientos disponibles para seleccionarlos.</p>
      <div className='flex justify-between'> 
        <SeatGrid seats={seatLeft} selectedSeats={selectedSeats} toggleSeat={toggleSeat} />
        <div className='flex flex-col justify-between'>
          <div className='w-14 h-12 bg-[#F4F4F4] rounded-[8.64px] shadow-sm'></div>
            <div className='w-14 h-12 bg-[#F4F4F4] rounded-[8.64px] shadow-sm' ></div>
            <div className='w-14 h-12 bg-[#F4F4F4] rounded-[8.64px] shadow-sm' ></div>
            <div className='w-14 h-12 bg-[#F4F4F4] rounded-[8.64px] shadow-sm' ></div>  
            <div className='w-14 h-12 bg-[#F4F4F4] rounded-[8.64px] shadow-sm' ></div>  
        </div>
        <SeatGrid seats={seatRight} selectedSeats={selectedSeats} toggleSeat={toggleSeat} />
      </div>
    </div>
  );
}

