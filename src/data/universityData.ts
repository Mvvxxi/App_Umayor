
import { Career, Faculty, Campus } from '@/types/campus';

// Real campuses of Universidad Mayor
export const campuses: Campus[] = [
  {
    id: 1,
    name: 'Campus Manuel Montt',
    address: 'Manuel Montt 367',
    city: 'Providencia, Santiago',
    coordinates: {
      lat: -33.4185,
      lng: -70.6035
    },
    faculties: [1, 2, 3, 4, 7],
    description: 'Campus principal de la Universidad Mayor ubicado en Providencia. Alberga la mayoría de las facultades y carreras.',
    mainPhone: '(56) 22 518 9000',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Campus Huechuraba',
    address: 'Camino La Pirámide 5750',
    city: 'Huechuraba, Santiago',
    coordinates: {
      lat: -33.3696,
      lng: -70.6800
    },
    faculties: [5, 6],
    description: 'Campus enfocado en ciencias naturales y ciencias de la tierra que cuenta con amplios espacios verdes y laboratorios especializados.',
    mainPhone: '(56) 22 518 9000',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Campus El Claustro',
    address: 'Av. Portugal 351',
    city: 'Santiago Centro',
    coordinates: {
      lat: -33.4358,
      lng: -70.5914
    },
    faculties: [8],
    description: 'Campus dedicado principalmente a las carreras de artes, arquitectura y diseño.',
    mainPhone: '(56) 22 518 9000',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'Campus Temuco',
    address: 'Avenida Alemania 0281',
    city: 'Temuco',
    coordinates: {
      lat: -38.7359,
      lng: -72.6009
    },
    faculties: [9],
    description: 'Campus regional que ofrece diversas carreras adaptadas a las necesidades de la región de La Araucanía.',
    mainPhone: '(56) 45 220 6000',
    image: '/placeholder.svg'
  }
];

