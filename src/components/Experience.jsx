import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="numbered-heading">Experiencia y Colaboraciones</h2>
            
            <div className="inner">
                <div className="experience-list">
                    <div className="experience-item">
                        <div className="exp-header">
                            <h3 className="exp-title">
                                Colaborador Backend <span className="highlight">@ SIPAD</span>
                            </h3>
                            <p className="exp-range">Proyecto de Grado - ITLA</p>
                        </div>
                        
                        <div className="exp-description">
                            <p>
                                Participé activamente en el desarrollo del backend de **SIPAD** (Sistema de Predicción de Deserción Escolar), 
                                una plataforma crítica diseñada para integrar datos dispersos de múltiples organismos gubernamentales 
                                (MINERD, ONE, CONANI) con el fin de predecir zonas de riesgo de deserción en República Dominicana.
                            </p>
                            
                            <ul className="exp-bullets">
                                <li>
                                    Diseñé e implementé un **Pipeline ETL automatizado** robusto capaz de procesar y validar 12 tipos diferentes 
                                    de archivos CSV a gran escala.
                                </li>
                                <li>
                                    Desarrollé la arquitectura base siguiendo principios de **Clean Architecture**, asegurando una separación 
                                    clara de responsabilidades y facilitando el mantenimiento a largo plazo.
                                </li>
                                <li>
                                    Implementé lógica de **UPSERT inteligente** para la gestión eficiente de datos relacionales complejos en PostgreSQL.
                                </li>
                                <li>
                                    Creación de endpoints especializados para el análisis de indicadores socioeconómicos y generación de reportes preventivos.
                                </li>
                            </ul>
                            
                            <p className="exp-tech">
                                <span className="font-mono">ASP.NET Core 8</span>
                                <span className="font-mono">C#</span>
                                <span className="font-mono">EF Core</span>
                                <span className="font-mono">PostgreSQL</span>
                                <span className="font-mono">Docker</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
