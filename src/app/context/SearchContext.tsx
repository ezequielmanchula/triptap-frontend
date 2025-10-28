"use client";

import { SearchContextType, SearchData } from '@/utils/types';
import React, { createContext, useContext, useState, ReactNode } from 'react';




const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchData, setSearchData] = useState<SearchData>({
    origin: "Cañuelas",
    destination: "Capital",
    date: ""
  });

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}