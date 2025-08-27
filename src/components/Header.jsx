import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          {/*  Menú Desktop */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link
                to="inicio"
                smooth={true}
                duration={700}
                offset={-80}
                spy={true}
                activeClass={activeClass}
                className={`${linkClass} text-slate-800 hover:text-blue-500`}
              >
                {texts[language].inicio}
              </Link>
            </li>
            <li>
              <Link
                to="proyectos"
                smooth={true}
                duration={700}
                offset={-80}
                spy={true}
                activeClass={activeClass}
                className={`${linkClass} text-slate-700 hover:text-blue-500`}
              >
                {texts[language].proyectos}
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={700}
                offset={-80}
                spy={true}
                activeClass={activeClass}
                className={`${linkClass} text-slate-700 hover:text-blue-500`}
              >
                {texts[language].skills}
              </Link>
            </li>
            <li>
              <Link
                to="contacto"
                smooth={true}
                duration={700}
                offset={-80}
                spy={true}
                activeClass={activeClass}
                className={`${linkClass} text-slate-700 hover:text-blue-500`}
              >
                {texts[language].contacto}
              </Link>
            </li>
            <li>
              <a
                href="/cv.pdf"
                className="ml-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900 hover:bg-blue-600 text-white text-sm font-medium shadow-md transition-all"
              >
                {texts[language].descargarCV}
              </a>
            </li>
            <li className="flex items-center gap-3">
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
            </li>
          </ul>

          {/* Botón Hamburguesa en móviles */}
          <button
            className="md:hidden ml-3 w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white shadow-lg"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </nav>

        {/* Overlay móvil a pantalla completa */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            >
              {/* Botón cerrar */}
              <button
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-900 shadow-md"
                onClick={() => setMenuOpen(false)}
              >
                <X size={22} />
              </button>

              {/* Links */}
              <nav className="flex flex-col gap-8 text-2xl font-semibold">
                <Link
                  to="inicio"
                  smooth={true}
                  duration={700}
                  offset={-80}
                  spy={true}
                  activeClass={activeClass}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400 cursor-pointer"
                >
                  {texts[language].inicio}
                </Link>
                <Link
                  to="proyectos"
                  smooth={true}
                  duration={700}
                  offset={-80}
                  spy={true}
                  activeClass={activeClass}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400 cursor-pointer"
                >
                  {texts[language].proyectos}
                </Link>
                <Link
                  to="skills"
                  smooth={true}
                  duration={700}
                  offset={-80}
                  spy={true}
                  activeClass={activeClass}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400 cursor-pointer"
                >
                  {texts[language].skills}
                </Link>
                <Link
                  to="contacto"
                  smooth={true}
                  duration={700}
                  offset={-80}
                  spy={true}
                  activeClass={activeClass}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400 cursor-pointer"
                >
                  {texts[language].contacto}
                </Link>
                <a
                  href="/cv.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-gray-900 hover:bg-blue-600 hover:text-white text-lg font-medium shadow-md transition-all"
                >
                  {texts[language].descargarCV}
                </a>

                {/* Idiomas */}
                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={spainFlag}
                    alt="Español"
                    title="Español"
                    onClick={() => {
                      if (language !== "es") toggleLanguage();
                      setMenuOpen(false);
                    }}
                    className={`w-8 h-8 rounded-md border ${
                      language === "es"
                        ? "border-blue-400 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-80"
                    } transition-opacity cursor-pointer`}
                  />
                  <img
                    src={usaFlag}
                    alt="English"
                    title="English"
                    onClick={() => {
                      if (language !== "en") toggleLanguage();
                      setMenuOpen(false);
                    }}
                    className={`w-8 h-8 rounded-md border ${
                      language === "en"
                        ? "border-blue-400 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-80"
                    } transition-opacity cursor-pointer`}
                  />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
