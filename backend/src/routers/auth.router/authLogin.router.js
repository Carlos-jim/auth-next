import { Router } from 'express';
import { findUserByEmailController } from '../../controllers/auth.controller/auth.controller.js';

const router = Router();

router.post('/login', findUserByEmailController);

export default router;