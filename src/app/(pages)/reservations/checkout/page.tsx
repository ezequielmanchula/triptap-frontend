"use client"

import PassengerInfo from './components/PassengerInfo';
import SeatSelection from './components/SeatSelection';
import PaymentMethod from './components/PaymentMethod';
import { FaArrowLeft } from "react-icons/fa6";
import Link from 'next/link';

export default function Checkout() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-10 flex flex-col gap-4">
      <div className="max-w-6xl mx-auto text-[#171717]">
        <Link href="/reservations" className="inline-flex items-center gap-2 text-[#1E1E1E] hover:text-[#ED7A1C] transition-colors">
          <FaArrowLeft size={20} />
        </Link>

        <h1 className="Display-Small font-bold mt-4 mb-2">Elegí tus asientos y preparate para el viaje</h1>
        <p className="Headline-Small md:text-lg text-gray-700 mb-6">Seleccioná la cantidad de pasajeros y elegí los lugares disponibles en el bus.</p>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="w-full lg:w-1/2">
            <PassengerInfo />
          </div>
          <div className="w-full lg:w-1/2">
            <SeatSelection />
          </div>
        </div>

        <PaymentMethod />
      </div>
    </div>
  );
}
