"use client";

import { Box, Text } from "@chakra-ui/react";
import { RegisterPatientForm } from "./RegisterPatientForm";

export const RegisterPatient: React.FC = () => {
  return (
    <Box pt={38} px={{ base: 5, md: 20 }} pb={{ sm: 20, md: 20, lg: 40 }}>
      <Text color="brand.200" fontWeight="bold">
        REGISTRATION FOR OUTPATIENT CARE
      </Text>
      <RegisterPatientForm />
    </Box>
  );
};
