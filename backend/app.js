import express from 'express';
import cors from 'cors'; // Importa cors
import {PORT_FRONTEND} from './config/config.js'
import createUser from "./src/routers/auth.router/authRegister.router.js"
import login from "./src/routers/auth.router/authLogin.router.js"
const app = express();


// Configuración básica de CORS
app.use(cors({
  origin: `http://localhost:${PORT_FRONTEND}`, // Cambia esto a la URL de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/api', createUser)
app.use('/api', login)



app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;