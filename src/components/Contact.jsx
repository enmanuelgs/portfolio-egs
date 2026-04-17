import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <section id="contact" className="contact-section">
            <h2 className="numbered-heading overline">{t.overline}</h2>
            <h2 className="title">{t.title}</h2>
            
            <p className="contact-text">{t.description}</p>

            <a 
                href="mailto:enmanuelgs002@gmail.com?subject=Hola Enmanuel!" 
                className="email-link"
            >
                {t.button}
            </a>
        </section>
    );
};

export default Contact;
