import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Topbar.css';

const Topbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="topbar">
      <div className="topbar-content">
        <span className="admin-text" onClick={toggleDropdown}>
          Admin
          <FontAwesomeIcon icon={faUser} />
        </span>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <ul>
              <li>
                <FontAwesomeIcon icon={faUser} />
                My Profile
              </li>
              <li>
                <FontAwesomeIcon icon={faCog} />
                Settings
              </li>
              <li>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;