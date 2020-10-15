import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const modalRoot = document.querySelector("#modal");

const Modal = ({ isOpen, children }) => {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return (
    isOpen &&
    ReactDOM.createPortal(
      <div id="myModal" className="modal">
          <p className="modal-content">Some text in the Modal..</p>
        {children}
      </div>, el
    )
  );
};

export default Modal;
