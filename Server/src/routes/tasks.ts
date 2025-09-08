import { Router } from 'express';
import { getTasks, createTask, toggleTask } from '../controllers/taskController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.use(authMiddleware);
router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id', toggleTask); // 👈 add this

export default router;
