import React from "react";
import { Portal } from "../Portal";
import "./Modal.css";
import useModal from "./useModal";

type Props = {
  children: React.ReactNode;
  onClose?: () => void;
  onOpen?: () => void;
};

export default function Modal(props: Props) {
  const { handleClose, isModalOpen } = useModal(props);
  if (!isModalOpen) return null;
  return (
    <>
      <Portal>
        <div className="modal__backdrop" onClick={handleClose}></div>
      </Portal>
      <Portal className="modal" role="dialog">
        {props.children}
      </Portal>
    </>
  );
}
