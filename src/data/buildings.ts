
import { BuildingType } from '@/types/campus';

export const mockBuildings: BuildingType[] = [
  {
    id: 1,
    name: 'Facultad de Ciencias',
    type: 'faculty',
    description: 'Alberga programas como Agronomía, Biotecnología, Ingeniería Forestal y Medicina Veterinaria.',
    location: 'Campus Huechuraba',
    position: { x: 30, y: 25 },
    image: '/placeholder.svg',
    contact: {
      name: 'Contacto Facultad de Ciencias',
      email: 'facultad.ciencias@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    departments: [
      { name: 'Agronomía', description: 'Carrera de Agronomía', floor: 1 },
      { name: 'Biotecnología', description: 'Carrera de Biotecnología', floor: 2 },
      { name: 'Medicina Veterinaria', description: 'Carrera de Medicina Veterinaria', floor: 3 }
    ],
    schedule: {
      'Lunes a Viernes': '8:00 - 18:00',
      'Sábados': '9:00 - 13:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 2,
    name: 'Facultad de Humanidades',
    type: 'faculty',
    description: 'Facultad que incluye carreras como Psicología, Sociología y Trabajo Social.',
    location: 'Campus Manuel Montt',
    position: { x: 60, y: 30 },
    image: '/placeholder.svg',
    contact: {
      name: 'Contacto Facultad de Humanidades',
      email: 'facultad.humanidades@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    departments: [
      { name: 'Psicología', description: 'Carrera de Psicología', floor: 1 },
      { name: 'Sociología', description: 'Carrera de Sociología', floor: 2 },
      { name: 'Trabajo Social', description: 'Carrera de Trabajo Social', floor: 2 }
    ],
    schedule: {
      'Lunes a Viernes': '8:00 - 20:00',
      'Sábados': '9:00 - 13:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 3,
    name: 'Biblioteca Central',
    type: 'library',
    description: 'Biblioteca principal del Campus Manuel Montt con amplia colección de recursos bibliográficos.',
    location: 'Campus Manuel Montt',
    position: { x: 45, y: 45 },
    image: '/placeholder.svg',
    contact: {
      name: 'Director de Biblioteca',
      email: 'biblioteca@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    schedule: {
      'Lunes a Viernes': '8:00 - 21:00',
      'Sábados': '9:00 - 13:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 4,
    name: 'Rectoría',
    type: 'admin',
    description: 'Oficinas administrativas principales y rectoría de la Universidad Mayor.',
    location: 'Campus Manuel Montt',
    position: { x: 50, y: 15 },
    image: '/placeholder.svg',
    contact: {
      name: 'Rectoría Universidad Mayor',
      email: 'rectoria@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    schedule: {
      'Lunes a Viernes': '9:00 - 18:00',
      'Sábados y Domingos': 'Cerrado'
    }
  },
  {
    id: 5,
    name: 'Cafetería Central',
    type: 'cafeteria',
    description: 'Principal espacio para servicios de alimentación del Campus Manuel Montt.',
    location: 'Campus Manuel Montt',
    position: { x: 45, y: 65 },
    image: '/placeholder.svg',
    schedule: {
      'Lunes a Viernes': '8:00 - 20:00',
      'Sábados': '9:00 - 14:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 6,
    name: 'Facultad de Ciencias de la Salud',
    type: 'faculty',
    description: 'Alberga carreras como Enfermería, Kinesiología, Nutrición y Dietética, Obstetricia, entre otras.',
    location: 'Campus Manuel Montt',
    position: { x: 20, y: 55 },
    image: '/placeholder.svg',
    contact: {
      name: 'Contacto Facultad de Ciencias de la Salud',
      email: 'facultad.salud@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    departments: [
      { name: 'Enfermería', description: 'Carrera de Enfermería', floor: 1 },
      { name: 'Kinesiología', description: 'Carrera de Kinesiología', floor: 2 },
      { name: 'Nutrición y Dietética', description: 'Carrera de Nutrición y Dietética', floor: 3 }
    ],
    schedule: {
      'Lunes a Viernes': '8:00 - 20:00',
      'Sábados': '9:00 - 13:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 7,
    name: 'Facultad de Artes',
    type: 'faculty',
    description: 'Facultad que alberga carreras como Arquitectura, Diseño, Artes Visuales y más.',
    location: 'Campus El Claustro',
    position: { x: 75, y: 70 },
    image: '/placeholder.svg',
    contact: {
      name: 'Contacto Facultad de Artes',
      email: 'facultad.artes@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    departments: [
      { name: 'Arquitectura', description: 'Carrera de Arquitectura', floor: 1 },
      { name: 'Diseño', description: 'Carrera de Diseño', floor: 2 },
      { name: 'Artes Visuales', description: 'Carrera de Artes Visuales', floor: 2 }
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
    location: 'Campus Huechuraba',
    position: { x: 65, y: 40 },
    image: '/placeholder.svg',
    schedule: {
      'Lunes a Viernes': '8:00 - 20:00',
      'Sábados': '9:00 - 13:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 9,
    name: 'Dirección de Asuntos Estudiantiles (DAE)',
    type: 'admin',
    description: 'Oficinas administrativas para trámites y servicios estudiantiles.',
    location: 'Campus Manuel Montt',
    position: { x: 55, y: 20 },
    image: '/placeholder.svg',
    schedule: {
      'Lunes a Viernes': '9:00 - 18:00',
      'Sábados y Domingos': 'Cerrado'
    }
  },
  {
    id: 10,
    name: 'Cafetería Huechuraba',
    type: 'cafeteria',
    description: 'Servicio de alimentación ubicado en el Campus Huechuraba.',
    location: 'Campus Huechuraba',
    position: { x: 35, y: 30 },
    image: '/placeholder.svg',
    schedule: {
      'Lunes a Viernes': '8:00 - 19:00',
      'Sábados': '9:00 - 13:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 11,
    name: 'Facultad de Educación',
    type: 'faculty',
    description: 'Facultad dedicada a la formación de profesionales en el ámbito educativo.',
    location: 'Campus Manuel Montt',
    position: { x: 40, y: 35 },
    image: '/placeholder.svg',
    contact: {
      name: 'Contacto Facultad de Educación',
      email: 'facultad.educacion@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    departments: [
      { name: 'Pedagogía en Educación Básica', description: 'Carrera de Pedagogía', floor: 1 },
      { name: 'Educación Parvularia', description: 'Carrera de Educación Parvularia', floor: 2 },
      { name: 'Psicopedagogía', description: 'Carrera de Psicopedagogía', floor: 3 }
    ],
    schedule: {
      'Lunes a Viernes': '8:00 - 20:00',
      'Sábados': '9:00 - 13:00',
      'Domingos': 'Cerrado'
    }
  },
  {
    id: 12,
    name: 'Facultad de Negocios',
    type: 'faculty',
    description: 'Facultad que alberga carreras como Ingeniería Comercial, Contador Auditor y más.',
    location: 'Campus Manuel Montt',
    position: { x: 70, y: 50 },
    image: '/placeholder.svg',
    contact: {
      name: 'Contacto Facultad de Negocios',
      email: 'facultad.negocios@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    departments: [
      { name: 'Ingeniería Comercial', description: 'Carrera de Ingeniería Comercial', floor: 1 },
      { name: 'Contador Auditor', description: 'Carrera de Contador Auditor', floor: 2 },
      { name: 'Administración Pública', description: 'Carrera de Administración Pública', floor: 3 }
    ],
    schedule: {
      'Lunes a Viernes': '8:00 - 20:00',
      'Sábados': '9:00 - 13:00',
      'Domingos': 'Cerrado'
    }
  }
];
