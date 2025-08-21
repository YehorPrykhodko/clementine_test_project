import express from 'express';
import cors from 'cors';

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/auth', authRoutes);
app.use('/operations', operationsRoutes);
app.use('/stats', statistiquesRoutes)

export default app