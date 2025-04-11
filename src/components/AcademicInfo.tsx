
import React, { useState } from 'react';
import { Search, School, MapPin, BookOpen, GraduationCap } from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { 
  faculties, 
  careers, 
  campuses, 
  getCareersByFacultyId, 
  getCareersByCampus 
} from '@/data/universityData';

const AcademicInfo: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCampus, setSelectedCampus] = useState<string>('');
  const [selectedFaculty, setSelectedFaculty] = useState<number | null>(null);

  // Filter careers based on search, campus and faculty
  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCampus = selectedCampus ? career.campus.includes(selectedCampus) : true;
    
    const matchesFaculty = selectedFaculty 
      ? faculties.find(f => f.id === selectedFaculty)?.careers.includes(career.id)
      : true;
    
    return matchesSearch && matchesCampus && matchesFaculty;
  });

  return (
    <div className="flex flex-col h-full overflow-hidden bg-gray-50">
      <div className="bg-white p-4 shadow-md">
        <h1 className="text-2xl font-bold mb-4">Oferta Académica</h1>
        
        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Buscar carrera..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Select
              value={selectedCampus}
              onValueChange={(value) => setSelectedCampus(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por Campus" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos los Campus</SelectItem>
                {campuses.map(campus => (
                  <SelectItem key={campus.id} value={campus.name}>
                    {campus.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select
              value={selectedFaculty?.toString() || ''}
              onValueChange={(value) => setSelectedFaculty(value ? parseInt(value) : null)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por Facultad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas las Facultades</SelectItem>
                {faculties.map(faculty => (
                  <SelectItem key={faculty.id} value={faculty.id.toString()}>
                    {faculty.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="careers" className="flex-1 overflow-hidden">
        <TabsList className="w-full grid grid-cols-3 h-14 rounded-none">
          <TabsTrigger value="careers" className="data-[state=active]:bg-campus-blue data-[state=active]:text-white">
            <GraduationCap className="mr-2 h-4 w-4" />
            Carreras
          </TabsTrigger>
          <TabsTrigger value="faculties" className="data-[state=active]:bg-campus-red data-[state=active]:text-white">
            <School className="mr-2 h-4 w-4" />
            Facultades
          </TabsTrigger>
          <TabsTrigger value="campuses" className="data-[state=active]:bg-campus-green data-[state=active]:text-white">
            <MapPin className="mr-2 h-4 w-4" />
            Campus
          </TabsTrigger>
        </TabsList>
        
        <div className="overflow-y-auto h-full pb-20">
          <TabsContent value="careers" className="mt-0 p-4 space-y-4">
            {filteredCareers.length > 0 ? (
              filteredCareers.map(career => (
                <Card key={career.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{career.name}</CardTitle>
                        <CardDescription className="mt-1">{career.faculty}</CardDescription>
                      </div>
                      <Badge variant={career.accredited ? "success" : "outline"}>
                        {career.accredited ? `Acreditada ${career.accreditationYears} años` : "No Acreditada"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-gray-600">{career.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {career.campus.map(campus => (
                        <Badge key={campus} variant="outline" className="bg-gray-100">
                          {campus}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between text-xs text-gray-500 pt-0">
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-3 w-3" />
                      Duración: {career.duration}
                    </div>
                    <div>Título: {career.degree}</div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                <GraduationCap className="h-16 w-16 mb-4" />
                <p className="text-lg font-medium">No se encontraron carreras</p>
                <p className="text-sm">Intenta ajustar los filtros de búsqueda</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="faculties" className="mt-0 p-4 space-y-4">
            {faculties.map(faculty => (
              <Card key={faculty.id}>
                <CardHeader>
                  <CardTitle>{faculty.name}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {faculty.campus.join(', ')}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{faculty.description}</p>
                  
                  <div className="mt-4">
                    <p className="font-medium text-sm mb-2">Carreras ({faculty.careers.length}):</p>
                    <div className="flex flex-wrap gap-1">
                      {getCareersByFacultyId(faculty.id).map(career => (
                        <Badge key={career.id} variant="outline" className="bg-gray-100">
                          {career.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-gray-500">
                    <strong>Decano:</strong> {faculty.dean.name}<br />
                    <strong>Contacto:</strong> {faculty.dean.email}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="campuses" className="mt-0 p-4 space-y-4">
            {campuses.map(campus => (
              <Card key={campus.id}>
                <CardHeader>
                  <CardTitle>{campus.name}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {campus.address}, {campus.city}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{campus.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="font-medium text-sm mb-2">Facultades:</p>
                      <div className="flex flex-wrap gap-1">
                        {campus.faculties.map(facId => {
                          const faculty = faculties.find(f => f.id === facId);
                          return faculty ? (
                            <Badge key={faculty.id} variant="outline" className="bg-gray-100">
                              {faculty.name}
                            </Badge>
                          ) : null;
                        })}
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-sm mb-2">Carreras:</p>
                      <p className="text-xs text-gray-500">
                        {getCareersByCampus(campus.name).length} carreras disponibles
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-gray-500">
                    <strong>Contacto:</strong> {campus.mainPhone}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default AcademicInfo;
