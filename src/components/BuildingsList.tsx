
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BuildingType } from '@/types/campus';
import { mockBuildings } from '@/data/buildings';

const BuildingsList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredBuildings = mockBuildings.filter(building => {
    const matchesSearch = building.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          building.description.toLowerCase().includes(searchQuery.toLowerCase());
                           
    const matchesFilter = selectedFilter ? building.type === selectedFilter : true;
    
    return matchesSearch && matchesFilter;
  });

  const getBuildingTypeLabel = (type: string) => {
    switch(type) {
      case 'faculty': return 'Facultad';
      case 'admin': return 'Administración';
      case 'library': return 'Biblioteca';
      case 'cafeteria': return 'Cafetería';
      default: return 'Edificio';
    }
  };

  const getBuildingTypeColor = (type: string) => {
    switch(type) {
      case 'faculty': return 'bg-campus-blue';
      case 'admin': return 'bg-campus-red';
      case 'library': return 'bg-campus-green';
      case 'cafeteria': return 'bg-campus-yellow';
      default: return 'bg-campus-gray';
    }
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(prevFilter => prevFilter === filter ? null : filter);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <h1 className="text-xl font-bold mb-3">Edificios del Campus</h1>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar edificio o lugar..."
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-campus-blue"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mt-3">
          <button 
            className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${selectedFilter === 'faculty' ? 'bg-campus-blue text-white' : 'bg-gray-100'}`}
            onClick={() => handleFilterChange('faculty')}
          >
            Facultades
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${selectedFilter === 'admin' ? 'bg-campus-red text-white' : 'bg-gray-100'}`}
            onClick={() => handleFilterChange('admin')}
          >
            Administración
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${selectedFilter === 'library' ? 'bg-campus-green text-white' : 'bg-gray-100'}`}
            onClick={() => handleFilterChange('library')}
          >
            Bibliotecas
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${selectedFilter === 'cafeteria' ? 'bg-campus-yellow text-white' : 'bg-gray-100'}`}
            onClick={() => handleFilterChange('cafeteria')}
          >
            Cafeterías
          </button>
        </div>
      </div>
      
      {/* Buildings List */}
      <div className="flex-1 overflow-y-auto p-4">
        {filteredBuildings.length > 0 ? (
          <div className="space-y-3">
            {filteredBuildings.map((building) => (
              <div 
                key={building.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden flex items-center cursor-pointer animate-fade-in"
                onClick={() => navigate(`/building/${building.id}`)}
              >
                <div 
                  className="w-24 h-24 bg-gray-200 flex-shrink-0"
                  style={{
                    backgroundImage: `url(${building.image || '/placeholder.svg'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="flex-1 p-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${getBuildingTypeColor(building.type)}`}></span>
                    <span className="text-xs text-gray-500">{getBuildingTypeLabel(building.type)}</span>
                  </div>
                  <h3 className="font-medium mt-1">{building.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{building.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <Filter className="h-10 w-10 mb-2" />
            <p>No se encontraron edificios</p>
            <button 
              className="mt-3 text-campus-blue underline text-sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter(null);
              }}
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildingsList;
