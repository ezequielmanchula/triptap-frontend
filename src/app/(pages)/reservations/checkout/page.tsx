"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@app/context/AuthContext";
import { z } from 'zod';

import PassengerInfo from './components/PassengerInfo';
import SeatSelection from './components/SeatSelection';
import PaymentMethod from './components/PaymentMethod';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

import { useReservation } from '@app/context/ReservationContext';
import { useSearch } from "@/app/context/SearchContext";
import { useTrip } from "@/app/context/TripContext";


// Esquemas de validación
const passengerInfoSchema = z.object({
  nombre: z.string().min(1, "El nombre es requerido"),
  apellido: z.string().min(1, "El apellido es requerido"),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(1, "El teléfono es requerido"),
});

const reservationSchema = z.object({
  passengerInfo: passengerInfoSchema,
  selectedSeats: z.array(z.string()).min(1, "Debe seleccionar al menos un asiento"),
  paymentMethod: z.string().min(1, "Debe seleccionar un método de pago"),
});

// Componente para el globito individual de cada asiento
const SeatBubble: React.FC<{ seat: string }> = ({ seat }) => (
  <div className="bg-[#ED7A1C1A] rounded-2xl p-3 md:p-4 min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
    <p className="Noto text-base font-normal text-center text-[#ED7A1C]">
      {seat}
    </p>
  </div>
);

export default function Checkout() {
  const { reservationData } = useReservation();
  const { searchData } = useSearch();
  const { selectedTrip } = useTrip();

  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Validar formulario con Zod
  const validateForm = () => {
    try {
      reservationSchema.parse(reservationData);
      setValidationErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.issues.forEach(issue => {
          const path = issue.path.join('.');
          errors[path] = issue.message;
        });
        setValidationErrors(errors);
      }
      return false;
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login?redirect=/checkout");
    }
  }, [isLoggedIn, router]);

  // Validar el formulario cada vez que cambien los datos de reserva
  useEffect(() => {
    const isValid = validateForm();
    setIsFormValid(isValid);
  }, [reservationData]);

  const handlePayment = () => {
    if (!isFormValid) {
      const errorMessages = Object.values(validationErrors);
      const errorMessage = errorMessages.length > 0 
        ? errorMessages.join('\n')
        : "Por favor, completa todos los campos requeridos antes de continuar.";
      alert(errorMessage);
      return;
    }
    router.push("/reservations/confirmation");
  };

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
              <PassengerInfo validationErrors={validationErrors} />
              <SeatSelection validationErrors={validationErrors}/>
              <PaymentMethod validationErrors={validationErrors} />
            </div>  
          </div>

          {/* Right Column - Summary */}
          <div className="w-full lg:w-5/12 xl:w-5/12 border border-gray-300 shadow-2xl rounded-2xl p-4 lg:p-8 mb-8 lg:mb-0 h-fit">  
            {/* Fecha y ruta */}
            <div className="mb-6 md:mb-8 lg:mb-10">
              <div className="border-b border-[#DBDBDB] pb-4 md:pb-6 lg:pb-8">
                <div className="mb-4 md:mb-6 lg:mb-8 text-[#1E1E1E]">
                  <h2 className="Rubik text-base font-normal mb-2 md:mb-3 lg:mb-4">{searchData.date}</h2>
                  <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                    <span className="Rubik text-2xl font-bold">{searchData.origin}</span>
                    <span><IoIosArrowRoundForward size={24} color="#1E1E1E" /></span>
                    <span className="Rubik text-2xl font-bold">{searchData.destination}</span>
                  </div>
                </div>
          
                {/* Horarios */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                  <div>
                    <p className="Rubik text-xl font-light text-[#757575]">Salida: <span className="text-[#1E1E1E]">{selectedTrip?.departureTime}</span></p>
                  </div>
                  <div>
                    <p className="Rubik text-xl font-light text-[#757575]">Llegada: <span className="text-[#1E1E1E]">{selectedTrip?.arrivalTime}</span></p>
                  </div>
                </div>
              </div>
            </div>
          
            {/* Resumen del viaje - MODIFICADO */}
            <div className="mb-6 md:mb-8 lg:mb-10">
              <h3 className="Rubik font-medium text-base mb-3 md:mb-4 lg:mb-5">Resumen del viaje</h3>
              <div className="flex flex-wrap justify-start gap-3 md:gap-4 lg:gap-5">
                {reservationData.selectedSeats.length > 0 ? (
                  reservationData.selectedSeats.map((seat) => (
                    <SeatBubble key={seat} seat={seat} />
                  ))
                ) : (
                  <div className="bg-[#ED7A1C1A] rounded-2xl p-3 md:p-4">
                    <p className="Noto text-base font-normal text-center text-[#ED7A1C]">
                      No hay asientos seleccionados
                    </p>
                  </div>
                )}
              </div>
            </div>
          
            {/* Datos de contacto */}
            <div className="mb-6 md:mb-8 lg:mb-10">
              <h3 className="Rubik font-medium text-base mb-3 md:mb-4 lg:mb-5">Datos de contacto</h3>
              <div className="space-y-3 md:space-y-4 lg:space-y-5">
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Nombre:</p>
                  <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">{reservationData.passengerInfo.nombre}</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Apellido</p>
                  <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">{reservationData.passengerInfo.apellido}</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Email:</p>
                  <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">{reservationData.passengerInfo.email}</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <p className="Noto text-sm font-medium text-[#333333] sm:w-2/5">Teléfono:</p>
                  <p className="Noto text-sm font-medium text-[#757575] sm:w-3/5">{reservationData.passengerInfo.telefono}</p>
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
              <button
                onClick={handlePayment}
                disabled={!isFormValid}
                className={`w-full flex items-center justify-center gap-2 Rubik font-medium text-base py-3 px-4 rounded-lg transition-colors ${
                  isFormValid
                    ? 'bg-[#ED7A1C] text-white hover:bg-[#d96a16] cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Ir a pagar
                <FaArrowRight />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}