
export interface Position {
  x: number;
  y: number;
}

export interface Contact {
  name: string;
  email?: string;
  phone?: string;
}

export interface Department {
  name: string;
  description?: string;
  floor?: number;
}

export interface Career {
  id: number;
  name: string;
  description: string;
  duration: string;
  faculty: string;
  degree: string;
  campus: string[];
  coordinator?: Contact;
  studyPlan?: string;
  admissionProfile?: string;
  graduateProfile?: string;
  employmentOpportunities?: string[];
  accredited?: boolean;
  accreditationYears?: number;
}

export interface Faculty {
  id: number;
  name: string;
  description: string;
  dean: Contact;
  campus: string[];
  careers: number[]; // IDs of careers that belong to this faculty
}

export interface Campus {
  id: number;
  name: string;
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  faculties: number[]; // IDs of faculties in this campus
  description: string;
  mainPhone?: string;
  image?: string;
}

export interface BuildingType {
  id: number;
  name: string;
  type: 'faculty' | 'admin' | 'library' | 'cafeteria' | 'other';
  description: string;
  location: string;
  position: Position;
  image?: string;
  contact?: Contact;
  departments?: Department[];
  schedule?: Record<string, string>;
  facultyId?: number; // Reference to the faculty if it's a faculty building
}
