"use client";
import React from "react";
interface Props {
  children: React.ReactNode;
  open: boolean;
}

const Modal = ({ children, open }: Props) => {
  const modalClass = `modal modal-bottom sm:modal-middle${open ? " modal-open" : ""}`;

  return (
    <div className={modalClass}>
      <div className="modal-box">{children}</div>
    </div>
  );
};

export default Modal;
