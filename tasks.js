import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();
router.get('/', async (req,res)=>{ try { const q=req.query.projectId?{projectId:req.query.projectId}:{}; res.json(await Task.find(q).sort({deadline:1,createdAt:-1})); } catch(e){res.status(500).json({message:e.message});} });
router.post('/', async (req,res)=>{ try { res.status(201).json(await Task.create(req.body)); } catch(e){res.status(400).json({message:e.message});} });
router.put('/:id', async (req,res)=>{ try { const t=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true}); if(!t)return res.status(404).json({message:'Task not found'}); res.json(t); } catch(e){res.status(400).json({message:e.message});} });
router.delete('/:id', async (req,res)=>{ try { const t=await Task.findByIdAndDelete(req.params.id); if(!t)return res.status(404).json({message:'Task not found'}); res.json({message:'Task deleted'}); } catch(e){res.status(500).json({message:e.message});} });
export default router;
