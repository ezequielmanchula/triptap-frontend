"use client"

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
    <div className="p-6 sm:p-8 mt-8 bg-white max-w-xl ">
      <h2 className="Rubik font-medium text-xl text-[#171717] mb-1">Método de pago</h2>
      <p className="Noto font-normal text-sm text-[#171717] mb-6">Tu pago es 100% seguro. Los datos se procesan de forma encriptada.</p>

      <div className="flex flex-col gap-3">
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelectedPayment(option.id as PaymentOption)}
            className={`flex items-center gap-3 border rounded-lg px-5 py-3 cursor-pointer transition-colors min-h-[84px] min-w-[250px] ${
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
            <span className="Noto font-normal text-sm text-[#171717]">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
    
  );
}
