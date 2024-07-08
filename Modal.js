import React, { useState } from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ show, handleClose, showImportPopup, handleImportPopup }) => {
    const [showCreateJob, setShowCreateJob] = useState(false);

    const handleShowCreateJob = () => {
        setShowCreateJob(true);
    };

    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close-btn" onClick={handleClose}>&times;</span>
                {!showImportPopup && !showCreateJob ? (
                    <>
                        <h3>Choose starting point</h3>
                        <div className="modal-options">
                            <div className="option" onClick={handleImportPopup}>
                                <div className="icon">📄</div>
                                <div className="text">
                                    <h4>Import from master</h4>
                                    <p>Use an existing job as a template and customize as needed</p>
                                </div>
                            </div>
                            <div className="option" onClick={handleShowCreateJob}>
                                <div className="icon">📝</div>
                                <div className="text">
                                    <h4>Create a job</h4>
                                    <p>Here you can create jobs from scratch</p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : showImportPopup ? (
                    <>
                        <h3>We found your job posts!</h3>
                        <p>It looks like you already have a few jobs posted, select & import them to fasten your hiring process</p>
                        <div className="search-bar">
                            <input type="text" placeholder="Search..." />
                            <button><FontAwesomeIcon icon={faFilter} /></button>
                        </div>
                        <div className="job-cards">
                            <div className="job-card">
                                <input type="checkbox" id="job1" />
                                <label htmlFor="job1">Customer support executive</label>
                                <div>Bangalore | 3-5 Year Exp</div>
                            </div>
                            <div className="job-card">
                                <input type="checkbox" id="job2" />
                                <label htmlFor="job2">Technical support executive</label>
                                <div>Bangalore | 3-5 Year Exp</div>
                            </div>
                            <div className="job-card">
                                <input type="checkbox" id="job3" />
                                <label htmlFor="job3">Full stack developer</label>
                                <div>Bangalore | 3-5 Year Exp</div>
                            </div>
                            <div className="job-card">
                                <input type="checkbox" id="job4" />
                                <label htmlFor="job4">Database admin</label>
                                <div>Bangalore | 3-5 Year Exp</div>
                            </div>
                            <div className="job-card">
                                <input type="checkbox" id="job5" />
                                <label htmlFor="job5">Sales executive</label>
                                <div>Bangalore | 3-5 Year Exp</div>
                            </div>
                            <div className="job-card">
                                <input type="checkbox" id="job6" />
                                <label htmlFor="job6">Network engineer</label>
                                <div>Bangalore | 3-5 Year Exp</div>
                            </div>
                        </div>
                        <button className="import-btn">Import</button>
                    </>
                ) : (
                    <>
                        <h3>Create Job Post</h3>
                        <form>
                            <div className="form-group">
                                <label>Job title</label>
                                <input type="text" placeholder="Enter job title" />
                            </div>
                            <div className="form-group">
                                <label>Experience</label>
                                <input type="text" placeholder="Enter experience" />
                            </div>
                            <div className="form-group">
                                <label>Qualification</label>
                                <input type="text" placeholder="Enter qualification" />
                            </div>
                            <div className="form-group">
                                <label>Salary</label>
                                <input type="text" placeholder="Enter salary" />
                            </div>
                            <div className="form-group">
                                <label>Working days</label>
                                <select>
                                    <option>Select working days</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Work type</label>
                                <select>
                                    <option>Select work type</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Shifts</label>
                                <select>
                                    <option>Select shifts</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Job location</label>
                                <input type="text" placeholder="Enter job location" />
                            </div>
                            <div className="form-group">
                                <label>Job description</label>
                                <textarea placeholder="Job Description"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Vendor category</label>
                                <select>
                                    <option>Choose vendor category</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Vendor</label>
                                <select>
                                    <option>Choose Vendor</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className='butns'>
                            <button type="submit" className='crt'>Create</button>
                            <button type="cancel"className='cnl' >Cancel</button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
