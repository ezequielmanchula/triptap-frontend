'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import head from "@/assets/images/hero-home.jpeg";


const TripCard = ({ trip, destinations }) => (
    <div className="flex justify-between items-center p-4 mb-4 bg-white rounded-lg shadow-sm border border-gray-100">
        
        <div className="flex-grow">
            <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${
                trip.type === 'Premium' ? 'bg-yellow-100 text-yellow-800' : 'bg-indigo-100 text-indigo-800'
            }`}>
                {trip.type}
            </span>
            <span className="text-sm text-gray-500">+{trip.seats} lugares disponibles</span>

            <div className="mt-1">
                <span className="font-semibold text-gray-900">{destinations[0].label}</span> 
                <span className="mx-2 text-gray-500">→</span> 
                <span className="font-semibold text-gray-900">{destinations[1].label}</span>
            </div>
            <div className="text-sm text-gray-500">
                Salida: {trip.departure} | Llegada: {trip.arrival}
            </div>
        </div>


        <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-gray-900">${trip.price}</span>
    
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md text-sm">
                Comprar pasajes
            </button>
        </div>
    </div>
);


const destinations = [
    { value: 'origen', label: 'Cañuelas, Buenos Aires' },
    { value: 'destino', label: 'Capital Federal, Buenos Aires' },
];

const availableTrips = [
    { id: 1, type: 'Ejecutivo', seats: 12, price: 3200, departure: '7:30AM', arrival: '9:00AM' },
    { id: 2, type: 'Ejecutivo', seats: 12, price: 3200, departure: '7:30AM', arrival: '9:00AM' },
    { id: 3, type: 'Clásico', seats: 5, price: 2800, departure: '10:00AM', arrival: '11:30AM' },
    { id: 4, type: 'Premium', seats: 8, price: 4500, departure: '1:00PM', arrival: '2:30PM' },
    { id: 5, type: 'Ejecutivo', seats: 12, price: 3200, departure: '7:30AM', arrival: '9:00AM' },
];


export default function BookingPage() {
    const [selectedDate, setSelectedDate] = useState(13);

    return (
        <main className="min-h-screen bg-gray-50">
            

            <div className="relative h-[600px] flex flex-col justify-end overflow-hidden mb-8">
                <Image
                    src={head} 
                    alt="Autobús viajando"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                
                <div className="relative max-w-7xl mx-auto w-full p-8 z-10 text-white">
                    <h1 className="text-4xl font-extrabold mb-4">
                        Viaja rápido, viaja seguro
                    </h1>
                    <p className="text-lg max-w-2xl">
                        Busca tu trayecto, selecciona tu asiento y completa la reserva con toda la información **clara y precisa**.
                    </p>
                </div>


                <div className="relative max-w-7xl mx-auto w-full px-8 pb-8 z-20">
                    <div className="bg-white p-4 rounded-xl shadow-2xl flex space-x-4 items-center">
                        <div className="flex-1 flex space-x-4">
                            <input type="text" placeholder="Origen: Cañuelas, Buenos Aires" className="flex-1 p-2 border border-gray-300 rounded-lg" />
                            <input type="text" placeholder="Destino: Capital Federal, Buenos Aires" className="flex-1 p-2 border border-gray-300 rounded-lg" />
                            <input type="date" placeholder="Fechas" className="flex-1 p-2 border border-gray-300 rounded-lg" />
                        </div>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300">
                            🔍 Buscar
                        </button>
                    </div>
                </div>
            </div>

    
            <div className="max-w-7xl mx-auto px-8 py-4">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Selecciona la fecha:</h2>
                <div className="flex space-x-3 overflow-x-auto mb-8">
                    {[
                        { day: 13, label: 'Lunes' }, { day: 14, label: 'Martes' }, { day: 15, label: 'Miércoles' }, 
                        { day: 16, label: 'Jueves' }, { day: 17, label: 'Viernes' }, { day: 18, label: 'Sábado' }, 
                        { day: 19, label: 'Domingo' }, { day: 20, label: 'Lunes' }, { day: 21, label: 'Martes' }
                    ].map((d) => (
                        <div 
                            key={d.day}
                            className={`flex-shrink-0 w-24 h-24 p-2 rounded-xl text-center cursor-pointer transition duration-200 shadow-sm ${
                                d.day === selectedDate 
                                    ? 'bg-orange-500 text-white shadow-lg' 
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                            onClick={() => setSelectedDate(d.day)}
                        >
                            <span className="block text-sm">{d.label.substring(0, 3)}</span>
                            <span className="block text-4xl font-extrabold mt-1">{d.day}</span>
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