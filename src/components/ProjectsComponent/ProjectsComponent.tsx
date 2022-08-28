import { Flex, Heading, Text } from "@chakra-ui/react";
import { NavbarComponent } from "../NavbarComponent";

import Wave from "../../assets/images/svgs/Wave.svg";

import { LocaleAccess } from "./LocateAccess";
import { Scrollbar } from "../../assets";

export const ProjectsComponent = () => {
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
          PROJETOS
        </Heading>
        <Text fontSize="1.5rem" fontStyle="italic" mb="0.7rem">
          CFV Serra do Sol I, II, III, IV, V e VI
        </Text>
        <LocaleAccess />
      </Flex>
    </Flex>
  );
};
