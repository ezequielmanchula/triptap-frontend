import { Suspense } from "react";
import BookingContent from "./components/BookingContent";

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="Noto text-lg">Cargando...</p>
      </div>
    }>
      <BookingContent />
    </Suspense>
  );
}