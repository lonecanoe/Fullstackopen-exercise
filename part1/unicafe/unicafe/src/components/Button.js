import React from 'react';

const Button = ({ onClick, text }) => (
  <button 
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
  >
    {text}
  </button>
);

export default Button;
