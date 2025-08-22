import express from 'express'

export const pingRoutes = express.Router();

pingRoutes.get('/', (req, res) =>{
    res.send('API works!')
})