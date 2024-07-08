import React from 'react';
import './CandidateDetails.css';

const CandidateDetails = ({ candidate, onClose }) => {
  if (!candidate) return null;

  return (
    <div className="candidate-details-overlay">
      <div className="candidate-details">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Candidate Details</h2>
        <div className="candidate-details-content">
          <div className="form-row">
            <div className="form-group">
              <label>Job Id:</label>
              <input type="text" value={candidate.jobId} readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>First name:</label>
              <input type="text" value={candidate.firstName} readOnly />
            </div>
            <div className="form-group">
              <label>Middle name:</label>
              <input type="text" value={candidate.middleName} readOnly />
            </div>
            <div className="form-group">
              <label>Last name:</label>
              <input type="text" value={candidate.lastName} readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone number:</label>
              <input type="text" value={candidate.phoneNumber} readOnly />
            </div>
            <div className="form-group">
              <label>Email Id:</label>
              <input type="text" value={candidate.email} readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Current location:</label>
              <input type="text" value={candidate.location} readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Current CTC:</label>
              <input type="text" value={candidate.currentCTC} readOnly />
            </div>
            <div className="form-group">
              <label>Expected CTC:</label>
              <input type="text" value={candidate.expectedCTC} readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Current company:</label>
              <input type="text" value={candidate.company} readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Notice period:</label>
              <input type="text" value={candidate.noticePeriod} readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Job role:</label>
              <input type="text" value={candidate.jobRole} readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Reason for job change:</label>
              <input type="text" value={candidate.reasonForChange} readOnly />
            </div>
          </div>
          <div className="button-row">
            <button className="cancel-button" onClick={onClose}>Cancel</button>
            <button className="next-button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
