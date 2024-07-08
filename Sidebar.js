// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../assets/logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import GroupIcon from '@mui/icons-material/Group';





function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
      <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">   <DashboardIcon/>  Dashboard</Link></li>
          <li><Link to="/job-request"> < CalendarViewDayIcon/> Request</Link></li>
          <li><Link to="/candidates">  <GroupIcon/>      Candidates</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
