import { Box, Center, Flex, Square, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const CareNowShell: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex h="100vh">
      <Center flex="0.25" bg="brand.100">
        <Text>Box 1</Text>
      </Center>
      <Box flex="1" bg="white">
        {children}
      </Box>
    </Flex>
  );
};
