import express from 'express';
import Project from '../models/Project.js';
import Task from '../models/Task.js';

const router = express.Router();
router.get('/', async (_req,res)=>{ try { res.json(await Project.find().sort({createdAt:-1})); } catch(e){res.status(500).json({message:e.message});} });
router.post('/', async (req,res)=>{ try { const p=await Project.create(req.body); res.status(201).json(p); } catch(e){res.status(400).json({message:e.message});} });
router.put('/:id', async (req,res)=>{ try { const p=await Project.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true}); if(!p)return res.status(404).json({message:'Project not found'}); res.json(p); } catch(e){res.status(400).json({message:e.message});} });
router.delete('/:id', async (req,res)=>{ try { const p=await Project.findByIdAndDelete(req.params.id); if(!p)return res.status(404).json({message:'Project not found'}); await Task.deleteMany({projectId:req.params.id}); res.json({message:'Project deleted'}); } catch(e){res.status(500).json({message:e.message});} });
export default router;
