
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Building } from 'lucide-react';
import { BuildingType } from '@/types/campus';
import { Button } from "@/components/ui/button";

// Universidad Mayor's main campus approximate coordinates
const defaultCenter = {
  lat: -33.4185, // Manuel Montt campus latitude
  lng: -70.6035  // Manuel Montt campus longitude
};

// Campus locations
const campusLocations = {
  "Campus Manuel Montt": { lat: -33.4185, lng: -70.6035 },
  "Campus Huechuraba": { lat: -33.3696, lng: -70.6800 },
  "Campus El Claustro": { lat: -33.4358, lng: -70.5914 }
};

interface GoogleMapComponentProps {
  buildings: BuildingType[];
  onBuildingClick: (buildingId: number) => void;
  scale: number;
}

const containerStyle = {
  width: '100%',
  height: '100%'
};

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ 
  buildings, 
  onBuildingClick,
  scale
}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '' // API key should be entered by the user
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [activeMapCampus, setActiveMapCampus] = React.useState<string>("Campus Manuel Montt");

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const switchCampus = (campusName: string) => {
    if (map && campusLocations[campusName as keyof typeof campusLocations]) {
      map.panTo(campusLocations[campusName as keyof typeof campusLocations]);
      map.setZoom(17); // Zoom closer to see campus details
      setActiveMapCampus(campusName);
    }
  };

  // Filter buildings by current active campus
  const filteredBuildings = buildings.filter(
    building => building.location === activeMapCampus
  );

  if (!isLoaded) return <div className="w-full h-full flex items-center justify-center">Cargando mapa...</div>;

  return (
    <div className="h-full relative">
      <div className="absolute top-4 left-4 right-4 z-10 bg-white rounded-lg shadow-md p-2">
        <div className="flex space-x-2 overflow-x-auto pb-1">
          {Object.keys(campusLocations).map((campus) => (
            <Button
              key={campus}
              size="sm"
              variant={activeMapCampus === campus ? "default" : "outline"}
              className="text-xs whitespace-nowrap"
              onClick={() => switchCampus(campus)}
            >
              {campus}
            </Button>
          ))}
        </div>
      </div>
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={campusLocations[activeMapCampus as keyof typeof campusLocations]}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControl: true
        }}
      >
        {filteredBuildings.map((building) => {
          // Convert percentage coordinates to approximate geo coordinates
          // This is a rough approximation - would need actual coordinates for accuracy
          const baseCoords = campusLocations[activeMapCampus as keyof typeof campusLocations];
          const latOffset = (building.position.y - 50) * 0.0008;
          const lngOffset = (building.position.x - 50) * 0.0015;
          
          const buildingCoords = {
            lat: baseCoords.lat + latOffset,
            lng: baseCoords.lng + lngOffset
          };
          
          return (
            <Marker
              key={building.id}
              position={buildingCoords}
              onClick={() => onBuildingClick(building.id)}
              title={building.name}
              icon={{
                url: `data:image/svg+xml;utf8,${encodeURIComponent(
                  `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="${
                    building.type === 'faculty' ? '#0059b3' : 
                    building.type === 'admin' ? '#cc0000' : 
                    building.type === 'library' ? '#00994d' : 
                    building.type === 'cafeteria' ? '#e6b800' : '#737373'
                  }" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                  </svg>`
                )}`
              }}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent;
