import React from 'react';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h2>Dashboard</h2>
        <button className="export-button">Export</button>
      </header>
      <div className="stats">
        <div className="stat-box">No. of job posted</div>
        <div className="stat-box">No. of recruitments</div>
        <div className="stat-box">No. shortlisted/onboarded candidates</div>
      </div>
      <div className="vendors">
        <h2>Vendors</h2>
        <div className="search-filter">
          <input type="text" placeholder="Search" />
          <button>Filter</button>
        </div>
        <table className="vendors-table">
          <thead>
            <tr>
              <th>Vendor name</th>
              <th>Email/phone</th>
              <th>candidates provided</th>
              <th>No. candidates are onboarded</th>
              <th>Other details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adecco</td>
              <td>983738339</td>
              <td>85</td>
              <td>60</td>
              <td><a href="#link">Link</a></td>
            </tr>
            <tr>
              <td>ABC pvt</td>
              <td>983738339</td>
              <td>85</td>
              <td>60</td>
              <td><a href="#link">Link</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="activity">
        <h3>Activity</h3>
        <ul>
          <li>You have just posted the RPA developer role</li>
          <li>You have just posted the DBA developer role</li>
          <li>You have request from a ABC vendor</li>
          <li>You have closed job post for Java developer</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;