import express from 'express';
import authRoutes from './routes/auth';
import 'dotenv/config';


const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
