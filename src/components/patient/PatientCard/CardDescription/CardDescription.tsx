import type { Patient } from "../../../../types/Patient";
import "./CardDescription.css";

type Props = {
  isCollapsed: boolean;
  patient: Patient;
};

export default function CardDescription({ isCollapsed, patient }: Props) {
  const patientDate = new Date(patient.createdAt);
  return (
    <div
      className={`patient-card__description ${isCollapsed ? "patient-card__description--collapsed" : ""}`}
    >
      <p className="patient-card__description-text">{patient.description}</p>
      <span className="patient-card__description-date">{patientDate.toLocaleDateString()}</span>
    </div>
  );
}
