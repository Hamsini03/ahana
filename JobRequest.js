// src/components/JobRequest.js
import React from 'react';
import './JobRequest.css';
import TuneIcon from '@mui/icons-material/Tune';

function JobRequest() {
  return (
    <div className="job-request">
      <h1>Job Request</h1>
      <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="search"></input>
                 <button className="btn btn-outline" type="submit"><TuneIcon/></button>
                </form>
              </div>
      </nav>

      <div className="job-list">
      
        <div className="job-item">
          <div>Job Title - RPA Developer</div>
          <div>Qualification</div>
          <div>Salary</div>
          <div>No. days of working</div>
          <div>No. of candidates required</div>
          <div className="posted">Posted a day ago</div>
        </div>
        <div className="job-item">
          <div>Job Title - RPA Developer</div>
          <div>Qualification</div>
          <div>Salary</div>
          <div>No. days of working</div>
          <div>No. of candidates required</div>
          <div className="posted">Posted a day ago</div>
        </div>
        
        {/* Repeat job-item as needed */}
      </div>
      
      <div className="recent-requests">
        <h2>Recent job requests</h2>
        <div>Yesterday you have posted a job post for <a href="#">Java developer</a></div>
        <div>Thursday you have posted a job post for <a href="#">DB developer</a></div>
      </div>
      
    </div>
  );
}

export default JobRequest;
