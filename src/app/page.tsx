"use client";

import { Icon } from "@iconify-icon/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold mb-4">Bienvenid@ a TripTap</h1>
      <p>Reserva tus pasajes de micro de manera fácil y rápida</p>
      <Icon
        icon="solar:bus-bold"
        className="w-32 h-32 text-white-600" 
      />
    </div>
  );
}
