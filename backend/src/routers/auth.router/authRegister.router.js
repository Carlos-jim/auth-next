import { Router } from 'express';
import { check } from 'express-validator';
import { createUserController } from '../../controllers/auth.controller/auth.controller.js';

const router = Router();

router.post('/register', [
    check('email','El formato debe ser tipo correo').isEmail(),
    check('password_hash', 'El formato debe ser tipo string').isString(),
    check('rol', 'El formato debe ser tipo string').isString(),
], createUserController)


export default router;