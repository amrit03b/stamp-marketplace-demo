"use client";
import { Box, Divider } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import PoweredByLogo from "./PoweredByLogo";

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
        <Box
          maxW="container.lg"
          w="full"
          p={{ base: 4, md: 10 }}
          borderRadius="2xl"
          boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.18)"
          bg="rgba(255,255,255,0.7)"
          backdropFilter="blur(12px)"
          border="1px solid rgba(255,255,255,0.18)"
          zIndex={1}
        >
          {children}
        </Box>
      </Box>
      <PoweredByLogo />
      {/* <Box>
        <Footer />
      </Box> */}
    </Box>
  );
};
export default Layout;
