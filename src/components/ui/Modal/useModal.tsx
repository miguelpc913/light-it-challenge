import React, { useEffect, useState } from "react";
import type Modal from "./Modal";

export default function useModal({
  onClose,
  onOpen,
}: React.ComponentProps<typeof Modal>) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(() => {
    if (isModalOpen && onOpen) {
      onOpen();
    }

    if (!isModalOpen && onClose) {
      onClose();
    }
  }, [isModalOpen, onClose, onOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
  };
  return {
    isModalOpen,
    handleClose,
  };
}
