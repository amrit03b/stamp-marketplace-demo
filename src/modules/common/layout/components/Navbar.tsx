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
    <Box py="2" px="8" bg="rgba(255,255,255,0.6)" backdropFilter="blur(8px)" borderBottom="1px solid rgba(0,0,0,0.05)" boxShadow="sm" zIndex={10} position="sticky" top={0}>
      <Flex
        direction="row"
        alignItems="center"
        maxW="container.lg"
        mx="auto"
        gap="4"
      >
        <Link href={LINKS.home()} passHref>
          <Text as="a" fontSize="lg" fontWeight="bold">
            {config.name}
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
