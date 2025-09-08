import { Request, Response } from 'express';
import prisma from '../utils/prismaClient';

export const getTasks = async (req: Request, res: Response) => {
    const userId = (req.user as any).userId;
    try {
        const tasks = await prisma.task.findMany({ where: { userId } });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks', details: err });
    }
};

export const toggleTask = async (req: Request, res: Response) => {
    const userId = (req.user as any).userId;
    const id = parseInt(req.params.id);

    try {
        const task = await prisma.task.findUnique({ where: { id } });

        if (!task || task.userId !== userId) {
            return res.status(404).json({ error: "Task not found" });
        }

        const updatedTask = await prisma.task.update({
            where: { id },
            data: { completed: !task.completed },
        });

        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: "Failed to update task", details: err });
    }
};


export const createTask = async (req: Request, res: Response) => {
    const userId = (req.user as any).userId;
    const { title } = req.body;
    try {
        const task = await prisma.task.create({
            data: { title, userId },
        });
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create task', details: err });
    }
};
