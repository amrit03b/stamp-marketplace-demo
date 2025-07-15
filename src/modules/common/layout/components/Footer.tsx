import { Flex, Text, Link, Box } from "@chakra-ui/react";
import React, { FC } from "react";
import useApp from "@/lib/app/hooks/useApp";

interface FooterProps { }

const Footer: FC<FooterProps> = (props) => {
  const { } = props;
  const { config } = useApp();

  return (
    <Box as="footer" w="full" py={4} px={8} bg="rgba(255,255,255,0.6)" backdropFilter="blur(8px)" borderTop="1px solid rgba(0,0,0,0.05)" textAlign="center" fontWeight="medium" color="gray.700">
      Powered by Andromeda
    </Box>
  );
};

export default Footer;
