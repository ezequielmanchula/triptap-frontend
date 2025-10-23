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
        <Link href="/reservations" className="inline-flex items-center gap-2 text-[#1E1E1E] hover:text-[#ED7A1C] transition-colors"><FaArrowLeft size={30} /></Link>
        <h1 className="Rubik text-4xl font-semibold mt-4 mb-2">Elegí tus asientos y preparate para el viaje</h1>
        <p className="Rubik font-normal text-2xl text-[#171717] mb-6">Seleccioná la cantidad de pasajeros y elegí los lugares disponibles en el bus.</p>
        <div className="flex flex-col gap-3 items-start shadow-2xl rounded-xl max-w-lg">
          <PassengerInfo />
          <SeatSelection />
          <PaymentMethod />
          <div className="flex justify-end p-4 w-full">
            <Link
              href="./confirmation"
              className="bg-[#ED7A1C] text-white py-2.5 px-50 m-3  rounded-lg hover:bg-[#d96c17] transition-colors duration-300 text-sm sm:text-base">
              Reservar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
