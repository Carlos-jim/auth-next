"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Importa el componente de Next.js
import exit from "../../public/logout.png"; // Importa la imagen
import { useRouter } from "next/navigation"; // Importa useRouter para redirección

const NavbarUserComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter(); // Inicializa useRouter para manejar redirección

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función que se ejecuta cuando se hace click en logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token del almacenamiento local
    router.push("/"); // Redirige al usuario a la página de inicio de sesión
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          <span className="text-[#6147FF]">Name Business</span>
        </motion.div>

        {/* Desktop Links */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex items-center space-x-4"
        >
          <a
            href="/user/landing"
            className="text-gray-700 hover:text-[#6147FF]"
          >
            Inicio
          </a>
          <a href="/user/contact" className="text-gray-700">
            Contacto
          </a>
          {/* Añade el onClick para llamar a handleLogout */}
          <a href="#" onClick={handleLogout} className="">
            <Image src={exit} alt="Logout" width={16} height={16} />
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:hidden"
        >
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none focus:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="flex flex-col items-start space-y-4 mt-4">
            <a href="/user/landing" className="text-gray-700">
              Inicio
            </a>
            <a href="/user/contact" className="text-gray-700">
              Contacto
            </a>
          </div>
          <a href="#" onClick={handleLogout} className="">
            <Image src={exit} alt="Logout" width={16} height={16} />
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default NavbarUserComponent;
