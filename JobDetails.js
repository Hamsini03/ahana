// src/JobDetails.js
import React, { useState } from 'react';
import './JobDetails.css'; // Add your styles here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

const JobCard = ({ job }) => (
  <div className="job-card">
    <div className="job-header">
      <div className="job-title">Job Title - {job.title}</div>
      <div className={`job-status ${job.status.toLowerCase()}`}>{job.status}</div>
      <div className="job-footer">
      <button><FontAwesomeIcon icon={faEdit} /> </button>
      <button><FontAwesomeIcon icon={faEye} /> </button>
    </div>
    </div>
    <div className="job-info">
      <div>Exp required: {job.expRequired}</div>
      <div>Qualification: {job.qualification}</div>
      <div>Job Descr: {job.description}</div>
      <div>Job Location: {job.location}</div>
      <div>No. days of working: {job.daysOfWorking}</div>
      <div>No. of candidates required: {job.candidatesRequired}</div>
      <div>Assigned to: {job.assignedTo}</div>
    </div>
    <div className="job-posted">Posted {job.postedTime} ago</div>
  </div>
);

const JobsPosted = ({ jobs }) => (
  <div className="jobs-posted">
    {jobs.map((job, index) => (
      <JobCard key={index} job={job} />
    ))}
  </div>
);

const RecentJobs = ({ recentJobs }) => (
  <div className="recent-jobs">
    <h3>Recent job posted</h3>
    {recentJobs.map((job, index) => (
      <div key={index}>
        {job.time} you have posted a job post for <b>{job.title}</b>
      </div>
    ))}
  </div>
);

const JobDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [showImportPopup, setShowImportPopup] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowImportPopup(false);
  };

  const handleImportPopup = () => {
    setShowImportPopup(true);
  };

  const jobs = [
    {
      title: 'RPA Developer',
      expRequired: '3 years',
      qualification: 'B.Tech',
      description: 'Automation tasks',
      location: 'Remote',
      daysOfWorking: '5',
      candidatesRequired: '2',
      assignedTo: 'All vendor/Vendor names/Vendor group',
      status: 'Active',
      postedTime: 'a day'
    },
    {
      title: 'DBA',
      expRequired: '5 years',
      qualification: 'M.Tech',
      description: 'Database management',
      location: 'On-site',
      daysOfWorking: '5',
      candidatesRequired: '1',
      assignedTo: 'All vendor/Vendor names/Vendor group',
      status: 'Disabled',
      postedTime: '5 days'
    }
  ];

  const recentJobs = [
    { time: 'Yesterday', title: 'Java developer' },
    { time: 'Thursday', title: 'DB developer' }
  ];

  return (
    <>
      <main className="main-content">
        <div className="job-posting">
          <h2>Jobs Posted</h2>
          <div className='jadd'>
          <button className="create-job-post" onClick={handleOpenModal}>Create Job Post</button>
          </div>
          <div className="job-controls">
            <input type="text" placeholder="Search..." />
            <button>Filter</button>
          </div>
          <JobsPosted jobs={jobs} />
          <RecentJobs recentJobs={recentJobs} />
        </div>
      </main>
      <Modal show={showModal} handleClose={handleCloseModal} showImportPopup={showImportPopup} handleImportPopup={handleImportPopup} />
    </>
  );
};

export default JobDetails;
