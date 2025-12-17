export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
  tags: string[];
  technologies: string[];
  challenges: string[];
  features: string[];
  screenshots: string[];
  websiteUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  apkUrl?: string;
  githubUrl?: string;
  testimonials?: {
    author: string;
    role: string;
    text: string;
  }[];
  timeline?: string;
  award?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'notetify',
    title: 'NoteTify - Asistente de Productividad IA',
    shortDescription: 'Ganador del 1er Lugar - Feria de Prototipos UTP 2025. Aplicación móvil con integración de Gemini AI, comandos de voz y sincronización en tiempo real.',
    fullDescription: 'App móvil que combina IA con productividad personal. Gestiona notas, tareas y recordatorios mediante comandos de voz procesados por Gemini AI. Sincronización en tiempo real y sugerencias inteligentes.',
    image: 'Chat_IA_notetify.jpg',
    tags: ['React Native', 'Expo', 'Firebase', 'Gemini AI', 'TypeScript'],
    technologies: [
      'React Native + Expo',
      'Firebase (Firestore, Auth, Functions)',
      'Google Gemini AI',
      'TypeScript',
      'Push Notifications'
    ],
    challenges: [
      'Reconocimiento de voz en tiempo real',
      'Sincronización multi-dispositivo',
      'Optimización de batería con IA',
      'Arquitectura escalable'
    ],
    features: [
      'Comandos de voz natural',
      'Sugerencias IA personalizadas',
      'Sync en tiempo real',
      'Modo offline',
      'Categorización automática',
      'Búsqueda semántica'
    ],
    screenshots: [
      'Screenshot_1765901255.png',
      'Screenshot_1765901330.png',
      'Screenshot_1765901287.png'
    ],
    demoUrl: 'NoteTify.apk',
    apkUrl: 'NoteTify.apk',
    githubUrl: 'https://github.com/devcarlosGM/notetify',
    award: '1er Lugar - Feria de Prototipos UTP 2025',
    timeline: 'Septiembre 2025 - Diciembre 2025',
    
  },
  {
    id: 'django-ecommerce',
    title: 'Django E-commerce - Tienda en Línea',
    shortDescription: 'Tienda en línea completa con autenticación, carrito de compras, gestión de inventario y flujos de pago. Proyecto académico de la UTP.',
    fullDescription: 'Plataforma de comercio electrónico desarrollada con Django como proyecto de la licenciatura en Tecnologías de la Información. Implementa un sistema de tienda en línea completo con autenticación de usuarios, operaciones CRUD, carrito de compras persistente, gestión de inventario y front-end desarrollado con una tienda en línea de calzado. El proyecto incluye integración con bases de datos relacionales (SQLite) y operaciones CRUD completas.',
    image: 'window.svg',
    tags: ['Python', 'Django', 'SQLite', 'CRUD'],
    technologies: [
      'Python con Django Framework',
      'SQLite como base de datos relacional',
      'Operaciones CRUD (Create, Read, Update, Delete)',
      'Sistema de autenticación de usuarios',
      'Django ORM para manipulación de datos',
      'Templates de Django para el front-end',
      'Gestión de sesiones y cookies',
      'Bootstrap para diseño responsivo'
    ],
    challenges: [
      'Implementación de operaciones CRUD eficientes y seguras',
      'Diseño de modelos de base de datos relacionales optimizados',
      'Gestión de sesiones de usuario y persistencia de carrito',
      'Desarrollo de un front-end intuitivo integrado con el back-end Django'
    ],
    features: [
      'Sistema completo de autenticación de usuarios',
      'Operaciones CRUD para gestión de productos (calzado)',
      'Carrito de compras con persistencia de sesión',
      'Gestión de inventario y stock de productos',
      'Panel de administración de Django personalizado',
      'Sistema de categorización de productos',
      'Interfaz responsiva con Bootstrap',
      'Base de datos SQLite con modelos relacionales',
      'Validación de formularios y manejo de errores'
    ],
    screenshots: [
      'window.svg',
      'window.svg',
      'window.svg'
    ],
    githubUrl: 'https://github.com/devcarlosGM/django-ecommerce',
    timeline: 'Septiembre 2022 - Agosto 2024 (Proyecto Académico UTP)',
    
  },
  {
    id: 'bomberblox',
    title: 'BomberBlox 3D',
    shortDescription: 'Juego multijugador inspirado en Bomberman con generación procedimental de mapas y sistemas multi-arena.',
    fullDescription: 'BomberBlox 3D es una reinvención moderna del clásico Bomberman, desarrollado en Roblox Studio. Combina mecánicas de juego tradicionales con generación procedimental de mapas, sistema multijugador robusto y gráficos 3D optimizados. El juego incluye múltiples arenas, power-ups únicos y un sistema de progresión para mantener a los jugadores comprometidos.',
    image: 'globe.svg',
    tags: ['Lua', 'Roblox Studio', 'Blender'],
    technologies: [
      'Roblox Studio',
      'Lua scripting',
      'Blender para modelado 3D',
      'Roblox DataStore para persistencia',
      'Sistema de matchmaking personalizado'
    ],
    challenges: [
      'Implementación de generación procedimental de mapas balanceada',
      'Optimización de rendimiento para soportar múltiples jugadores simultáneos',
      'Sincronización de estado del juego entre clientes',
      'Diseño de mecánicas de juego equilibradas y divertidas'
    ],
    features: [
      'Modo multijugador hasta 8 jugadores',
      'Generación procedimental de mapas',
      'Sistema de power-ups variados',
      'Múltiples arenas con temáticas únicas',
      'Sistema de ranking y estadísticas',
      'Personalización de avatares',
      'Física de explosiones realista',
      'Sistema de logros'
    ],
    screenshots: [
      'globe.svg',
      'globe.svg',
      'globe.svg'
    ],
    demoUrl: 'https://www.roblox.com/games/bomberblox',
    timeline: 'Agosto 2024 - Abril 2026 (Proyecto Actual de Ingeniería)',
    
  }
];
