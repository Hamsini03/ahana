import React from 'react';

const VendorRow = ({ vendor }) => {
  return (
    <tr>
      <td><input type="checkbox" /></td>
      <td>{vendor.name}</td>
      <td>{vendor.phone}</td>
      <td>{vendor.email}</td>
      <td>{vendor.status}</td>
      <td><button>Edit</button></td>
    </tr>
  );
};

export default VendorRow;
