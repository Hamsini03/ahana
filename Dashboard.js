// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <button className="export-button">Export</button>



        
      <div className="stats">
        <div className="stat-box">No. of job requests received</div>
        <div className="stat-box">No. of candidates uploaded</div>
        <div className="stat-box">No. shortlisted/onboarded candidates</div>
        <div className="stat-box">Rejected candidates</div>
      </div>
      <div className="graphs">
        <div className="graph">Graph</div>
        <div className="graph">Graph</div>
      </div>

    </div>
  );
}

export default Dashboard;
