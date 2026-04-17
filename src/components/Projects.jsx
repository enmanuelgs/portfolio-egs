import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language].projects;
    const brandBlue = '#C7D1F0';

    return (
        <section id="projects">
            <h2 className="numbered-heading">{t.title}</h2>

            <div className="projects-grid">
                
                {/* SIPAD */}
                <div className="project-content" style={{ marginBottom: '80px' }}>
                    <div>
                        <p className="project-overline" style={{ color: brandBlue }}>{t.sipad.overline}</p>
                        <h3 className="project-title" style={{ color: brandBlue }}>SIPAD</h3>
                        <div className="project-description">
                            <p>{t.sipad.description}</p>
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

                {/* SEGMUN */}
                <div className="project-content" style={{ marginBottom: '60px' }}>
                    <div>
                        <p className="project-overline" style={{ color: brandBlue }}>{t.segmun.overline}</p>
                        <h3 className="project-title">
                            <a href="https://github.com/enmanuelgs/SEGMUN" target="_blank" rel="noreferrer" style={{ color: brandBlue }}>SEGMUN</a>
                        </h3>
                        <div className="project-description">
                            <p>{t.segmun.description}</p>
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
                <h3 className="section-subtitle">{t.others}</h3>
                <div className="other-projects-grid">

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
                                <p>{t.opinions}</p>
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
                                <p>{t.agenda}</p>
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
                                <p>{t.mokepon}</p>
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