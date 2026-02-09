import z from "zod";
import { createErrorMap } from "zod-validation-error";

z.config({
  customError: createErrorMap(),
});

export const patientFormSchema = z.object({
  name: z.string().max(20).min(5),
  description: z.string().min(5),
  website: z.url(),
  avatar: z.string(),
});

export type PatientFormData = z.infer<typeof patientFormSchema>;
