"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Trip, SearchData } from '@/utils/types';

interface TripContextType {
  selectedTrip: (Trip & SearchData) | null;
  setSelectedTrip: (trip: (Trip & SearchData) | null) => void;
  pendingTrip: (Trip & SearchData) | null;
  setPendingTrip: (trip: (Trip & SearchData) | null) => void;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedTrip, setSelectedTrip] = useState<(Trip & SearchData) | null>(null);
  const [pendingTrip, setPendingTrip] = useState<(Trip & SearchData) | null>(null);

  return (
    <TripContext.Provider value={{
      selectedTrip,
      setSelectedTrip,
      pendingTrip,
      setPendingTrip
    }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error('useTrip must be used within a TripProvider');
  }
  return context;
};