"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@app/context/AuthContext";

import PassengerInfo from './components/PassengerInfo';
import SeatSelection from './components/SeatSelection';
import PaymentMethod from './components/PaymentMethod';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

import Button from "@/app/components/common/Button";
import LinkButton from "@/app/components/common/LinkButton";

export default function Checkout() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login?redirect=/checkout");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Redirigiendo al login...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-center flex-col">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/reservations"
            className="inline-flex items-center gap-6 text-[#1E1E1E] hover:text-[#ED7A1C] transition-colors mb-4"
          >
            <FaArrowLeft size={26} />
          </Link>
          <h1 className="Rubik text-3xl font-semibold text-[#171717] mb-3">Elegí tus asientos y preparate para el viaje</h1>
          <p className="Rubik text-xl text-[#171717]">Seleccioná la cantidad de pasajeros y elegí los lugares disponibles en el bus.</p>
        </div>

        <div className="flex flex-col lg:flex-row max-w-8xl justify-between">
          {/* Left Column - Main Content */}
          <div className="w-full lg:w-6/12 xl:w-6/12 border border-gray-300 shadow-2xl rounded-2xl p-4 lg:p-5">
            <div className="flex-col flex max-w-xl rounded-xl">
              <PassengerInfo />
              <SeatSelection />
              <PaymentMethod />
            </div>  
          </div>

          {/* Right Column - Summary */}
          <div className="w-full lg:w-5/12 xl:w-5/12 border border-gray-300 shadow-2xl rounded-2xl p-4 lg:p-8 mb-8 lg:mb-0 h-fit">  
            {/* Fecha y ruta */}
            <div className="mb-6 md:mb-8 lg:mb-10">
              <div className="border-b border-[#DBDBDB] pb-4 md:pb-6 lg:pb-8">
                <div className="mb-4 md:mb-6 lg:mb-8 text-[#1E1E1E]">
                  <h2 className="Rubik text-base font-normal mb-2 md:mb-3 lg:mb-4">Lunes 13 de octubre de 2025</h2>
                  <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                    <span className="Rubik text-2xl font-bold">Cañuelas</span>
                    <span><IoIosArrowRoundForward size={24} color="#1E1E1E" /></span>
                    <span className="Rubik text-2xl font-bold">Capital Federal</span>
                  </div>
                </div>
          
                {/* Horarios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                  <div>
                    <p className="Rubik text-xl font-light text-[#757575]">Salida: <span className="text-[#1E1E1E]">7:30am</span></p>
                  </div>
                  <div>
                    <p className="Rubik text-xl font-light text-[#757575]">Llegada: <span className="text-[#1E1E1E]">9:00am</span></p>
                  </div>
                </div>
              </div>
            </div>
          
            {/* Resumen del viaje */}
            <div className="mb-6 md:mb-8 lg:mb-10">
              <h3 className="Rubik font-medium text-base mb-3 md:mb-4 lg:mb-5">Resumen del viaje</h3>
              <div className="flex flex-col sm:flex-row justify-start gap-3 md:gap-4 lg:gap-5">
                <div className="bg-[#ED7A1C1A] rounded-2xl p-3 md:p-4 flex-1 min-w-[140px] sm:min-w-[160px] md:min-w-[180px]">
                  <p className=" Noto text-base font-normal text-center text-[#ED7A1C]">Asiento 02</p>
                </div>
              </div>
            </div>
          
            {/* Datos de contacto */}
            <div className="mb-6 md:mb-8 lg:mb-10">
              <h3 className="Rubik font-medium text-base mb-3 md:mb-4 lg:mb-5">Datos de contacto</h3>
              <div className="space-y-3 md:space-y-4 lg:space-y-5">
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Nombre:</p>
                  <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">Lucia Fernandez</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Email:</p>
                  <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">luciafernandez@gmail.com</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Teléfono:</p>
                  <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">+54 9 01 2345-6789</p>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="flex flex-row justify-between mb-6 md:mb-8 lg:mb-10 border-t border-[#DBDBDB] pt-6 md:pt-8 lg:pt-10">
              <h3 className="Rubik font-normal text-2xl text-[#171717]">Total:</h3>
              <p className="Rubik text-2xl font-semibold text-[#ED7A1C]">$15000</p>
            </div>

            {/* Botón pagar */}
            <div className="w-full">
              <LinkButton
                href="/confirmation"
                label="Ir a pagar"
                icon={<FaArrowRight />}
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}