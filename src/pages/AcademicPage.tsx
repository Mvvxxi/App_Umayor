
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AcademicInfo from '@/components/AcademicInfo';

const AcademicPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 border-b flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="mr-2">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="font-bold">Oferta Académica Universidad Mayor</h1>
      </header>
      
      <main className="flex-1 overflow-hidden">
        <AcademicInfo />
      </main>
    </div>
  );
};

export default AcademicPage;
