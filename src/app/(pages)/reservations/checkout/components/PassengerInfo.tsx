import React from 'react';
import FormInput from "../../../../components/common/FormInput";

export default function PassengerInfo() {

  return (
    <div className="rounded-xl shadow-md p-6 sm:p-8 bg-white">
      <h2 className="Headline-Small font-medium text-[#171717] mb-1">Completá tus datos para finalizar la reserva</h2>
      <p className="Title-Small text-[#171717] mb-6">Verificá que la información sea correcta antes de confirmar tu compra.</p>

      <div className="flex flex-col gap-4">
        <FormInput label="Nombre" type="text" placeholder="Ingresa tu nombre"  />
        <FormInput label="Apellido" type="text" placeholder="Ingresa tu apellido" />
        <FormInput label="Teléfono" type="tel" placeholder="+54 9 11 1234 5678" />
        <FormInput label="Email" type="email" placeholder="email@email.com" />
      </div>
    </div>
  );
}
