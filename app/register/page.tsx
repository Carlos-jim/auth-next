"use client";
import { motion } from 'framer-motion';
import InputsRegisterComponent from '../components/Auth/registerInputs.component';
import NavbarAuthComponent from '../components/Navbar/navbarAuth.component';

const RegisterForm = () => {
  return (
    <div>
      <NavbarAuthComponent></NavbarAuthComponent>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Registrate
          </h2>
          <InputsRegisterComponent></InputsRegisterComponent>
        </motion.div>
      </div>
    </div>
  );
}

export default RegisterForm;