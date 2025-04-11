
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, Settings, HelpCircle, LogOut, 
  Bell, Moon, Sun, Info, MapPin 
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const MenuScreen: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="flex flex-col h-full overflow-auto bg-gray-50 pb-16">
      {/* Header and User Profile */}
      <div className="bg-white p-4 shadow-sm">
        <h1 className="text-xl font-bold">Menú</h1>
        
        <div className="flex items-center mt-4">
          <Avatar className="h-16 w-16 border-2 border-white shadow">
            <AvatarImage src="/placeholder.svg" alt="Foto de perfil" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h2 className="font-bold">Estudiante Ejemplo</h2>
            <p className="text-sm text-gray-500">Facultad de Ingeniería</p>
            <p className="text-xs text-campus-blue mt-1">Editar perfil</p>
          </div>
        </div>
      </div>
      
      {/* Menu Options */}
      <div className="p-4 space-y-4">
        <Card>
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base">Preferencias</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-full">
                    {darkMode ? (
                      <Moon className="h-5 w-5 text-campus-blue" />
                    ) : (
                      <Sun className="h-5 w-5 text-campus-yellow" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm">Modo oscuro</p>
                    <p className="text-xs text-gray-500">Cambiar apariencia</p>
                  </div>
                </div>
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={setDarkMode} 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <Bell className="h-5 w-5 text-campus-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Notificaciones</p>
                    <p className="text-xs text-gray-500">Administrar alertas</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base">Información</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <button 
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
              onClick={() => navigate('/about')}
            >
              <div className="p-2 bg-gray-100 rounded-full">
                <Info className="h-5 w-5 text-campus-blue" />
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">Acerca de la Universidad</p>
                <p className="text-xs text-gray-500">Historia y misión</p>
              </div>
            </button>
            
            <button 
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-t"
              onClick={() => navigate('/contact')}
            >
              <div className="p-2 bg-gray-100 rounded-full">
                <MapPin className="h-5 w-5 text-campus-blue" />
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">Contacto</p>
                <p className="text-xs text-gray-500">Dirección y teléfonos</p>
              </div>
            </button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base">Ayuda</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <button 
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
              onClick={() => navigate('/help')}
            >
              <div className="p-2 bg-gray-100 rounded-full">
                <HelpCircle className="h-5 w-5 text-campus-blue" />
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">Centro de ayuda</p>
                <p className="text-xs text-gray-500">Respuestas a preguntas frecuentes</p>
              </div>
            </button>
            
            <button 
              className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-t"
              onClick={() => navigate('/settings')}
            >
              <div className="p-2 bg-gray-100 rounded-full">
                <Settings className="h-5 w-5 text-campus-blue" />
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">Configuración</p>
                <p className="text-xs text-gray-500">Opciones avanzadas</p>
              </div>
            </button>
          </CardContent>
        </Card>
        
        <Button variant="outline" className="w-full flex items-center gap-2 mt-6" onClick={() => console.log("Cerrar sesión")}>
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </Button>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">Campus Explorer v1.0</p>
          <p className="text-xs text-gray-400">© 2025 Universidad</p>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
