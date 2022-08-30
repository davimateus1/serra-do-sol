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
        <Image
          src={SerraLogo}
          w="5rem"
          mr="0.5rem"
          display={{
            base: "flex",
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
          }}
        />
        <Heading color="brand.900" fontSize="xl" textAlign="right">
          Energética Serra do Sol
        </Heading>
      </Flex>
    </Flex>
  );
};
