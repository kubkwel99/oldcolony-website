// contexts/PreloaderContext.tsx
"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PreloaderContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export const PreloaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <PreloaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }
  return context;
};
