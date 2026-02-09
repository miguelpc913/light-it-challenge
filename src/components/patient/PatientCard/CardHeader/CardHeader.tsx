import { Logo } from "../../../ui/Logo";
import type { Patient } from "../../../../types/Patient";
import { BiSolidPencil } from "react-icons/bi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./CardHeader.css";
import { useEffect, useState } from "react";

type Props = {
  patient: Patient;
  handleCollapse: () => void;
  handleEditModalToggle: () => void;
  isCollapsed: boolean;
};

export default function CardHeader({
  patient,
  handleCollapse,
  handleEditModalToggle,
  isCollapsed,
}: Props) {
  const [hasAvatar, setHasAvatar] = useState(!!patient.avatar);
  useEffect(() => {
    // Retry in case avatar has changed
    if (patient.avatar) {
      setHasAvatar(!!patient.avatar);
    }
  }, [patient.avatar]);
  return (
    <div className="patient-card__header">
      <div className="patient-card__icon">
        {hasAvatar ? (
          <img
            src={patient.avatar}
            alt={patient.name}
            className="patient-card__avatar"
            onError={() => {
              setHasAvatar(false);
            }}
          />
        ) : (
          <Logo email={patient.name} />
        )}
        <button
          className="patient-card__edit-container"
          onClick={handleEditModalToggle}
        >
          <div className="patient-card__edit-toggle">
            <BiSolidPencil />
          </div>
        </button>
      </div>

      <div className="patient-card__data">
        <span className="patient-card__name">{patient.name}</span>
        <span className="patient-card__website">{patient.website}</span>
      </div>

      <button
        onClick={handleCollapse}
        className="patient-card__collapse-button"
      >
        {isCollapsed ? <FaChevronDown /> : <FaChevronUp />}
      </button>
    </div>
  );
}
