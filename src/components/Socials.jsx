import React from 'react';

const Socials = () => {
    return (
        <div className="social-links-wrapper" id="socials">
            <ul className="social-links-list">
                <li>
                    <a href="https://github.com/kero2792" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/enmanuel-guerrero-698b80247/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/enmags16/?hl=es-la" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/18097061588" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:enmanuelgs002@hotmail.com" target="_blank" rel="noreferrer">
                        <i className="fa-regular fa-envelope"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
