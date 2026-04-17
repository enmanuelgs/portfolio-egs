import React from 'react';

const Projects = () => {
    // Color personalizado para el perfil
    const brandBlue = '#C7D1F0';

    return (
        <section id="projects">
            {/* --- SECCIÓN DE PROYECTOS Y COLABORACIONES --- */}
            <h2 className="numbered-heading">Proyectos y Colaboraciones</h2>

            <div className="projects-grid">
                
                {/* SIPAD - Colaboración Destacada */}
                <div className="project-content" style={{ marginBottom: '80px' }}>
                    <div>
                        <p className="project-overline" style={{ color: brandBlue }}>Colaboración Destacada (Backend)</p>
                        <h3 className="project-title" style={{ color: brandBlue }}>SIPAD</h3>
                        <div className="project-description">
                            <p>
                                Participé activamente en el desarrollo del backend de <span className="highlight">SIPAD</span> (Sistema de Predicción de Deserción Escolar). 
                                Una plataforma crítica que integra datos de <span className="highlight">MINERD, ONE y CONANI</span> mediante un 
                                <span className="highlight"> Pipeline ETL automatizado</span> y una arquitectura basada en 
                                <span className="highlight"> Clean Architecture</span> para predecir zonas de riesgo educativo.
                            </p>
                        </div>
                        <ul className="project-tech-list">
                            <li>ASP.NET Core 8.0</li>
                            <li>PostgreSQL</li>
                            <li>ETL Services</li>
                            <li>Repository Pattern</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                </div>

                {/* SEGMUN - Proyecto Principal */}
                <div className="project-content" style={{ marginBottom: '60px' }}>
                    <div>
                        <p className="project-overline" style={{ color: brandBlue }}>Proyecto Principal</p>
                        <h3 className="project-title">
                            <a href="https://github.com/enmanuelgs/SEGMUN" target="_blank" rel="noreferrer" style={{ color: brandBlue }}>SEGMUN</a>
                        </h3>
                        <div className="project-description">
                            <p>
                                Solución tecnológica integral para la administración y evaluación de Modelos de Naciones Unidas.
                                Automatiza la gestión de delegados y garantiza precisión en las métricas de desempeño mediante una interfaz moderna.
                            </p>
                        </div>
                        <ul className="project-tech-list">
                            <li>.NET 9</li>
                            <li>C#</li>
                            <li>EF Core</li>
                            <li>PostgreSQL</li>
                            <li>React</li>
                        </ul>
                        <div className="project-links">
                            <a href="https://github.com/enmanuelgs/SEGMUN" target="_blank" rel="noreferrer" style={{ color: brandBlue }}>
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Otros Proyectos Grid */}
                <h3 className="section-subtitle">Otros Proyectos</h3>
                <div className="other-projects-grid">

                    {/* Opinions Analytics */}
                    <div className="project-card">
                        <header>
                            <div className="project-top">
                                <div className="folder" style={{ color: brandBlue }}><i className="fa-regular fa-folder"></i></div>
                                <div className="links">
                                    <a href="https://github.com/enmanuelgs/OpinionsAnalytics" target="_blank" rel="noreferrer" style={{ color: brandBlue }}>
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <h3 className="project-title">Opinions Analytics</h3>
                            <div className="project-description">
                                <p>Proceso ETL completo para análisis de opiniones de clientes y toma de decisiones basada en datos.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="project-tech-list">
                                <li>C#</li>
                                <li>SQL Server</li>
                                <li>Data Analytics</li>
                            </ul>
                        </footer>
                    </div>

                    {/* Agenda Multicapas */}
                    <div className="project-card">
                        <header>
                            <div className="project-top">
                                <div className="folder" style={{ color: brandBlue }}><i className="fa-regular fa-folder"></i></div>
                                <div className="links">
                                    <a href="https://github.com/enmanuelgs/agendaMulticapasReact" target="_blank" rel="noreferrer" style={{ color: brandBlue }}>
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <h3 className="project-title">Agenda Multicapas</h3>
                            <div className="project-description">
                                <p>Gestión eficiente de contactos consumiendo una API robusta bajo arquitectura multicapas.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="project-tech-list">
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>CSS3</li>
                            </ul>
                        </footer>
                    </div>

                    {/* Mokepon */}
                    <div className="project-card">
                        <header>
                            <div className="project-top">
                                <div className="folder" style={{ color: brandBlue }}><i className="fa-regular fa-folder"></i></div>
                                <div className="links">
                                    <a href="https://github.com/enmanuelgs/mokepon" target="_blank" rel="noreferrer" style={{ color: brandBlue }}>
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <h3 className="project-title">Mokepon</h3>
                            <div className="project-description">
                                <p>Juego interactivo de mascotas desarrollado para fortalecer fundamentos web y lógica del DOM.</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="project-tech-list">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </footer>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;