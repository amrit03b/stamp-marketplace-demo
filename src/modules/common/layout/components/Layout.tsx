"use client";
import { Box, Divider } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import PoweredByLogo from "./PoweredByLogo";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface LayoutProps {
  children?: ReactNode;
}
const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <Box minH="100vh">
      <Box>
        <Navbar />
      </Box>
      <Divider />
      <Box px="0" py="16" display="flex" justifyContent="center" alignItems="center">
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          maxW="container.lg"
          w="full"
          p={{ base: 4, md: 10 }}
          borderRadius="2xl"
          boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.08)"
          bg="background.800"
          color="gray.900"
          backdropFilter="blur(8px)"
          border="1px solid #e0e7ef"
          zIndex={1}
        >
          {children}
        </MotionBox>
      </Box>
      <PoweredByLogo />
      {/* <Box>
        <Footer />
      </Box> */}
    </Box>
  );
};
export default Layout;
