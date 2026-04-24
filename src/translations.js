export const translations = {
    es: {
        nav: {
            about: "Acerca de",
            experience: "Experiencia",
            projects: "Proyectos",
            hobbies: "Hobbies",
            contact: "Contacto",
            resume: "Currículum",
            resumeLink: "/CV_Enmanuel_Guerrero.pdf"
        },
        about: {
            title: "Acerca de mí",
            p1: "¡Hola! Mi nombre es Enmanuel y disfruto creando cosas que viven en el internet. Soy estudiante de término del Técnico Superior en Desarrollo de Software en el ITLA con un índice académico de 3.8 / 4.0.",
            p2: "Me especializo en construir soluciones completas, desde interfaces modernas hasta sistemas backend robustos, aplicando Clean Architecture y metodologías ágiles. Actualmente desarrollo SIPAD, un sistema predictivo de deserción escolar a escala nacional como proyecto de tesis.",
            tech: "Aquí hay algunas tecnologías con las que he estado trabajando recientemente:",
            education_title: "Educación",
            education: [
                {
                    title: "Técnico Superior en Desarrollo de Software",
                    place: "ITLA (Instituto Tecnológico de las Américas)",
                    range: "Enero 2024 – Actualidad",
                    honors: "Honores: índice académico acumulado de 3.8"
                },
                {
                    title: "Bachiller Técnico en Desarrollo y Administración de Aplicaciones Informáticas",
                    place: "Politécnico Belisario Peguero Guerrero P.N.",
                    range: "Noviembre 2020 – Julio 2023",
                    honors: "Honores: Graduado de honor con índice académico de 98"
                }
            ],
            cert_title: "Certificaciones y Capacitaciones",
            certifications: [
                {
                    title: "Programador Web Full Stack",
                    place: "Talento Digital, Indotel",
                    range: "Noviembre 2025 – Enero 2026"
                },
                {
                    title: "Programa de Iniciación en Competencias Digitales",
                    place: "IMMUNE Technology Institute, Madrid",
                    range: "Julio – Noviembre 2025"
                },
                {
                    title: "Programación Web en JavaScript",
                    place: "ITLA",
                    range: "Enero – Abril 2024"
                },
                {
                    title: "Programación de páginas Web con JavaScript y HTML",
                    place: "CENTU",
                    range: "Marzo 2023 – Mayo 2023"
                }
            ]
        },
        experience: {
            title: "Experiencia Laboral",
            jobs: [
                {
                    role: "Pasante – Departamento de Proyectos TIC",
                    company: "Ministerio de Educación de la República Dominicana (MINERD)",
                    range: "Abril 2026 – Actualidad",
                    description: "Desarrollo del backend institucional y persistencia de datos bajo estándares de Clean Architecture y digitalización de servicios públicos.",
                    bullets: [
                        "Desarrollo el backend institucional utilizando .NET 8 bajo el paradigma de Clean Architecture, aplicando patrones como CQRS y MediatR para asegurar la mantenibilidad y el rigor arquitectónico del sistema.",
                        "Diseño y administro la persistencia de datos en SQL Server, integrando Liquibase para el control de versiones de la base de datos y garantizando la integridad de la información en la digitalización de servicios públicos.",
                        "Colaboro en la implementación del frontend con React 19 y TypeScript, enfocándome en la optimización del rendimiento mediante SWR y el cumplimiento de estándares de usabilidad con MUI v7.",
                        "Aseguro la calidad del software mediante la ejecución de pruebas unitarias en xUnit y el monitoreo de flujos de datos con Serilog, promoviendo prácticas de desarrollo robustas dentro del equipo técnico.",
                        "Gestiono la infraestructura de almacenamiento con MinIO, facilitando la transición tecnológica de procesos burocráticos hacia soluciones digitales escalables y de alta disponibilidad."
                    ],
                    tech: [".NET 8", "SQL Server", "Liquibase", "React 19", "TypeScript", "SWR", "MUI v7", "xUnit", "Serilog", "MinIO"]
                },
                {
                    role: "Pasante de Tecnología",
                    company: "Dirección Central de Inteligencia y Tecnología de la Policía Nacional (DINTEL P.N.)",
                    range: "Septiembre 2022 – Junio 2023",
                    description: "Desarrollo de un sistema de escritorio para el control de inventario y equipos del departamento. Brindé soporte técnico y generé informes técnicos detallados sobre la infraestructura tecnológica.",
                    bullets: [
                        "Diseño e implementación de base de datos para gestión de activos.",
                        "Optimización de procesos de soporte técnico interno.",
                        "Generación de reportes de auditoría técnica."
                    ],
                    tech: ["C#", ".NET", "SQL Server"]
                },
                {
                    role: "Desarrollador — Sistema de Registro",
                    company: "Politécnico Belisario Peguero Guerrero",
                    range: "Enero 2022 – Agosto 2022",
                    description: "Optimización de procesos administrativos liderando equipo bajo metodología SCRUM.",
                    bullets: [
                        "Liderazgo técnico en la creación del sistema de registro estudiantil.",
                        "Aplicación de metodologías ágiles (SCRUM) para entregas incrementales.",
                        "Elaboración de documentación técnica completa (Diagramas UML, Casos de Uso)."
                    ],
                    tech: ["C#", "SQL Server", "UML", "SCRUM"]
                }
            ]
        },
        projects: {
            title: "Proyectos y Colaboraciones",
            sipad: {
                overline: "Proyecto de Tesis (Backend)",
                description: "Sistema predictivo a escala nacional que integra datos de MINERD, ONE, CONANI y MISPAS. Implementación de 12 servicios ETL, un orquestador de pipeline automatizado y 8 controladores REST bajo Clean Architecture."
            },
            segmun: {
                overline: "Proyecto Principal",
                description: "Solución tecnológica integral para la administración y evaluación de Modelos de Naciones Unidas. Automatiza la gestión de delegados y comités, garantizando precisión en las métricas mediante .NET 9."
            },
            others: "Otros Proyectos",
            opinions: "Proceso ETL completo para análisis de opiniones de clientes y toma de decisiones basada en datos.",
            agenda: "Gestión eficiente de contactos consumiendo una API robusta bajo arquitectura multicapas.",
            mokepon: "Juego interactivo de mascotas desarrollado para fortalecer fundamentos web y lógica del DOM."
        },
        hobbies: {
            title: "Hobbies",
            description: "Aunque gran parte de mi tiempo lo dedico a estudiar, estas son algunas de las cosas que me apasionan:",
            list: ["Programar", "Jugar videojuegos", "Escuchar música", "Cantar", "Leer", "Debates y Oratoria"]
        },
        contact: {
            overline: "¿Qué sigue?",
            title: "Ponte en contacto",
            description: "Mi bandeja de entrada siempre está abierta. Si tienes alguna pregunta o simplemente quieres saludar, ¡haré todo lo posible por responderte!",
            button: "Di Hola"
        },
        footer: {
            designed: "Diseñado e Implementado por Enmanuel Guerrero",
            rights: "© 2026 - Todos los derechos reservados"
        }
    },
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            hobbies: "Hobbies",
            contact: "Contact",
            resume: "Resume",
            resumeLink: "/Resume_Enmanuel_Guerrero.pdf"
        },
        about: {
            title: "About Me",
            p1: "Hello! My name is Enmanuel and I enjoy creating things that live on the internet. I am a final-year Software Development student at ITLA with a 3.8 / 4.0 GPA.",
            p2: "I specialize in building end-to-end solutions, from modern interfaces to robust backend systems, applying Clean Architecture and agile methodologies. I am currently developing SIPAD, a national-scale school dropout prediction system, as my graduation project.",
            tech: "Here are a few technologies I've been working with recently:",
            education_title: "Education",
            education: [
                {
                    title: "Higher Technical Degree in Software Development",
                    place: "ITLA (Institute of Technology of the Americas)",
                    range: "January 2024 – Present",
                    honors: "Honors: Cumulative GPA of 3.8"
                },
                {
                    title: "Technical High School Diploma in Software Development & IT Admin",
                    place: "Belisario Peguero Guerrero Polytechnic",
                    range: "November 2020 – July 2023",
                    honors: "Honors: Graduated with honors, GPA of 98/100"
                }
            ],
            cert_title: "Certifications & Training",
            certifications: [
                {
                    title: "Full Stack Web Programmer",
                    place: "Talento Digital, Indotel",
                    range: "November 2025 – January 2026"
                },
                {
                    title: "Digital Skills Initiation Program",
                    place: "IMMUNE Technology Institute, Madrid",
                    range: "July – November 2025"
                },
                {
                    title: "Web Programming in JavaScript",
                    place: "ITLA",
                    range: "January – April 2024"
                },
                {
                    title: "Web Page Programming with JavaScript and HTML",
                    place: "CENTU",
                    range: "March – May 2023"
                }
            ]
        },
        experience: {
            title: "Work Experience",
            jobs: [
                {
                    role: "Intern – ICT Projects Department",
                    company: "Ministry of Education of the Dominican Republic (MINERD)",
                    range: "April 2026 – Present",
                    description: "Development of institutional backend and data persistence under Clean Architecture standards and digitalization of public services.",
                    bullets: [
                        "Develop the institutional backend using .NET 8 under Clean Architecture, applying CQRS and MediatR patterns to ensure system maintainability and architectural rigor.",
                        "Design and manage data persistence in SQL Server, integrating Liquibase for database version control and guaranteeing data integrity in the digitalization of public services.",
                        "Collaborate on the frontend with React 19 and TypeScript, focusing on performance optimization through SWR and usability standards compliance with MUI v7.",
                        "Ensure software quality by executing unit tests in xUnit and monitoring data flows with Serilog, promoting robust development practices within the technical team.",
                        "Manage storage infrastructure with MinIO, facilitating the technological transition of bureaucratic processes toward scalable, high-availability digital solutions.",
                    ],
                    tech: [".NET 8", "SQL Server", "Liquibase", "React 19", "TypeScript", "SWR", "MUI v7", "xUnit", "Serilog", "MinIO"]
                },
                {
                    role: "Technology Intern",
                    company: "Central Directorate of Intelligence and Technology of the National Police (DINTEL P.N.)",
                    range: "September 2022 – June 2023",
                    description: "Development of a desktop system for inventory and equipment control. Provided technical support and generated detailed infrastructure reports.",
                    bullets: [
                        "Design and implementation of asset management database.",
                        "Optimization of internal technical support processes.",
                        "Generation of technical audit reports."
                    ],
                    tech: ["C#", ".NET", "SQL Server"]
                },
                {
                    role: "Developer — Registration System",
                    company: "Belisario Peguero Guerrero Polytechnic",
                    range: "January 2022 – August 2022",
                    description: "Optimization of administrative processes leading a team under SCRUM methodology.",
                    bullets: [
                        "Technical leadership in the creation of the student registration system.",
                        "Application of agile methodologies (SCRUM) for incremental deliveries.",
                        "Development of complete technical documentation (UML Diagrams, Use Cases)."
                    ],
                    tech: ["C#", "SQL Server", "UML", "SCRUM"]
                }
            ]
        },
        projects: {
            title: "Projects and Collaborations",
            sipad: {
                overline: "Graduation Project (Backend)",
                description: "National-scale predictive system integrating data from MINERD, ONE, CONANI, and MISPAS. Implementation of 12 ETL services, an automated pipeline orchestrator, and 8 REST controllers under Clean Architecture."
            },
            segmun: {
                overline: "Main Project",
                description: "Comprehensive technological solution for the administration and evaluation of Model United Nations. Automates delegate and committee management, ensuring metric accuracy using .NET 9."
            },
            others: "Other Projects",
            opinions: "Complete ETL process for customer feedback analysis and data-driven decision making.",
            agenda: "Efficient contact management consuming a robust API under multi-layer architecture.",
            mokepon: "Interactive pet game developed to strengthen programming logic and DOM manipulation."
        },
        hobbies: {
            title: "Hobbies",
            description: "Although I spend most of my time studying, these are some of the things I am passionate about:",
            list: ["Coding", "Gaming", "Listening to Music", "Singing", "Reading", "Debate & Public Speaking"]
        },
        contact: {
            overline: "What's Next?",
            title: "Get In Touch",
            description: "My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            button: "Say Hello"
        },
        footer: {
            designed: "Designed and Built by Enmanuel Guerrero",
            rights: "© 2026 - All rights reserved"
        }
    }
};
