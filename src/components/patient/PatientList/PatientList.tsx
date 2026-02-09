import "./PatientList.css";
import PatientCard from "../PatientCard";
import Modal from "../../ui/Modal";
import PatientForm from "../PatientForm";
import SearchBar from "../../ui/SearchBar";
import { FiPlus } from "react-icons/fi";
import usePatientList from "./usePatientList";
import QueryWrapper from "../../hoc/QueryWrapper";

export default function PatientList() {
  const {
    query,
    patients,
    isCreateModalOpen,
    handleCreateModalToggle,
    searchQuery,
    setSearchQuery,
  } = usePatientList();

  return (
    <>
      <div className="patient-list__controls">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search patients"
          className="patient-list__search"
          ariaLabel="Search patients"
        />
        <button
          className="patient-list__add-button"
          onClick={handleCreateModalToggle}
          aria-label="Add new patient"
        >
          <FiPlus />
        </button>
      </div>

      <QueryWrapper
        {...query}
        render={() => {
          return (
            <div className="patient-list__container">
              {patients.map((patient) => {
                return <PatientCard key={patient.id} patient={patient} />;
              })}
            </div>
          );
        }}
      ></QueryWrapper>

      {isCreateModalOpen ? (
        <Modal onClose={handleCreateModalToggle}>
          <PatientForm isEditForm={false} onCancel={handleCreateModalToggle} />
        </Modal>
      ) : null}
    </>
  );
}
