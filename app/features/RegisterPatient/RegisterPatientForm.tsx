import { Formik } from "formik";
import { RegisterPatientFormInner } from "./RegisterPatientFormInner";
import { RegisterPatientFormInput } from "./types";
import { registerPatientSchema } from "./schemas/registerPatientSchema";

export const RegisterPatientForm: React.FC = () => {
  const onSubmit = async (values: RegisterPatientFormInput) => {
    try {
      console.log("success");
    } catch (error) {
      console.log(error);
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
      <RegisterPatientFormInner />
    </Formik>
  );
};
