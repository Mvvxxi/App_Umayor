
import React from 'react';
import MainLayout from '@/components/MainLayout';
import BuildingsList from '@/components/BuildingsList';

const BuildingsPage: React.FC = () => {
  return (
    <MainLayout>
      <BuildingsList />
    </MainLayout>
  );
};

export default BuildingsPage;
