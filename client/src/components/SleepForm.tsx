import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { getApiKey,getBaseUrl  } from '../config'

const SleepForm: React.FC = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [hours, setHours] = useState('');
    const [date, setDate] = useState<Date | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const today = new Date();
        const selectedDate = date ? date : today;
        const formattedDate = format(selectedDate, 'yyyy-MM-dd');
        const data = { name, gender, hours: parseInt(hours), date: formattedDate };

        const API_KEY = getApiKey();
        const BASE_URL = getBaseUrl();

        try {
            const response = await axios.post(`${BASE_URL}/api/sleep`, data, {
                headers: { 'x-api-key': API_KEY } });
            if (response.status === 201) {
                toast.success('Data saved successfully!');
            } else {
                toast.error('Failed to save data.');
            }
            setName('');
            setGender('');
            setHours('');
            setDate(null);
        } catch (error) {
            toast.error('Failed to save data.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            <label>Sleep Duration (hours):</label>
            <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} required />
            <label>Date:</label>
            <DatePicker
                selected={date}
                onChange={(date: Date | null) => setDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="yyyy-MM-dd"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SleepForm;
