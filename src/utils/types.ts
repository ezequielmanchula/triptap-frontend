import React from "react";

export interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Review {
  title: string;
  paragraph: string;
  name: string;
  img: string;
}

export interface Panel {
  image: string;
  title: string;
  description: string;
}

export interface ButtonProps {
  type?: "button" | "submit";
  isSubmitting?: boolean;
  label: string;
  loadingLabel?: string;
  icon?: React.ReactNode;
}

export interface LinkButtonProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}
export interface SearchData {
  origin: string;
  destination: string;
  date: string;
}

export interface SearchContextType {
  searchData: SearchData;
  setSearchData: (data: SearchData) => void;
}

export interface Trip {
  id: number;
  seats: number;
  price: number;
  time: string;
  departureTime?: string;
  arrivalTime?: string;
}

export interface TripCardProps {
  trip: Trip;
  searchData: SearchData;
}

// Reservation.ts
export type PaymentOption = 'Transferencia' | 'Tarjeta' | 'Efectivo';

export interface PassengerInfo {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
}

export interface ReservationData {
  passengerInfo: PassengerInfo;
  selectedSeats: string[];
  paymentMethod: PaymentOption;
}

export interface ReservationContextType {
  reservationData: ReservationData;
  updatePassengerInfo: (info: Partial<PassengerInfo>) => void;
  updateSelectedSeats: (seats: string[]) => void;
  toggleSeat: (seat: string) => void;
  updatePaymentMethod: (method: PaymentOption) => void;
  clearReservation: () => void;
}