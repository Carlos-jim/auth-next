"use client";
import { motion } from "framer-motion";
import InputsLoginComponent from "./components/Auth/loginInputs.component";
import NavbarAuth from "./components/Navbar/navbarAuth.component";

const LoginForm = () => {

  return (
    <div>
      <NavbarAuth></NavbarAuth>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Iniciar Sesión
          </h2>
          <InputsLoginComponent/>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginForm;
