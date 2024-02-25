import * as yup from "yup";

export const registerPatientSchema = yup.object().shape({
  patientId: yup.string().required("ID pasien harus diisi"),
  patientName: yup.string().required("Nama pasien harus diisi"),
  dateOfTreatment: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Tanggal perawatan harus cocok dengan format 'YYYY-MM-DD'"
    )
    .required("Tanggal perawatan harus diisi"),
  costOfTreatment: yup
    .string()
    .matches(/^\d+$/, "Biaya perawatan harus berupa bilangan bulat")
    .required("Biaya perawatan harus diisi"),
  medicationPrescribed: yup
    .array()
    .of(yup.object())
    .min(1, "Setidaknya satu obat harus diresepkan"),
  treatmentDescription: yup
    .array()
    .of(yup.object())
    .min(1, "Setidaknya satu deskripsi perawatan harus tersedia"),
});
