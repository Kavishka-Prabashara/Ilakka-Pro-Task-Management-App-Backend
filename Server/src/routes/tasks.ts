import { Router } from 'express';
import {getTasks, createTask, toggleTask, deleteTask, updateTask} from '../controllers/taskController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.use(authMiddleware);
router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id', toggleTask);
router.delete('/:id', deleteTask); // ✅ added delete route
router.put("/:id", updateTask);  // 👈 full update


export default router;
