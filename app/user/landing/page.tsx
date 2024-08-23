"use client"
import React from "react";
import { motion } from "framer-motion";
import PrivateRoute from "@/backend/src/context/PrivateRouter";
import NavbarUserComponent from "@/app/components/Navbar/navbar.componen";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const featureVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function LandingPage() {
  return (
    <PrivateRoute rol="user">
      <div>
        <NavbarUserComponent />
        <motion.div
          className="bg-gray-100"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.section
            className="bg-white"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="container mx-auto text-center py-20 px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
                Bienvenido a nuestro sitio web
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Es un sitio simple, pero elegante para cualquier persona
              </p>
              <a
                href="#get-started"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
              >
                Comenzar ahora
              </a>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            className="container mx-auto my-20 px-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="text-center p-6 bg-white rounded-lg shadow-md"
                  variants={featureVariants}
                >
                  <div className="text-blue-500 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={i === 1
                          ? "M9 12h6m-6 4h6m-2-6h2m-2-4h2m4 10H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z"
                          : i === 2
                          ? "M12 8v8m0-4h4m-4 0H8m2-4h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2z"
                          : "M5 13l4 4L19 7"}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {i === 1 ? "Diseño responsivo" : i === 2 ? "Rápido mantenimiento" : "Fácil de usar"}
                  </h3>
                  <p className="text-gray-600">
                    {i === 1
                      ? "Nuestros servicios"
                      : i === 2
                      ? "Rápida optimización del sistema"
                      : "Es muy sencillo de usar"}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            className="bg-gray-800 py-6 text-white text-center"
            initial="hidden"
            animate="visible"
            variants={footerVariants}
          >
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <div className="mt-4">
              <a href="#facebook" className="text-blue-400 mx-2">
                Facebook
              </a>
              <a href="#twitter" className="text-blue-300 mx-2">
                Twitter
              </a>
              <a href="#instagram" className="text-pink-400 mx-2">
                Instagram
              </a>
            </div>
          </motion.footer>
        </motion.div>
      </div>
    </PrivateRoute>
  );
}

export default LandingPage;
