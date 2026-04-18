import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Header = () => {
    const { language, toggleLanguage } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const t = translations[language].nav;

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Close menu when clicking a link
    const handleLinkClick = () => setMenuOpen(false);

    // Handle scroll lock when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
            <nav>
                <div className="logo">
                    <a href="/" onClick={handleLinkClick}>
                        <img src="/logoPersonal.png" alt="Logo EGS" className="logo-img" />
                    </a>
                </div>

                <button 
                    className="menu-button" 
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <div className="ham-box">
                        <div className="ham-box-inner"></div>
                    </div>
                </button>

                <div className={`nav-content ${menuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#about" onClick={handleLinkClick}>{t.about}</a></li>
                        <li><a href="#experience" onClick={handleLinkClick}>{t.experience}</a></li>
                        <li><a href="#projects" onClick={handleLinkClick}>{t.projects}</a></li>
                        <li><a href="#hobbies" onClick={handleLinkClick}>{t.hobbies}</a></li>
                        <li><a href="#contact" onClick={handleLinkClick}>{t.contact}</a></li>
                    </ul>

                    <div className="nav-resume">
                        <a 
                            href={t.resumeLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="resume-button"
                            onClick={handleLinkClick}
                        >
                            {t.resume}
                        </a>
                    </div>

                    <div className="language-selector">
                        <button 
                            className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                            onClick={() => {
                                toggleLanguage('es');
                                // Don't close menu automatically on language change if you want them to see it change
                            }}
                        >
                            ES
                        </button>
                        <span className="divider">|</span>
                        <button 
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            onClick={() => {
                                toggleLanguage('en');
                            }}
                        >
                            EN
                        </button>
                    </div>
                </div>

                <div 
                    className={`menu-backdrop ${menuOpen ? 'active' : ''}`} 
                    onClick={() => setMenuOpen(false)}
                ></div>
            </nav>
        </header>
    );
};

export default Header;
