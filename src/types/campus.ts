
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
}
