"use client";
import { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import api from "../../api/api.js";

interface FormData {
  email: string;
  password_hash: string;
  rol: string;
}

const InputsRegisterComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password_hash: "",
    rol: "user",
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("/register", formData);

      if (response.status === 201) {
        setMessage("Usuario registrado exitosamente");
        setFormData({
          email: "",
          password_hash: "",
          rol: "user",
        });
      } else {
        setMessage("Error al registrar usuario");
      }
    } catch (err) {
      setMessage("Error al registrar usuario");
      console.error(err);
    }
  }, [formData]);

  return (
    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jose@gmail.com"
          className="mt-1 block text-gray-700 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password_hash"
          value={formData.password_hash}
          onChange={handleChange}
          className="mt-1 text-gray-700 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          required
          placeholder="*****"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Registrarse
        </button>
      </motion.div>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`text-center ${message.includes("exitosamente") ? "text-green-600" : "text-red-600"}`}
        >
          {message}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center text-center align-center"
      >

        <p className='text-gray-700'>
          ¿Tienes una cuenta? <a href="/" className="font-semibold text-indigo-700">Entra aquí</a>
        </p>
      </motion.div>
    </form>
  );
};

export default InputsRegisterComponent;
