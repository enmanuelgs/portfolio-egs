import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Experience = () => {
    const { language } = useLanguage();
    const t = translations[language].experience;

    return (
        <section id="experience" className="experience-section">
            <h2 className="numbered-heading">{t.title}</h2>
            
            <div className="inner">
                <div className="experience-list">
                    <div className="experience-item">
                        <div className="exp-header">
                            <h3 className="exp-title">
                                {t.role} <span className="highlight">@ {t.company}</span>
                            </h3>
                            <p className="exp-range">{t.range}</p>
                        </div>
                        
                        <div className="exp-description">
                            <p>{t.description}</p>
                            
                            <ul className="exp-bullets">
                                {t.bullets.map((bullet, index) => (
                                    <li key={index}>{bullet}</li>
                                ))}
                            </ul>
                            
                            <p className="exp-tech">
                                <span className="font-mono">C#</span>
                                <span className="font-mono">.NET</span>
                                <span className="font-mono">SQL Server</span>
                                <span className="font-mono">Office Suite</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
