import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer className="footer">
            <p>{t.designed}</p>
            <p>{t.rights}</p>
        </footer>
    );
};

export default Footer;
