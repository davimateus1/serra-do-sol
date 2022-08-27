import { Flex, Heading } from "@chakra-ui/react";

import { MemberComponent } from "../MemberComponent";
import { NavbarComponent } from "../NavbarComponent";

import SolarPanel from "../../assets/images/SolarPanel.svg";


export const InstitutionalComponent = () => {
  return (
    <Flex w="100vw" h="100vh" direction="column">
      <NavbarComponent />
      <Flex
        bg="brand.900"
        w="100%"
        h="95vh"
        boxShadow={`inset 0px 50px 13px -35px #2a69ac`}
        bgImage={`url(${SolarPanel})`}
        bgSize="3rem"
        bgRepeat="repeat"
        alignItems="center"
        direction="column"
        overflowX="hidden"
      >
        <Heading fontSize="3rem" m="2.5rem 0" >
          INSTITUCIONAL
        </Heading>
        <MemberComponent />
      </Flex>
    </Flex>
  );
};
