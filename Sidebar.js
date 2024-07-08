import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faClipboard, faBuilding, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src='images.png' alt='logo'/>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/post-job">
              <FontAwesomeIcon icon={faClipboard} /> Post a Job
            </Link>
          </li>
          <li>
            <Link to="/vendor-details">
              <FontAwesomeIcon icon={faBuilding} /> Vendor details
            </Link>
          </li>
          <li>
            <Link to="/candidate-list">
              <FontAwesomeIcon icon={faUserFriends} /> Candidate list
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

