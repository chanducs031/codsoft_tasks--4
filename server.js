import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import projectsRouter from './routes/projects.js';
import tasksRouter from './routes/tasks.js';

dotenv.config();
const app=express();
app.use(cors({origin: process.env.CLIENT_URL?.split(',') || '*'}));
app.use(express.json());
app.get('/api/health',(_req,res)=>res.json({ok:true}));
app.use('/api/projects',projectsRouter);
app.use('/api/tasks',tasksRouter);
const PORT=process.env.PORT||5000;
mongoose.connect(process.env.MONGODB_URI).then(()=>app.listen(PORT,()=>console.log(`API running on ${PORT}`))).catch(err=>{console.error('MongoDB connection failed:',err.message);process.exit(1);});
