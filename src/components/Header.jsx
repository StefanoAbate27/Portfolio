import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";

import spainFlag from "../assets/spain.png";
import usaFlag from "../assets/usa.png";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const inicioSection = document.getElementById("inicio");
      if (!inicioSection) return;

      const rect = inicioSection.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom > window.innerHeight / 2;

      setIsVisible(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "cursor-pointer transition-colors duration-300 px-2 py-1 rounded-md text-base sm:text-sm";
  const activeClass = "text-blue-500 font-semibold";

  const texts = {
    es: {
      inicio: "Inicio",
      proyectos: "Proyectos",
      skills: "Habilidades",
      contacto: "Contacto",
      descargarCV: "Descargar CV",
    },
    en: {
      inicio: "Home",
      proyectos: "Projects",
      skills: "Skills",
      contacto: "Contact",
      descargarCV: "Download CV",
    },
  };

  return (
    <div
      className="fixed top-0 left-0 w-full z-50"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-50 ${
          isVisible || hovering
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10"
        }`}
      >
        <nav className="bg-white/90 backdrop-blur-md rounded-full shadow-lg px-4 sm:px-6 py-3 border border-slate-200 flex items-center justify-between w-[90vw] sm:w-auto">
          {/* Menú escritorio */}
          <ul className="hidden md:flex items-center gap-6">
            {["inicio", "proyectos", "skills", "contacto"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  spy={true}
                  activeClass={activeClass}
                  className={`${linkClass} text-slate-700 hover:text-blue-500`}
                >
                  {texts[language][section]}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                className="ml-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900 hover:bg-blue-600 text-white text-sm font-medium shadow-md transition-all"
              >
                {texts[language].descargarCV}
              </a>
            </li>
          </ul>

          {/* Botón menú hamburguesa (solo móviles) */}
          <button
            className="md:hidden ml-3"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Menú móvil con slide desde la derecha */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-md shadow-lg border-l border-slate-200 p-6 flex flex-col gap-6 transform transition-transform duration-300 z-50
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Nombre */}
          <div className="text-lg font-bold text-slate-900 mb-4">
            Stefano Abate
          </div>

          {/* Links */}
          {["inicio", "proyectos", "skills", "contacto"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={700}
              offset={-80}
              spy={true}
              activeClass={activeClass}
              onClick={() => setMenuOpen(false)}
              className={`${linkClass} text-slate-700 hover:text-blue-500`}
            >
              {texts[language][section]}
            </Link>
          ))}

          {/* CV */}
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900 hover:bg-blue-600 text-white text-sm font-medium shadow-md transition-all"
          >
            {texts[language].descargarCV}
          </a>

          {/* Idiomas */}
          <div className="flex items-center gap-3 mt-4">
            <img
              src={spainFlag}
              alt="Español"
              title="Español"
              onClick={() => language !== "es" && toggleLanguage()}
              className={`w-6 h-6 rounded-md border ${
                language === "es"
                  ? "border-blue-500 opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              } transition-opacity cursor-pointer`}
            />
            <img
              src={usaFlag}
              alt="English"
              title="English"
              onClick={() => language !== "en" && toggleLanguage()}
              className={`w-6 h-6 rounded-md border ${
                language === "en"
                  ? "border-blue-500 opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              } transition-opacity cursor-pointer`}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
