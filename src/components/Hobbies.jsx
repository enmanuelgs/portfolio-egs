import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Hobbies = () => {
    const { language } = useLanguage();
    const t = translations[language].hobbies;

    return (
        <section id="hobbies">
            <h2 className="numbered-heading">{t.title}</h2>
            <p>{t.description}</p>

            <ul className="hobbies-grid">
                {t.list.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </section>
    );
};

export default Hobbies;
