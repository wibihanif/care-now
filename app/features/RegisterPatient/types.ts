export interface ConstantItem {
  value: string;
  label: string;
}

export interface RegisterPatientFormInput {
  patientId: string;
  patientName: string;
  dateOfTreatment: string;
  costOfTreatment: string;
  treatmentDescription: ConstantItem[];
  medicationPrescribed: ConstantItem[];
}
