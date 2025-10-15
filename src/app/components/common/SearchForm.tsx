"use client";

import { useState } from "react";
import { Icon } from "@iconify-icon/react";

export default function SearchForm() {
  const [origin, setOrigin] = useState("Capital");
  const [destination, setDestination] = useState("Cañuelas");
  const [date, setDate] = useState("");

  const swapLocations = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (origin === destination) {
      alert("El origen y el destino no pueden ser iguales");
      return;
    }
    console.log("Buscando trayecto:", origin, "→", destination, "Fecha:", date);
  };

  return (
    <div className="flex justify-center w-full mt-8">
      <form
        onSubmit={handleSubmit}
        className="w-[80%] max-w-[1200px] bg-white shadow-xl p-4 md:p-6 flex flex-col gap-4 md:flex-row md:items-end rounded-2xl"
      >
        {/* Origen */}
        <div className="flex flex-col w-full md:flex-1">
          <label className="mb-1 font-medium text-gray-700">Origen</label>
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full h-12"
          >
            <option value="Capital">Capital</option>
            <option value="Cañuelas">Cañuelas</option>
          </select>
        </div>

        {/* Swap */}
        <div className="flex justify-center md:mx-2">
          <button
            type="button"
            onClick={swapLocations}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ED7A1C] text-white hover:bg-orange-600 transition"
          >
            <Icon icon="material-symbols:swap-horiz" width="24" height="24" />
          </button>
        </div>

        {/* Destino */}
        <div className="flex flex-col w-full md:flex-1">
          <label className="mb-1 font-medium text-gray-700">Destino</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full h-12"
          >
            <option value="Capital" disabled={origin === "Capital"}>
              Capital
            </option>
            <option value="Cañuelas" disabled={origin === "Cañuelas"}>
              Cañuelas
            </option>
          </select>
        </div>

        {/* Fecha */}
        <div className="flex flex-col w-full md:flex-1">
          <label className="mb-1 font-medium text-gray-700">Fecha</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full h-12"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        {/* Botón Buscar */}
        <div className="w-full md:w-auto">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition w-full md:w-auto"
          >
            <Icon icon="mdi:magnify" width="20" height="20" />
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}
