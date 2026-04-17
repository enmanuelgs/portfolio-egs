import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Detectamos el idioma del navegador o usamos español por defecto
    const [language, setLanguage] = useState('es');

    const toggleLanguage = (lang) => {
        if (lang) {
            setLanguage(lang);
        } else {
            setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
        }
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
