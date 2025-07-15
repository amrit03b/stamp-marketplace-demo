import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { CollectionDropdown, ConnectWallet } from "@/modules/common/cta";
import useApp from "@/lib/app/hooks/useApp";
import Link from "next/link";
import { LINKS } from "@/utils/links";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = (props) => {
  const {} = props;
  const { config } = useApp();

  return (
    <Box py="2" px="8" bg="rgba(219,234,254,0.85)" backdropFilter="blur(8px)" borderBottom="1px solid #bfdbfe" boxShadow="sm" zIndex={10} position="sticky" top={0} transition="background 0.4s cubic-bezier(0.4,0,0.2,1)">
      <Flex
        direction="row"
        alignItems="center"
        maxW="container.lg"
        mx="auto"
        gap="4"
      >
        <Link href={LINKS.home()} passHref>
          <Text as="a" fontSize="xl" fontWeight="bold" color="gray.900">
            Stamp Auction Platform
          </Text>
        </Link>
        <Flex direction="row" ml="auto" gap="2">
          <CollectionDropdown />
          <ConnectWallet />
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
