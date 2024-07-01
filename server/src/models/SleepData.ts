import mongoose, { Document, Schema } from 'mongoose';

export interface ISleepData extends Document {
  name: string;
  gender: string;
  hours: number;
  date: string;
}

const SleepDataSchema: Schema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  hours: { type: Number, required: true },
  date: { type: String, required: true }
});

const SleepData = mongoose.model<ISleepData>('SleepData', SleepDataSchema);

export default SleepData;
