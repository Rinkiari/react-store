import React from 'react';
import '../scss/components/CircleButton.scss';

const IncButton = () => {
  return (
    <button className="circle-button" title="Add New" style={{ marginLeft: '12px' }}>
      <svg
        className="circle-icon"
        viewBox="0 0 24 24"
        height="34px"
        width="34px"
        xmlns="http://www.w3.org/2000/svg">
        <path
          strokeWidth="1.5"
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        />
        <path strokeWidth="1.5" d="M8 12H16" />
        <path strokeWidth="1.5" d="M12 16V8" />
      </svg>
    </button>
  );
};

export default IncButton;
