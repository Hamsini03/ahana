import React from 'react';
import './AddVendor.css';

const AddVendor = ({ onClose }) => {
  return (
    <div className="add-vendor-popup">
      <div className="popup-content">
        <h2>Add Vendor</h2>
        <form className="form-container">
          <div className="form-group">
            <label>Vendor name</label>
            <input type="text" placeholder="Enter vendor name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter vendor email Id" />
          </div>
          <div className="form-group">
            <label>Contact no</label>
            <input type="text" placeholder="Enter vendor contact no" />
          </div>
          <div className="form-group">
            <label>POC1 Email</label>
            <input type="email" placeholder="Enter email Id" />
          </div>
          <div className="form-group">
            <label>POC1 Phone no</label>
            <input type="text" placeholder="Enter contact no" />
          </div>
          <div className="form-group">
            <label>POC2 Email (optional)</label>
            <input type="email" placeholder="Enter email Id" />
          </div>
          <div className="form-group">
            <label>POC2 Phone no (optional)</label>
            <input type="text" placeholder="Enter contact no" />
          </div>
          <div className="form-group">
            <label>Address 1</label>
            <input type="text" placeholder="Enter vendor Address" />
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input type="text" placeholder="Enter vendor Address" />
          </div>
          <div className="form-group">
            <label>City</label>
            <select>
              <option>Select city</option>
            </select>
          </div>
          <div className="form-group">
            <label>State</label>
            <select>
              <option>Select state</option>
            </select>
          </div>
          <div className="form-group">
            <label>Country</label>
            <select>
              <option>Select country</option>
            </select>
          </div>
          <div className="form-group">
            <label>Pincode</label>
            <input type="text" placeholder="Enter pincode" />
          </div>
          <div className="form-group">
            <label>Pricing slab</label>
            <select>
              <option>Select pricing slab</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVendor;
