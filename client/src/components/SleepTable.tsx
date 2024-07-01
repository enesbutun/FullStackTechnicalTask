import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SleepChart from './SleepChart';
import { getApiKey,getBaseUrl  } from '../config'

interface SleepData {
  _id: string;
  name: string;
  gender: string;
  hours: number;
  date: string;
}

const SleepTable: React.FC = () => {
  const [data, setData] = useState<SleepData[]>([]);
  const [selectedData, setSelectedData] = useState<SleepData[]>([]);

  const API_KEY = getApiKey();
  const BASE_URL = getBaseUrl();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${BASE_URL}/api/sleep`, {
        headers: { 'x-api-key': API_KEY } });
      setData(result.data);
    };
    fetchData();
  }, []);

  const handleRowClick = (name: string) => {
    const filteredData = data.filter((entry) => entry.name === name);
    setSelectedData(filteredData);
  };

  return (
    <div>
      <table  className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Entries</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry._id} onClick={() => handleRowClick(entry.name)}>
              <td>{entry.name}</td>
              <td>{entry.gender}</td>
              <td>{entry.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedData.length > 0 && <SleepChart data={selectedData.map(entry => ({ date: entry.date, hours: entry.hours }))} />}
    </div>
  );
};

export default SleepTable;
