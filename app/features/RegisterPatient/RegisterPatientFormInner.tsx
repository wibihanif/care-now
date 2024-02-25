import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { medicationPrescribed, treatmentDescription } from "./constant";
import { useFormikContext } from "formik";
import { RegisterPatientFormInput } from "./types";
import { MouseEventHandler } from "react";

export const RegisterPatientFormInner: React.FC = () => {
  const { errors, handleSubmit, getFieldProps, values, setFieldValue } =
    useFormikContext<RegisterPatientFormInput>();

  return (
    <form>
      <Box
        display="flex"
        justifyContent="space-between"
        gap={5}
        mt={10}
        flexDir={{ base: "column", sm: "column", md: "column", lg: "initial" }}
      >
        <Box
          flex={1}
          borderWidth={2}
          borderStyle="dashed"
          borderColor="brand.200"
          borderRadius={5}
          padding={5}
          pb={40}
        >
          <Box>
            <Text color="brand.200" fontWeight="bold">
              Patient Data
            </Text>
            <Box mt={5} display="flex" flexDir="column" gap={5}>
              <FormControl isInvalid={!!errors.patientId}>
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  PATIENT ID
                </FormLabel>
                <Input
                  type="text"
                  id="patientId"
                  placeholder="Example: 123"
                  _focus={{
                    borderColor: "brand.200",
                    boxShadow: "none",
                  }}
                  {...getFieldProps("patientId")}
                />
                <FormErrorMessage>{errors.patientId}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.patientName}>
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  PATIENT NAME
                </FormLabel>
                <Input
                  type="text"
                  id="patientName"
                  placeholder="Example: John Doe"
                  _focus={{
                    borderColor: "brand.200",
                    boxShadow: "none",
                  }}
                  {...getFieldProps("patientName")}
                />
                <FormErrorMessage>{errors.patientName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.dateOfTreatment}>
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  DATE OF TREATMENT
                </FormLabel>
                <Input
                  type="text"
                  id="dateOfTreatment"
                  placeholder="Example: 2024-01-01"
                  _focus={{
                    borderColor: "brand.200",
                    boxShadow: "none",
                  }}
                  {...getFieldProps("dateOfTreatment")}
                />
                <FormErrorMessage>{errors.dateOfTreatment}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.costOfTreatment}>
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  COST OF TREATMENT
                </FormLabel>
                <Input
                  type="number"
                  id="costOfTreatment"
                  placeholder="Example: 20000000"
                  _focus={{
                    borderColor: "brand.200",
                    boxShadow: "none",
                  }}
                  {...getFieldProps("costOfTreatment")}
                />
                <FormErrorMessage>{errors.costOfTreatment}</FormErrorMessage>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box
          flex={1}
          borderWidth={2}
          borderStyle="dashed"
          borderColor="brand.200"
          borderRadius={5}
          padding={5}
          pb={40}
        >
          <Box>
            <Text color="brand.200" fontWeight="bold">
              Patient Treatment Detail
            </Text>
            <Box mt={5} display="flex" flexDir="column" gap={5}>
              <FormControl isInvalid={!!errors.treatmentDescription}>
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  TREATMENT DESCRIPTION
                </FormLabel>
                <Select
                  id="treatmentDescription"
                  isClearable
                  isMulti
                  placeholder="Please Select Treatment Description"
                  options={treatmentDescription}
                  focusBorderColor="brand.200"
                  defaultValue={values.treatmentDescription}
                  onChange={(value) =>
                    setFieldValue("treatmentDescription", value)
                  }
                />
                <FormErrorMessage>
                  {errors.treatmentDescription as string}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.medicationPrescribed}>
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  MEDICATION PRESCRIBED
                </FormLabel>
                <Select
                  id="medicationPrescribed"
                  isClearable
                  isMulti
                  placeholder="Please Select Medication Prescribed"
                  options={medicationPrescribed}
                  focusBorderColor="brand.200"
                  defaultValue={values.medicationPrescribed}
                  onChange={(value) =>
                    setFieldValue("medicationPrescribed", value)
                  }
                />
                <FormErrorMessage>
                  {errors.medicationPrescribed as string}
                </FormErrorMessage>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
      <Center mt={10} pb={20}>
        <Button
          bgColor="brand.200"
          color="white"
          _hover={{ bgColor: "none" }}
          fontSize="small"
          onClick={
            handleSubmit as unknown as MouseEventHandler<HTMLSpanElement>
          }
        >
          Register
        </Button>
      </Center>
    </form>
  );
};