// Real faculties of Universidad Mayor
export const faculties: Faculty[] = [
  {
    id: 1,
    name: 'Facultad de Humanidades',
    description: 'Facultad dedicada a las ciencias sociales y humanidades, formando profesionales en áreas como psicología, sociología y trabajo social.',
    dean: {
      name: 'Dr. Carlos Álvarez',
      email: 'decanato.humanidades@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    campus: ['Campus Manuel Montt'],
    careers: [1, 2, 3, 4]
  },
  {
    id: 2,
    name: 'Facultad de Educación',
    description: 'Facultad dedicada a la formación de docentes y profesionales de la educación.',
    dean: {
      name: 'Dra. María Elena Valdebenito',
      email: 'decanato.educacion@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    campus: ['Campus Manuel Montt'],
    careers: [5, 6, 7, 8, 9]
  },
  {
    id: 3,
    name: 'Facultad de Ciencias de la Salud',
    description: 'Facultad que forma profesionales en diversas áreas de la salud, desde enfermería hasta medicina.',
    dean: {
      name: 'Dr. Gabriel Oviedo',
      email: 'decanato.salud@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    campus: ['Campus Manuel Montt'],
    careers: [10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: 4,
    name: 'Facultad de Negocios',
    description: 'Facultad enfocada en la formación de profesionales en el ámbito de los negocios, administración y economía.',
    dean: {
      name: 'Dr. Jorge Friedman',
      email: 'decanato.negocios@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    campus: ['Campus Manuel Montt'],
    careers: [17, 18, 19, 20]
  },
  {
    id: 5,
    name: 'Facultad de Ciencias',
    description: 'Facultad dedicada a la formación de profesionales en ciencias naturales, agronomía y medicina veterinaria.',
    dean: {
      name: 'Dra. Elena Valdés',
      email: 'decanato.ciencias@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    campus: ['Campus Huechuraba'],
    careers: [21, 22, 23, 24, 25]
  },
  {
    id: 6,
    name: 'Facultad de Ingeniería',
    description: 'Facultad que forma ingenieros en diversas especialidades, desde ingeniería civil hasta ingeniería forestal.',
    dean: {
      name: 'Dr. Ricardo Morgado',
      email: 'decanato.ingenieria@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    campus: ['Campus Huechuraba', 'Campus Manuel Montt'],
    careers: [26, 27, 28, 29, 30, 31]
  },
  {
    id: 7,
    name: 'Facultad de Derecho',
    description: 'Facultad dedicada a la formación de abogados y especialistas en ciencias jurídicas.',
    dean: {
      name: 'Dr. Claudio Moraga',
      email: 'decanato.derecho@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    campus: ['Campus Manuel Montt'],
    careers: [32]
  },
  {
    id: 8,
    name: 'Facultad de Artes',
    description: 'Facultad enfocada en las artes, el diseño, la arquitectura y la comunicación audiovisual.',
    dean: {
      name: 'Dra. Paola Ruz',
      email: 'decanato.artes@umayor.cl',
      phone: '(56) 22 518 9000'
    },
    campus: ['Campus El Claustro'],
    careers: [33, 34, 35, 36, 37, 38]
  },
  {
    id: 9,
    name: 'Facultad de Ciencias - Sede Temuco',
    description: 'Facultad regional que ofrece carreras adaptadas a las necesidades de la región de La Araucanía.',
    dean: {
      name: 'Dr. Fernando Peña',
      email: 'decanato.ciencias.temuco@umayor.cl',
      phone: '(56) 45 220 6000'
    },
    campus: ['Campus Temuco'],
    careers: [39, 40, 41, 42]
  }
];

// Real careers of Universidad Mayor
export const careers: Career[] = [
  // Facultad de Humanidades
  {
    id: 1,
    name: 'Psicología',
    description: 'Carrera que forma profesionales capacitados para comprender, evaluar e intervenir en los procesos psicológicos de las personas.',
    duration: '5 años',
    faculty: 'Facultad de Humanidades',
    degree: 'Psicólogo/a',
    campus: ['Campus Manuel Montt'],
    coordinator: {
      name: 'Dr. Roberto Fernández',
      email: 'psicologia@umayor.cl'
    },
    employmentOpportunities: [
      'Clínica y salud mental',
      'Educación',
      'Organizaciones',
      'Investigación',
      'Intervención social'
    ],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 2,
    name: 'Trabajo Social',
    description: 'Forma profesionales comprometidos con la justicia social y la promoción de los derechos humanos.',
    duration: '5 años',
    faculty: 'Facultad de Humanidades',
    degree: 'Trabajador/a Social',
    campus: ['Campus Manuel Montt'],
    employmentOpportunities: [
      'Servicios públicos',
      'ONGs',
      'Municipalidades',
      'Empresas privadas',
      'Organismos internacionales'
    ]
  },
  {
    id: 3,
    name: 'Sociología',
    description: 'Carrera que estudia los fenómenos sociales y culturales producto de la interacción humana.',
    duration: '5 años',
    faculty: 'Facultad de Humanidades',
    degree: 'Sociólogo/a',
    campus: ['Campus Manuel Montt'],
    employmentOpportunities: [
      'Investigación social',
      'Políticas públicas',
      'Consultoría',
      'Docencia',
      'Organismos internacionales'
    ]
  },
  {
    id: 4,
    name: 'Traducción e Interpretación',
    description: 'Forma profesionales competentes en la mediación lingüística y cultural entre idiomas.',
    duration: '4 años',
    faculty: 'Facultad de Humanidades',
    degree: 'Traductor/a Intérprete',
    campus: ['Campus Manuel Montt'],
    employmentOpportunities: [
      'Traducción editorial',
      'Interpretación de conferencias',
      'Localización de software',
      'Organismos internacionales',
      'Traducción audiovisual'
    ]
  },

  // Facultad de Educación
  {
    id: 5,
    name: 'Pedagogía en Educación Parvularia',
    description: 'Forma profesionales para la educación inicial de niños y niñas.',
    duration: '4 años',
    faculty: 'Facultad de Educación',
    degree: 'Educador/a de Párvulos',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 4
  },
  {
    id: 6,
    name: 'Pedagogía en Educación Básica',
    description: 'Prepara profesores para enseñar en la educación primaria.',
    duration: '4 años',
    faculty: 'Facultad de Educación',
    degree: 'Profesor/a de Educación Básica',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 7,
    name: 'Pedagogía en Inglés',
    description: 'Forma docentes especializados en la enseñanza del idioma inglés.',
    duration: '4 años',
    faculty: 'Facultad de Educación',
    degree: 'Profesor/a de Inglés',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 8,
    name: 'Pedagogía en Educación Física',
    description: 'Prepara profesores para la enseñanza de actividades físicas y deportivas.',
    duration: '4 años',
    faculty: 'Facultad de Educación',
    degree: 'Profesor/a de Educación Física',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 4
  },
  {
    id: 9,
    name: 'Psicopedagogía',
    description: 'Forma profesionales para la atención de personas con dificultades de aprendizaje.',
    duration: '4 años',
    faculty: 'Facultad de Educación',
    degree: 'Psicopedagogo/a',
    campus: ['Campus Manuel Montt']
  },

  // Facultad de Ciencias de la Salud
  {
    id: 10,
    name: 'Medicina',
    description: 'Forma médicos integrales con sólida formación científica y humanista.',
    duration: '7 años',
    faculty: 'Facultad de Ciencias de la Salud',
    degree: 'Médico/a Cirujano/a',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 6
  },
  {
    id: 11,
    name: 'Enfermería',
    description: 'Prepara profesionales para el cuidado integral de personas, familias y comunidades.',
    duration: '5 años',
    faculty: 'Facultad de Ciencias de la Salud',
    degree: 'Enfermero/a',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 6
  },
  {
    id: 12,
    name: 'Kinesiología',
    description: 'Forma profesionales para la rehabilitación física y prevención de lesiones.',
    duration: '5 años',
    faculty: 'Facultad de Ciencias de la Salud',
    degree: 'Kinesiólogo/a',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 13,
    name: 'Nutrición y Dietética',
    description: 'Prepara profesionales para la promoción de la alimentación saludable.',
    duration: '5 años',
    faculty: 'Facultad de Ciencias de la Salud',
    degree: 'Nutricionista',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 14,
    name: 'Odontología',
    description: 'Forma cirujanos dentistas para la prevención y tratamiento de enfermedades bucodentales.',
    duration: '6 años',
    faculty: 'Facultad de Ciencias de la Salud',
    degree: 'Cirujano/a Dentista',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 15,
    name: 'Fonoaudiología',
    description: 'Prepara especialistas para la prevención y tratamiento de trastornos de la comunicación.',
    duration: '5 años',
    faculty: 'Facultad de Ciencias de la Salud',
    degree: 'Fonoaudiólogo/a',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 4
  },
  {
    id: 16,
    name: 'Obstetricia y Puericultura',
    description: 'Forma matronas y matrones para la atención integral de la mujer, el recién nacido y la familia.',
    duration: '5 años',
    faculty: 'Facultad de Ciencias de la Salud',
    degree: 'Matrón/a',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 5
  },

  // Facultad de Negocios
  {
    id: 17,
    name: 'Ingeniería Comercial',
    description: 'Prepara profesionales para la gestión y dirección de empresas.',
    duration: '5 años',
    faculty: 'Facultad de Negocios',
    degree: 'Ingeniero/a Comercial',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 4
  },
  {
    id: 18,
    name: 'Contador Auditor',
    description: 'Forma profesionales especializados en contabilidad y auditoría de empresas.',
    duration: '4 años',
    faculty: 'Facultad de Negocios',
    degree: 'Contador/a Auditor/a',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 4
  },
  {
    id: 19,
    name: 'Administración Pública',
    description: 'Prepara profesionales para la gestión de organismos estatales y públicos.',
    duration: '5 años',
    faculty: 'Facultad de Negocios',
    degree: 'Administrador/a Público/a',
    campus: ['Campus Manuel Montt']
  },
  {
    id: 20,
    name: 'Ingeniería en Administración',
    description: 'Forma profesionales para administrar recursos y procesos empresariales.',
    duration: '4 años',
    faculty: 'Facultad de Negocios',
    degree: 'Ingeniero/a en Administración',
    campus: ['Campus Manuel Montt']
  },

  // Facultad de Ciencias
  {
    id: 21,
    name: 'Agronomía',
    description: 'Forma profesionales para la gestión sostenible de recursos agrícolas.',
    duration: '5 años',
    faculty: 'Facultad de Ciencias',
    degree: 'Ingeniero/a Agrónomo/a',
    campus: ['Campus Huechuraba'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 22,
    name: 'Medicina Veterinaria',
    description: 'Prepara médicos veterinarios para el cuidado y salud animal.',
    duration: '6 años',
    faculty: 'Facultad de Ciencias',
    degree: 'Médico/a Veterinario/a',
    campus: ['Campus Huechuraba'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 23,
    name: 'Biotecnología',
    description: 'Forma profesionales en el desarrollo y aplicación de tecnologías basadas en sistemas biológicos.',
    duration: '5 años',
    faculty: 'Facultad de Ciencias',
    degree: 'Biotecnólogo/a',
    campus: ['Campus Huechuraba']
  },
  {
    id: 24,
    name: 'Geología',
    description: 'Prepara profesionales para el estudio de la Tierra, sus materiales y procesos.',
    duration: '5 años',
    faculty: 'Facultad de Ciencias',
    degree: 'Geólogo/a',
    campus: ['Campus Huechuraba']
  },
  {
    id: 25,
    name: 'Ingeniería Forestal',
    description: 'Forma profesionales para la gestión sostenible de recursos forestales.',
    duration: '5 años',
    faculty: 'Facultad de Ciencias',
    degree: 'Ingeniero/a Forestal',
    campus: ['Campus Huechuraba'],
    accredited: true,
    accreditationYears: 4
  },

  // Facultad de Ingeniería
  {
    id: 26,
    name: 'Ingeniería Civil',
    description: 'Forma profesionales para el diseño, construcción y gestión de obras civiles.',
    duration: '6 años',
    faculty: 'Facultad de Ingeniería',
    degree: 'Ingeniero/a Civil',
    campus: ['Campus Huechuraba'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 27,
    name: 'Ingeniería Civil Industrial',
    description: 'Prepara profesionales para optimizar sistemas productivos y de servicios.',
    duration: '5.5 años',
    faculty: 'Facultad de Ingeniería',
    degree: 'Ingeniero/a Civil Industrial',
    campus: ['Campus Huechuraba', 'Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 28,
    name: 'Ingeniería Civil en Computación e Informática',
    description: 'Forma ingenieros especializados en tecnologías de la información y comunicación.',
    duration: '5.5 años',
    faculty: 'Facultad de Ingeniería',
    degree: 'Ingeniero/a Civil en Computación e Informática',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 4
  },
  {
    id: 29,
    name: 'Ingeniería en Construcción',
    description: 'Prepara profesionales para la dirección y gestión de obras de construcción.',
    duration: '5 años',
    faculty: 'Facultad de Ingeniería',
    degree: 'Ingeniero/a Constructor/a',
    campus: ['Campus Huechuraba'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 30,
    name: 'Ingeniería Civil Ambiental',
    description: 'Forma profesionales para prevenir y solucionar problemas ambientales.',
    duration: '5.5 años',
    faculty: 'Facultad de Ingeniería',
    degree: 'Ingeniero/a Civil Ambiental',
    campus: ['Campus Huechuraba']
  },
  {
    id: 31,
    name: 'Ingeniería Civil Eléctrica',
    description: 'Prepara ingenieros para sistemas eléctricos de potencia y electrónicos.',
    duration: '5.5 años',
    faculty: 'Facultad de Ingeniería',
    degree: 'Ingeniero/a Civil Eléctrico/a',
    campus: ['Campus Huechuraba']
  },

  // Facultad de Derecho
  {
    id: 32,
    name: 'Derecho',
    description: 'Forma abogados con sólida formación en ciencias jurídicas y compromiso ético.',
    duration: '5 años',
    faculty: 'Facultad de Derecho',
    degree: 'Abogado/a',
    campus: ['Campus Manuel Montt'],
    accredited: true,
    accreditationYears: 5
  },

  // Facultad de Artes
  {
    id: 33,
    name: 'Arquitectura',
    description: 'Forma profesionales para el diseño y planificación de espacios habitables.',
    duration: '5.5 años',
    faculty: 'Facultad de Artes',
    degree: 'Arquitecto/a',
    campus: ['Campus El Claustro'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 34,
    name: 'Diseño',
    description: 'Prepara profesionales del diseño visual y gráfico con enfoque innovador.',
    duration: '4 años',
    faculty: 'Facultad de Artes',
    degree: 'Diseñador/a',
    campus: ['Campus El Claustro'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 35,
    name: 'Cine',
    description: 'Forma profesionales para la creación cinematográfica y audiovisual.',
    duration: '4 años',
    faculty: 'Facultad de Artes',
    degree: 'Realizador/a Cinematográfico/a',
    campus: ['Campus El Claustro']
  },
  {
    id: 36,
    name: 'Artes Visuales',
    description: 'Prepara artistas visuales con formación técnica y conceptual.',
    duration: '4 años',
    faculty: 'Facultad de Artes',
    degree: 'Licenciado/a en Artes Visuales',
    campus: ['Campus El Claustro']
  },
  {
    id: 37,
    name: 'Comunicación Multimedia',
    description: 'Forma profesionales para la comunicación en entornos digitales.',
    duration: '4 años',
    faculty: 'Facultad de Artes',
    degree: 'Comunicador/a Multimedia',
    campus: ['Campus El Claustro']
  },
  {
    id: 38,
    name: 'Animación Digital',
    description: 'Prepara animadores digitales para la industria audiovisual y del entretenimiento.',
    duration: '4 años',
    faculty: 'Facultad de Artes',
    degree: 'Animador/a Digital',
    campus: ['Campus El Claustro']
  },

  // Facultad de Ciencias - Sede Temuco
  {
    id: 39,
    name: 'Agronomía (Temuco)',
    description: 'Forma profesionales para la gestión sostenible de recursos agrícolas en la región.',
    duration: '5 años',
    faculty: 'Facultad de Ciencias - Sede Temuco',
    degree: 'Ingeniero/a Agrónomo/a',
    campus: ['Campus Temuco'],
    accredited: true,
    accreditationYears: 4
  },
  {
    id: 40,
    name: 'Medicina Veterinaria (Temuco)',
    description: 'Prepara médicos veterinarios adaptados a las necesidades regionales.',
    duration: '6 años',
    faculty: 'Facultad de Ciencias - Sede Temuco',
    degree: 'Médico/a Veterinario/a',
    campus: ['Campus Temuco'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 41,
    name: 'Enfermería (Temuco)',
    description: 'Forma profesionales de enfermería con enfoque en la salud regional.',
    duration: '5 años',
    faculty: 'Facultad de Ciencias - Sede Temuco',
    degree: 'Enfermero/a',
    campus: ['Campus Temuco'],
    accredited: true,
    accreditationYears: 5
  },
  {
    id: 42,
    name: 'Ingeniería Civil Industrial (Temuco)',
    description: 'Prepara ingenieros industriales para optimizar procesos en la región sur.',
    duration: '5.5 años',
    faculty: 'Facultad de Ciencias - Sede Temuco',
    degree: 'Ingeniero/a Civil Industrial',
    campus: ['Campus Temuco'],
    accredited: true,
    accreditationYears: 4
  }
];

// Helper function to get careers by faculty ID
export const getCareersByFacultyId = (facultyId: number): Career[] => {
  const faculty = faculties.find(f => f.id === facultyId);
  if (!faculty) return [];
  
  return careers.filter(career => faculty.careers.includes(career.id));
};

// Helper function to get careers by campus name
export const getCareersByCampus = (campusName: string): Career[] => {
  return careers.filter(career => career.campus.includes(campusName));
};

// Helper function to get faculties by campus ID
export const getFacultiesByCampusId = (campusId: number): Faculty[] => {
  const campus = campuses.find(c => c.id === campusId);
  if (!campus) return [];
  
  return faculties.filter(faculty => campus.faculties.includes(faculty.id));
};
