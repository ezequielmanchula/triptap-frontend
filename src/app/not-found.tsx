"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! La página que buscas no existe.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
