import express from 'express';
import cors from 'cors';
import connectDB from './config/database';
import sleepRoutes from './routes/sleepRoutes';

const app = express();
const PORT = 5000;

connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/sleep', sleepRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
