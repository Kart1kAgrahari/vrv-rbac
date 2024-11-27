import React from 'react';
import './DialogBox.css';

const DialogBox = ({ title, children, onClose }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <div className="dialog-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="dialog-content">{children}</div>
      </div>
    </div>
  );
};

export default DialogBox;
