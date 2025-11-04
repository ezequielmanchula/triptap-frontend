import React from 'react';
import FormInput from "../../../../components/common/FormInput";
import { useReservation } from '@app/context/ReservationContext';

export default function PassengerInfo() {
  const { reservationData, updatePassengerInfo } = useReservation();

  const handleInputChange = (field: keyof typeof reservationData.passengerInfo) => 
    (value: string) => {
      updatePassengerInfo({ [field]: value });
    };

  return (
    <div className="p-6 sm:p-8 bg-white max-w-xl border-b border-[#DBDBDB]">
      <h2 className="Rubik font-medium text-xl text-[#171717] mb-1">Completá tus datos para finalizar la reserva</h2>
      <p className="Noto font-normal text-sm text-[#171717] mb-6">Verificá que la información sea correcta antes de confirmar tu compra.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput 
          label="Nombre" 
          type="text" 
          placeholder="Ingresa tu nombre" 
          value={reservationData.passengerInfo.nombre}
          onChange={(e) => handleInputChange('nombre')(e.target.value)}
        />
        <FormInput 
          label="Apellido" 
          type="text" 
          placeholder="Ingresa tu apellido" 
          value={reservationData.passengerInfo.apellido}
          onChange={(e) => handleInputChange('apellido')(e.target.value)}
        />
        <FormInput 
          label="Teléfono" 
          type="tel" 
          placeholder="+54 9 11 1234 5678" 
          value={reservationData.passengerInfo.telefono}
          onChange={(e) => handleInputChange('telefono')(e.target.value)}
        />
        <FormInput 
          label="Email" 
          type="email" 
          placeholder="email@email.com" 
          value={reservationData.passengerInfo.email}
          onChange={(e) => handleInputChange('email')(e.target.value)}
        />
      </div>
    </div>
  );
}