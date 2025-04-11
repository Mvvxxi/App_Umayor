import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  BookOpen,
  Book,
  Info,
  School,
  GraduationCap,
} from "lucide-react";
import "./MenuScreen.css";

const MenuScreen: React.FC = () => {
  const menuItems = [
    {
      title: "Mapa del Campus",
      description: "Explora el campus de manera interactiva",
      icon: <MapPin className="w-6 h-6 icon-blue" />,
      path: "/",
    },
    {
      title: "Lista de Edificios",
      description: "Visualiza todos los edificios del campus",
      icon: <BookOpen className="w-6 h-6 icon-green" />,
      path: "/buildings",
    },
    {
      title: "Oferta Académica",
      description: "Explora carreras, facultades y campus",
      icon: <GraduationCap className="w-6 h-6 icon-red" />,
      path: "/academic",
    },
    {
      title: "Guía del Campus",
      description: "Información útil para moverte por el campus",
      icon: <Info className="w-6 h-6 icon-yellow" />,
      path: "/guide",
    },
  ];

  return (
    <div className="menu-container">
      <h1 className="menu-title">Menú Principal</h1>
      <p className="menu-subtitle">Selecciona una opción para comenzar</p>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className="menu-item">
            <div className="menu-item-content">
              <div className="icon-container">{item.icon}</div>
              <div>
                <h2 className="item-title">{item.title}</h2>
                <p className="item-description">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="footer">
        <div className="footer-content">
          <div className="footer-inner">
            <School className="w-8 h-8 icon-yellow" />
            <div>
              <h2 className="footer-title">Universidad Mayor</h2>
              <p className="footer-subtitle">
                Explorando juntos el campus universitario
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
