import { Flex, Text, Link, Box } from "@chakra-ui/react";
import React, { FC } from "react";
import useApp from "@/lib/app/hooks/useApp";

interface FooterProps { }

const Footer: FC<FooterProps> = (props) => {
  const { } = props;
  const { config } = useApp();

  return (
    <Box as="footer" w="full" py={4} px={8} bg="rgba(219,234,254,0.85)" backdropFilter="blur(8px)" borderTop="1px solid #bfdbfe" textAlign="center" fontWeight="medium" color="gray.900" transition="background 0.4s cubic-bezier(0.4,0,0.2,1), color 0.4s cubic-bezier(0.4,0,0.2,1)">
      Powered by Andromeda
    </Box>
  );
};

export default Footer;
