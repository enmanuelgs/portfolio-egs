# Portfolio - Enmanuel Guerrero Santana

![Demo](https://raw.githubusercontent.com/EnmanuelGS/portfolio-egs/main/.github/preview.gif)

## Descripción

**Portfolio Enmanuel Guerrero Santana** es una página web personal profesional desarrollada como proyecto final de la asignatura **Interfaces y Experiencia de Usuario (UX/UI)** de la carrera **Ingeniería de Software**. El proyecto demuestra la aplicación de principios modernos de diseño web, usabilidad y arquitectura de software, cumpliendo con los objetivos académicos establecidos.

El portafolio incluye:
- Presentación personal y profesional
- Portafolio de proyectos con detalles técnicos
- Habilidades técnicas y competencias
- Experiencia académica y profesional
- Currículum vitae descargable
- Blog con artículos técnicos
- Contacto y redes sociales

## Características

### Diseño Responsivo
Diseñado para funcionar en cualquier dispositivo:
- **Móvil**: Navegación optimizada y layout adaptado
- **Tablet**: Experiencia intermedia con layout flexible
- **Escritorio**: Diseño completo con todos los componentes

### Componentes Principales
#### 1. Página de Inicio
- **Header**: Navegación sticky, modo claro/oscuro
- **Sección Hero**: Biografía corta, foto profesional, CTA principal
- **Sobre Mí**: Presentación detallada, diferenciadores clave
- **Skills Highlights**: Tarjetas interactivas con tecnologías principales
- **CTA Final**: Invitación a conectar o ver proyectos

#### 2. Portafolio (Proyectos)
- **Grid de Proyectos**: Tarjetas interactivas con hover effects
- **Páginas de Proyecto Detalladas**: Estructura completa con:
  - Resumen ejecutivo
  - Problema y solución
  - Stack tecnológico
  - Proceso de diseño
  - Capturas y videos
  - Resultados y aprendizajes
  - Enlaces externos (GitHub, Live Demo)

#### 3. Skills (Habilidades)
- **Category Sections**: Agrupación por tipo (Programación, DB, Herramientas, Idiomas)
- **Badge System**: Etiquetas visuales para tecnologías
- **Description Cards**: Explicación de nivel de expertise

#### 4. Académico
- **Universidad Tecnológica de Santiago (UTESA)**: Detalle de la carrera
- **Horarios**: Diseño modular con horarios por día
- **Horas Semanales**: Resumen visual de carga académica

#### 5. Experiencia (Trabajo)
- **Perfil Profesional**: Rol actual y responsabilidades
- **Logros Clave**: Métricas y resultados cuantificables
- **Cronología**: Línea de tiempo de trayectoria profesional

#### 6. Blog
- **Lista de Artículos**: Cards con título, fecha, categoría
- **Páginas de Artículo**: Formato completo con:
  - Autor y fecha
  - Tabla de contenidos automática
  - Citas y bloques de código
  - Imágenes inline
  - Secciones bien estructuradas

#### 7. Contacto
- **Formulario de Contacto**: Validación de campos, anti-spam
- **Enlaces Directos**: Email, WhatsApp, LinkedIn, GitHub
- **Mapa**: Ubicación (cuando aplica)

## Características Técnicas

### Tecnologías Utilizadas
- **Frontend**: React 18+ (Vite)
- **Styling**: Vanilla CSS (Modern CSS variables, Flexbox, Grid)
- **Icons**: FontAwesome 6 (CDN)
- **Typography**: Google Fonts (Inter, Fira Code)
- **Hosting**: GitHub Pages / Vercel

### Arquitectura
- **Component-Based**: Componentes reutilizables y modulares
- **File-Based Routing**: Next.js App Router
- **Static Generation**: Exportación a HTML estático para máximo performance
- **Progressive Enhancement**: Funcionalidad básica sin JavaScript

### SEO Optimizado
- **Metatags Dinámicos**: Títulos y descripciones por página
- **Schema Markup**: Datos estructurados para mejor indexación
- **Sitemap**: Generación automática de sitemap.xml
- **Robots.txt**: Configuración de crawling
- **Performance**: Core Web Vitals optimizados

### Accessibility (A11y)
- **ARIA Labels**: Soporte completo para lectores de pantalla
- **Keyboard Navigation**: Navegación completa con teclado
- **Color Contrast**: Cumple WCAG AA mínimo
- **Focus Management**: Indicadores de foco claros
- **Semantic HTML**: Uso correcto de etiquetas HTML5

## Proceso de Desarrollo

### Fases del Proyecto
1. **Planning & Research** - Definición de objetivos y arquitectura
2. **Design System** - Paleta de colores, tipografía, componentes base
3. **Component Development** - Desarrollo incremental de cada sección
4. **Content Creation** - Redacción de textos y recolección de assets
5. **Integration** - Conexión de todas las páginas
6. **Testing** - Pruebas de usabilidad y responsiveness
7. **Deployment** - Configuración de hosting y dominio

### Wireframes y Mockups
Los wireframes iniciales fueron creados con [Figma](https://www.figma.com):
- [Home Wireframe](link-to-figma) (ejemplo)
- [Portfolio Wireframe](link-to-figma) (ejemplo)

## Despliegue

### Hosting en Vercel

1. **Crear cuenta en Vercel** → [vercel.com](https://vercel.com)
2. **Conectar repositorio GitHub**
3. **Importar proyecto**
4. **Configuración automática**: Vercel detectará Next.js
5. **Deployment**: Click en "Deploy"

### Comandos

```bash
# Instalar dependencias
npm install

# Desarrollar localmente
npm run dev

# Generar versión estática
npm run build

# Previsualizar build estático
npm run preview
```

## Estructura del Proyecto

```
portfolio-egs/
├── app/                     # Next.js App Router
│   ├── (pages)/             # Grupos de rutas públicas
│   │   ├── page.tsx         # Home
│   │   ├── portfolio/       # Portafolio
│   │   ├── skills/          # Habilidades
│   │   ├── academic/        # Académico
│   │   ├── experience/      # Experiencia
│   │   ├── blog/            # Blog
│   │   ├── contact/         # Contacto
│   │   └── layout.tsx       # Layout principal
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Estilos globales
├── components/              # Componentes React
├── content/                 # Contenido estático
│   ├── projects.json
│   └── blog/
├── public/                  # Assets estáticos
├── screenshots/             # Capturas de pantalla
└── .env.local               # Variables de entorno
```

## Contenido del Proyecto

### 1. Portafolio de Proyectos
Incluye proyectos reales desarrollados durante la carrera:
- **[SEGMUN](https://github.com/enmanuelgs/SEGMUN)**: Solución integral para la administración y evaluación de Modelos de Naciones Unidas (.NET 9, EF Core, PostgreSQL, React).
- **[SIPAD](https://github.com/enmanuelgs/SIPADBackend)**: Sistema Predictivo de Abandono Escolar nacional, integrando datos de MINERD y ONE (ASP.NET Core 8, Clean Architecture).
- **[Opinions Analytics](https://github.com/enmanuelgs/OpinionsAnalytics)**: Proceso ETL completo para análisis de opiniones de clientes y toma de decisiones.
- **[Agenda Multicapas](https://github.com/enmanuelgs/agendaMulticapasReact)**: Gestión de contactos consumiendo una API robusta bajo arquitectura multicapas.
- **[Mokepon](https://github.com/enmanuelgs/mokepon)**: Juego interactivo de mascotas desarrollado para fortalecer lógica del DOM y fundamentos web.
- ... [ver todos los proyectos en la sección Portafolio de la web]

### 2. Blog
Artículos técnicos sobre:
- Desarrollo web moderno
- Buenas prácticas de UX/UI
- Herramientas de ingeniería de software
- Experiencias académicas

## Diseño System

### Paleta de Colores
```css
/* Primary */
--blue-500: #3b82f6;
--blue-600: #2563eb;

/* Secondary */
--indigo-500: #6366f1;

/* Neutral */
--gray-50: #f9fafb;
--gray-900: #111827;

/* Semantic */
--success-500: #10b981;
--warning-500: #f59e0b;
--error-500: #ef4444;
```

### Tipografía
```css
/* Heading Font */
font-family: 'Space Grotesk', sans-serif;

/* Body Font */
font