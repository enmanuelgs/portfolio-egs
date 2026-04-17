import React from 'react';

const Header = () => {
    return (
        <header className="site-header">
            <nav>
                <div className="logo">
                    <a href="/">
                        <img src="/logoPersonal.png" alt="Logo EGS" className="logo-img" />
                    </a>
                </div>

                <ul className="nav-list">
                    <li><a href="#about">Acerca de</a></li>
                    <li><a href="#experience">Experiencia</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                    <li><a href="#socials">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
