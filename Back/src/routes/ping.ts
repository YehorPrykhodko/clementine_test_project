import express from 'express'

const pingRoutes = express.Router();

pingRoutes.get('/', (req, res) =>{
    res.send('API works!')
})

export default pingRoutes;