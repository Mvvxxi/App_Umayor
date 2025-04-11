
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import BuildingInfo from '@/components/BuildingInfo';
import { mockBuildings } from '@/data/buildings';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BuildingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const buildingId = parseInt(id || '0');
  const building = mockBuildings.find(b => b.id === buildingId);

  if (!building) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center h-full p-4">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Edificio no encontrado</h1>
          <Button onClick={() => navigate('/')}>Volver al mapa</Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex flex-col h-full overflow-auto">
        <div className="bg-campus-blue text-white p-4 flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white mr-2"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">{building.name}</h1>
            <p className="text-sm opacity-90">{building.location}</p>
          </div>
        </div>
        <BuildingInfo building={building} />
      </div>
    </MainLayout>
  );
};

export default BuildingDetails;
