export const personal = {
  name: 'Evis Yulian Tovar Peluffo',
  shortName: 'Evis Tovar',
  role: 'Desarrollador de Software',
  education: 'Análisis y Desarrollo de Software · SENA',
  email: 'yuliantovar2002@gmail.com',
  github: 'https://github.com/Yulian64',
  linkedin: 'https://linkedin.com/in/yulian-tovar23/',
  location: 'Bogotá, Colombia',
}

export const skills = [
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'Vite', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'HTML / CSS', level: 90, category: 'frontend' },
  { name: 'Python', level: 55, category: 'backend' },
  { name: 'ESP32 / IoT', level: 70, category: 'hardware' },
  { name: 'Git & GitHub', level: 75, category: 'tools' },
]

export const projects = [
  {
    id: 'asisteagro',
    title: 'AsisteAgro',
    description:
      'Plataforma de asistencia técnica para agricultores colombianos. Provee guías de buenas prácticas sobre los principales cultivos del país, facilitando el acceso a información agrícola de calidad.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    category: 'Web App',
    color: '#00FFB2',
    icon: '🌿',
    highlights: [
      'Guías de cultivos colombianos',
      'Asistencia técnica digital',
      'Interfaz amigable para agricultores',
    ],
    buttons: [
      { label: 'Ver código', link: 'https://github.com/Yulian64/AsisteAgro.git' },
      { label: 'Ver Demo', link: 'https://asisteagro.netlify.app' }
    ]
  },

  {
    id: 'sistema-agendamiento',
    title: 'Sistema de Agendamiento de Talentos',
    description:
      'Aplicación web desarrollada para gestionar el agendamiento de citas entre talentos y expertos en Tecnoparque SENA. El sistema permite visualizar horarios disponibles, programar reuniones y organizar las sesiones de acompañamiento de manera eficiente.',
    tags: ['React', 'Vite', 'JavaScript'],
    category: 'Web App',
    color: '#4DA6FF',
    icon: '📅',
    highlights: [
      'Visualización de horarios disponibles',
      'Programación de reuniones',
      'Gestión de recursos a utilizar en sesiones de acompañamiento',
    ],
    buttons: [{label: 'Ver código', link: 'https://github.com/Yulian64/sistema-agendamiento.git'}]
  },

  {
    id: 'robot-oruga',
    title: 'Robot Oruga Explorador',
    description:
      'Robot explorador construido con ESP32 y ESP32 Wrover Dev. Incluye driver L298N para motores, luces LED, cámara en tiempo real y una interfaz web para control remoto vía WiFi.',
    tags: ['ESP32', 'HTML', 'CSS', 'JavaScript', 'IoT'],
    category: 'Hardware / IoT',
    color: '#FF5733',
    icon: '🤖',
    highlights: [
      'Cámara en tiempo real vía WiFi',
      'Control remoto desde interfaz web',
      'Driver L298N + LEDs',
    ],
    buttons: [
      {label: 'Ver código', link: 'https://github.com/Yulian64/robot-oruga-explorador.git'},
      {label: 'Ver Imágenes', type: 'gallery'}
    ],
    images: [
      '/images/robot/robot.png',
      '/images/robot/robot2.png',
      '/images/robot/robot3.png',
      '/images/robot/robot4.png',
      '/images/robot/robot5.png',
      '/images/robot/robot6.png',
      '/images/robot/robot7.png',
    ]
  },

  {
    id: 'sistema-monitoreo',
    title: 'Sistema IoT de Monitoreo Ambiental',
    description: 'Sistema diseñado para medir temperatura y humedad mediante sensores. Los datos se visualizan en una pantalla LCD y se registran automáticamente en una tarjeta SD junto con la fecha y hora proporcionadas por un módulo RTC. Además, el sistema incluye un mecanismo de control automático que activa un ventilador cuando la temperatura supera un umbral definido.',
    tags: ['ESP32', 'IoT', 'C++', 'Hardware'],
    category: 'Hardware / IoT',
    color: '#00FFFF',
    icon: '🌡️',
    highlights: [
      'Medición en tiempo real de temperatura y humedad',
      'Visualización de datos en pantalla LCD',
      'Registro automático en tarjeta SD',
    ],
    buttons: [
      { label: 'Ver código', link: 'https://github.com/Yulian64/iot-monitoreo-ambiental.git' },
      { label: 'Ver Imágenes', type: 'gallery' }
    ],
    images: [
      '/images/monitor/iot.jpg',
      '/images/monitor/iot2.jpg',
      '/images/monitor/iot3.jpg',
      '/images/monitor/iot4.jpg',
    ]
  }
]

export const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
]
