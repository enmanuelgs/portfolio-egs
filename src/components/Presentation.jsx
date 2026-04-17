import React from 'react';

const Presentation = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="numbered-heading">Acerca de mí</h2>

            <div className="inner">
                <div className="about-text">
                    <div>
                        <p>
                            ¡Hola! Mi nombre es Enmanuel y disfruto creando cosas que viven en el internet.
                            Mi interés en el desarrollo web comenzó cuando decidí explorar cómo se construían los sistemas de información,
                            y desde entonces he estado perfeccionando mis habilidades en el análisis y diseño de software.
                        </p>

                        <p>
                            Avanzando hasta hoy, tengo el privilegio de estar cursando mi último cuatrimestre del
                            <span className="highlight"> Técnico Superior en Desarrollo de Software </span> en el <span className="highlight">ITLA</span>.
                            Mi enfoque principal es construir aplicaciones robustas, escalables y con una gran experiencia de usuario.
                        </p>

                        <p>Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p>
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
