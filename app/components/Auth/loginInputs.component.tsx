"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import api from "@/app/api/api"; // Asegúrate de que api sea tu cliente de API o importación de tu API
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "../../types/types";
import { loginSchema, LoginFormData } from "../../schema/zod"; // Ajusta la ruta según la ubicación del archivo
import { z } from 'zod';
const InputsLoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // Para mensajes de error
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validar datos del formulario
      loginSchema.parse({ email, password });

      // Realizamos la petición a la API de login
      const response = await api.post("/login", {
        email: email,
        password_hash: password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);

        const { rol } = jwtDecode<JwtPayload>(token);
        if (rol === "admin") {
          router.push("/admin/dashboard");
        } else {
          router.push("/user/landing");
        }
      } else {
        setError("Error en el inicio de sesión");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Mostrar el primer error de validación de Zod
        setError(err.errors[0].message);
      } else {
        setError("Correo o contraseña incorrectos.");
        console.error("Error en el inicio de sesión:", err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="jose@gmail.com"
          className={`mt-1 block w-full text-gray-700 px-4 py-2 border ${error?.includes("Correo") ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          required
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className={`mt-1 block w-full text-gray-700 px-4 py-2 border ${error?.includes("contraseña") ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
          required
          placeholder="*****"
        />
      </motion.div>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-red-500 text-center"
        >
          <p>{error}</p>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Iniciar sesión
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center text-center"
      >
        <p className="text-gray-700">
          ¿No estás registrado?{" "}
          <a href="/register" className="font-semibold text-indigo-600">
            Regístrate aquí
          </a>
        </p>
      </motion.div>
    </form>
  );
};

export default InputsLoginComponent;
