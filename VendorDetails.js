import React, { useState } from 'react';
import VendorRow from './VendorRow';
import AddVendor from './AddVendor';
import './VendorDetails.css';

const vendors = [
  { name: 'Adecco', phone: '983738339', email: 'abc@gmail.com', status: 'Active' },
  { name: 'ABC pvt', phone: '983738339', email: 'abc@gmail.com', status: 'Disabled' },
];

const VendorDetails = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddVendorClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="vendor-details">
      <h2>Vendor details</h2>
      <div className='vadd'>
        <button className='add-vendor' onClick={handleAddVendorClick}>Add Vendor</button>
      </div>
      <div className="search-filter">
        <input type="text" placeholder="Search" />
        <button className="filter-btn">Filter</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Vendor name</th>
            <th>Phone number</th>
            <th>Email id</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor, index) => (
            <VendorRow key={index} vendor={vendor} />
          ))}
        </tbody>
      </table>
      {showPopup && <AddVendor onClose={handleClosePopup} />}
    </div>
  );
};

export default VendorDetails;
