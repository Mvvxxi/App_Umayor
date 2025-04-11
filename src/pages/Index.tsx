import React from "react";
import MainLayout from "@/components/MainLayout";
import CampusMap from "@/components/CampusMap";

const Index: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        <div className="bg-campus-yellow text-white p-3 text-center">
          <h1 className="text-xl font-bold">Universidad Mayor</h1>
          <p className="text-sm">Mapa Interactivo de Campus</p>
        </div>
        <CampusMap />
      </div>
    </MainLayout>
  );
};

export default Index;
