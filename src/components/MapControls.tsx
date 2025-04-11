
import React from 'react';
import { ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetView: () => void;
}

const MapControls: React.FC<MapControlsProps> = ({ 
  onZoomIn, 
  onZoomOut, 
  onResetView 
}) => {
  return (
    <div className="absolute bottom-6 right-4 flex flex-col gap-2 z-10">
      <Button 
        onClick={onZoomIn} 
        variant="secondary" 
        size="icon" 
        className="h-10 w-10 bg-white shadow-md border"
      >
        <ZoomIn className="h-5 w-5 text-gray-700" />
      </Button>
      <Button 
        onClick={onZoomOut} 
        variant="secondary" 
        size="icon" 
        className="h-10 w-10 bg-white shadow-md border"
      >
        <ZoomOut className="h-5 w-5 text-gray-700" />
      </Button>
      <Button 
        onClick={onResetView} 
        variant="secondary" 
        size="icon" 
        className="h-10 w-10 bg-white shadow-md border"
      >
        <RefreshCw className="h-5 w-5 text-gray-700" />
      </Button>
    </div>
  );
};

export default MapControls;
