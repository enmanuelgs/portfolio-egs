import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Header = () => {
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].nav;

    return (
        <header className="site-header">
            <nav>
                <div className="logo">
                    <a href="/">
                        <img src="/logoPersonal.png" alt="Logo EGS" className="logo-img" />
                    </a>
                </div>

                <div className="nav-content">
                    <ul className="nav-list">
                        <li><a href="#about">{t.about}</a></li>
                        <li><a href="#experience">{t.experience}</a></li>
                        <li><a href="#projects">{t.projects}</a></li>
                        <li><a href="#hobbies">{t.hobbies}</a></li>
                        <li><a href="#contact">{t.contact}</a></li>
                    </ul>

                    <div className="nav-resume">
                        <a 
                            href={t.resumeLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="resume-button"
                        >
                            {t.resume}
                        </a>
                    </div>

                    <div className="language-selector">
                        <button 
                            className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                            onClick={() => toggleLanguage('es')}
                        >
                            ES
                        </button>
                        <span className="divider">|</span>
                        <button 
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            onClick={() => toggleLanguage('en')}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
