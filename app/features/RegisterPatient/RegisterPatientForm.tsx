import { Formik, FormikHelpers } from "formik";
import { RegisterPatientFormInner } from "./RegisterPatientFormInner";
import { RegisterPatientFormInput } from "./types";
import { registerPatientSchema } from "./schemas/registerPatientSchema";
import { useRegisterPatientMutation } from "./api/useRegisterPatientMutation";
import { useToast } from "@chakra-ui/react";

export const RegisterPatientForm: React.FC = () => {
  const toast = useToast();

  const {
    mutateAsync: registerPatientMutation,
    isLoading: isLoadingRegiesterPatientMutation,
  } = useRegisterPatientMutation();

  const onSubmit = async (
    values: RegisterPatientFormInput,
    { resetForm, setFieldValue }: FormikHelpers<RegisterPatientFormInput>
  ) => {
    const {
      costOfTreatment,
      dateOfTreatment,
      medicationPrescribed,
      patientId,
      patientName,
      treatmentDescription,
    } = values;

    try {
      await registerPatientMutation({
        costOfTreatment: Number(costOfTreatment),
        dateOfTreatment,
        patientId,
        patientName,
        medicationPrescribed: medicationPrescribed.map(
          (medication) => medication.value
        ),
        treatmentDescription: treatmentDescription.map(
          (treatment) => treatment.value
        ),
      });

      resetForm();

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error Register Patient",
        description: "We've created your account for you.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Formik<RegisterPatientFormInput>
      initialValues={{
        patientId: "",
        patientName: "",
        costOfTreatment: "",
        dateOfTreatment: "",
        medicationPrescribed: [],
        treatmentDescription: [],
      }}
      onSubmit={onSubmit}
      validationSchema={registerPatientSchema}
      validateOnChange={true}
    >
      <RegisterPatientFormInner
        isLoadingRegisterPatient={isLoadingRegiesterPatientMutation}
      />
    </Formik>
  );
};
