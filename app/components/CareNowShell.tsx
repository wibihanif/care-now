"use client";

import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { PropsWithChildren, useState } from "react";
import careNowLogo from "../../public/images/care-now-loog-white.png";
import { HamburgerIcon } from "@chakra-ui/icons";

export const CareNowShell: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box display={{ base: "none", md: "flex" }} h="auto" overflowY="scroll">
        <Center
          width={{ base: "30%", md: "30%", lg: "20%" }}
          bg="brand.100"
          flexDir="column"
        >
          <Box paddingX={5}>
            <Image
              width="200px"
              height="auto"
              src={careNowLogo.src}
              alt="Care Now"
              objectFit="contain"
            />
          </Box>
          <Box
            display="flex"
            flexDir="column"
            mt={10}
            gap={8}
            width="auto"
            height="auto"
            borderWidth={2}
            borderColor="white"
            borderStyle="dashed"
            borderRadius={5}
            padding={{ base: "20px", md: "30px", lg: "20px" }}
            mx={{ base: 4, md: 60, lg: 40 }}
          >
            <Button
              fontSize={{ base: "xs", md: "small" }}
              color="white"
              bgColor="brand.200"
              p={{ base: 2, md: 6 }}
              minWidth={{ base: "80px", md: "auto" }}
              _hover={{
                color: "none",
              }}
            >
              Register Patient
            </Button>
            <Button
              fontSize={{ base: "xs", md: "small" }}
              color="brand.200"
              borderWidth={1}
              borderColor="brand.200"
              p={{ base: 2, md: 6 }}
              minWidth={{ base: "80px", md: "auto" }}
              _hover={{
                color: "none",
              }}
            >
              List Patient
            </Button>
          </Box>
        </Center>
        <Box width={{ base: "70%", md: "70%", lg: "80%" }} bg="white">
          {children}
        </Box>
      </Box>
      <Box display={{ md: "none" }} h="auto" overflowY="scroll">
        <Box
          h={20}
          bgColor="brand.100"
          display="flex"
          justifyContent="space-between"
        >
          <Center p={5} onClick={onOpen}>
            <HamburgerIcon color="white" w={10} h={10} />
          </Center>
          <Center p={5}>
            <Image
              width="150px"
              height="150px"
              src={careNowLogo.src}
              alt="Care Now"
              objectFit="contain"
            />
          </Center>
        </Box>
        {children}
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bgColor="brand.100">
          <DrawerHeader borderBottomWidth="1px">
            <Image
              width="100px"
              src={careNowLogo.src}
              alt="Care Now"
              objectFit="contain"
            />
          </DrawerHeader>
          <DrawerBody>
            <Box
              display="flex"
              flexDir="column"
              mt={10}
              gap={8}
              width="auto"
              height="auto"
              borderWidth={2}
              borderColor="white"
              borderStyle="dashed"
              borderRadius={5}
              padding={{ base: "20px", md: "30px", lg: "20px" }}
              mx={{ base: 4, md: 60, lg: 40 }}
            >
              <Button
                fontSize={{ base: "xs", md: "small" }}
                color="white"
                bgColor="brand.200"
                p={{ base: 2, md: 6 }}
                minWidth={{ base: "80px", md: "auto" }}
                _hover={{
                  color: "none",
                }}
              >
                Register Patient
              </Button>
              <Button
                fontSize={{ base: "xs", md: "small" }}
                color="brand.200"
                borderWidth={1}
                borderColor="brand.200"
                p={{ base: 2, md: 6 }}
                minWidth={{ base: "80px", md: "auto" }}
                _hover={{
                  color: "none",
                }}
              >
                List Patient
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
