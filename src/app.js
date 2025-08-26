import express from 'express'
import songRoutes from './Routes/songsRoutes.js'

const app=express();
app.use(express.json());


app.use('/',songRoutes);

export default app;