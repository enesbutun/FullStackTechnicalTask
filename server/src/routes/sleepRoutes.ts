import express from 'express';
import { addSleepData, getSleepData } from '../controllers/sleepController';
import { checkApiKey } from '../middleware/authMiddleware';
 
 
const router = express.Router();

router.use(checkApiKey);

router.post('/', addSleepData);

router.get('/', getSleepData);

export default router;
