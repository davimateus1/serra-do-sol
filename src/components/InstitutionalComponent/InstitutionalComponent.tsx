import { Flex, Heading, Text } from "@chakra-ui/react";

import { MemberComponent } from "../MemberComponent";
import { NavbarComponent } from "../NavbarComponent";
import { Scrollbar } from "../../assets";
import { FooterComponent } from "../FooterComponent";

import Wave from "../../assets/images/svgs/Wave.svg";

import { fontStyle } from "../../styles";

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
        <Heading w={fontStyle} mt="2.5rem">
          INSTITUCIONAL
        </Heading>
        <Text w={fontStyle} fontStyle="italic" mb="0.7rem" fontWeight="bold">
          Sócios
        </Text>
        <MemberComponent />
      </Flex>
      <FooterComponent />
    </Flex>
  );
};
