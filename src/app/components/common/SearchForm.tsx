"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Icon } from "@iconify-icon/react";
import { useSearch } from "@app/context/SearchContext";
import { searchSchema , SearchFormData } from "@/schemas/searchSchema";


export default function SearchForm() {
  const router = useRouter();
  const pathname = usePathname();
  const { searchData, setSearchData } = useSearch();

  const [origin, setOrigin] = useState(searchData.origin);
  const [destination, setDestination] = useState(searchData.destination);
  const [date, setDate] = useState(searchData.date);

  const [errors, setErrors] = useState<Partial<Record<keyof SearchFormData, string>>>({});

  useEffect(() => {
    setSearchData({ origin, destination, date });
  }, [origin, destination, date, setSearchData]);

  const swapLocations = () => {
    const newOrigin = destination;
    const newDestination = origin;
    setOrigin(newOrigin);
    setDestination(newDestination);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = searchSchema.safeParse({ origin, destination, date });

    if (!validation.success) {
      const formErrors: Partial<Record<keyof SearchFormData, string>> = {};

      validation.error.issues.forEach((issue) => {
        const path = issue.path?.[0];
        if (path && typeof path === "string") {
          formErrors[path as keyof SearchFormData] = issue.message;
        }
      });

      setErrors(formErrors);
      return;
    }

    // Si la validación pasa, limpiamos errores y redirigimos
    setErrors({});
    setSearchData({ origin, destination, date });
    router.push(`/reservations?origin=${origin}&destination=${destination}&date=${date}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mx-auto max-w-sm lg:max-w-[70.25rem] xl:max-w-[70.25rem] bg-white p-6 rounded-2xl shadow-[0px_1px_3px_1px_#00000026,0px_1px_2px_0px_#0000004D] 
      lg:flex-row lg:items-end m-8"
    >
      {/* Origen */}
      <div className="flex flex-col flex-1">
        <label className="Noto text-sm font-normal mb-1 text-[#1E1E1E]">Origen</label>
        <select
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="Noto text-sm font-medium border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 h-12 cursor-pointer"
        >
          <option value="Cañuelas">Cañuelas, Buenos Aires</option>
          <option value="Capital">Capital Federal, Buenos Aires</option>
        </select>
        {errors.origin && <span className="text-red-500 text-sm mt-1">{errors.origin}</span>}
      </div>

      {/* Swap */}
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={swapLocations}
          className="btn flex items-center justify-center w-10 h-10 rounded-full transition"
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
          className="Noto text-sm font-medium border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 h-12 cursor-pointer"
        >
          <option value="Capital" disabled={origin === "Capital"}>
            Capital Federal, Buenos Aires
          </option>
          <option value="Cañuelas" disabled={origin === "Cañuelas"}>
            Cañuelas, Buenos Aires
          </option>
        </select>
        {errors.destination && <span className="text-red-500 text-sm mt-1">{errors.destination}</span>}
      </div>

      {/* Fecha */}
      <div className="flex flex-col flex-1">
        <label className="Noto text-sm font-normal mb-1 text-[#1E1E1E]">Fecha</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="Noto text-sm font-medium border border-[#D9D9D9] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 h-12 cursor-pointer"
          min={new Date().toISOString().split("T")[0]}
        />
        {errors.date && <span className="text-red-500 text-sm mt-1">{errors.date}</span>}
      </div>

      {/* Botón */}
      <div className="w-full md:w-auto">
        <button
          type="submit"
          className="btn flex items-center justify-center gap-2 px-6 py-3 transition w-full md:w-auto"
        >
          <Icon icon="mdi:magnify" width="22" height="22" />
          {pathname === "/" ? "Buscar" : "Buscar Viajes"}
        </button>
      </div>
    </form>
  );
}