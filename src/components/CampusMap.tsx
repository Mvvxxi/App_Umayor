
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, School, Building, BookOpen, Coffee
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MapControls from './MapControls';
import { BuildingType } from '@/types/campus';
import { mockBuildings } from '@/data/buildings';
import GoogleMapComponent from './GoogleMap';

const CampusMap: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBuildings, setFilteredBuildings] = useState<BuildingType[]>(mockBuildings);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [useGoogleMaps, setUseGoogleMaps] = useState(true);
  const navigate = useNavigate();

  // Original map state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Apply filters based on search query and selected filter
    let filtered = mockBuildings;
    
    if (searchQuery) {
      filtered = filtered.filter(building => 
        building.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        building.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedFilter) {
      filtered = filtered.filter(building => 
        building.type === selectedFilter
      );
    }
    
    setFilteredBuildings(filtered);
  }, [searchQuery, selectedFilter]);

  const handleZoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.2, 0.5));
  };

  const handleResetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartDragPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setStartDragPosition({ 
        x: e.touches[0].clientX - position.x, 
        y: e.touches[0].clientY - position.y 
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startDragPosition.x,
        y: e.clientY - startDragPosition.y
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      setPosition({
        x: e.touches[0].clientX - startDragPosition.x,
        y: e.touches[0].clientY - startDragPosition.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleBuildingClick = (buildingId: number) => {
    navigate(`/building/${buildingId}`);
  };

  const setFilter = (filter: string | null) => {
    setSelectedFilter(prevFilter => prevFilter === filter ? null : filter);
  };

  const toggleMapType = () => {
    setUseGoogleMaps(prev => !prev);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Search Bar */}
      <div className="p-4 bg-white shadow-md z-10">
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
      </div>
      
      {/* Filters */}
      <div className="flex overflow-x-auto px-4 py-2 bg-white shadow-sm">
        <Button 
          variant={selectedFilter === 'faculty' ? "default" : "outline"} 
          size="sm" 
          className={cn("mr-2 flex items-center gap-1 rounded-full", 
            selectedFilter === 'faculty' ? "bg-campus-blue" : "")}
          onClick={() => setFilter('faculty')}
        >
          <School className="h-4 w-4" /> Facultades
        </Button>
        <Button 
          variant={selectedFilter === 'admin' ? "default" : "outline"} 
          size="sm" 
          className={cn("mr-2 flex items-center gap-1 rounded-full", 
            selectedFilter === 'admin' ? "bg-campus-red" : "")}
          onClick={() => setFilter('admin')}
        >
          <Building className="h-4 w-4" /> Administración
        </Button>
        <Button 
          variant={selectedFilter === 'library' ? "default" : "outline"} 
          size="sm" 
          className={cn("mr-2 flex items-center gap-1 rounded-full", 
            selectedFilter === 'library' ? "bg-campus-green" : "")}
          onClick={() => setFilter('library')}
        >
          <BookOpen className="h-4 w-4" /> Bibliotecas
        </Button>
        <Button 
          variant={selectedFilter === 'cafeteria' ? "default" : "outline"} 
          size="sm" 
          className={cn("mr-2 flex items-center gap-1 rounded-full", 
            selectedFilter === 'cafeteria' ? "bg-campus-yellow" : "")}
          onClick={() => setFilter('cafeteria')}
        >
          <Coffee className="h-4 w-4" /> Cafeterías
        </Button>
      </div>

      {/* Map Toggle Button */}
      <div className="flex justify-center p-2 bg-white">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMapType}
          className="text-xs"
        >
          {useGoogleMaps ? "Ver Mapa Esquemático" : "Ver Google Maps"}
        </Button>
      </div>

      {/* Campus Map */}
      <div className="campus-map-container relative flex-1 bg-campus-lightGray">
        {useGoogleMaps ? (
          <GoogleMapComponent 
            buildings={filteredBuildings}
            onBuildingClick={handleBuildingClick}
            scale={scale}
          />
        ) : (
          // Original map implementation
          <div
            className="absolute w-full h-full bg-white"
            style={{
              transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
              transformOrigin: 'center',
              transition: isDragging ? 'none' : 'transform 0.2s',
              backgroundImage: 'url(/campus-map-bg.png)',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
            onMouseDown={(e) => {
              setIsDragging(true);
              setStartDragPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
            }}
            onMouseMove={(e) => {
              if (isDragging) {
                setPosition({
                  x: e.clientX - startDragPosition.x,
                  y: e.clientY - startDragPosition.y
                });
              }
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={(e) => {
              if (e.touches.length === 1) {
                setIsDragging(true);
                setStartDragPosition({ 
                  x: e.touches[0].clientX - position.x, 
                  y: e.touches[0].clientY - position.y 
                });
              }
            }}
            onTouchMove={(e) => {
              if (isDragging && e.touches.length === 1) {
                setPosition({
                  x: e.touches[0].clientX - startDragPosition.x,
                  y: e.touches[0].clientY - startDragPosition.y
                });
              }
            }}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* Building markers on the schematic map */}
            {filteredBuildings.map((building) => {
              let Icon;
              switch (building.type) {
                case 'faculty': Icon = School; break;
                case 'library': Icon = BookOpen; break;
                case 'admin': Icon = Building; break;
                case 'cafeteria': Icon = Coffee; break;
                default: Icon = Building;
              }
              
              return (
                <div
                  key={building.id}
                  className={`building-marker ${building.type}`}
                  style={{
                    position: 'absolute',
                    left: `${building.position.x}%`,
                    top: `${building.position.y}%`,
                  }}
                  onClick={() => handleBuildingClick(building.id)}
                >
                  <Icon className="h-4 w-4" />
                </div>
              );
            })}
          </div>
        )}

        {/* Map Controls */}
        {!useGoogleMaps && (
          <MapControls 
            onZoomIn={handleZoomIn} 
            onZoomOut={handleZoomOut} 
            onResetView={handleResetView} 
          />
        )}
      </div>
    </div>
  );
};

export default CampusMap;
