import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../../../provider/ToastProvider";
import { usePatients } from "../../../store/patients";
import {
  patientFormSchema,
  type PatientFormData,
} from "../../../types/patientSchema";
import type PatientForm from "./PatientForm";

export default function usePatientForm(
  props: React.ComponentProps<typeof PatientForm>,
) {
  const editPatient = usePatients((state) => state.editPatient);
  const addPatient = usePatients((state) => state.addPatient);
  const { addToast } = useToast();

  const { register, formState, control, handleSubmit } = useForm({
    defaultValues: props.isEditForm ? props.patient : {},
    mode: "onBlur",
    resolver: zodResolver(patientFormSchema),
  });

  const onSubmit = (patientData: PatientFormData) => {
    if (props.isEditForm) {
      editPatient({ ...props.patient, ...patientData });
      addToast({
        title: "Success",
        description: "Patient has been modified properly.",
      });
    } else {
      addPatient({ ...patientData });
      addToast({
        title: "Success",
        description: "Patient has been created properly.",
      });
    }
    props.onCancel();
  };

  return {
    onSubmit,
    register,
    formState,
    control,
    handleSubmit,
  };
}
