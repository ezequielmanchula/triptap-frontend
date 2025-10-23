"use client";

import { useState } from "react";
import { Icon } from "@iconify-icon/react";

export default function SearchForm() {
  const [origin, setOrigin] = useState("Cañuelas");
  const [destination, setDestination] = useState("Capital");
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
    
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mx-auto max-w-sm lg:max-w-[70.25rem] xl:max-w-[70.25rem] bg-white p-6 rounded-2xl shadow-[0px_1px_3px_1px_#00000026,0px_1px_2px_0px_#0000004D] 
      lg:flex-row lg:items-end m-6">
      {/* Origen */}
      <div className="flex flex-col flex-1">
        <label className="Noto text-sm font-normal mb-1 text-[#1E1E1E]">Origen</label>
        <select
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="Noto text-sm font-medium border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 h-12">
          <option value="Cañuelas">Cañuelas, Buenos Aires</option>
          <option value="Capital">Capital Federal, Buenos Aires</option>
        </select>
      </div>

      {/* Swap */}
      <div className="flex justify-center md:justify-center items-center">
        <button
          type="button"
          onClick={swapLocations}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ED7A1C] text-white hover:bg-orange-600 transition"
        >
          <Icon icon="material-symbols:swap-horiz" width="24" height="24" />
        </button>
      </div>

      {/* Destino */}
      <div className="flex flex-col flex-1">
        <label className="Noto text-sm font-normal mb-1 text-[#1E1E1E]">Destino</label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="Noto text-sm font-medium border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 h-12">
          <option value="Capital" disabled={origin === "Capital"}>
            Capital Federal, Buenos Aires
          </option>
          <option value="Cañuelas" disabled={origin === "Cañuelas"}>
            Cañuelas, Buenos Aires
          </option>
        </select>
      </div>

      {/* Fecha */}
      <div className="flex flex-col flex-1">
        <label className="Noto font-normal text-sm mb-1 text-[#1E1E1E]">Fecha</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="Title-Small font-medium border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 h-12"
          min={new Date().toISOString().split("T")[0]}
        />
      </div>

      {/* Botón */}
      <div className="w-full md:w-auto">
        <button
          type="submit"
          className="Noto font-normal text-base flex items-center justify-center gap-2 bg-[#ED7A1C] text-white px-6 py-3 rounded-lg hover:bg-[#d96a13] transition w-full md:w-auto">
          <Icon icon="mdi:magnify" width="22" height="22" />
          Buscar
        </button>
      </div>
    </form>
  );
}
