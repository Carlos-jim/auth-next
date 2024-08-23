import { z } from 'zod';

// Define the schema using zod
export const schema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  password_hash: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  rol: z.enum(["user", "admin"]),
});

export const loginSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Type for the form data based on the schema
export type FormData = z.infer<typeof schema>;
export type LoginFormData = z.infer<typeof loginSchema>;