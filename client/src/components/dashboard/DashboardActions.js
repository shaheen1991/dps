import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/create-file' className='btn btn-light'>
        <i className='text-primary' /> Create File
      </Link>
      <Link to='/search-files' className='btn btn-light'>
        <i className='text-primary' /> Search Files
      </Link>
    </div>
    
  );
};

export default DashboardActions;
