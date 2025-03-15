import { Router } from "express";
const router = Router();

import {  getUsers, 
          getUserbyId, 
          createUser, 
          updateUser,
          deleteUser } from '../controllers/index.controllers';

router.get('/users',getUsers);
router.get('/users/:id',getUserbyId);
router.post('/users',createUser);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);

export default router;
