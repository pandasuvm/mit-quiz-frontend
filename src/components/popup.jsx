import React from 'react';

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
          <button 
            onClick={onCancel} 
            className="border-2 border-[#774EE9] min-w-[10vw] rounded-2xl text-black px-4 py-2 mr-2 hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </button>
          <button 
            onClick={onAction} 
            className=" text-white px-4 py-2 rounded-2xl min-w-[10vw] hover:bg-[#774EE9] cursor-pointer"
            style={{ backgroundImage: 'linear-gradient(to top, #A271F1  0%, #774EE9 50%)' }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
