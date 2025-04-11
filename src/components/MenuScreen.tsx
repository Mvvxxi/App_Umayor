
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BookOpen, Book, Info, School, GraduationCap } from 'lucide-react';

const MenuScreen: React.FC = () => {
  const menuItems = [
    {
      title: 'Mapa del Campus',
      description: 'Explora el campus de manera interactiva',
      icon: <MapPin className="w-6 h-6 text-campus-blue" />,
      path: '/'
    },
    {
      title: 'Lista de Edificios',
      description: 'Visualiza todos los edificios del campus',
      icon: <BookOpen className="w-6 h-6 text-campus-green" />,
      path: '/buildings'
    },
    {
      title: 'Oferta Académica',
      description: 'Explora carreras, facultades y campus',
      icon: <GraduationCap className="w-6 h-6 text-campus-red" />,
      path: '/academic'
    },
    {
      title: 'Guía del Campus',
      description: 'Información útil para moverte por el campus',
      icon: <Info className="w-6 h-6 text-campus-yellow" />,
      path: '/guide'
    }
  ];

  return (
    <div className="h-full flex flex-col bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-2">Menú Principal</h1>
      <p className="text-gray-600 mb-6">Selecciona una opción para comenzar</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-5 flex items-start gap-4">
              <div className="rounded-full bg-gray-100 p-3">
                {item.icon}
              </div>
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-auto pt-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <School className="w-8 h-8 text-campus-blue" />
            <div>
              <h2 className="font-bold">Universidad Mayor</h2>
              <p className="text-xs text-gray-500">Explorando juntos el campus universitario</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
