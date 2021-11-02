import React from "react";

const Modal = ({ onClose, show, children, header, pre, size }) => {
  const toggle = show ? {display:"flex"} : {display:"none"};

  return (
    <div className="modal-container" style={toggle}>
      <div className={"modal "+size}>
        <div className="modal-header">
          <span><strong>{pre}</strong> {header} </span>
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