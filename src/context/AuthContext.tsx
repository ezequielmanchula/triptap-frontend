"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  isAuthed: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    setIsAuthed(!!token);
  }, []);

  function login(token: string) {
    localStorage.setItem('token', token);
    setIsAuthed(true);
  }

  function logout() {
    localStorage.removeItem('token');
    setIsAuthed(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
