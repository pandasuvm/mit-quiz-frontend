import React from 'react';
import Button from '@mui/material/Button'; // Import MUI Button

const Popup = ({ message, onCancel, onAction }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-5"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
    >
      <div className="bg-white p-6 rounded shadow-lg min-w-[50vw]">
        <h2 className="text-xl font-semibold mb-8">Submitting Quiz</h2>
        <p className="mb-8 text-base">{message}</p>
        <div className="flex justify-end">
          <Button 
            onClick={onCancel} 
            variant="outlined"
            color="primary"
            style={{ minWidth: '10vw', marginRight: '8px' }}
          >
            Cancel
          </Button>
          <Button 
            onClick={onAction} 
            variant="contained"
            color="primary"
            style={{ minWidth: '10vw' }}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
