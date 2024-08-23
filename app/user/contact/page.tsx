"use client"

import React from 'react';
import { motion } from 'framer-motion';
import NavbarUserComponent from '@/app/components/Navbar/navbar.componen';

const formVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hover: { scale: 1.05, backgroundColor: '#4a5568' },
  tap: { scale: 0.95 },
};

function ContactForm() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarUserComponent />
      <motion.div
        className="max-w-md mx-auto p-8 mt-16 bg-white rounded-lg shadow-lg"
        initial="hidden"
        animate="visible"
        variants={formVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu correo electrónico"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu mensaje"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-semibold transition-colors duration-300 hover:bg-blue-600"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            Enviar
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactForm;
