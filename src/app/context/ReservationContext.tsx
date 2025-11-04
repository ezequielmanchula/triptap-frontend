// contexts/ReservationContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { 
  ReservationData, 
  ReservationContextType, 
  PassengerInfo, 
  PaymentOption 
} from '../../utils/types';

const initialPassengerInfo: PassengerInfo = {
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
};

const initialReservationData: ReservationData = {
  passengerInfo: initialPassengerInfo,
  selectedSeats: [],
  paymentMethod: 'Efectivo',
};

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

interface ReservationProviderProps {
  children: ReactNode;
}

export const ReservationProvider: React.FC<ReservationProviderProps> = ({ children }) => {
  const [reservationData, setReservationData] = useState<ReservationData>(initialReservationData);

  const updatePassengerInfo = (info: Partial<PassengerInfo>) => {
    setReservationData(prev => ({
      ...prev,
      passengerInfo: {
        ...prev.passengerInfo,
        ...info
      }
    }));
  };

  const updateSelectedSeats = (seats: string[]) => {
    setReservationData(prev => ({
      ...prev,
      selectedSeats: seats
    }));
  };

  const toggleSeat = (seat: string) => {
    setReservationData(prev => ({
      ...prev,
      selectedSeats: prev.selectedSeats.includes(seat)
        ? prev.selectedSeats.filter(s => s !== seat)
        : [...prev.selectedSeats, seat]
    }));
  };

  const updatePaymentMethod = (method: PaymentOption) => {
    setReservationData(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  const clearReservation = () => {
    setReservationData(initialReservationData);
  };

  const value: ReservationContextType = {
    reservationData,
    updatePassengerInfo,
    updateSelectedSeats,
    toggleSeat,
    updatePaymentMethod,
    clearReservation,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = (): ReservationContextType => {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error('useReservation debe ser usado dentro de un ReservationProvider');
  }
  return context;
};