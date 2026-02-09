import type { Patient } from "../../../types/Patient";
import "./PatientForm.css";
import { AutoTextarea } from "../../ui/AutoTextArea";
import ImageUploader from "../../ui/ImageUploader";
import usePatientForm from "./usePatientForm";
import { Controller } from "react-hook-form";

type Props = {
  onCancel: () => void;
} & (isEditProps | OnCreateProps);

type OnCreateProps = {
  isEditForm: false;
};

type isEditProps = {
  isEditForm: true;
  patient: Patient;
};

export default function PatientForm(props: Props) {
  const { handleSubmit, formState, register, control, onSubmit } =
    usePatientForm(props);
  return (
    <div className="patient-form">
      <h3>{props.isEditForm ? "Edit Patient" : "Create Patient"} </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="patient-form__form">
        <div className="patient-form__input-container">
          <label htmlFor="avatar">Avatar</label>
          <Controller
            name="avatar"
            control={control}
            render={({ field }) => {
              return (
                <ImageUploader value={field.value} onChange={field.onChange} />
              );
            }}
          />
        </div>
        <div className="patient-form__input-container">
          <label
            htmlFor="name"
            className={`${formState.errors.name ? "patient-form__label--error" : ""}`}
          >
            Name
          </label>
          <input
            placeholder="Name"
            {...register("name", {
              required: true,
              maxLength: 20,
            })}
            className={`${formState.errors.name ? "patient-form__input--error" : ""}`}
          />
          {formState.errors.name ? (
            <p className="patient-form__error">{formState.errors.name.message} </p>
          ) : null}
        </div>

        <div className="patient-form__input-container">
          <label
            htmlFor="website"
            className={`${formState.errors.website ? "patient-form__label--error" : ""}`}
          >
            Website
          </label>
          <input
            className={`${formState.errors.website ? "patient-form__input--error" : ""}`}
            placeholder="Website"
            {...register("website", {
              required: true,
              maxLength: 20,
            })}
          />
          {formState.errors.website ? (
            <p className="patient-form__error">{formState.errors.website.message} </p>
          ) : null}
        </div>
        <div className="patient-form__input-container">
          <label
            htmlFor="description"
            className={`${formState.errors.description ? "patient-form__label--error" : ""}`}
          >
            Description
          </label>
          <AutoTextarea
            className={`${formState.errors.description ? "patient-form__textarea--error" : ""}`}
            placeholder="Description"
            {...register("description", {
              required: true,
            })}
          />
          {formState.errors.description ? (
            <p className="patient-form__error">{formState.errors.description.message}</p>
          ) : null}
        </div>
        <div className="patient-form__buttons">
          <button
            onClick={(e) => {
              e.preventDefault();
              props.onCancel();
            }}
            className="patient-form__cancel-button"
          >
            Cancel
          </button>
          <button className="patient-form__confirm-button" disabled={!formState.isValid}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
