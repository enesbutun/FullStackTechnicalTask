import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SleepForm from './components/SleepForm'; 
import SleepTable from './components/SleepTable';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <Router>        
      <NavBar />
      <Routes>
        <Route path="/" element={<SleepForm />} />
        <Route path="/table" element={<SleepTable />} />
      </Routes>
    </Router>
  );
};

export default App;

