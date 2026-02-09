import { useState } from "react";

export default function usePatientCard() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const handleEditModalToggle = () => {
    setIsEditModalOpen((prevState) => !prevState);
  };
  const handleToggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  return {
    isCollapsed,
    isEditModalOpen,
    handleEditModalToggle,
    handleToggleCollapse,
  };
}
