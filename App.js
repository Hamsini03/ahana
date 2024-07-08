import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import VendorDetails from './components/VendorDetails';
import Topbar from './components/Topbar';
import './App.css';
import JobDetails from './components/JobDetails';
import CandidateList from './components/CandidateList';
const App = () => {
  return (
      <div className="app">
        <Sidebar />
        <Topbar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/vendor-details" element={<VendorDetails />} />
            <Route path="/post-job" element={<JobDetails />} />
            <Route path="/candidate-list" element={<CandidateList/>}/>
          </Routes>
        </div>
      </div>
  );
};

export default App;
