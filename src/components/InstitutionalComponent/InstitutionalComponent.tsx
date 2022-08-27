import { Flex } from "@chakra-ui/react";

import SolarPanel from "../../assets/images/SolarPanel.svg";
import { NavbarComponent } from "../NavbarComponent";

export const InstitutionalComponent = () => {
  return (
    <Flex
      w="100vw"
      minH="100vh"
      h="auto"
      direction="column"
      overflowX="hidden"
    >
      <NavbarComponent />
      <Flex
        bg="brand.900"
        w="100%"
        h="100%"
        boxShadow={`inset 0px 50px 13px -35px #2a69ac`}
        bgImage={`url(${SolarPanel})`}
        bgSize="3.5rem"
        bgRepeat="repeat"
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Flex bg="white" w="50%" h="25rem" mt="3rem"></Flex>
        <Flex bg="white" w="50%" h="25rem" mt="3rem"></Flex>
        <Flex bg="white" w="50%" h="25rem" mt="3rem"></Flex>
        <Flex bg="white" w="50%" h="25rem" mt="3rem"></Flex>
        <Flex bg="white" w="50%" h="25rem" mt="3rem"></Flex>
      </Flex>
    </Flex>
  );
};
