import useAxiosInstance from "@/app/lib/axios";
import { UseMutationOptions, useMutation } from "react-query";

interface RegisterPatientArgs {
  patientId: string;
  patientName: string;
  dateOfTreatment: string;
  costOfTreatment: number;
  treatmentDescription: string[];
  medicationPrescribed: string[];
}

export const useRegisterPatientMutation = (
  options?: UseMutationOptions<void, unknown, RegisterPatientArgs>
) => {
  const { post } = useAxiosInstance();

  return useMutation(
    async ({
      costOfTreatment,
      dateOfTreatment,
      medicationPrescribed,
      patientId,
      patientName,
      treatmentDescription,
    }: RegisterPatientArgs) => {
      await post("/patient", {
        costOfTreatment,
        dateOfTreatment,
        medicationPrescribed,
        patientId,
        patientName,
        treatmentDescription,
      });
    },
    options
  );
};
