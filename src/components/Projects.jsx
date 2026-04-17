import React from 'react';

const Projects = () => {
    // Color personalizado para el perfil
    const brandBlue = '#C7D1F0';

    return (
        <section id="projects">
            {/* --- SECCIÓN DE EXPERIENCIA LABORAL --- */}
            <h2 className="numbered-heading">Experiencia Laboral</h2>
            <div className="experience-content" style={{ marginBottom: '80px' }}>
                <div className="project-content">
                    <div>
                        <p className="project-overline" style={{ color: brandBlue }}>Septiembre 2022 – Junio 2023</p>
                        <h3 className="project-title" style={{ color: brandBlue }}>Pasante de Tecnología — DINTEL (P.N.)</h3>
                        <div className="project-description">
                            <p>
                                Desarrollo de un sistema de escritorio para el control de inventario y equipos del departamento.
                                Además, brindé soporte técnico de primer y segundo nivel y generé informes técnicos detallados
                                sobre el estado del parque tecnológico de la institución.
                            </p>
                        </div>
                        <ul className="project-tech-list">
                            <li>C#</li>
                            <li>.NET</li>
                            <li>SQL Server</li>
                            <li>Office Suite</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* --- SECCIÓN DE PROYECTOS PRINCIPALES --- */}
            <h2 className="numbered-heading">Proyectos Destacados</h2>

            <div className="projects-grid">
                {/* SEGMUN - Destacado */}
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

                {/* SIPAD - Destacado */}
                <div className="project-content" style={{ marginBottom: '60px' }}>
                    <div>
                        <p className="project-overline" style={{ color: brandBlue }}>Proyecto de Tesis</p>
                        <h3 className="project-title" style={{ color: brandBlue }}>SIPAD</h3>
                        <div className="project-description">
                            <p>
                                Sistema Predictivo de Abandono Escolar a escala nacional. Integra datos de MINERD, ONE y CONANI
                                utilizando una arquitectura de microservicios ETL para la toma de decisiones en políticas públicas.
                            </p>
                        </div>
                        <ul className="project-tech-list">
                            <li>ASP.NET Core 8.0</li>
                            <li>PostgreSQL</li>
                            <li>Clean Architecture</li>
                            <li>ETL Services</li>
                            <li>Repository Pattern</li>
                        </ul>
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