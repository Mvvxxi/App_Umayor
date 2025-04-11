
import React from 'react';
import { 
  Info, MapPin, Clock, Calendar, Phone, 
  HelpCircle, AlertCircle, Map 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CampusGuide: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm">
        <h1 className="text-xl font-bold">Guía del Campus</h1>
        <p className="text-sm text-gray-500">Todo lo que necesitas saber sobre nuestra universidad</p>
      </div>

      {/* Content */}
      <Tabs defaultValue="general" className="flex-1 overflow-hidden">
        <TabsList className="w-full grid grid-cols-3 h-14 rounded-none bg-white">
          <TabsTrigger value="general" className="text-xs">General</TabsTrigger>
          <TabsTrigger value="services" className="text-xs">Servicios</TabsTrigger>
          <TabsTrigger value="faq" className="text-xs">Preguntas</TabsTrigger>
        </TabsList>
        
        <div className="overflow-y-auto h-full pb-20">
          <TabsContent value="general" className="p-4 space-y-4 mt-0">
            <Card className="animate-slide-in" style={{ animationDelay: '0ms' }}>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Info className="h-5 w-5 text-campus-blue" />
                  Sobre la Universidad
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-600">
                  Nuestra universidad se fundó en 1950 y se ha convertido en un referente
                  en educación superior. Con más de 20 facultades y miles de estudiantes,
                  ofrecemos una experiencia educativa integral.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-3 text-xs"
                  onClick={() => navigate('/about')}
                >
                  Más información
                </Button>
              </CardContent>
            </Card>
            
            <Card className="animate-slide-in" style={{ animationDelay: '50ms' }}>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-campus-blue" />
                  Cómo llegar
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-600">
                  El campus principal está ubicado en el centro de la ciudad.
                  Hay varias opciones de transporte público que te pueden acercar:
                </p>
                <ul className="text-sm text-gray-600 mt-2 list-disc list-inside space-y-1">
                  <li>Autobús: Líneas 10, 24, 35</li>
                  <li>Metro: Estación Universidad (Línea 3)</li>
                  <li>Estacionamiento disponible para estudiantes y visitantes</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="animate-slide-in" style={{ animationDelay: '100ms' }}>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock className="h-5 w-5 text-campus-blue" />
                  Horarios
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">Lunes a Viernes:</span>
                    <span>7:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sábados:</span>
                    <span>8:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Bibliotecas:</span>
                    <span>8:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Oficinas administrativas:</span>
                    <span>9:00 - 17:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-slide-in" style={{ animationDelay: '150ms' }}>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-campus-blue" />
                  Calendario Académico
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="font-medium">Semestre Actual:</p>
                  <p>Período: Febrero - Julio 2025</p>
                  <p className="font-medium mt-2">Próximos eventos:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>15 Mayo: Día del estudiante</li>
                    <li>1-15 Junio: Período de exámenes</li>
                    <li>20 Julio: Fin del semestre</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="services" className="p-4 space-y-4 mt-0">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">Servicios Estudiantiles</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="bg-campus-blue/10 p-2 rounded-full">
                      <HelpCircle className="h-5 w-5 text-campus-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Asesoría Académica</h3>
                      <p className="text-xs text-gray-600">Orientación para tu desarrollo académico</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-campus-green/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-campus-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Soporte Técnico</h3>
                      <p className="text-xs text-gray-600">Ayuda con sistemas y plataformas digitales</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-campus-yellow/10 p-2 rounded-full">
                      <AlertCircle className="h-5 w-5 text-campus-yellow" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Servicios de Salud</h3>
                      <p className="text-xs text-gray-600">Atención médica para la comunidad universitaria</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base">Instalaciones</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border rounded-lg p-3 text-center">
                    <div className="bg-campus-blue/10 h-10 w-10 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="h-5 w-5 text-campus-blue" />
                    </div>
                    <h3 className="font-medium text-sm mt-2">Cafeterías</h3>
                    <p className="text-xs text-gray-600 mt-1">4 ubicaciones</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-3 text-center">
                    <div className="bg-campus-green/10 h-10 w-10 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="h-5 w-5 text-campus-green" />
                    </div>
                    <h3 className="font-medium text-sm mt-2">Bibliotecas</h3>
                    <p className="text-xs text-gray-600 mt-1">3 ubicaciones</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-3 text-center">
                    <div className="bg-campus-red/10 h-10 w-10 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="h-5 w-5 text-campus-red" />
                    </div>
                    <h3 className="font-medium text-sm mt-2">Estacionamientos</h3>
                    <p className="text-xs text-gray-600 mt-1">5 ubicaciones</p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-3 text-center">
                    <div className="bg-campus-yellow/10 h-10 w-10 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="h-5 w-5 text-campus-yellow" />
                    </div>
                    <h3 className="font-medium text-sm mt-2">Áreas Deportivas</h3>
                    <p className="text-xs text-gray-600 mt-1">2 ubicaciones</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-campus-blue hover:bg-campus-blue/90"
                  onClick={() => navigate('/')}
                >
                  <Map className="h-4 w-4 mr-2" />
                  Ver en el mapa
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq" className="p-4 space-y-4 mt-0">
            <div className="space-y-3">
              <Card>
                <CardContent className="p-4">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-sm">¿Cómo me registro en un curso?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <p className="text-xs text-gray-600 mt-3 group-open:animate-fade-in">
                      Para registrarte en un curso, debes acceder al portal estudiantil
                      con tu ID y contraseña. Luego ve a la sección de "Registro de Cursos"
                      y selecciona los cursos disponibles para tu programa académico.
                    </p>
                  </details>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-sm">¿Dónde puedo solicitar mi credencial?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <p className="text-xs text-gray-600 mt-3 group-open:animate-fade-in">
                      Las credenciales estudiantiles se solicitan en la oficina de
                      Servicios Estudiantiles, ubicada en el Edificio Administrativo.
                      Debes llevar una identificación oficial y tu comprobante de inscripción.
                    </p>
                  </details>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-sm">¿Cómo puedo acceder al WiFi del campus?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <p className="text-xs text-gray-600 mt-3 group-open:animate-fade-in">
                      La red WiFi "Campus-Net" está disponible en todo el campus.
                      Para conectarte, usa tu ID estudiantil como nombre de usuario
                      y tu fecha de nacimiento (DDMMAAAA) como contraseña inicial.
                      Te recomendamos cambiar tu contraseña después del primer acceso.
                    </p>
                  </details>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-sm">¿Dónde puedo imprimir documentos?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <p className="text-xs text-gray-600 mt-3 group-open:animate-fade-in">
                      Hay centros de impresión en todas las bibliotecas y en el
                      Centro de Cómputo. Puedes enviar tus documentos a imprimir
                      desde cualquier computadora del campus o desde tu dispositivo
                      personal a través de la app "PrintCampus".
                    </p>
                  </details>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-sm">¿Cómo solicito una constancia de estudios?</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <p className="text-xs text-gray-600 mt-3 group-open:animate-fade-in">
                      Puedes solicitar constancias de estudio a través del portal
                      estudiantil en la sección "Documentos oficiales". También
                      puedes acudir personalmente a la Oficina de Control Escolar
                      con tu identificación. El tiempo de entrega es de 2 a 3 días hábiles.
                    </p>
                  </details>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CampusGuide;
