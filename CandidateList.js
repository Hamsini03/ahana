import React, { useState } from 'react';
import CandidateDetails from './CandidateDetails';
import './CandidateList.css';

const candidates = [
  { jobId: 'RPA0010', name: 'Akshay', contact: '8929292929', role: 'DBA', experience: '5 Years' },
  { jobId: 'DBA0014', name: 'Ashok', contact: '74484849490', role: 'Designer', experience: '10 Years' },
];

const CandidateList = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleViewProgress = (candidate) => {
    setSelectedCandidate({
      jobId: candidate.jobId,
      firstName: 'Akshay',
      middleName: 'R',
      lastName: 'Sundar',
      phoneNumber: '9383393939',
      email: 'abcd@gmail.com',
      location: 'Bangalore',
      currentCTC: '7 LPA',
      expectedCTC: '12 LPA',
      company: 'Amazon',
      noticePeriod: '1 month',
      jobRole: 'RPA Developer',
      reasonForChange: 'Better opportunity',
    });
  };

  const handleClosePopup = () => {
    setSelectedCandidate(null);
  };

  return (
    <div className="candidate-list">
      <h2>Candidate list</h2>
      <div className="filter-section">
        <input type="text" placeholder="Search" />
        <button className="filter-button">Filter</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Candidate name</th>
            <th>Contact no</th>
            <th>Applied role</th>
            <th>Experience</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate.jobId}>
              <td>{candidate.jobId}</td>
              <td>{candidate.name}</td>
              <td>{candidate.contact}</td>
              <td>{candidate.role}</td>
              <td>{candidate.experience}</td>
              <td>
                <button className="progress-button" onClick={() => handleViewProgress(candidate)}>View progress</button>
                <button className="resume-button">View Resume</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCandidate && (
        <CandidateDetails candidate={selectedCandidate} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default CandidateList;
