import express from 'express';
import cors from 'cors';
import { pingRoutes } from '../application/controllers/ping.js';
import utilisateurController from '../application/controllers/utilisateur.controller.js';

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/ping', pingRoutes)
app.use('/utilisateurs', utilisateurController);


export default app