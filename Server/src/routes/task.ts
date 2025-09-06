import { Router } from 'express';
import { getTasks, createTask } from '../controllers/taskController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.use(authMiddleware);
router.get('/', getTasks);
router.post('/', createTask);

export default router;
