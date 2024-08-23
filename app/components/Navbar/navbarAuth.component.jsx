"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const NavbarAuthComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <a href="/" className="text-gray-700 hover:text-[#6147FF]">
            Inicio sesión
          </a>
          <a
            href="/register"
            className="text-white px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700"
  
          >
            Registrate
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
            <a href="/" className="text-gray-700">
              Inicio sesión
            </a>
            <a
              href="/register"
              className="text-gray-700"
              
            >
              Registrate
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavbarAuthComponent;
