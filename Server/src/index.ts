import express from 'express';
import authRoutes from './routes/auth';
import taskRoutes from './routes/tasks';
import 'dotenv/config';

const app = express();
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes); // 👈 now tasks API is available

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
