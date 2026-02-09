import "./PatientCard.css";
import Modal from "../../ui/Modal";
import type { Patient } from "../../../types/Patient";
import PatientForm from "../PatientForm";
import CardHeader from "./CardHeader/CardHeader";
import CardDescription from "./CardDescription/CardDescription";
import usePatientCard from "./usePatientCard";

type Props = {
  patient: Patient;
};

export default function PatientCard({ patient }: Props) {
  const {
    isCollapsed,
    isEditModalOpen,
    handleEditModalToggle,
    handleToggleCollapse,
  } = usePatientCard();
  return (
    <div className="patient-card">
      <CardHeader
        handleCollapse={handleToggleCollapse}
        patient={patient}
        handleEditModalToggle={handleEditModalToggle}
        isCollapsed={isCollapsed}
      />
      <CardDescription patient={patient} isCollapsed={isCollapsed} />
      {isEditModalOpen ? (
        <Modal onClose={handleEditModalToggle}>
          <PatientForm
            isEditForm={true}
            patient={patient}
            onCancel={handleEditModalToggle}
          />
        </Modal>
      ) : null}
    </div>
  );
}
