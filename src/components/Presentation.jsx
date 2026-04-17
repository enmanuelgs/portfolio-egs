import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Presentation = () => {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <section id="about" className="about-section">
            <h2 className="numbered-heading">{t.title}</h2>

            <div className="inner">
                <div className="about-text">
                    <div>
                        <p>{t.p1}</p>
                        <p>{t.p2}</p>
                        <p>{t.tech}</p>
                    </div>

                    <ul className="skills-list">
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>HTML & CSS</li>
                        <li>SQL Server</li>
                        <li>C# / .NET</li>
                    </ul>
                </div>

                <div className="about-pic">
                    <div className="wrapper">
                        <img src="/yo.webp" alt="Enmanuel Guerrero" className="img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Presentation;
