
import { BuildingType } from '@/types/campus';

export const mockBuildings: BuildingType[] = [
  {
    id: 1,
    name: 'Facultad de Ingeniería',
    type: 'faculty',
    description: 'Edificio principal de la Facultad de Ingeniería, alberga aulas, laboratorios y oficinas administrativas.',
    location: 'Zona Norte del Campus',
    position: { x: 30, y: 25 },
    image: '/placeholder.svg',
    contact: {
      name: 'Dr. Juan Pérez',
      email: 'ingenieria@universidad.edu',
      phone: '(01) 234-5678'
    },
    departments: [
      { name: 'Ingeniería Civil', description: 'Departamento de Ingeniería Civil y Construcción', floor: 1 },
      { name: 'Ingeniería Mecánica', description: 'Departamento de Ingeniería Mecánica', floor: 2 },
      { name: 'Ingeniería Eléctrica', description: 'Departamento de Ingeniería Eléctrica y Electrónica', floor: 3 }
    ],
    schedule: {
      'Lunes a Viernes': '7:00 - 21:00',
      'Sábados': '8:00 - 14:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 2,
    name: 'Facultad de Ciencias',
    type: 'faculty',
    description: 'Centro de investigación y enseñanza de las ciencias exactas y naturales.',
    location: 'Zona Este del Campus',
    position: { x: 60, y: 30 },
    image: '/placeholder.svg',
    contact: {
      name: 'Dra. Laura Martínez',
      email: 'ciencias@universidad.edu',
      phone: '(01) 234-5679'
    },
    departments: [
      { name: 'Física', description: 'Departamento de Física', floor: 1 },
      { name: 'Química', description: 'Departamento de Química', floor: 2 },
      { name: 'Matemáticas', description: 'Departamento de Matemáticas', floor: 3 }
    ],
    schedule: {
      'Lunes a Viernes': '7:00 - 20:00',
      'Sábados': '8:00 - 13:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 3,
    name: 'Biblioteca Central',
    type: 'library',
    description: 'Principal centro de recursos bibliográficos y de investigación de la universidad.',
    location: 'Centro del Campus',
    position: { x: 45, y: 45 },
    image: '/placeholder.svg',
    contact: {
      name: 'Lic. Carmen Rodríguez',
      email: 'biblioteca@universidad.edu',
      phone: '(01) 234-5680'
    },
    schedule: {
      'Lunes a Viernes': '8:00 - 22:00',
      'Sábados': '9:00 - 18:00',
      'Domingos': '10:00 - 16:00'
    }
  },
  {
    id: 4,
    name: 'Rectoría',
    type: 'admin',
    description: 'Edificio administrativo principal donde se encuentran las oficinas del rector y directivos.',
    location: 'Entrada Principal del Campus',
    position: { x: 50, y: 15 },
    image: '/placeholder.svg',
    contact: {
      name: 'Dr. Roberto Sánchez',
      email: 'rectoria@universidad.edu',
      phone: '(01) 234-5681'
    },
    schedule: {
      'Lunes a Viernes': '9:00 - 17:00',
      'Sábados y Domingos': 'Cerrado'
    }
  },
  {
    id: 5,
    name: 'Cafetería Central',
    type: 'cafeteria',
    description: 'Principal espacio para servicios de alimentación dentro del campus.',
    location: 'Centro-Sur del Campus',
    position: { x: 45, y: 65 },
    image: '/placeholder.svg',
    schedule: {
      'Lunes a Viernes': '7:00 - 20:00',
      'Sábados': '8:00 - 15:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 6,
    name: 'Facultad de Medicina',
    type: 'faculty',
    description: 'Complejo dedicado a la enseñanza e investigación médica.',
    location: 'Zona Oeste del Campus',
    position: { x: 20, y: 55 },
    image: '/placeholder.svg',
    contact: {
      name: 'Dr. Miguel Álvarez',
      email: 'medicina@universidad.edu',
      phone: '(01) 234-5682'
    },
    departments: [
      { name: 'Anatomía', description: 'Departamento de Anatomía', floor: 1 },
      { name: 'Fisiología', description: 'Departamento de Fisiología', floor: 2 },
      { name: 'Patología', description: 'Departamento de Patología', floor: 3 }
    ],
    schedule: {
      'Lunes a Viernes': '7:00 - 21:00',
      'Sábados': '8:00 - 14:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 7,
    name: 'Facultad de Humanidades',
    type: 'faculty',
    description: 'Centro de estudios humanísticos y ciencias sociales.',
    location: 'Zona Sur del Campus',
    position: { x: 75, y: 70 },
    image: '/placeholder.svg',
    contact: {
      name: 'Dra. Patricia López',
      email: 'humanidades@universidad.edu',
      phone: '(01) 234-5683'
    },
    departments: [
      { name: 'Historia', description: 'Departamento de Historia', floor: 1 },
      { name: 'Filosofía', description: 'Departamento de Filosofía', floor: 2 },
      { name: 'Literatura', description: 'Departamento de Literatura', floor: 2 }
    ],
    schedule: {
      'Lunes a Viernes': '8:00 - 20:00',
      'Sábados': '9:00 - 13:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 8,
    name: 'Biblioteca de Ciencias',
    type: 'library',
    description: 'Biblioteca especializada en recursos científicos y tecnológicos.',
    location: 'Cerca de la Facultad de Ciencias',
    position: { x: 65, y: 40 },
    image: '/placeholder.svg',
    schedule: {
      'Lunes a Viernes': '8:00 - 20:00',
      'Sábados': '9:00 - 14:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 9,
    name: 'Servicios Escolares',
    type: 'admin',
    description: 'Oficinas administrativas para trámites académicos y escolares.',
    location: 'Cerca de la Rectoría',
    position: { x: 55, y: 20 },
    image: '/placeholder.svg',
    schedule: {
      'Lunes a Viernes': '9:00 - 17:00',
      'Sábados y Domingos': 'Cerrado'
    }
  },
  {
    id: 10,
    name: 'Cafetería de Ingeniería',
    type: 'cafeteria',
    description: 'Servicio de alimentación cercano a la Facultad de Ingeniería.',
    location: 'Junto a la Facultad de Ingeniería',
    position: { x: 35, y: 30 },
    image: '/placeholder.svg',
    schedule: {
      'Lunes a Viernes': '7:30 - 19:00',
      'Sábados': '8:00 - 13:00',
      'Domingos': 'Cerrado'
    }
  }
];
