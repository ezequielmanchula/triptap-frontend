"use client";

import { PaymentOption } from '@/utils/types';
import { useReservation } from '@app/context/ReservationContext';

interface PaymentMethodProps {
  validationErrors: Record<string, string>;
}

export default function PaymentMethod({ validationErrors }: PaymentMethodProps) {
  const { reservationData, updatePaymentMethod } = useReservation();

  const paymentOptions: { id: PaymentOption; label: string }[] = [
    { id: 'Transferencia', label: 'Transferencia / Pago con QR' },
    { id: 'Tarjeta', label: 'Tarjeta de crédito / débito' },
    { id: 'Efectivo', label: 'Pago en terminal (efectivo)' },
  ];

  return (
    <div className="p-6 sm:p-8 mt-8 bg-white max-w-xl">
      <h2 className="Rubik font-medium text-xl text-[#171717] mb-1">Método de pago</h2>
      <p className="Noto font-normal text-sm text-[#171717] mb-6">Tu pago es 100% seguro. Los datos se procesan de forma encriptada.</p>

      {/* Mostrar error de método de pago si existe */}
      {validationErrors['paymentMethod'] && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="Noto text-sm text-red-700">{validationErrors['paymentMethod']}</p>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => updatePaymentMethod(option.id)}
            className={`flex items-center gap-3 border rounded-lg px-5 py-3 cursor-pointer transition-colors min-h-[84px] min-w-[250px] ${
              reservationData.paymentMethod === option.id 
                ? 'bg-blue-50 border-[#ED7A1C]'
                : 'hover:bg-gray-50 border-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                reservationData.paymentMethod === option.id
                  ? 'border-[#ED7A1C] border-2 bg-white'
                  : 'border-gray-400'
              }`}
            >
              {reservationData.paymentMethod === option.id && (
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