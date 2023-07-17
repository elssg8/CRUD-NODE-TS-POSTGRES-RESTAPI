import { Router } from 'express';
import { getUsers, getUserbyId, createUser, updateUser, deleteUser } from "../controllers/index.controller";

const router = Router();

export default router;

router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);