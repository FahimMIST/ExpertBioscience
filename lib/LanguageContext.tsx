'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type LangType = 'bn' | 'en';

interface LanguageContextType {
  lang: LangType;
  setLang: (lang: LangType) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangType>('bn');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('expert_bioscience_lang') as LangType;
      if (saved === 'bn' || saved === 'en') {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState(saved);
      }
    }
  }, []);

  const setLang = (newLang: LangType) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('expert_bioscience_lang', newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
