import React from "react";

const Modal = ({ onClose, show, children, header }) => {
  const toggle = show ? {display:"flex"} : {display:"none"};

  return (
    <div className="modal-container" style={toggle}>
      <div className="modal">
        <div className="modal-header">
          <span><strong>COMMITS</strong> : {header} </span>
          <button  className="modal-close" onClick={onClose}>
            <i class="fas fa-times"></i>          
          </button>
        </div>
        <div className="modal-main">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;