import { create } from "zustand";
import type { Patient } from "../types/Patient";
import uid from "../utils/uid";

type PatientsState = {
  patients: Patient[];
  editPatient: (updatedPatient: Patient) => void;
  addPatient: (
    newPatient: Pick<Patient, "name" | "description" | "website" | "avatar">,
  ) => void;
  setPatients: (newPatients: Patient[]) => void;
};

export const usePatients = create<PatientsState>((set) => ({
  patients: [],
  editPatient: (updatedPatient: Patient) =>
    set((state) => {
      const newPatients = [...state.patients];
      const indexToUpdate = newPatients.findIndex(
        (patient) => patient.id === updatedPatient.id,
      );
      if (indexToUpdate !== -1) {
        newPatients[indexToUpdate] = {
          ...newPatients[indexToUpdate],
          ...updatedPatient,
        };
      }
      return { patients: newPatients };
    }),

  addPatient: (
    newPatientData: Pick<
      Patient,
      "name" | "description" | "website" | "avatar"
    >,
  ) =>
    set((state) => {
      const newPatient: Patient = {
        ...newPatientData,
        avatar: newPatientData.avatar || "",
        id: uid(),
        createdAt: new Date().toISOString(),
      };
      return {
        patients: [newPatient, ...state.patients],
      };
    }),
  setPatients: (newPatients: Patient[]) => {
    set(() => {
      return { patients: newPatients };
    });
  },
}));
