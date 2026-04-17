import React from 'react';

const Experience = () => {
    // Color personalizado para el perfil
    const brandBlue = '#C7D1F0';

    return (
        <section id="experience" className="experience-section">
            <h2 className="numbered-heading">Experiencia Laboral</h2>
            
            <div className="inner">
                <div className="experience-list">
                    <div className="experience-item">
                        <div className="exp-header">
                            <h3 className="exp-title">
                                Pasante de Tecnología <span className="highlight">@ DINTEL (P.N.)</span>
                            </h3>
                            <p className="exp-range">Septiembre 2022 – Junio 2023</p>
                        </div>
                        
                        <div className="exp-description">
                            <p>
                                Desarrollo de un sistema de escritorio para el control de inventario y equipos del departamento. 
                                Además, brindé soporte técnico de primer y segundo nivel y generé informes técnicos detallados 
                                sobre el estado del parque tecnológico de la institución.
                            </p>
                            
                            <ul className="exp-bullets">
                                <li>Diseño e implementación de base de datos para gestión de activos.</li>
                                <li>Optimización de procesos de soporte técnico interno.</li>
                                <li>Generación de reportes de auditoría técnica.</li>
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
