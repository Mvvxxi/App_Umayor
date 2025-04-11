
import React from 'react';
import BuildingInfo from '@/components/BuildingInfo';
import { useParams } from 'react-router-dom';
import { mockBuildings } from '@/data/buildings';

const BuildingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const buildingId = parseInt(id || '0');
  const building = mockBuildings.find(b => b.id === buildingId);

  return <BuildingInfo />;
};

export default BuildingDetails;
