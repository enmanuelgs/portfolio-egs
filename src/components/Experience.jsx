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
                    {t.jobs.map((job, index) => (
                        <div className="experience-item" key={index} style={{ marginBottom: '50px' }}>
                            <div className="exp-header">
                                <h3 className="exp-title">
                                    {job.role} <span className="highlight">@ {job.company}</span>
                                </h3>
                                <p className="exp-range">{job.range}</p>
                            </div>
                            
                            <div className="exp-description">
                                <p>{job.description}</p>
                                
                                <ul className="exp-bullets">
                                    {job.bullets.map((bullet, bIndex) => (
                                        <li key={bIndex}>{bullet}</li>
                                    ))}
                                </ul>
                                
                                <p className="exp-tech">
                                    {job.tech.map((tech, tIndex) => (
                                        <span className="font-mono" key={tIndex}>{tech}</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
