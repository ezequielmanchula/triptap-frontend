"use client"

import Link from 'next/link';
import { useState } from 'react';

type PaymentOption = 'transferencia' | 'tarjeta' | 'efectivo';

export default function PaymentMethod() {
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption>('efectivo');

  const paymentOptions = [
    { id: 'transferencia', label: 'Transferencia / Pago con QR' },
    { id: 'tarjeta', label: 'Tarjeta de crédito / débito' },
    { id: 'efectivo', label: 'Pago en terminal (efectivo)' },
  ];

  return (
    <div className="rounded-xl shadow-md p-6 sm:p-8 mt-8 bg-white">
      <h2 className="Headline-Small font-medium text-[#171717] mb-1">Método de pago</h2>
      <p className="Title-Small text-[#171717] mb-6">Tu pago es 100% seguro. Los datos se procesan de forma encriptada.</p>

      <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelectedPayment(option.id as PaymentOption)}
            className={`flex items-center gap-3 border rounded-lg px-5 py-3 cursor-pointer transition-colors min-h-[84px] max-w-[250px] ${
              selectedPayment === option.id 
                ? 'bg-blue-50 border-[#ED7A1C]'
                : 'hover:bg-gray-50 border-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                selectedPayment === option.id
                  ? 'border-[#ED7A1C] border-2 bg-white'
                  : 'border-gray-400'
              }`}
            >
              {selectedPayment === option.id && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#ED7A1C]"></div>
              )}
            </div>
            <span className="Title-Small text-[#171717]">{option.label}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <Link
          href="./confirmation"
          className="bg-[#ED7A1C] text-white py-2.5 px-6 rounded-lg hover:bg-[#d96c17] transition-colors duration-300 text-sm sm:text-base">
          Reservar
        </Link>
      </div>
    </div>
  );
}
