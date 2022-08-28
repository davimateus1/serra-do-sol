import { Flex, Heading, Image } from "@chakra-ui/react";
import { DrawerComponent } from "../DrawerComponent";

import SerraLogo from "../../assets/images/svgs/SerraLogo.svg";

export const NavbarComponent = () => {
  return (
    <Flex
      bg="brand.700"
      w="100%"
      h="5vh"
      alignItems="center"
      justifyContent="space-between"
      p="2rem"
    >
      <DrawerComponent />
      <Flex alignItems="center" w="auto">
        <Image src={SerraLogo} w="5rem" mr="0.5rem" />
        <Heading color="brand.900" fontSize="1.3rem" textAlign="center">
          Energética Serra do Sol
        </Heading>
      </Flex>
    </Flex>
  );
};
