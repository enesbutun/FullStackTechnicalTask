import { Request, Response } from 'express';
import SleepData, { ISleepData } from '../models/SleepData';

export const addSleepData = async (req: Request, res: Response) => {
  try {
    const { name, gender, hours, date } = req.body;
    const newEntry: ISleepData = new SleepData({ name, gender, hours, date });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add sleep data' });
  }
};

export const getSleepData = async (req: Request, res: Response) => {
  try {
    const sleepData = await SleepData.find();
    res.json(sleepData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sleep data' });
  }
};
