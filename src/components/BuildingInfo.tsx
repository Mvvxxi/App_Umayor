
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, MapPin, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { mockBuildings } from '@/data/buildings';

const BuildingInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const buildingId = parseInt(id || '0');
  const building = mockBuildings.find(b => b.id === buildingId);

  if (!building) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4">
        <h2 className="text-xl font-bold mb-4">Edificio no encontrado</h2>
        <Button onClick={() => navigate('/')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al mapa
        </Button>
      </div>
    );
  }

  const getBuildingTypeLabel = (type: string) => {
    switch(type) {
      case 'faculty': return 'Facultad';
      case 'admin': return 'Administración';
      case 'library': return 'Biblioteca';
      case 'cafeteria': return 'Cafetería';
      default: return 'Edificio';
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="mr-1">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-xl font-bold">{building.name}</h1>
          <p className="text-sm text-gray-500">{getBuildingTypeLabel(building.type)}</p>
        </div>
      </div>

      {/* Building Image */}
      <div className="relative h-52 w-full bg-gray-300">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url(${building.image || '/placeholder.svg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="text-white">
            <h2 className="font-bold">{building.name}</h2>
            <p className="text-sm">{building.location}</p>
          </div>
        </div>
      </div>

      {/* Building Details Tabs */}
      <Tabs defaultValue="info" className="flex-1 overflow-hidden">
        <TabsList className="w-full grid grid-cols-3 h-14 rounded-none">
          <TabsTrigger value="info" className="text-xs">Información</TabsTrigger>
          <TabsTrigger value="departments" className="text-xs">Departamentos</TabsTrigger>
          <TabsTrigger value="schedule" className="text-xs">Horarios</TabsTrigger>
        </TabsList>
        
        <div className="overflow-y-auto h-full pb-20">
          <TabsContent value="info" className="p-4 space-y-4 mt-0">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-campus-blue mt-0.5" />
                  <div>
                    <h3 className="font-medium">Descripción</h3>
                    <p className="text-sm text-gray-600 mt-1">{building.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-campus-blue mt-0.5" />
                  <div>
                    <h3 className="font-medium">Ubicación</h3>
                    <p className="text-sm text-gray-600 mt-1">{building.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-campus-blue mt-0.5" />
                  <div>
                    <h3 className="font-medium">Contacto</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {building.contact?.name || 'No disponible'}<br />
                      {building.contact?.email || ''}<br />
                      {building.contact?.phone || ''}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="departments" className="p-4 space-y-4 mt-0">
            {building.departments?.length ? (
              building.departments.map((dept, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{dept.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{dept.description}</p>
                    {dept.floor && (
                      <p className="text-xs text-gray-500 mt-2">Piso: {dept.floor}</p>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No hay departamentos registrados</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="schedule" className="p-4 space-y-4 mt-0">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-campus-blue mt-0.5" />
                  <div>
                    <h3 className="font-medium">Horario de atención</h3>
                    <div className="text-sm text-gray-600 mt-2 space-y-1">
                      {building.schedule ? (
                        Object.entries(building.schedule).map(([day, hours]) => (
                          <div key={day} className="flex justify-between">
                            <span className="font-medium">{day}</span>
                            <span>{hours}</span>
                          </div>
                        ))
                      ) : (
                        <p>Horario no disponible</p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default BuildingInfo;
