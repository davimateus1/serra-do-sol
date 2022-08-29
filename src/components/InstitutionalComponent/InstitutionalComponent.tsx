import { Flex, Heading, Text } from "@chakra-ui/react";

import { MemberComponent } from "../MemberComponent";
import { NavbarComponent } from "../NavbarComponent";

import Wave from "../../assets/images/svgs/Wave.svg";
import { Scrollbar } from "../../assets";
import { FooterComponent } from "../FooterComponent";

export const InstitutionalComponent = () => {
  return (
    <Flex w="100vw" h="100vh" direction="column">
      <NavbarComponent />
      <Flex
        bg="brand.900"
        w="100%"
        h="95vh"
        bgImage={`url(${Wave})`}
        bgSize="13rem"
        bgRepeat="repeat"
        alignItems="center"
        direction="column"
        overflowX="hidden"
        sx={{ ...Scrollbar }}
      >
        <Heading fontSize="3rem" mt="2.5rem">
          INSTITUCIONAL
        </Heading>
        <Text fontSize="1.4rem" fontStyle="italic" mb="0.7rem">
          Sócios
        </Text>
        <MemberComponent />
      </Flex>
      <FooterComponent />
    </Flex>
  );
};
