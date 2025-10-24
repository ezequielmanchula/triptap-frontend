'use client'; 

import React, { useState } from 'react';
import Hero from '@/app/components/ui/Hero';
import Link from 'next/link';
import { LuCalendar } from "react-icons/lu";
import LinkButton from '@/app/components/common/LinkButton';
import { FaArrowRight } from 'react-icons/fa';

interface Destination {
  value: string;
  label: string;
}

interface Trip {
  id: number;
  seats: number;
  price: number;
  departure: string;
  arrival: string;
}

interface TripCardProps {
  trip: Trip;
  destinations: Destination[];
}

const TripCard: React.FC<TripCardProps> = ({ trip, destinations }) => (
    <div className="flex justify-between items-center p-4 mb-4 bg-white rounded-lg shadow-sm border border-gray-100">
        
        <div className="flex-grow">
            <span className="Noto text-sm font-normal mr-2 px-2.5 py-1 rounded-xl bg-[#ED7A1C1A] text-[#ED7A1C]">+{trip.seats} lugares disponibles</span>
    
            <div className="mt-1">
                <span className="Rubik font-normal text-xl text-[#1E1E1E]">{destinations[0].label}</span> 
                <span className="mx-2 text-[#1E1E1E]">→</span> 
                <span className="Rubik font-normal text-xl text-[#1E1E1E]">{destinations[1].label}</span>
            </div>
            <div className="Rubik text-xl font-light text-[#757575]">
                Salida: {trip.departure} | Llegada: {trip.arrival}
            </div>
        </div>


        <div className="flex items-center space-x-4">
            <span className="Rubik text-2xl font-medium text-[#ED7A1C]">${trip.price}</span>
            <LinkButton
                href="./reservations/checkout"
                label="Comprar pasaje"
                icon={<FaArrowRight />}
            />
        </div>
    </div>
);


const destinations = [
    { value: 'origen', label: 'Cañuelas, Buenos Aires' },
    { value: 'destino', label: 'Capital Federal, Buenos Aires' },
];

const availableTrips = [
    { id: 1, seats: 12, price: 3200, departure: '7:30AM', arrival: '9:00AM' },
    { id: 2, seats: 12, price: 3200, departure: '7:30AM', arrival: '9:00AM' },
    { id: 3, seats: 5, price: 2800, departure: '10:00AM', arrival: '11:30AM' },
    { id: 4, seats: 8, price: 4500, departure: '1:00PM', arrival: '2:30PM' },
    { id: 5, seats: 12, price: 3200, departure: '7:30AM', arrival: '9:00AM' },
];


export default function BookingPage() {
    const [selectedDate, setSelectedDate] = useState(13);

    return (
        <main className="min-h-screen"> 
            <Hero height="min-h-[310px]" />
        
            <div className="max-w-7xl mx-auto px-8 py-4">

            <h2 className="Rubik text-2xl font-normal text-black mb-4 flex items-center gap-2">
            <LuCalendar size={24} color='#ED7A1C' /> Selecciona la fecha:</h2>
                <div className="flex space-x-3 overflow-x-auto mb-8 p-6">
                    {[
                        { day: 13, label: 'Lunes' }, { day: 14, label: 'Martes' }, { day: 15, label: 'Miércoles' }, 
                        { day: 16, label: 'Jueves' }, { day: 17, label: 'Viernes' }, { day: 18, label: 'Sábado' }, 
                        { day: 19, label: 'Domingo' }, { day: 20, label: 'Lunes' }, { day: 21, label: 'Martes' }
                    ].map((d) => (
                        <div 
                            key={d.day}
                            className={`flex-shrink-0 w-26 h-23 p-2 rounded-xl text-center cursor-pointer transition duration-200 
                                ${d.day === selectedDate 
                                    ? 'bg-[#ED7A1C] text-white font-semibold' 
                                    : 'bg-white text-[#757575] font-normal shadow-xl/20 hover:bg-gray-100'
                                }`}
                            onClick={() => setSelectedDate(d.day)}
                        >
                            <span className="block Rubik text-xl">{d.label}</span>
                            <span className="block Rubik text-xl mt-1">{d.day}</span>
                        </div>
                    ))}
                </div>

                <div className="flex"> 
                    <section className="w-full">
                        {availableTrips.map(trip => (
                            <TripCard key={trip.id} trip={trip} destinations={destinations} />
                        ))}
                    </section>
                </div>
            </div>
        </main>
    );
}