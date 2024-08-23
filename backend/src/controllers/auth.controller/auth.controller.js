import { createUserModel, findUserByEmail } from "../../models/auth.model/auth.model.js";
import { validationResult } from "express-validator";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"

export const createUserController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password_hash, rol } = req.body;

        // Verifica si el usuario ya existe
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: "El correo ya está registrado" });
        }

        const insert_data = await createUserModel({ email, password_hash, rol });
        res.status(201).json({ message: 'Usuario registrado exitosamente', userId: insert_data.insertId });
    } catch (error) {
        console.error('Error al crear usuario:', error); // Añade logging del error
        res.status(500).json({ error: "Error al registrar el usuario" });
    }
};


export const findUserByEmailController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password_hash } = req.body;
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
        }

        const isMatch = await bcrypt.compare(password_hash, user.password_hash);

        if (!isMatch) {
            return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
        }

        const token = jwt.sign({ userId: user.id, email: user.email, rol: user.rol }, 'tu_secreto_jwt', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
};