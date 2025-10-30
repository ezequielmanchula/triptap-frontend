"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@app/context/AuthContext";

import PassengerInfo from './components/PassengerInfo';
import SeatSelection from './components/SeatSelection';
import PaymentMethod from './components/PaymentMethod';
import { FaArrowLeft } from "react-icons/fa6";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import LinkButton from '@/app/components/common/LinkButton';

export default function Checkout() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      // 👇 redirige al login con query param
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-10 flex flex-col gap-4">
      <div className="max-w-6xl mx-auto text-[#171717]">
        <Link
          href="/reservations"
          className="inline-flex items-center gap-2 text-[#1E1E1E] hover:text-[#ED7A1C] transition-colors"
        >
          <FaArrowLeft size={30} />
        </Link>
        <h1 className="Rubik text-4xl font-semibold mt-4 mb-2">
          Elegí tus asientos y preparate para el viaje
        </h1>
        <p className="Rubik font-normal text-2xl text-[#171717] mb-6">
          Seleccioná la cantidad de pasajeros y elegí los lugares disponibles en el bus.
        </p>
        <div className="flex flex-col gap-3 items-start shadow-2xl rounded-xl max-w-lg">
          <PassengerInfo />
          <SeatSelection />
          <PaymentMethod />
          <div className="flex justify-end p-4 w-full">
            <LinkButton
              href="./confirmation"
              label="Reservar"
              icon={<FaArrowRight />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
