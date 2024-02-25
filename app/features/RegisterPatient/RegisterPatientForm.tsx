import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";

export const RegisterPatientForm: React.FC = () => {
  return (
    <>
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
              <FormControl>
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  PATIENT ID
                </FormLabel>
                <Input
                  type="text"
                  _focus={{
                    borderColor: "brand.200",
                    boxShadow: "none",
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  PATIENT NAME
                </FormLabel>
                <Input
                  type="text"
                  _focus={{
                    borderColor: "brand.200",
                    boxShadow: "none",
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  DATE OF TREATMENT
                </FormLabel>
                <Input
                  type="text"
                  _focus={{
                    borderColor: "brand.200",
                    boxShadow: "none",
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  COST OF TREATMENT
                </FormLabel>
                <Input
                  type="text"
                  _focus={{
                    borderColor: "brand.200",
                    boxShadow: "none",
                  }}
                />
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
              <FormControl>
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  TREATMENT DESCRIPTION
                </FormLabel>
                <Select
                  colorScheme="purple"
                  options={[
                    {
                      label: "I am red",
                      value: "i-am-red",
                      colorScheme: "red",
                    },
                    {
                      label: "I fallback to purple",
                      value: "i-am-purple",
                    },
                  ]}
                />
              </FormControl>
              <FormControl width="auto">
                <FormLabel color="gray" fontSize="small" fontWeight="bold">
                  MEDICATION PRESCRIBED
                </FormLabel>
                <Select
                  colorScheme="purple"
                  options={[
                    {
                      label: "I am red",
                      value: "i-am-red",
                      colorScheme: "red",
                    },
                    {
                      label: "I fallback to purple",
                      value: "i-am-purple",
                    },
                  ]}
                />
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
      <Center mt={10} pb={20}>
        <Button bgColor="brand.200" color="white" _hover={{ bgColor: "none" }}>
          Register
        </Button>
      </Center>
    </>
  );
};
